import { colors } from "@/src/styles/colors";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { cardStyles } from "../cardStyles";

export type EmergencyCardProp = {
  cardTitle: string;
  buttonLabel: string;
  buttonIcon: string;
  cardIcon: string;
};

export function EmergencyCard(prop: EmergencyCardProp) {
  return (
    <View style={[cardStyles.outlineCard, styles.container]}>
      <View style={[styles.horizontalFlex]}>
        <MaterialCommunityIcons
          name={prop.cardIcon as any}
          color={colors.royalBlue}
          size={typography.subtitle}
        />
        <Text style={[styles.cardTitle]}>{prop.cardTitle}</Text>
      </View>
      <Button
        icon={prop.buttonIcon}
        buttonColor={colors.danger}
        mode="contained"
      >
        {prop.buttonLabel}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  cardTitle: {
    fontSize: typography.subtitle,
    fontWeight: 800,
    color: colors.royalBlue,
  },
});
