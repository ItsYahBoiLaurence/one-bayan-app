import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={40}
        source={require("../../../../assets/images/logo.png")}
        style={{ backgroundColor: colors.azure }}
      />
      <View>
        <Text style={styles.text}>One Bayan App</Text>
        <Text style={styles.subtext}>Smart City • Philippines</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  text: {
    fontSize: typography.subtitle,
    fontWeight: 800,
  },
  subtext: {
    fontSize: typography.body,
    fontWeight: 300,
  },
});
