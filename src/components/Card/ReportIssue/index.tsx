import { colors } from "@/src/styles/colors";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export type ReportIssueCardProp = {
  title: string;
  icon: string;
};

export function ReportIssue(prop: ReportIssueCardProp) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{prop.title}</Text>
      <MaterialCommunityIcons name="chevron-right" size={typography.subtitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: roundness.lg,
    elevation: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: typography.subtitle,
    fontWeight: 800,
    color: colors.royalBlue,
  },
});
