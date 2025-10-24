import { Position } from "@/game-core/board";
import { movePiece, selectBoard } from "@/game-core/gameSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BoardSquare } from "./BoardSquare";

export const Board = () => {
    const board = useAppSelector(selectBoard);
    const dispatch = useAppDispatch();
    const [selectedSquare, setSelectedSquare] = useState<Position | undefined>();

    const onSquarePress = (position: Position) => {
        if (selectedSquare == null) {
            if (board[position.row][position.col].piece) {
                setSelectedSquare(position);
            }
        } else {
            setSelectedSquare(undefined);
            dispatch(movePiece({ from: selectedSquare, to: position }));
        }
    }

    return (
        <View style={styles.board}>
            {board.map(
                (row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map(
                            (square, colIndex) => (
                                <BoardSquare
                                    key={`${rowIndex}-${colIndex}`}
                                    color={square.color}
                                    piece={board[rowIndex][colIndex].piece}
                                    selected={selectedSquare != null && selectedSquare.row === rowIndex && selectedSquare.col === colIndex}
                                    onPress={() => onSquarePress({ row: rowIndex, col: colIndex })}
                                />
                            )
                        )}
                    </View>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    }
})