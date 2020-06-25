import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Password from "../feature/home/pages/password";
import Home from "../feature/home/pages/home";
import Login from "../feature/home/pages/login";
const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                headerTintColor: "white",
                headerStyle: { backgroundColor: "tomato" },
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Awesome app",
                }}
            />
            <Stack.Screen
                name="Password"
                component={Password}
                options={{
                    title: "My Password",
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}
