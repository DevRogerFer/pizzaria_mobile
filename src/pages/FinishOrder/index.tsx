import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { api } from '../../services/api'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
    FinishOrder: {
        number: string | number;
        order_id: string;
        name: string;
    }
}

type FinishOrderRouteProps = RouteProp<RouteDetailParams, 'FinishOrder'>;

export default function FinishOrder() {
    const route = useRoute<FinishOrderRouteProps>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    async function handleFinish(){
        try {
            await api.put('/order/send', {
                order_id: route.params?.order_id
            })
            navigation.popToTop();    
        } catch(error) {
            console.log("Erro ao finalizar! Tente novamente!")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.alert}>Deseja finalizar o pedido?</Text>
            <Text style={styles.title}>
                Mesa {route.params.number}
            </Text>
            <Text style={styles.clientName}>
                {route.params.name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}>Finalizar pedido</Text>
                <Feather name="shopping-cart" size={20} color="#1d1d2e" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D2E',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alert: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 12,
    },
    clientName: {
        fontSize: 18,
        color: '#3FFFA3',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#3fffa3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textButton: {
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',                        
        color: '#1D1D2E',
    }
});