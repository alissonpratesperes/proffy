import React from "react";
import { View } from "react-native";

import Header from "../../components/Header";
import styles from "./styles";

    function List() {
        return (
            <View style={ styles.container }>
                <Header title="Estes são os Proffys disponíveis"/>
            </View>
        );
    };

        export default List;