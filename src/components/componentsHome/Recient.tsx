import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';



const Recient = () => {
    return (
        <View>
            <View style={styles.container2}>
                <Text style={styles.text1}>Recient</Text>
                <Text style={styles.two} >Se all</Text>
                <AntDesign
                    styles={styles.two}
                    name="arrowright" size={24} color="red" />
            </View>
        </View>
    )
}

export default Recient;

const styles = StyleSheet.create({
    container2: {
        flexDirection: "row",
        alignItems: "center",
    },
    text1: {
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },
    two: {
        paddingLeft: 265,
        fontSize: 15,
        color: 'red'
    }

})