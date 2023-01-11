import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        container: {
            padding: 32,
            backgroundColor: "#8257E5"
        },

        topBar: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },

        title: {
            marginVertical: 32,
            maxWidth: 240,
            fontFamily: "Archivo_700Bold",
            fontSize: 25,
            color: "#FFFFFF",
            lineHeight: 40
        }
    });

        export default styles;