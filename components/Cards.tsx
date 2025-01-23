import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Faculty = ({ item }: any) => {
  return (
    <TouchableOpacity className="items-start w-full h-80 relative p-0">
      <View className="flex flex-row items-start justify-between mt-40 w-full">
        <View className="w-2/3  px-4">
          <View className="w-full ">
            <Text className="text-left font-bold text-primary-900">
              - {item.tagline}
            </Text>
            <Text className="text-left font-bold text-secondary-900  text-5xl mt-6">
              {item.name}
            </Text>
          </View>
          <View className="w-full h-60 mt-6">
            <Image
              source={item.featuredImage}
              resizeMode="cover"
              className="size-full rounded-2xl"
            />
          </View>
          <View className="w-full bg-secondary-900 rounded-2xl mt-6 px-6 py-6 relative">
            <Text className="text-left font-bold text-xl text-white">
              Learn More about the program
            </Text>
            <View className="absolute bottom-0 right-2 bottom-2">
              <Image
                source={require("@/assets/icons/right-arrow-white.png")}
                className="w-6 h-6"
              />
            </View>
          </View>
        </View>
        <View className="w-1/3 bg-primary-600">
          <Image
            source={item.sideImage}
            resizeMode="cover"
            className="w-full h-full object-cover"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Faculty;
