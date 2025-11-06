import { colors } from "@/src/styles/colors";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        padding: spacing.md,
        borderRadius: roundness.lg,
        elevation: 2,
    },
    outlineCard: {
        borderWidth: 1,
        borderColor: colors.royalBlue,
        padding: spacing.md,
        borderRadius: roundness.lg,
    }
})