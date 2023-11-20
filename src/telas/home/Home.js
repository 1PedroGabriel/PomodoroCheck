import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Main from "../componentes/Main";

export default function Home(){

    const Cabecalho = () => {

        return <View style={estilos.cabecalho}>
            <Text style={estilos.h1}>Olá, Pronto para ser produtivo?</Text>
        </View>
    };
    
    return <View >
        
        <Cabecalho />
        <Main  />
        
    </View>

};


const estilos = StyleSheet.create({

    cabecalho: {
        backgroundColor: '#0D0D0D',
        height: 250,
       
    },
    
    h1: {
        marginTop: 90,
        color: '#EF30F2',
        textAlign: 'center',
        fontSize: 50,
    },
  
})