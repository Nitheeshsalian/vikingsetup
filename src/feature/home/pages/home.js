/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from "react-native";

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

export default function Home({ navigation }) {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}>
            <Text>Vikings</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}
