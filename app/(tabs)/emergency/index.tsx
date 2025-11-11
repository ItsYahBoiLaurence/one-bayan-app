import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { HotlineInformationType } from "@/src/types/hotlines";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconButton, Modal, Portal } from "react-native-paper";
import EarthIcon from "../../../assets/images/earth.svg";
import FireIcon from "../../../assets/images/fire.svg";
import HospitalIcon from "../../../assets/images/hospital.svg";
import PoliceIcon from "../../../assets/images/police.svg";

const hotlines: HotlineInformationType[] = [
  {
    label: "Hospitals",
    icon: <HospitalIcon />,
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

export default function Emergency() {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = (data: HotlineInformationType) => {
    setActiveHotline(data);
    setVisible(true);
  };
  const hideModal = () => {
    setActiveHotline(null);
    setVisible(false);
  };

  const [activeHotline, setActiveHotline] =
    useState<HotlineInformationType | null>(null);

  return (
    <View style={[common.screenContainer]}>
      <View>
        <Text style={[common.textTitle]}>Emergency Hotlines</Text>
        <Text>
          Quick access to emergency contacts and nearby services for your safety
          and emergency assistance
        </Text>
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={[
            {
              backgroundColor: "transparent",
            },
          ]}
        >
          {activeHotline && (
            <View
              style={[
                {
                  backgroundColor: colors.afWhite,
                  width: "90%",
                  marginHorizontal: "auto",
                  padding: spacing.lg,
                  borderRadius: roundness.md,
                },
                common.verticalFlex,
              ]}
            >
              <Text style={[styles.modalTitle]}>{activeHotline.label}</Text>
              {activeHotline.details.map((detail, i) => (
                <View style={[common.verticalFlex]}>
                  <View>
                    <Text style={[styles.modalItemTitle]}>{detail.name}</Text>
                    <Text>
                      <MaterialCommunityIcons
                        name="google-maps"
                        color={colors.danger}
                        size={typography.body}
                      />
                      {detail.address}
                    </Text>
                  </View>

                  <View style={[common.verticalFlex, { gap: spacing.sm }]}>
                    {detail.contact.map((phone, i) => (
                      <View
                        key={`${phone.number}-${i}`}
                        style={[
                          common.horizontalFlex,
                          styles.modalPhoneNoContainer,
                        ]}
                      >
                        <Text style={[styles.modalPhoneText]}>
                          {phone.number}
                        </Text>
                        <IconButton
                          icon="phone"
                          size={typography.body}
                          style={[styles.modalPhoneButton]}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          )}
        </Modal>
      </Portal>

      <View style={[common.horizontalFlex, styles.cardContainer]}>
        {hotlines.map((hotline, i) => (
          <Pressable
            onPress={() => showModal(hotline)}
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

  //Modal
  modalTitle: {
    fontSize: typography.title,
    fontWeight: "bold",
    color: colors.royalBlue,
  },

  modalItemTitle: {
    fontSize: typography.subtitle,
    fontWeight: "bold",
    color: colors.royalBlue,
  },

  modalItemAddressContainer: {
    alignItems: "center",
  },

  modalPhoneNoContainer: {
    backgroundColor: "white",
    borderRadius: roundness.xl,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    elevation: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalPhoneText: {
    fontSize: typography.subtitle,
    color: colors.gray,
  },
  modalPhoneButton: {
    backgroundColor: colors.gray,
  },
});
