//Passar todo o codigo de switch para cada e usar como compontente dentro do prevdata
import React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { db } from "../serv/SQLite";

export default function MadeOrNot({minutos:minutos, segundos:segundos, id:id}){



    const [seconds, setSeconds] = useState(segundos);
    const [minutes, setMinutes] = useState(parseInt(minutos));
    const [customInterval, setCustomInterval] = useState();
    const [workDisplay, setWorkDisplay] = useState('#59042C');

    const startTime = () => {  

        setCustomInterval(

            setInterval(() => {
                changeTime()
            }, 1000)

        )
    };


    const stopTime = () => {  

        if(customInterval) {
            clearInterval(customInterval);
        }
    };

    const clear = () => {  
        stopTime();
        setSeconds(0);
        setMinutes(0);

    };


    const changeTime = () => {  

        setSeconds((prevState) => {
            
           

            if(prevState - 1 < 0){

                //finalmente está funfando 11

                setMinutes((prevMinute) => { if(prevMinute - 1 < 0) {  
                    
                    
                setWorkDisplay('#A6037A');
                
                
                clear();  
            
                db.transaction((tx) => {
                    tx.executeSql('DELETE FROM Trab where id = (?);', [id])});
            
                }
                
                db.transaction((tx) => {
                    tx.executeSql('UPDATE Trab SET CurMin = ? WHERE id = ?;', [prevMinute - 1, id]);
                    
                });

                return prevMinute - 1});

              

                return 59;
                
            }

            
            db.transaction((tx) => {
                tx.executeSql('UPDATE Trab SET CurSec = ? WHERE id = ?;', [prevState, id])
            });


            return prevState - 1;
        })
    };

    
    return <View style={{backgroundColor: workDisplay}}>
       

        <View>
            <View style={estilos.timeDisplay}>
                
                <Text style={estilos.time}>{minutes < 10 ? "0" + minutes : minutes } min : </Text>
                <Text style={estilos.time}>{seconds < 10 ? "0" + seconds : seconds } seg</Text>
            </View>

               <View style={estilos.timeDisplayButtons}>
                    
                    <TouchableOpacity onPress={startTime}><Text style={estilos.timeSetButtons}>Começar</Text></TouchableOpacity>
                    <TouchableOpacity onPress={stopTime}><Text style={estilos.timeSetButtons}>Parar</Text></TouchableOpacity>
              
               </View>

        </View>
      
    </View>
    

}

const estilos = StyleSheet.create({


    //BOTÕES E PARTES DO TEMPO  ################

    time: {
        fontSize: 40,
        color: '#EF30F2'
    },

    timeDisplay: {

        flexDirection: 'row',
        marginHorizontal: 20,
    },

    timeSetButtons: {
        fontSize: 20,
        color: '#A6037A'

    },

    timeDisplayButtons: {

        flexDirection: 'row',
        marginHorizontal: 100,
        justifyContent: 'space-between'
    },

    //##########################################
    

})