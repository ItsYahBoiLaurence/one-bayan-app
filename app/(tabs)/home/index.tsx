import {
  EmergencyCard,
  NewsCard,
  ReportIssue,
  ServiceCard,
} from "@/src/components/Card";
import { colors } from "@/src/styles/colors";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Searchbar, SegmentedButtons } from "react-native-paper";

const services = [
  { label: "Services", icon: "cog-outline" },
  { label: "Citizen Guide", icon: "book-open-page-variant-outline" },
  { label: "e-Services", icon: "check-circle-outline" },
  { label: "Emergency", icon: "alarm-light-outline" },
];

const popularServices = [
  { label: "Business Permit", icon: "purse-outline" },
  { label: "Health", icon: "heart-pulse" },
  { label: "Property Tax", icon: "hand-coin-outline" },
  { label: "Transport", icon: "bus-side" },
];

const news = [
  {
    title: "Traffic advisory: Main Ave rerouting",
    description: "City Transport Office 2hrs ago",
  },
  {
    title: "Libreng Bakuna",
    description: "Medical Office 2hrs ago",
  },
];

const filterServices = [
  {
    title: "Business Permit",
    icon: "purse-outline",
    description: "Apply, renew, check status",
    class: "permits",
  },
  {
    title: "Property Tax",
    icon: "hand-coin-outline",
    description: "Assessment and payments",
    class: "payment",
  },
  {
    title: "Civil Registry",
    icon: "account",
    description: "Birth, marriage, death",
    class: "health",
  },
  {
    title: "Utilities",
    icon: "tools",
    description: "Water, power, support",
    class: "payment",
  },
  {
    title: "Health Services",
    icon: "heart-pulse",
    description: "Clinics, vaccines",
    class: "health",
  },
  {
    title: "Transport",
    icon: "bus-side",
    description: "Routes, passes",
    class: "",
  },
];

const emergency = [
  {
    cardTitle: "Police",
    buttonLabel: "Dial 911",
    buttonIcon: "phone-outline",
    cardIcon: "shield-alert-outline",
  },
  {
    cardTitle: "Fire",
    buttonLabel: "Dial 911",
    buttonIcon: "phone-outline",
    cardIcon: "fire",
  },
  {
    cardTitle: "Hospitals",
    buttonLabel: "Nearby",
    buttonIcon: "phone-outline",
    cardIcon: "hospital-building",
  },
];

const issues = [
  { title: "Uncollected Garbage", icon: "delete-outline" },
  { title: "Broken Street Lights", icon: "lightbulb-outline" },
  { title: "Road Damge/Potholes", icon: "road-variant" },
  { title: "Flooding", icon: "waves" },
];

