import React from "react"
import { StyleSheet } from "react-native"

type Props = {
    name: string,
    numero: number,
    color: string
}
export const styles = StyleSheet.create({
    containerList: {
        padding: 16,
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    listText: {
        fontSize: 18,
        color: "#FFF"
    },
    listNumber: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    }
})