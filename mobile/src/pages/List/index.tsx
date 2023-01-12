import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import styles from "./styles";

    function List() {
        const [ isFiltersVisible, setIsFiltersVisible ] = useState(false);

            function handleToggleFiltersVisible() {
                setIsFiltersVisible(!isFiltersVisible);
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
                                        <TextInput style={ styles.input } placeholder="Qual a matéria?" placeholderTextColor="#C1BCCC"/>
                                            <View style={ styles.inputGroup }>
                                                <View style={ styles.inputBlock }>
                                                    <Text style={ styles.label }>
                                                        Dia da semana
                                                    </Text>
                                                        <TextInput style={ styles.input } placeholder="Qual o dia?" placeholderTextColor="#C1BCCC"/>
                                                </View>
                                                <View style={ styles.inputBlock }>
                                                    <Text style={ styles.label }>
                                                        Hora
                                                    </Text>
                                                        <TextInput style={ styles.input } placeholder="Qual a hora?" placeholderTextColor="#C1BCCC"/>
                                                </View>
                                            </View>
                                                <RectButton style={ styles.submitButton }>
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
                                <Teacher/>
                                <Teacher/>
                                <Teacher/>
                                <Teacher/>
                            </ScrollView>
                    </View>
                );
    };

        export default List;