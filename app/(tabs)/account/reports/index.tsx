import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const reports = [
  {
    name: "Road Damage / Potholes",
    location: "BLK 12, Barangay San Isidro",
    reportNo: "REP-2025-00981",
    reportStatus: [
      {
        status: "Reported",
        description: "Your report has been received.",
        tag: "processing",
      },
      {
        status: "Issues being reviewed",
        description: "City desk is validating.",
        tag: "processing",
      },
      {
        status: "Dispatching help",
        description: "Maintenance team is on the way.",
        tag: "in-progress",
      },
      {
        status: "Help arrived",
        description: "Team has reached the location.",
        tag: "in-progress",
      },
      {
        status: "Solving the issue",
        description: "Work is in progress",
        tag: "in-progress",
      },
      {
        status: "Issue solved.",
        description: "The issue has been solved",
        tag: "completed",
      },
    ],
    reportedBy: "You",
    category: "Roads",
    priorityLevel: "Medium",
    timeSubmitted: "5hrs ago",
  },
];

export default function ReportProgress() {
  const router = useRouter();
  return (
    <View style={common.screenContainer}>
      <Text style={[common.textTitle]}>Reports</Text>

      <View>
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
                <Text style={[common.textDescription]}>{report.location}</Text>
                <Text style={[common.textDescription]}>{report.reportNo}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
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
