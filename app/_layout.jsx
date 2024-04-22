import  { Stack } from 'expo-router'

const RootLayout= () => {
  return ( 
   <Stack
      screenOptions={{
         headerShown: false,
      }} 
   >
      <Stack.Screen 
         name="index" 
      />
      <Stack.Screen 
         name="sign-in" 
      />
      <Stack.Screen 
         name="sign-out" 
      />
   </Stack>
  );
};
export default RootLayout;
