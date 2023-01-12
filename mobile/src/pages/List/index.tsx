import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import TeacherItem from "../../interfaces/Teacher.interface";
import api from "../../services/api";
import styles from "./styles";

    function List() {
        const [ isFiltersVisible, setIsFiltersVisible ] = useState(false);
        const [ matter, setMatter ] = useState("");
        const [ weekday, setWeekday ] = useState("");
        const [ time, setTime ] = useState("");
        const [ teachers, setTeachers ] = useState([]);

            function handleToggleFiltersVisible() {
                setIsFiltersVisible(!isFiltersVisible);
            };
            async function handleFilterSubmit() {
                const response = await api.get("/classes", { params: { week_day: weekday, matter, time } });
                
                    setTeachers(response.data);
                    setIsFiltersVisible(false);
            };

                return (
                    <View style={ styles.container }>
                        <Header
                            title="Estes são os Proffys disponíveis"
                                filter={(
                                    <BorderlessButton onPress={ handleToggleFiltersVisible }>
                                        <Feather
                                            name="filter"
                                                size={ 25 }
                                                    color="#FFFFFF"
                                        />
                                    </BorderlessButton>
                                )}
                        >
                            { isFiltersVisible && (
                                <View style={ styles.form }>
                                    <Text style={ styles.label }>
                                        Matéria
                                    </Text>
                                        <TextInput
                                            style={ styles.input }
                                                placeholder="Qual a matéria?"
                                                placeholderTextColor="#C1BCCC"
                                                    value={ matter }
                                                    onChangeText={ (text) => { setMatter(text) } }
                                        />
                                            <View style={ styles.inputGroup }>
                                                <View style={ styles.inputBlock }>
                                                    <Text style={ styles.label }>
                                                        Dia da semana
                                                    </Text>
                                                        <TextInput
                                                            style={ styles.input }
                                                                placeholder="Qual o dia?"
                                                                placeholderTextColor="#C1BCCC"
                                                                    value={ weekday }
                                                                    onChangeText={ (text) => { setWeekday(text) } }
                                                        />
                                                </View>
                                                <View style={ styles.inputBlock }>
                                                    <Text style={ styles.label }>
                                                        Hora
                                                    </Text>
                                                        <TextInput
                                                            style={ styles.input }
                                                                placeholder="Qual a hora?"
                                                                placeholderTextColor="#C1BCCC"
                                                                    value={ time }
                                                                    onChangeText={ (text) => { setTime(text) } }
                                                        />
                                                </View>
                                            </View>
                                                <RectButton style={ styles.submitButton } onPress={ handleFilterSubmit }>
                                                    <Feather
                                                        name="search"
                                                            size={ 25 }
                                                                color="#FFFFFF"
                                                    />
                                                        <Text style={ styles.submitButtonText }>
                                                            Filtrar
                                                        </Text>
                                                </RectButton>
                                </View>
                            ) }
                        </Header>
                            <ScrollView
                                style={ styles.list }
                                    contentContainerStyle={{
                                        paddingHorizontal: 8,
                                        paddingVertical: 16
                                    }}
                            >
                                { teachers.map((teacher: TeacherItem) => {
                                    return (
                                        <Teacher key={ teacher.id } teacher={ teacher }/>
                                    );
                                }) }
                            </ScrollView>
                    </View>
                );
    };

        export default List;