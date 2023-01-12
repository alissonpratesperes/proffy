import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutline from "../../assets/icons/heart-outline.png";
import heartUnfavorite from "../../assets/icons/unfavorite.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import TeacherProps from "../../interfaces/TeacherProps.interface";
import styles from "./styles";

    const Teacher: React.FunctionComponent<TeacherProps> = ({ teacher }) => {
        return (
            <View style={ styles.container }>
                <View style={ styles.profile }>
                    <Image style={ styles.avatar } source={{ uri: teacher.avatar }}/>
                        <View style={ styles.info }>
                            <Text style={ styles.name }> { teacher.name } </Text>
                            <Text style={ styles.matter }> { teacher.matter } </Text>
                        </View>
                </View>
                    <Text style={ styles.biography }>
                        { teacher.biography }
                    </Text>
                        <View style={ styles.footer }>
                            <View style={ styles.price }>
                                <Text style={ styles.description }>
                                    Hora
                                </Text>
                                <Text style={ styles.value }>
                                    R$ { teacher.cost }
                                </Text>
                            </View>
                            <View style={ styles.buttons }>
                                <RectButton style={[ styles.favoriteButton, styles.favoritedButton ]}>
                                    {/* <Image source={ heartOutline } /> */}
                                    <Image source={ heartUnfavorite } />
                                </RectButton>
                                <RectButton style={ styles.contactButton }>
                                    <Image source={ whatsapp } />
                                        <Text style={ styles.contactButtonText }> WhatsApp </Text>
                                </RectButton>
                            </View>
                        </View>
            </View>
        );
    };

        export default Teacher;