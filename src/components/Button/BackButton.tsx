import { common } from "@/src/styles/common";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function BackButton({ title }: { title?: string }) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push("..")}>
      <View style={[styles.container]}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={typography.subtitle}
        />
        <Text style={[common.textTitle]}>{title ?? "Back"}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
