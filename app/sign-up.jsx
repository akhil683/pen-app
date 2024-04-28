import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import CustomButton from "../components/Button";
import { router } from "expo-router";
import { useState } from "react";
import { createUser } from "../lib/appwrite";

const SignOut = () => {
   const [ form, setForm ] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   })
   const [ isSubmitting, setIsSubmitting] = useState(false);

   const submit = async () => {
      if(!form.username || !form.email || !form.password || !form.confirmPassword) {
         Alert.alert("Error", "Please fill in all the fields")
      }
      if(!(form.password === form.confirmPassword)) {
         Alert.alert("Error", "Password do not match!")
      }
     setIsSubmitting(true)

     try {
         const result = await createUser(
            form.email, 
            form.password, 
            form.username
         );
         router.replace("/home")
      } catch (e) {
         Alert.alert("Error", e.message)
      } finally {
         setIsSubmitting(false)
      }
   }

  return (
    <SafeAreaView className="min-h-[85vh] flex justify-center items-center px-8">
      <Image 
         source={require("../assets/logo.png")} 
         className=" w-36 h-36 -rotate-12"
      />
      <Text className="text-3xl font-semibold ">Sign Up to Pen App</Text>
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
            placeholder="Your Name" 
            value={form.username} 
            handleChangeText={(e) => setForm({...form, username: e})} 
         />
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
         <InputField 
            placeholder="Confirm Password"  
            handleChangeText={(e) => setForm({...form, confirmPassword: e})} 
            secure={true}
         />
         <CustomButton name="Create an account" handlePress={submit} />
      </View>
      <View className="flex justify-center items-center flex-row mt-4">
         <Text>Already have an account? </Text>
         <TouchableOpacity onPress={() => router.replace("/sign-in")}>
            <Text className="text-primary font-semibold">Sign In</Text>
         </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};
export default SignOut;
