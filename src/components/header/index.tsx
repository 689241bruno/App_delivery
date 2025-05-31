import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
export default function Header() {
  return (
    <View className=" w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white  rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col hustify-center items-center">
        <Text className="text-center text-sm">Localização</Text>
        <View className="flex-row justify-center items-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text>Campo Grande</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white  rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
