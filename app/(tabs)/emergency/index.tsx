import { common } from "@/src/styles/common";
import { spacing } from "@/src/styles/spacing";
import { Pressable, StyleSheet, Text, View } from "react-native";
import EarthIcon from "../../../assets/images/earth.svg";
import FireIcon from "../../../assets/images/fire.svg";
import HospitalIcon from "../../../assets/images/hospital.svg";
import PoliceIcon from "../../../assets/images/police.svg";

export default function Emergency() {
  const hotlines = [
    {
      label: "Hospitals",
      icon: <HospitalIcon />,
      internalIcon: "phone",
      details: [
        {
          name: "Makati Medical Center",
          address:
            "2 Amorsolo Street, Legazpi Village, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
        {
          name: "Ospital ng Makati (Main)",
          address: "Sampaguita St. Brgy. Pembo, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
      ],
    },
    {
      label: "Fire Protection",
      icon: <EarthIcon />,
      internalIcon: "phone",
      details: [
        {
          name: "Makati Medical Center",
          address:
            "2 Amorsolo Street, Legazpi Village, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
        {
          name: "Ospital ng Makati (Main)",
          address: "Sampaguita St. Brgy. Pembo, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
      ],
    },
    {
      label: "Police Assistance",
      icon: <PoliceIcon />,
      internalIcon: "phone",
      details: [
        {
          name: "Makati Medical Center",
          address:
            "2 Amorsolo Street, Legazpi Village, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
        {
          name: "Ospital ng Makati (Main)",
          address: "Sampaguita St. Brgy. Pembo, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
      ],
    },
    {
      label: "Disaster & Rescue Team",
      icon: <FireIcon />,
      internalIcon: "phone",
      details: [
        {
          name: "Makati Medical Center",
          address:
            "2 Amorsolo Street, Legazpi Village, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
        {
          name: "Ospital ng Makati (Main)",
          address: "Sampaguita St. Brgy. Pembo, Makati City, Metro Manila",
          contact: [{ number: "(02) 8882-6316" }, { number: "(02) 8882-6317" }],
        },
      ],
    },
  ];

  return (
    <View style={[common.screenContainer]}>
      <View>
        <Text style={[common.textTitle]}>Emergency Hotlines</Text>
        <Text>
          Quick access to emergency contacts and nearby services for your safety
          and emergency assistance
        </Text>
      </View>
      <View style={[common.horizontalFlex, styles.cardContainer]}>
        {hotlines.map((hotline, i) => (
          <Pressable
            key={`${hotline.label}-${i}`}
            style={[common.cardStyleContainer, styles.pressableContainer]}
          >
            <View style={[common.verticalFlex, styles.customCardStyle]}>
              {hotline.icon}
              <Text>{hotline.label}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: "wrap",
  },
  customCardStyle: {
    gap: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableContainer: {
    width: "48%",
  },
});
