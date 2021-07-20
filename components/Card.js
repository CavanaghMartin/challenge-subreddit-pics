import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Image, View, StyleSheet, Linking } from "react-native";
import timeDifference from "../lib/timeDifference";
export default function Card({ title, username, score, comments, creationDate, image, url }) {
 
   //we render the data from props
    return (
        <>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.reddit.com' + url) }}
                style={styles.card}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardImage}>
                        <Image
                            style={{ width: "100%", height: "100%" }}
                            source={image}
                        />
                    </View>
                    <View style={{ display: "flex", flex: 1, marginHorizontal: 12, overflow: "hidden" }}>
                        <Text style={styles.cardLocation}>{timeDifference(creationDate)} ago</Text>
                        <Text style={styles.cardTitle}>{title}</Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={styles.cardDescription}>{username}</Text>
                            <Text style={styles.cardDescription}>score:{score}</Text>
                            <Text style={styles.cardDescription}>{comments} comments</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        height: "height / 8",

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
    },

    cardTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
    },

    cardLocation: {
        fontSize: 11.5,
        color: "#777",
        marginLeft: 10,
    },

    cardDescription: {

        display: "block",
        fontSize: 10,
        marginHorizontal: "auto",
        marginVertical: 8,
        justifyContent: "space-evenly"
    
    },

    cardImage: {
        flex: 0.3,
    },
})