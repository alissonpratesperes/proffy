import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import List from "../pages/List";
import Favorites from "../pages/Favorites";

    const { Navigator, Screen } = createBottomTabNavigator();

        function TabNavigation() {
            return (
                <Navigator screenOptions={{
                    headerShown: false,

                        tabBarStyle: {
                            height: 64,
                            elevation: 0,
                            shadowOpacity: 0
                        },

                        tabBarItemStyle: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        },

                        tabBarIconStyle: {
                            height: 25,
                            width: 25,
                            flex: 0
                        },

                        tabBarLabelStyle: {
                            marginLeft: 16,
                            fontFamily: "Archivo_700Bold",
                            fontSize: 20
                        },

                            tabBarInactiveBackgroundColor: "#FAFAFC",
                            tabBarInactiveTintColor: "#C1BCCC",
                            tabBarActiveBackgroundColor: "#EBEBF5",
                            tabBarActiveTintColor: "#32264D"
                }}>
                    <Screen
                        name="List"
                            component={ List }
                                options={{
                                    tabBarIcon: ({ color, size, focused }) => {
                                        return (
                                            <Ionicons
                                                name="ios-easel"
                                                    color={ focused ? "#8257E5" : color }
                                                        size={ size }
                                            />
                                        );
                                    },
                                        tabBarLabel: "Proffys"
                                }}
                    />
                    <Screen
                        name="Favorites"
                            component={ Favorites }
                                options={{
                                    tabBarIcon: ({ color, size, focused }) => {
                                        return (
                                            <Ionicons
                                                name="ios-heart"
                                                    color={ focused ? "#8257E5" : color }
                                                        size={ size }
                                            />
                                        );
                                    },
                                        tabBarLabel: "Favoritos"
                                }}
                    />
                </Navigator>
            );
        };

            export default TabNavigation;