export default function Home() {
  const buttons = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "health",
      label: "Health",
    },
    {
      value: "permits",
      label: "Permits",
    },
    {
      value: "payment",
      label: "Payments",
    },
  ];
  const [filter, setFilter] = useState("all");
  const [value, setValue] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <Searchbar
          style={styles.searchbarContainer}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor={colors.royalBlue}
          placeholderTextColor={colors.gray}
          inputStyle={{ color: colors.royalBlue }}
        />

        <View style={[styles.buttonsContainer, styles.card]}>
          {services.map((service, index) => (
            <Button
              icon={service.icon}
              mode="contained"
              style={styles.buttons}
              key={`${service.label}-${index}`}
            >
              <Text style={styles.buttonText}>{service.label}</Text>
            </Button>
          ))}
        </View>

        <View style={[styles.card, styles.reportCard]}>
          <View style={{ width: "70%" }}>
            <Text style={[styles.textTitle]}>Help us improve our city</Text>
            <Text>Report Issues like potholes, basura, street lights.</Text>
          </View>
          <Button mode="contained" buttonColor={colors.yellow}>
            Report
          </Button>
        </View>

        <View style={[styles.card, styles.verticalFlex]}>
          <Text style={[styles.textTitle]}>Popular Services</Text>
          <View style={[styles.buttonsContainer]}>
            {popularServices.map((service, index) => (
              <Button
                key={`${service.label}-${index}`}
                icon={service.icon}
                mode="outlined"
                style={styles.buttons}
              >
                <Text style={styles.buttonText}>{service.label}</Text>
              </Button>
            ))}
          </View>
        </View>

        <View style={[styles.card, styles.verticalFlex]}>
          <Text style={styles.textTitle}>City News</Text>
          <View style={styles.verticalFlex}>
            {news.map((content, index) => (
              <NewsCard
                key={`${content.title}-${index}`}
                title={content.title}
                description={content.description}
              />
            ))}
          </View>
        </View>

        <View
          style={[styles.xFlex, { flexDirection: "row", alignItems: "center" }]}
        >
          <MaterialCommunityIcons
            name="cog-outline"
            size={typography.title}
            color={colors.royalBlue}
          />
          <Text
            style={[
              styles.textTitle,
              {
                fontSize: typography.title,
              },
            ]}
          >
            Services
          </Text>
        </View>

        <SegmentedButtons
          value={value}
          onValueChange={(e) => setValue(e)}
          style={{
            borderRadius: 0,
            borderWidth: 0,
            elevation: 0,
          }}
          theme={{
            roundness: 0,
          }}
          buttons={buttons.map((btn) => ({
            ...btn,
            onPress: () => {
              setFilter(btn.value);
            },
            style: {
              borderRadius: 0,
              borderWidth: 0,
              borderBottomWidth: btn.value === value ? 2 : 0,
              borderBottomColor:
                btn.value === value ? colors.royalBlue : "transparent",
              backgroundColor: "transparent",
            },
            labelStyle: {
              color: btn.value === value ? colors.royalBlue : "#000",
              fontWeight: btn.value === value ? "bold" : "normal",
            },
          }))}
        />
        {filter === "all" ? (
          <View
            style={[
              styles.xFlex,
              {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: spacing.sm,
                justifyContent: "center",
              },
            ]}
          >
            {filterServices.map((fs, i) => (
              <ServiceCard key={`${fs.title}-${i}`} {...fs} />
            ))}
          </View>
        ) : (
          <View
            style={[
              styles.xFlex,
              {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: spacing.sm,
                justifyContent: "center",
              },
            ]}
          >
            {filterServices
              .filter((fs) => fs.class === filter)
              .map((service, i) => (
                <ServiceCard key={`${service.title}-${i}`} {...service} />
              ))}
          </View>
        )}

        <View
          style={[styles.xFlex, { flexDirection: "row", alignItems: "center" }]}
        >
          <MaterialCommunityIcons
            name="alarm-light-outline"
            size={typography.title}
            color={colors.royalBlue}
          />
          <Text
            style={[
              styles.textTitle,
              {
                fontSize: typography.title,
              },
            ]}
          >
            Emergency
          </Text>
        </View>

        <View style={[styles.verticalFlex]}>
          {emergency.map((emergencyActions, i) => (
            <EmergencyCard
              {...emergencyActions}
              key={`${emergencyActions.cardTitle}-${i}`}
            />
          ))}
        </View>

        <View style={[styles.card, styles.verticalFlex]}>
          <Text style={styles.textTitle}>City News</Text>
          <View style={styles.verticalFlex}>
            {news.map((content, index) => (
              <NewsCard
                key={`${content.title}-${index}`}
                title={content.title}
                description={content.description}
              />
            ))}
          </View>
        </View>

        <View
          style={[styles.xFlex, { flexDirection: "row", alignItems: "center" }]}
        >
          <MaterialCommunityIcons
            name="flag-variant-outline"
            size={typography.title}
            color={colors.royalBlue}
          />
          <Text
            style={[
              styles.textTitle,
              {
                fontSize: typography.title,
              },
            ]}
          >
            Report Issues
          </Text>
        </View>

        <View style={[styles.verticalFlex]}>
          {issues.map((issue, i) => (
            <ReportIssue {...issue} key={`${issue.title}-${i}`} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.afWhite,
    padding: spacing.md,
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  },
  searchbarContainer: {
    elevation: 10,
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: roundness.lg,
    elevation: 2,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    justifyContent: "center",
  },
  buttons: {
    width: "48%",
    paddingVertical: spacing.xs,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 800,
  },
  reportCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xs,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: typography.subtitle,
    color: colors.royalBlue,
  },
  subtext: {
    fontWeight: "semibold",
  },
  xFlex: {
    display: "flex",
    gap: spacing.xs,
  },

  verticalFlex: {
    display: "flex",
    gap: spacing.md,
  },
});
