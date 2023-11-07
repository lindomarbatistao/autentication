import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login"
import SignUp from './pages/signup'
import Home from './pages/home'

const Pilha = createStackNavigator()

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}