import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons'; // Correct import for FontAwesome
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Provider } from "react-redux";
import store from "../../store";

export default function Layout() {
    return (
        <Provider store={store}>
            <Tabs>

                <Tabs.Screen
                    name="home"
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome name="home" size={24} color="#7CB9E8" />
                        ) : (
                            <FontAwesome name="home" size={24} color="black" />
                        )
                    }} />
                <Tabs.Screen
                    name="basket"
                    options={{
                        tabBarLabel: "Basket",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome name="shopping-basket" size={24} color="#7CB9E8" />
                        ) : (
                            <FontAwesome name="shopping-basket" size={24} color="black" />
                        )
                    }} />
                <Tabs.Screen
                    name="orders"
                    options={{
                        tabBarLabel: "Orders",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <MaterialCommunityIcons name="account-outline" size={24} color="#7CB9E8" />
                        ) : (
                            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                        )
                    }} />
                <Tabs.Screen
                    name="wallet"
                    options={{
                        tabBarLabel: "Wallet",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <Entypo name="wallet" size={24} color="#7CB9E8" />
                        ) : (
                            <Entypo name="wallet" size={24} color="black" />
                        )
                    }}
                />
            </Tabs>
        </Provider>

    );
}
