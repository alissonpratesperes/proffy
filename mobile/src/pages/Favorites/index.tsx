import React from "react";
import { View, ScrollView } from "react-native";

import Header from "../../components/Header";
import Teacher from "../../components/Teacher";
import styles from "./styles";

    function Favorites() {
        return (
            <View style={ styles.container }>
                <Header title="Estes são os Proffys favoritos"/>
                    <ScrollView
                        style={ styles.list }
                            contentContainerStyle={{
                                paddingHorizontal: 8,
                                paddingBottom: 16
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

        export default Favorites;