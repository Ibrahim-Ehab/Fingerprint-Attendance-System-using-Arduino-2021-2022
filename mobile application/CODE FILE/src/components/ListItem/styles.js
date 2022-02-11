import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0,
        borderTopColor: "#138086",
        borderTopWidth: 2,

    },
    topcont: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    contcontainer: {
        width: "100%",
        paddingHorizontal: 20
    },
    Text: {
        textAlign: "center",
        fontWeight: "bold",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        paddingTop: 20
    },
    Text2: {
        textAlign: "center",
        fontWeight: "bold",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 17,
        color: "#000"

    },
    ptn: {
        width: 50,
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "black",
        marginVertical: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    ptntext: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    img: {
        width: 35,
        height: 30,
        marginHorizontal: 10
    },
    downcont: {
        width: "100%",

        borderBottomWidth: 0
    },
    mainrow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 4,
        alignItems: "center"
    }
})