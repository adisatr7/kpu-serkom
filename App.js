import "react-native-gesture-handler"
import { LogBox } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OnboardingScreen, HomeScreen, FormScreen, MapScreen, DataScreen } from "./screens"

const Stack = createNativeStackNavigator()

export default function App() {

  // Disable warning
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Form" component={FormScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Data" component={DataScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
