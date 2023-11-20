import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TextInput, View} from "react-native";
import Add from './Add';
import { db } from '../serv/SQLite';

import { useState } from "react";


//Essa função serve com um menu, está dando problema a biblioteca do react navigation então eu improvisei.

export default function AddSection() {
    
    const [texto, setTexto] = useState('');
    const [minuto, setMinuto] = useState('');

    async function Buscar(){
    
        //A promise torna assincrono.

        return new Promise((resolve) => {

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Trab;', [], (tx, results) => {

                //Depois que pararam e piririm, isso acontece ( pelo oq eu entendi ).

                resolve(results.rows);
        
            });
        });

            
        });
    }


    async function AddTo(Trabalho, Min){

      
        //Pegar o id para poder deletar
        if(Trabalho == '' || Min =='' || isNaN(Min)){
            console.log("ERRO, DADOS ERRADOS")
        } else {

            

        await Add(Trabalho, Min);
    
        const AllItem = await Buscar()
        const len = AllItem.length;
        const last = AllItem.item(len - 1);
        const id = last.id;
        //-----------------------------
        console.log(id);

        setTexto('');
        setMinuto('');

        }

    }
    return <View style={{marginVertical: 200}}>
    <TextInput style={estilos.addtarefa}  onChangeText={(newtext) => setTexto(newtext)} value={texto} placeholder="Qual é a atividade?"/>
    <TextInput style={estilos.addminuto} onChangeText={(newminuto) => setMinuto(newminuto)} value={minuto} placeholder="Em quantos Minutos será feito?"/>
    <TouchableOpacity style={estilos.addbotao} onPress={() => AddTo(texto, minuto)} ><Text style={estilos.addbotaotexto}> Adicionar tarefa</Text></TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
    
    addtarefa: {
        marginHorizontal: 30,
        marginTop: 10,
        backgroundColor: '#F2F2F2',
        textAlign: 'center',
    
    },

    addminuto: {

        marginHorizontal: 30,
        marginTop: 10,
        backgroundColor: '#F2F2F2',
        textAlign: 'center',

    },

    addbotao: {

        marginHorizontal: 30,
        marginTop: 10,
        marginBottom: 50,
        height: 50,
        backgroundColor: '#313640',

    },

    addbotaotexto: {

        textAlign: 'center',
        color: '#F2F2F2',
        marginTop: 15

    }
})