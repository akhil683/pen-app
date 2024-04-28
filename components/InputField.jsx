import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import showImage from '../assets/showPassword.png'
import hideImage from '../assets/hidePassword.png'

const InputField = ({ 
   placeholder, 
   value, 
   handleChangeText, 
   otherStyles, 
   secure = false}) => {
      
   const [ showPassword, setShowPassword ] = useState(true)
   const eyePassword = showPassword ? showImage : hideImage

  return (
    <View className={`space-y-2 mb-4 ${otherStyles}`}>
      <View className="w-full h-14 relative bg-bgNote border-lblack border  focus:border-primary items-center rounded-full overflow-hidden ">
         <TextInput 
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            placeholderTextColor="#777"
            secureTextEntry={secure === true && !showPassword}
            className="text-lg py-3  w-full px-4"
         />
         {secure === true && (
            <TouchableOpacity 
               className="w-8 h-8 absolute top-3 right-3" 
               onPress={() => setShowPassword(!showPassword)}>
               <Image source={eyePassword} className="w-8 h-8" />
            </TouchableOpacity>
         ) }
      </View>
    </View>
  );
};
export default InputField;
