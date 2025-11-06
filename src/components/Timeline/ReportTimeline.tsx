import { getColor } from "@/src/lib/getColor";
import { common } from "@/src/styles/common";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { ReportStatusType } from "@/src/types/reports";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export function ReportTimeline({
  reportStatus,
}: {
  reportStatus: ReportStatusType[];
}) {
  const color = getColor(
    reportStatus.length ? reportStatus[reportStatus.length - 1].tag : "invalid"
  );

  return (
    <View style={styles.container}>
      {reportStatus.length > 0 &&
        reportStatus.map((reportStats, i) => (
          <View key={`${reportStats.status}-${i}`}>
            <View style={[common.horizontalFlex, { alignItems: "center" }]}>
              <MaterialCommunityIcons
                name="checkbox-blank-circle"
                size={typography.subtitle}
                color={getColor(reportStats.tag)}
              />
              <Text style={[common.textTitle]}>{reportStats.status}</Text>
            </View>
            <View
              style={[
                styles.timelineDescriptionContainer,
                { borderColor: color },
              ]}
            >
              <Text style={[common.textDescription, { fontWeight: 500 }]}>
                {reportStats.description}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  timelineDescriptionContainer: {
    paddingHorizontal: spacing.md,
    borderLeftWidth: 1,
    marginLeft: spacing.sm,
    paddingVertical: spacing.sm,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
  },
});
