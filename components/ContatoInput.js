import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

import cores from '../cores/cores'
import medidas from '../medidas/medidas';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');

    const capturarNome = (nome) => {
        setNome(nome)
    };

    const capturarCelular = (celular) => {
        setCelular(celular)
    };

    return (
        <View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Nome"
                    style={styles.nomeInputText}
                    onChangeText={capturarNome}
                    value={nome}
                />
            </View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Telefone"
                    style={styles.telefoneInputText}
                    onChangeText={capturarCelular}
                    value={celular}
                />
                <Button
                    title="+"
                    onPress={() => {
                        props.onAdicionarContato(nome, celular)

                        setNome('');
                        setCelular('');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: medidas.PEQUENO
    },
    nomeInputText: {
        width: medidas.GRANDEPORCENTAGEM,
        borderBottomColor: cores.PRETO,
        borderBottomWidth: medidas.MINIMO,
        padding: medidas.PEQUENO,
    },
    telefoneInputText: {
        width: medidas.GRANDEPORCENTAGEM,
        borderBottomColor: cores.PRETO,
        borderBottomWidth: medidas.MINIMO,
        padding: medidas.PEQUENO,
    }
});

export default ContatoInput;
