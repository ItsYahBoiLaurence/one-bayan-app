import { BackButton } from "@/src/components/Button";
import { common } from "@/src/styles/common";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SingleReportPage() {
  const { reportId } = useLocalSearchParams();
  return (
    <View style={[common.screenContainer]}>
      <BackButton />
      <Text>SingleReportPage: {reportId}</Text>
    </View>
  );
}
