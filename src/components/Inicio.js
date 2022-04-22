import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme'

const Inicio = () => {
  return (
    <View >
      <Text style={styles.titulo}>Cruelty Scan</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> Botón</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.boton.primario,
    padding: 10,
    marginTop: 50,
    marginHorizontal: 60,
    borderRadius: 10
  },
  buttonText: {
    color: theme.texto.primario,
    fontSize: theme.fontSizes.normal,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold
  },
  titulo: {
    color: theme.texto.primario,
    fontSize: theme.fontSizes.titulo,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center'
  }
})


export default Inicio;