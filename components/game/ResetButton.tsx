import { reset } from "@/game-core/gameSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Button } from "react-native";

export const ResetButton = () => {
    const dispatch = useAppDispatch();

    return <Button title="Reset Game" onPress={() => dispatch(reset())} />
}