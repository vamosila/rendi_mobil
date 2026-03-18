import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./assets/screens/Home";
import Reg from "./assets/screens/Reg";

const Stack = createNativeStackNavigator();

const RendiStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reg" component={Reg} />
    </Stack.Navigator>
  )
}

export default RendiStack
