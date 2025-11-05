import { NewsCard } from "@/src/components/Card";
import { colors } from "@/src/styles/colors";
import { roundness } from "@/src/styles/roundness";
import { spacing } from "@/src/styles/spacing";
import { typography } from "@/src/styles/typography";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Searchbar } from "react-native-paper";

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
    title: "Traffic advisory: Main Ave rerouting",
    description: "City Transport Office 2hrs ago",
  },
];

export default function Home() {
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
    gap: 20,
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
    gap: spacing.xs,
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
  horizontalFlex: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  },

  verticalFlex: {
    display: "flex",
    gap: spacing.md,
  },
});
