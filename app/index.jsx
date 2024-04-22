import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{height: '100%'}}>
         <View className="flex justify-center items-center px-4 h-full">
            {/* <Image 
               source={} 
            /> */}
            <View>
               <Text className="text-dblack text-2xl mb-2">Welcome to</Text>
               <Text className=" text-primary font-semibold text-5xl mb-4">Pen Application</Text>
               <Text className=" text-dBlack text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, vel voluptates! Atque, fugiat impedit labore a eaque quas nobis suscipit. Deleniti eligendi iste laborum!</Text>
               <View className="mt-6">
                  <Button
                     name="SIGN IN" 
                     route="/sign-in"
                  />
                  <Button
                     name="SIGN UP" 
                     route="/sign-up"
                  />
               </View>
            </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default index;
