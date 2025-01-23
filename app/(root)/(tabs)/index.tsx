import Faculty from "@/components/Cards";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import featuredImage1 from "@/assets/images/student-2.png";
import sideImage1 from "@/assets/images/student-1.png";
import featuredImage2 from "@/assets/images/student-4.png";
import sideImage2 from "@/assets/images/student-3.png";
export const data = [
  {
    tagline: "Make Student Life Easier",
    name: "University Online",
    featuredImage: featuredImage1,
    sideImage: sideImage1
  },
  {
    tagline: "Make Today Matter",
    name: "Research Matters",
    featuredImage: featuredImage2,
    sideImage: sideImage2
  },
  
]
export default function Index() {
  return (
    <SafeAreaView className="bg-gray-200 h-full w-full">
      <FlatList
        data={data}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <View className="w-screen">
            <Faculty item={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
