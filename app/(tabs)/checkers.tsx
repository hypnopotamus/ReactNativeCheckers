import { Board } from "@/components/game/Board";
import { ResetButton } from "@/components/game/ResetButton";
import { ThemedView } from "@/components/themed-view";

export default function CheckersTab() {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
            <Board />
            <ResetButton />
        </ThemedView>
    )
};