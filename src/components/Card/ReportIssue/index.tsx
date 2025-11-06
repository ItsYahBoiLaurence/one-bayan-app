import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type ReportIssueCardProp = {
  title: string;
  icon: string;
  url?: string;
};

export function ReportIssue(prop: ReportIssueCardProp) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push((prop.url as any) ?? "")}>
      <View style={styles.card}>
        <View style={[common.horizontalFlex, { alignItems: "center" }]}>
          <MaterialCommunityIcons
            name={prop.icon as any}
            size={typography.subtitle}
          />

          <Text style={styles.cardTitle}>{prop.title}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={typography.subtitle}
        />
      </View>
    </Pressable>
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
