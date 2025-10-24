type pieceColor = 'black' | 'red';
export type squareColor = 'black' | 'white';

export interface Piece {
    readonly color: pieceColor;
    readonly isKing: boolean;
}

interface Square {
    readonly color: squareColor;
    readonly piece?: Piece;
}

export interface Position {
    readonly row: number;
    readonly col: number;
}

const row = (startingColor: squareColor, color?: pieceColor): Square[] => {
    const otherColor = startingColor === 'black' ? 'white' : 'black';

    return Array.from({ length: 8 },
        (_, i) => i % 2 === 0 ? startingColor : otherColor)
        .map(squareColor => ({
            color: squareColor,
            piece: squareColor === 'white' && color ? { color, isKing: false } : undefined
        }));
}

export const initialBoard = [
    row('black', 'black'),
    row('white', 'black'),
    row('black', 'black'),
    row('white'),
    row('black'),
    row('white', 'red'),
    row('black', 'red'),
    row('white', 'red'),
]

const isKinged = (piece: Piece, position: Position): Piece => {
    if (piece.isKing) {
        return piece;
    }

    if (piece.color === 'red' && position.row === 0) {
        return { ...piece, isKing: true };
    }

    if (piece.color === 'black' && position.row === 7) {
        return { ...piece, isKing: true };
    }

    return piece;
}

const isMoveValid = (from: Position, to: Position, board: Square[][]): boolean => {
    const piece = board[from.row][from.col].piece;
    if (!piece) {
        return false;
    }

    if (board[to.row][to.col].color === 'black') {
        return false;
    }

    if (board[to.row][to.col].piece?.color === piece.color) {
        return false;
    }

    if (Math.abs(to.col - from.col) !== 1) {
        return false;
    }

    if (Math.abs(to.row - from.row) !== 1) {
        return false;
    }

    if (piece.isKing) {
        return true;
    }

    if (piece.color === 'red') {
        return to.row < from.row;
    }

    if (piece.color === 'black') {
        return to.row > from.row;
    }

    return false;
}

export const movePiece = (from: Position, to: Position, currentBoard: Square[][]): Square[][] => {
    if (!isMoveValid(from, to, currentBoard)) {
        return currentBoard;
    }

    const piece = currentBoard[from.row][from.col].piece!;

    return currentBoard.map((row, rowIndex) =>
        row.map((square, colIndex) => {
            if (rowIndex === from.row && colIndex === from.col) {
                return { ...square, piece: undefined };
            }

            if (rowIndex === to.row && colIndex === to.col) {
                return { ...square, piece: isKinged(piece, { row: rowIndex, col: colIndex }) };
            }

            return square;
        })
    );
}