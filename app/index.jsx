import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/Button";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView className="min-h-[80vh] flex justify-center items-center">
         <View className="flex justify-center items-center px-4 h-full">
            <Image 
               source={require("../assets/logo.png")} 
               className="w-72 h-72 -rotate-12"
            />
         <View className="-translate-y-8">
               <Text className="text-dblack text-2xl mb-2">Welcome to</Text>
               <Text className=" text-primary font-semibold text-5xl mb-4">Pen Application</Text>
               <Text className=" text-dBlack text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, vel voluptates! Atque, fugiat impedit labore a eaque quas nobis suscipit. Deleniti eligendi iste laborum!</Text>
               <View className="mt-6">
                  <CustomButton
                     name="SIGN IN" 
                     handlePress={() => router.push("/sign-in")}
                  />
                  <CustomButton
                     name="SIGN UP" 
                     handlePress={() => router.push("/sign-up")}
                  />
               </View>
            </View>
         </View>
    </SafeAreaView>
  );
};
export default index;
