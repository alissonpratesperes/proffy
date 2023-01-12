import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#F0F0F7"
        },

        form: {
            marginBottom: 16
        },

        label: {
            fontFamily: "Poppins_400Regular",
            fontSize: 13,
            color: "#D4C2FF",
        },

        input: {
            marginTop: 8,
            marginBottom: 16,
            paddingHorizontal: 16,
            height: 50,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: 12.5
        },

        inputGroup: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },

        inputBlock: {
            width: "48%"
        },

        submitButton: {
            marginTop: 16,
            height: 75,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04D361",
            borderRadius: 12.5
        },

        submitButtonText: {
            marginLeft: 16,
            fontFamily: "Archivo_700Bold",
            fontSize: 20,
            color: "#FFFFFF"
        },

        list: {
            marginTop: -32
        }
    });

        export default styles;