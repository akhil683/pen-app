
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import CustomButton from "../components/Button";
import { router } from "expo-router";
import { useState } from "react";
import { signIn } from "../lib/appwrite";

const SignIn = () => {
   const [ isSubmitting, setIsSubmitting ] = useState(false);
   const [form, setForm ] = useState({
      email: "",
      password: ""
   })

   const submit = async () => {
      if(!form.email || !form.password) {
         Alert.alert("Error", "Please fill in all the fields")
      }
     setIsSubmitting(true)
     try {
         const result = await signIn(
            form.email, 
            form.password, 
         );
         router.replace("/home")
      } catch (e) {
         Alert.alert("Error", e.message)
      } finally {
         setIsSubmitting(false)
      }
   }
  return (
    <SafeAreaView className="min-h-[90vh] flex justify-center items-center px-8">
      <Image 
         source={require("../assets/logo.png")} 
         className=" w-36 h-36 -rotate-12"
      />
      <Text className="text-3xl font-semibold">Sign In to Pen App</Text>
      <Text>Glad to see you here</Text>
      <View className="mt-8 w-full">
         <TouchableOpacity className="h-12 flex justify-center w-full border border-lblack focus:border-primary rounded-full ">
            <Image
               source={require("../assets/google.png")} 
               className="w-6 h-6 absolute top-[10px] left-3"
            />
            <Text className="text-base text-center">Log In with Google</Text>
         </TouchableOpacity>
      </View>
      <Text className="my-4 text-base">or</Text>
      <View className="w-full">
         <InputField 
            placeholder="Email" 
            value={form.email} 
            handleChangeText={(e) => setForm({...form, email: e})} 
         />
         <InputField 
            placeholder="Password" 
            value={form.password} 
            handleChangeText={(e) => setForm({...form, password: e})} 
            secure={true}
         />
         <CustomButton name="Sign In" handlePress={submit}/>
      </View>
      <View className="flex justify-center items-center flex-row mt-4">
         <Text>Don't have an account? </Text>
         <TouchableOpacity onPress={() => router.replace("/sign-up")}>
            <Text className="text-primary font-semibold">Sign Up</Text>
         </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};
export default SignIn;
