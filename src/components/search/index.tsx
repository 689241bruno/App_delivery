import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
export default function Search() {
  return (
    <View className="w-full border border-slate-500 h-14 rounded-full flex-row items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color="#64748b" />
      <TextInput
        placeholder="Procure sua comida..."
        className="w-full h-full flex-1 bg-transparent"
      />
    </View>
  );
}
