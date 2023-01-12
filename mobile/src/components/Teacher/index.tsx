import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import heartOutline from "../../assets/icons/heart-outline.png";
import heartUnfavorite from "../../assets/icons/unfavorite.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import TeacherItem from "../../interfaces/Teacher.interface";
import TeacherProps from "../../interfaces/TeacherProps.interface";
import styles from "./styles";

    const Teacher: React.FunctionComponent<TeacherProps> = ({ teacher, favorited }) => {
        const [ isFavorited, setIsFavorited ] = useState(favorited);

            function handleLinkToWhatsApp() {
                Linking.openURL(
                    `whatsapp://send?phone=${ teacher.whatsapp }`
                );
            };
            async function handleToggleFavorite() {
                const favorites = await AsyncStorage.getItem("favoritedTeachers");
                    let favoritesArray: TeacherItem[] = [];
                        if(favorites) {
                            const favoritesArray = JSON.parse(favorites);
                        };
                        if(isFavorited) {
                            const favoriteIndex = favoritesArray.findIndex((teacherItem: TeacherItem) => {
                                return teacherItem.id === teacher.id;
                            });
                                favoritesArray.splice(favoriteIndex, 1);
                                    setIsFavorited(false);
                        } else {
                            favoritesArray.push(teacher);
                                setIsFavorited(true);
                        };
                            await AsyncStorage.setItem("favoritedTeachers", JSON.stringify(favoritesArray));
            };

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
                                        <RectButton
                                            onPress={ handleToggleFavorite }
                                                style={[
                                                    styles.favoriteButton,
                                                        isFavorited
                                                            ? styles.favoritedButton
                                                            : {}
                                                ]}
                                        >
                                            { isFavorited
                                                ? <Image source={ heartUnfavorite } />
                                                : <Image source={ heartOutline } /> 
                                            }
                                        </RectButton>
                                        <RectButton style={ styles.contactButton } onPress={ handleLinkToWhatsApp }>
                                            <Image source={ whatsapp } />
                                                <Text style={ styles.contactButtonText }> WhatsApp </Text>
                                        </RectButton>
                                    </View>
                                </View>
                    </View>
                );
    };

        export default Teacher;