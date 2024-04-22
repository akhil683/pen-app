import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ name, route}) => {

  return (
    <TouchableOpacity onPress={() => router.push(route)} className="w-full py-4 mt-4 rounded-full bg-primary">
      <Text className="text-lg font-semibold text-bgNote text-center">{name}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
