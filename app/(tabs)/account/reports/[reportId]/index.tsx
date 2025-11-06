import { BackButton } from "@/src/components/Button";
import { ReportTimeline } from "@/src/components/Timeline";
import { getColor } from "@/src/lib/getColor";
import { useReportStore } from "@/src/store";
import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { ReportInformationType } from "@/src/types/reports";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export type StatusColorType = {
  "in-progress": string;
  processing: string;
  completed: string;
  invalid: string;
};

export default function SingleReportPage() {
  const { reportId } = useLocalSearchParams();
  const searchReport = useReportStore((s) => s.searchReport);

  const [report, setReport] = useState<ReportInformationType>({
    name: "",
    location: "",
    reportNo: "",
    reportedBy: "",
    category: "",
    priorityLevel: "",
    timeSubmitted: "",
    reportStatus: [],
  });

  useEffect(() => {
    setReport(searchReport(reportId as string));
  }, [reportId]);

  const reportColor = getColor(
    report.reportStatus.length
      ? report.reportStatus[report.reportStatus.length - 1].tag
      : "invalid"
  );

  return (
    <View style={[common.screenContainer]}>
      <BackButton />
      <View style={[styles.card, styles.cardContainer]}>
        <Avatar.Image
          source={require("../../../../../assets/images/adaptive-icon.png")}
          size={50}
        />
        <View>
          <Text style={[common.textTitle]}>{report.name}</Text>
          <Text style={[common.textDescription]}>{report.location}</Text>
          <Text style={[common.textDescription]}>{report.reportNo}</Text>
        </View>
      </View>
      <View style={[styles.cardContainer, common.verticalFlex]}>
        <View style={[common.horizontalFlex]}>
          <Text style={[common.textTitle]}>Current Status:</Text>
          <Text
            style={[
              common.textTitle,
              {
                color: `${report.reportStatus.length ? reportColor : ""}`,
              },
            ]}
          >
            {report.reportStatus.length
              ? report.reportStatus[report.reportStatus.length - 1].status
              : "None"}
          </Text>
        </View>
        <ReportTimeline reportStatus={report.reportStatus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: roundness.lg,
    padding: spacing.md,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
