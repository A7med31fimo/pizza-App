
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drinks from "./Components/Categories/Drinks/Drinks";
import FirstPage from "./Components/FirstPage";
import Pizza from "./Components/Categories/pizza/importPizza";
import Cakes from "./Components/Categories/cake/Cakes"
import Deals from "./Components/Categories/Deals/Deals"
import Cart from "./Components/Categories/Cart";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drinks">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Pizza 🍕" }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{title:"Getting Start"}}/>
        <Stack.Screen name="pizza" component={Pizza} options={{title:"Getting Start"}}/>
        <Stack.Screen name="cakes" component={Cakes} options={{title:"Getting Start"}}/>
        <Stack.Screen name="deals" component={Deals} options={{title:"Getting Start"}}/>
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}