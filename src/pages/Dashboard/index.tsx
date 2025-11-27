import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";

export default function Dashboard() {
   const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
   const [number, setNumber] = useState('');
   const [name, setName] = useState('');

   async function openOrder() {
    if (number === '' || name === '') {
        return;
    }
    
    const response = await api.post('/order', {
        table: Number(number),
        name: name
    });
    navigation.navigate('Order', { number: number, order_id: response.data.id, name: name });
    setNumber('');
    setName('');
   }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo Pedido</Text>

            <TextInput
                placeholder="Número da mesa"
                placeholderTextColor="#F0F0F0"
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
            />

            <TextInput
                placeholder="Nome do cliente"
                placeholderTextColor="#F0F0F0"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity style={styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir Mesa</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#1D1D2E',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 24,
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: '#101026',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        color: '#FFF',
        fontSize: 22,
        marginBottom: 12,
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#3FFFA3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
    },
    buttonText: {
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold',
    },
});