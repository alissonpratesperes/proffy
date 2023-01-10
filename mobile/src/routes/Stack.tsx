import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "../pages/Landing";
import Teach from "../pages/Teach";

    const { Navigator, Screen } = createNativeStackNavigator();

        function StackNavigation() {
            return (
                <NavigationContainer>
                    <Navigator screenOptions={{ headerShown: false }}>
                        <Screen name="Landing" component={ Landing }/>
                        <Screen name="Teach" component={ Teach }/>
                    </Navigator>
                </NavigationContainer>
            );
        };

            export default StackNavigation;