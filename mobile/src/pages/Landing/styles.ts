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

        landing: {
            width: "100%",
            resizeMode: "contain"
        },

        title: {
            marginTop: 32,
            fontFamily: "Poppins_400Regular",
            fontSize: 25,
            color: "#FFFFFF",
            lineHeight: 40
        },

        titleBold: {
            fontFamily: "Poppins_600SemiBold"
        },

        buttonsContainer: {
            marginTop: 32,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },

        button: {
            padding: 25,
            height: 150,
            width: "46%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 12.5
        },
        
        buttonPrimary: {
            backgroundColor: "#6842C2"
        },

        buttonText: {
            fontFamily: "Archivo_700Bold",
            fontSize: 20,
            color: "#FFFFFF"
        },

        buttonSecondary: {
            backgroundColor: "#04D361"
        },

        totalConnections: {
            marginTop: 32,
            maxWidth: 150,
            fontFamily: "Poppins_400Regular",
            fontSize: 13,
            color: "#D4C2FF",
            lineHeight: 20
        }
    });

        export default styles;