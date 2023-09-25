import React from 'react';
import {View, Text} from 'react-native'

export default function Contacts({navigation}) {
    return (
        <View>
            <View>
                <Text>Nome: Joao Silva</Text>
                <Text>Telefone: (62) 9 9958-9792</Text>
                <Text
                    onPress = {() => navigation.navigate('Information',
                    {
                       nome: 'Joao Silva',
                       telefone: '(62) 9 9958-9792',
                       endereco: 'Rua MDV 4',
                       profissao: 'Analista',
                       email: 'joaosilva@gmail.com'
                    }
                    )}>
                        Information...
                </Text>
            </View>

            <View style = {{marginTop: 30}}>
                <Text>Nome: Daniela Dias</Text>
                <Text>Telefone: (62) 9 9242-4065</Text>
                <Text
                    onPress = {() => navigation.navigate('Information',
                    {
                        nome: 'Daniela Dias',
                       telefone: '(62) 9 9242-4065',
                       endereco: 'Rua MDV 21',
                       profissao: 'Desenvolvedora de Software',
                       email: 'daniela@gmail.com'
                    })}>
                        Information...
                </Text>
            </View>
        </View>
    );
} 