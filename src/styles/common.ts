import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const common = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.afWhite,
        padding: spacing.md,
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
    },
    textTitle: {
        fontWeight: 800,
        color: colors.royalBlue,
        fontSize: typography.subtitle
    },
    textDescription: {
        fontWeight: 300,
        color: colors.gray,
        fontSize: typography.body
    },
    horizontalFlex: {
        display: "flex",
        flexDirection: "row",
        gap: spacing.sm
    },
    verticalFlex: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.md
    }
})