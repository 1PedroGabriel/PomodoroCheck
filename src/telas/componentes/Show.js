import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useState } from "react";
import { db } from "../serv/SQLite";
import Delete from "./Delete";
import MadeOrNot from "./MadeOrNot";


export default function Show() {

    //Array com views das tarefas
    const [dados, setDados] = useState([]);

    //text input
   

    //Configuração do switch


    const TarefaDisplay = (id, min, seconds, tarefa) => {

        setDados(prevData => [...prevData, <View style={estilos.BotaoAfazer}>
                    
            <View style={estilos.Afazer}>
            
                    <Text style={estilos.h2}>{tarefa} </Text> 
            </View>

            <MadeOrNot minutos={min} segundos={seconds} id={id}/>

            <TouchableOpacity style={{width: 90}} key={id} onPress={() => Remove(id)}>
                <Text style={estilos.h2}>Excluir</Text>
            </TouchableOpacity>
          
        </View>]);
        
    }
    
    //ÁREA DE REMOÇAO-----------------------------------------------
    async function Remove(id){
    
        //A promise torna assincrono.

        Delete(id);
        Dados();
        
    }

    //--------------------------------------------------------------
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

    async function test(){

        
        return new Promise((resolve) => {

            db.transaction((tx) => {
            tx.executeSql('ALTER TABLE Trab ADD (CurMin) INT;', [], () => { resolve(console.log('mudou')) })});

        
            db.transaction((tx) => {
            tx.executeSql('ALTER TABLE Trab ADD (CurSec) INT;', [], () => { resolve(console.log('mudou')) })});
                
                
            });
    }


    async function Dados() {
     
        setDados([]);

        
       
            const AllData = await Buscar();
            
            
            const len = AllData.length;
            
            for(let i=0; i<len; i++){
                let row = AllData.item(i);
                
                //Colocar style no botao (margin horizontal) para fazer com que o usuario consiga descer a tela
                
                TarefaDisplay(row.id, row.CurMin, row.CurSec, row.tarefa);
            }
    
        
   
    }

        return <View>
            <TouchableOpacity style={estilos.h2} onPress={() => Dados()}><Text style={{color: '#EF30F2', fontSize: 20}}>Atualizar Tarefas.</Text></TouchableOpacity>
            {dados}
            <View>

        
    </View>
       
    </View>


    }


const estilos = StyleSheet.create({


    Afazer: {
        backgroundColor: '#59042C',
        marginBottom: 5,
 
        flexDirection: 'column',
    },

    h2: {
        color: '#EF30F2',
        fontSize: 20,
        marginHorizontal: 10,
        marginBottom: 10,
        marginRight: 15,
        marginTop: 10
    },

 

    BotaoAfazer: {

        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#59042C',
        paddingBottom: 10,
        borderRadius: 10,
       
    },

    //StyleAdd

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