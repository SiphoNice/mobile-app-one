import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabsIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? "#cbd5e1" : "#0f172a"}
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${
        focused
          ? "text-primary-300 font-rubit-Medium"
          : "text-black-200 font-rubik"
      } text-xs w-full -text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#1d4ed8",
          borderTopWidth: 1,
          minHeight: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon icon={icons.home} focused={focused} title="Home" />
          ),
        }}
      />
       <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon icon={icons.search} focused={focused} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="Faculties"
        options={{
          title: "Faculties",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon icon={icons.area} focused={focused} title="Faculties" />
          ),
        }}
      />
      <Tabs.Screen
        name="Campuses"
        options={{
          title: "Campuses",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon icon={icons.location} focused={focused} title="Campuses" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
