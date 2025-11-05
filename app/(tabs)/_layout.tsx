import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { colors } from "@/src/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const tabScreens: {
  name: string;
  headerTitle: string;
  icon: string;
  header?: boolean;
}[] = [
  { name: "home/index", headerTitle: "Home", icon: "home" },
  {
    name: "news/index",
    headerTitle: "Content",
    icon: "newspaper-variant-outline",
  },
  { name: "services/index", headerTitle: "Services", icon: "cog-outline" },
  { name: "emergency/index", headerTitle: "Emergency", icon: "calendar" },
  { name: "account/index", headerTitle: "Account", icon: "account" },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.azure,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
      }}
    >
      {tabScreens.map((tabScreen) => (
        <Tabs.Screen
          name={tabScreen.name}
          options={{
            title: tabScreen.headerTitle,
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={tabScreen.icon as any}
                size={30}
                color={focused ? colors.white : colors.royalBlue}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
