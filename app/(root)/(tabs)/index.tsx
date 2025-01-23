import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-secondary-900 h-full">
      <ScrollView>
      <View className="flex flex-row items-start justify-between">
        <View className="w-1/2 flex flex-col justify-between items-center">
          <View className="w-full flex items-center justify-center">
            <Text className="text-white text-2xl text-left px-4 mt-10 leading-6">
              Fifty years of better, brighter futures.
            </Text>
          </View>
          <View className="w-full flex items-center justify-center mt-10">
            <Image
              source={require("@/assets/images/design.png")}
              className="w-full h-80 pr-4"
            />
          </View>
          <View className="w-full flex items-center justify-center mt-10">
            <Image
              source={require("@/assets/images/logo2.png")}
              className="w-24 h-24 object-contain"
            />
          </View>
        </View>
        <View className="bg-primary-50 w-1/2">
          <Image
            source={require("@/assets/images/welcome.png")}
            className="w-full h-96"
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
