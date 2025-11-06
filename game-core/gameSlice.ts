import type { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { initialBoard, movePiece as moveGamePiece, Position } from './board';

export const boardSlice = createSlice({
  name: 'game',
  initialState: initialBoard,
  reducers: {
    movePiece: (board, action: PayloadAction<{from: Position, to: Position}>) => {
      return moveGamePiece(action.payload.from, action.payload.to, board);
    },
    reset: () => initialBoard,
  },
});

export const { movePiece, reset } = boardSlice.actions;
export const selectBoard = (state: RootState) => state.gameBoard;
export default boardSlice.reducer;