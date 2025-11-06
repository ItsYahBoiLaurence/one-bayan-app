import { useReportStore } from "@/src/store";
import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function ReportProgress() {
  const reports = useReportStore((s) => s.reports);

  const router = useRouter();
  return (
    <ScrollView>
      <View style={common.screenContainer}>
        <Text style={[common.textTitle]}>Reports</Text>

        <View style={[common.verticalFlex]}>
          {reports.map((report) => (
            <Pressable
              key={report.reportNo}
              onPress={() =>
                router.push(`/(tabs)/account/reports/${report.reportNo}`)
              }
            >
              <View style={[styles.card]}>
                <Avatar.Image
                  source={require("../../../../assets/images/adaptive-icon.png")}
                  size={50}
                />
                <View>
                  <Text style={[common.textTitle]}>{report.name}</Text>
                  <Text style={[common.textDescription]}>
                    {report.location}
                  </Text>
                  <Text style={[common.textDescription]}>
                    {report.reportNo}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: roundness.lg,
    display: "flex",
    flexDirection: "row",
    padding: spacing.md,
    gap: spacing.md,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
