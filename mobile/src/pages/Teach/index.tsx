import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import teachBackground from "../../assets/images/give-classes-background.png";
import styles from "./styles";

    function Teach() {
        const { goBack } = useNavigation();

            function handleNavigateBack() {
                goBack();
            };

                return (
                    <View style={ styles.container }>
                        <ImageBackground resizeMode="contain" style={ styles.content } source={ teachBackground }>
                            <Text style={ styles.title }>
                                Quer ser um Proffy?
                            </Text>
                            <Text style={ styles.description }>
                                Para começar, você precisa se cadastrar como Proffy na nossa plataforma web.
                            </Text>
                        </ImageBackground>
                            <RectButton style={ styles.button } onPress={ handleNavigateBack }>
                                <Feather
                                    name="arrow-left"
                                        size={ 25 }
                                            color="#FFFFFF"
                                />
                                    <Text style={ styles.buttonText }>
                                        Voltar
                                    </Text>
                            </RectButton>
                    </View>
                );
    };

        export default Teach;