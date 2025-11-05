import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export type CardServiceType = {
  title: string;
  description: string;
  icon: string;
  class: string;
};

export function ServiceCard(props: CardServiceType) {
  return (
    <View style={styles.card}>
      <View style={[styles.cardHeader]}>
        <MaterialCommunityIcons
          name={props.icon as any}
          size={typography.title}
          color={colors.royalBlue}
        />
        <Text
          style={{
            fontSize: typography.subtitle,
            fontWeight: "800",
            color: colors.royalBlue,
          }}
        >
          {props.title}
        </Text>
      </View>
      <Text style={{ fontWeight: 300, fontSize: 12 }}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.sm,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    backgroundColor: "white",
    width: "48%",
    borderRadius: 14,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.md,
  },
});
