import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import logo from "../../assets/images/logo.png"
import landing from "../../assets/images/landing.png";
import study from "../../assets/icons/study.png";
import classes from "../../assets/icons/give-classes.png";
import heart from "../../assets/icons/heart.png";
import styles from "./styles";

    function Landing() {
        return (
            <View style={ styles.container }>
                <Image style={ styles.landing } source={ landing }/>
                    <Text style={ styles.title }>
                        Seja bem-vindo, {"\n"}
                            <Text style={ styles.titleBold }>
                                O que deseja fazer?
                            </Text>
                    </Text>
                        <View style={ styles.buttonsContainer }>
                            <TouchableOpacity style={[ styles.button, styles.buttonPrimary ]}>
                                <Image source={ study }/>
                                    <Text style={ styles.buttonText }> Estudar </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[ styles.button, styles.buttonSecondary ]}>
                                <Image source={ classes }/>
                                    <Text style={ styles.buttonText }> Lecionar </Text>
                            </TouchableOpacity>
                        </View>
                            <Text style={ styles.totalConnections }>
                                Total de 2 conexões já realizadas {" "}
                                    <Image source={ heart }/>
                            </Text>
            </View>
        );
    };

        export default Landing;