import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView, Text } from 'react-native'
import theme from '../theme.js'

const Titulo = () => {
    return (
        <View style={styles.vista}>
            <Text style={styles.titulo}>Cruelty Scan</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    vista: {
        backgroundColor: theme.titulo.fondo,


    },
    titulo: {
        color: theme.texto.primario,
        fontSize: theme.fontSizes.titulo,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center',
        marginVertical: 10
    }
})

export default Titulo;