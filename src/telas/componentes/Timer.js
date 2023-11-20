import { View , Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";



export default function Timer({minutos:minutos}) {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(parseInt(minutos));
    const [customInterval, setCustomInterval] = useState();

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

                

                setMinutes((prevMinute) => { if(prevMinute - 1 < 0) {  clear()  }return prevMinute - 1});

                return 59;
                
            }



            return prevState - 1;
        })
    };

    return <View>

        <Text>{minutes < 10 ? "0" + minutes : minutes }:</Text>
        <Text>{seconds < 10 ? "0" + seconds : seconds }</Text>
        <TouchableOpacity onPress={startTime} ><Text>Começar</Text></TouchableOpacity>
        <TouchableOpacity onPress={stopTime}><Text>Parar</Text></TouchableOpacity>
        <TouchableOpacity onPress={clear}><Text>Limpar</Text></TouchableOpacity>
    </View>
}