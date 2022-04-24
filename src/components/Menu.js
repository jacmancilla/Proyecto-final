import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import theme from '../theme'

// componentes
import Titulo from './Titulo'

//importa imagenes para menu
import imagenCuenta from '../assets/micuenta.png'
import imagenFavorito from '../assets/favorito.png'
import imagenAdopcion from '../assets/adopcion.png'
import imagenLupa from '../assets/lupa.png'
import imagenBarcode from '../assets/barcode.png'

const Menu = () => {

    return (
        <View>
            <Titulo />
            <View style={styles.container}>
                <Pressable style={styles.button}>
                    <Image style={styles.image} source={imagenLupa} />
                    <Text style={styles.buttonText}> Encuentra una marca</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Image style={styles.image} source={imagenBarcode} />
                    <Text style={styles.buttonText}> Escanear código de barras</Text>
                </Pressable>
            </View>


            <View>
                <Pressable style={styles.btnListaMenu}>
                    <Image style={styles.image} source={imagenCuenta} />
                    <Text style={styles.textoListaMenu}>Mi cuenta</Text>
                </Pressable>

                <Pressable style={styles.btnListaMenu}>
                    <Image style={styles.image} source={imagenFavorito} />
                    <Text style={styles.textoListaMenu}>Favoritos</Text>
                </Pressable>

                <Pressable style={styles.btnListaMenu}>
                    <Image style={styles.image} source={imagenAdopcion} />
                    <Text style={styles.textoListaMenu}>Adopción</Text>
                </Pressable>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.boton.primario,
        height: 180

    },

    titulo: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,
        color: '#ff0000',
        fontWeight: '600',
    },

    button: {
        alignItems: 'center',
        backgroundColor: theme.boton.secundario,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    buttonText: {
        color: theme.texto.primario,
        fontSize: theme.fontSizes.normal,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold
    },


    btnListaMenu: {
        backgroundColor: '#Cacaca',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row'
    },
    textoListaMenu: {
        fontWeight: '700',
        fontSize: 25,
        marginLeft: 10,
        letterSpacing: 3
    },
    image: {
        width: 35,
        height: 35

    }
})

export default Menu;