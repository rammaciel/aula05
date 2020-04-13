import React from 'react';
import { View, StyleSheet } from 'react-native';

import cores from '../cores/cores'
import medidas from '../medidas/medidas'

const Cartao = (props) => {
    return (
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View>
    );
};

const estilos = StyleSheet.create({
    cartao: {
        shadowRadius: medidas.min,
        backgroundColor: cores.BRANCO,
        padding: medidas.min,
    }
});

export default Cartao;
