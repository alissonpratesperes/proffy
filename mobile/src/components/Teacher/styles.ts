import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        container: {
            marginBottom: 16,
            backgroundColor: "#FFFFFF",
            borderWidth: 2,
            borderColor: "#E6E6F0",
            borderRadius: 20,
            overflow: "hidden"
        },

        profile: {
            paddingVertical: 32,
            paddingHorizontal: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },

        avatar: {
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: "#EEEEEE"
        },

        info: {
            marginLeft: 16
        },

        name: {
            fontFamily: "Archivo_700Bold",
            fontSize: 20,
            color: "#32264D"
        },

        matter: {
            marginTop: 8,
            fontFamily: "Poppins_400Regular",
            fontSize: 13,
            color: "#6A6180"
        },

        biography: {
            marginBottom: 32,
            paddingHorizontal: 32,
            fontFamily: "Poppins_400Regular",
            fontSize: 15,
            color: "#6A6180",
            lineHeight: 25
        },

        footer: {
            padding: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#FAFAFC",
            borderTopWidth: 2,
            borderTopColor: "#E6E6F0"
        },

        price: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },

        description: {
            fontFamily: "Poppins_400Regular",
            fontSize: 15,
            color: "#32264D"
        },

        value: {
            marginLeft: 16,
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
            color: "#8257E5"
        },

        buttons: {
            marginTop: 32,
            display: "flex",
            flexDirection: "row"
        },

        favoriteButton: {
            marginRight: 16,
            height: 75,
            width: 75,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8257E5",
            borderRadius: 12.5
        },

        favoritedButton: {
            backgroundColor: "#E33D3D"
        },

        contactButton: {
            height: 75,
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04D361",
            borderRadius: 12.5
        },

        contactButtonText: {
            marginLeft: 16,
            fontFamily: "Archivo_700Bold",
            fontSize: 20,
            color: "#FFFFFF" 
        }
    });

        export default styles;