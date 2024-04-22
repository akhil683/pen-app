import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import CustomButton from "../components/Button";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="min-h-[85vh] flex justify-center items-center px-8">
      <Text className="text-3xl font-semibold ">Sign in to Pen App</Text>
      <Text>Glad to see you here</Text>
      <View className="mt-8 w-full">
         <TouchableOpacity className="py-3 w-full border border-lblack focus:border-primary rounded-full ">
            <Text className="text-base text-center">Log In with Google</Text>
         </TouchableOpacity>
      </View>
      <Text className="my-4 text-base">or</Text>
      <View className="w-full">
         <InputField 
            placeholder="Email" 
         />
         <InputField 
            placeholder="Password"  
            secure={true}
         />
         <CustomButton name="Sign In" route="/home" />
      </View>
      <View className="flex justify-center items-center flex-row mt-4">
         <Text>Don't have an account? </Text>
         <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text className="text-primary font-semibold">Sign Up</Text>
         </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};
export default SignIn;
