import { ReportIssue } from "@/src/components/Card";
import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const menu = [
  {
    title: "Report Progress",
    icon: "flag-variant-outline",
    url: "/(tabs)/account/report-progress",
  },
  { title: "Service Request Progress", icon: "progress-wrench", url: "" },
  { title: "Preferences", icon: "cog-outline", url: "" },
  { title: "Support", icon: "chat-question-outline", url: "" },
];

export default function Account() {
  return (
    <View style={[common.screenContainer]}>
      <View style={[common.horizontalFlex, styles.profileContainer]}>
        <Avatar.Image
          source={require("../../../assets/images/adaptive-icon.png")}
          size={50}
        />
        <View>
          <Text style={[common.textTitle]}>Juan Dela Cruz</Text>
          <Text style={[common.textDescription]}>Citizen ID: 2025-001234</Text>
        </View>
      </View>
      <View style={[common.verticalFlex]}>
        {menu.map((item, i) => (
          <ReportIssue {...item} key={`${item.title}-${i}`} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: roundness.lg,
    elevation: 2,
  },
});
