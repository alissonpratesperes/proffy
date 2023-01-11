import React from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import back from "../../assets/icons/back.png";
import logo from "../../assets/images/logo.png";
import HeaderProps from "../../interfaces/HeaderProps.interface";
import styles from "./styles";

    const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
        const { navigate } = useNavigation();

            function handleNavigateBack() {
                navigate("Landing" as never);
            };

                return (
                    <View style={ styles.container }>
                        <View style={styles.topBar}>
                            <BorderlessButton onPress={ handleNavigateBack }>
                                <Image source={ back } resizeMode="contain"/>
                            </BorderlessButton>
                                <Image source={ logo } resizeMode="contain"/>
                        </View>
                            <Text style={ styles.title }>
                                { title }
                            </Text>
                    </View>
                );
    };

        export default Header;