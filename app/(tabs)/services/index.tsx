import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Services() {
  const eservices = [
    { label: "Business Permit", icon: "phone" },
    { label: "Real Property Tax", icon: "phone" },
    { label: "Civil Registry", icon: "phone" },
    { label: "Zoninng Permits", icon: "phone" },
  ];

  const services = [
    {
      icon: "bank",
      label: "Use of Government Facilities",
      description:
        "Book City halls, meetinng rooms, and public venues for your events.",
    },
    {
      icon: "medical-bag",
      label: "Medical Assistance",
      description:
        "Request help with medicine costs or health program benefits",
    },
    {
      icon: "bus-side",
      label: "Transportation Assistance",
      description:
        "Request a ride for urgent needs or official city activities.",
    },
    {
      icon: "book-open-outline",
      label: "Request for Training",
      description:
        "Enroll inn free, livelihood and skills programs by your LGU.",
    },
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
          {services.map((service, i) => (
            <Pressable
              style={[{ backgroundColor: "white", borderRadius: spacing.md }]}
              key={`${service.label}-${i}`}
            >
              <View
                style={[
                  common.horizontalFlex,
                  {
                    gap: spacing.md,
                    alignItems: "center",
                    padding: spacing.md,
                    justifyContent: "flex-start",
                  },
                ]}
              >
                <View style={[styles.iconContainer, { flex: 1 }]}>
                  <MaterialCommunityIcons
                    name={service.icon as any}
                    size={typography.title}
                  />
                </View>
                <View style={{ flex: 9 }}>
                  <Text style={[common.textTitle]}>{service.label}</Text>
                  <Text>{service.description}</Text>
                </View>
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
  iconContainer: {
    backgroundColor: colors.paleYellow,
    padding: spacing.sm,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: roundness.sm,
  },
});
