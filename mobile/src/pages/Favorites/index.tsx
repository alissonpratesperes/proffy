import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import TeacherItem from "../../interfaces/Teacher.interface";
import styles from "./styles";

    function Favorites() {
        const [ favoritedTeachers, setFavoritedTeachers ] = useState([]);

            useFocusEffect(() => {
                loadFavoriteTeachers();
            });

                function loadFavoriteTeachers() {
                    AsyncStorage.getItem("favoritedTeachers").then(response => {
                        if(response) {
                            const favorites = JSON.parse(response);
                                setFavoritedTeachers(favorites);
                        };
                    });
                };

                    return (
                        <View style={ styles.container }>
                            <Header title="Estes são os Proffys favoritos"/>
                                <ScrollView
                                    style={ styles.list }
                                        contentContainerStyle={{
                                            paddingHorizontal: 8,
                                            paddingVertical: 16
                                        }}
                                >
                                    { favoritedTeachers.map((teacher: TeacherItem) => {
                                        return (
                                            <Teacher
                                                key={ teacher.id }
                                                    teacher={ teacher }
                                                        favorited={ true }
                                            />
                                        );
                                    }) }
                                </ScrollView>
                        </View>
                    );
    };

        export default Favorites;