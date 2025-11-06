import { Piece, squareColor } from "@/game-core/board";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Black, KingBlack, KingRed, Red } from "./Checker";

interface props {
    color: squareColor;
    selected: boolean;
    piece?: Piece;
    onPress: () => void;
}

export const BoardSquare = ({ color, selected, piece, onPress }: props) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.square, {
            backgroundColor: color,
            borderColor: selected ? 'yellow' : 'black',
        }]}>
        {piece != null && (
            piece.color === 'red'
                ? (piece.isKing ? <KingRed /> : <Red />)
                : (piece.isKing ? <KingBlack /> : <Black />)
        )}
    </TouchableOpacity >
);

const styles = StyleSheet.create({
    square: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: 50,
        width: 50,
    }
});