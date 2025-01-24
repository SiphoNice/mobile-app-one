import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Faculties = () => {
  return (
    <SafeAreaView className="bg-gray-200 h-full w-full">
      <ScrollView className="px-6 mt-20"  showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32">
        <View className="items-start justify-between w-full relative">
          <Text className="text-left font-bold text-primary-900">
            - Make Student Life Easier
          </Text>
          <Text className="text-left font-bold text-secondary-900 text-6xl mt-8">
            University Online.
          </Text>
        </View>
        <View className="w-full bg-secondary-600 rounded-2xl mt-6 px-6 py-8 relative">
          <Text className="text-left font-bold text-4xl text-white">
            Learn More about the Faculties
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center mt-6">
          <TouchableOpacity style={{ width: "48%" }}>
            <View className="w-full h-60 mt-6 relative">
              <Image
                source={require("@/assets/images/student-1.png")}
                resizeMode="cover"
                className="size-full rounded-2xl"
              />
              <View className="absolute w-full h-20 bottom-4 bg-secondary-900/50 flex justify-center items-center">
                <Text className="text-center font-bold text-base text-white">
                  Faculty of Law
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "48%" }}>
            <View className="w-full h-60 mt-6 relative">
              <Image
                source={require("@/assets/images/student-3.png")}
                resizeMode="cover"
                className="size-full rounded-2xl"
              />
              <View className="absolute w-full h-20 bottom-4 bg-secondary-900/50 flex justify-center items-center">
                <Text className="text-center font-bold text-base text-white">
                  Faculty of Humanities
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between items-center mt-6">
          <TouchableOpacity style={{ width: "48%" }}>
            <View className="w-full h-60 mt-6 relative">
              <Image
                source={require("@/assets/images/student-3.png")}
                resizeMode="cover"
                className="size-full rounded-2xl"
              />
              <View className="absolute w-full h-20 bottom-4 bg-secondary-900/50 flex justify-center items-center">
                <Text className="text-center font-bold text-base text-white">
                  Faculty of Vat
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "48%" }}>
            <View className="w-full h-60 mt-6 relative">
              <Image
                source={require("@/assets/images/student-2.png")}
                resizeMode="cover"
                className="size-full rounded-2xl"
              />
              <View className="absolute w-full h-20 bottom-4 bg-secondary-900/50 flex justify-center items-center">
                <Text className="text-center font-bold text-base text-white">
                  Faculty of EBIT
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faculties;
