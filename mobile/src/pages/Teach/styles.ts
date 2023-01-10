import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        container: {
            padding: 32,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#8257E5"
        },

        content: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center"
        },

        title: {
            maxWidth: 140,
            fontFamily: "Archivo_700Bold",
            fontSize: 25,
            color: "#FFFFFF",
            lineHeight: 40
        },

        description: {
            marginTop: 32,
            maxWidth: 225,
            fontFamily: "Poppins_400Regular",
            fontSize: 15,
            color: "#D4C2FF",
            lineHeight: 25
        },

        button: {
            marginTop: 32,
            height: 75,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04D361",
            borderRadius: 12.5
        },

        buttonText: {
            marginLeft: 16,
            fontFamily: "Archivo_700Bold",
            fontSize: 20,
            color: "#FFFFFF"
        }
    });

        export default styles;