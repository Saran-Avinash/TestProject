import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",

    }
})

function SignIn(){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/loginBackground.png')}/>
        </View>
    );
}

export default SignIn;