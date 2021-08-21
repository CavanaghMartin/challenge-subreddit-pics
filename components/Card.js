import React from "react";
import { Text, Image, View, StyleSheet, Linking } from "react-native";
import timeDifference from "../lib/timeDifference";
export default function Card({ title, username, score, comments, creationDate, image, url }) {

    //we render the data from props
    return (
        <>
            <View onPress={() => { Linking.openURL('https://www.reddit.com' + url) }}
                style={styles.card}>
                <View  style={{ flexDirection: "row" }}>
                    <View style={styles.cardImage}>
                        <Image
                            style={{ flex: 1 }}
                            source={{ uri: image }}
                        />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 12 }}>
                        <Text style={styles.cardLocation}>{timeDifference(creationDate)} ago</Text>
                        <Text 
                            style={styles.cardTitle}>{title}</Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={styles.cardDescription}>{username}</Text>
                            <Text style={styles.cardDescription}>score:{score}</Text>
                            <Text style={styles.cardDescription}>{comments} comments</Text>
                        </View>
                    </View>
                </View>
            </View  >
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
        flexWrap: "wrap",
        fontSize: 10,
        marginLeft: 10,
        marginRight: 8,
    },

    cardImage: {
        flex: 0.3,
    },
})