import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export function NewsCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View style={styles.cardContainer}>
      <Avatar.Image
        source={require("../../../../assets/images/adaptive-icon.png")}
      />
      <View style={[{ width: "70%" }]}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.subtext}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    fontSize: typography.subtitle,
    color: colors.royalBlue,
  },
  subtext: {
    fontWeight: "semibold",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
  },
});
