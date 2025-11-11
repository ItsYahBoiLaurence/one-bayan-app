import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Services() {
  const eservices = [
    { label: "Business Permit", icon: "phone" },
    { label: "Real Property Tax", icon: "phone" },
    { label: "Civil Registry", icon: "phone" },
    { label: "Zoninng Permits", icon: "phone" },
  ];

  return (
    <ScrollView>
      <View style={[common.screenContainer]}>
        <View>
          <Text style={[common.textTitle]}>e-Services</Text>
          <Text>Access City Permits, Payments, and Government Programs</Text>
        </View>
        <View style={[common.horizontalFlex, { flexWrap: "wrap" }]}>
          {eservices.map((eservice, i) => (
            <Pressable style={[styles.card]} key={`${eservice.label}-${i}`}>
              <View
                style={[
                  common.horizontalFlex,
                  {
                    gap: spacing.xs,
                    alignItems: "center",
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.lg,
                    justifyContent: "center",
                  },
                ]}
              >
                <MaterialCommunityIcons name={eservice.icon as any} />
                <Text>{eservice.label}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View>
          <Text style={[common.textTitle]}>Services</Text>
          <Text>Avail city support and programs in just a few taps</Text>
        </View>
        <View style={[common.verticalFlex]}>
          {eservices.map((eservice, i) => (
            <Pressable style={[styles.card]} key={`${eservice.label}-${i}`}>
              <View
                style={[
                  common.horizontalFlex,
                  {
                    gap: spacing.xs,
                    alignItems: "center",
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.lg,
                    justifyContent: "center",
                  },
                ]}
              >
                <MaterialCommunityIcons name={eservice.icon as any} />
                <Text>{eservice.label}</Text>
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
    width: "48%",
    backgroundColor: "white",
    borderRadius: roundness.sm,
    elevation: 1,
  },
});
