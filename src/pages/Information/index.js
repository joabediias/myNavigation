import React from 'react';
import {View, Text} from 'react-native'

export default function Information({route}) {
    return (
        <View style = {{marginTop: 60}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereco}</Text>
            <Text>Profissao: {route.params?.profissao}</Text>
            <Text>E=mail: {route.params?.email}</Text>
        </View>
    );
} 