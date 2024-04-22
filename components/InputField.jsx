import { View, Text, TextInput } from "react-native";

const InputField = ({ placeholder, value, handleChangeText, otherStyles, secure = false}) => {
  return (
    <View className={`space-y-2 mb-4 ${otherStyles}`}>
      <View className="w-full bg-bgNote border-lblack border  focus:border-primary items-center rounded-full overflow-hidden ">
         <TextInput 
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            placeholderTextColor="#777"
            secureTextEntry={secure}
            className="text-lg py-3  w-full px-4"
         />
      </View>
    </View>
  );
};
export default InputField;
