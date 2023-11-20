import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import Home from "./src/telas/home/Home";
import AddSection from "./src/telas/componentes/AddSection";
import criaTabela from "./src/telas/serv/Works";




export default function App() {

  //Manifesta a criação da tabela (caso ainda não exista).
  useEffect(() => {
    criaTabela()
  }, []);

  //Pega os dados e manda para o arquivo de Show, para ser tratado.

  const [Menu, setMenu] = useState(false);






  

  return <SafeAreaView style={estilo.Safe}> 
      <ScrollView>

      {Menu ? <Home /> : <AddSection />}

      </ScrollView>

      {/*Funciona como um menu*/}
      <View style={estilo.BottomMenu }>
       <View style={estilo.BottomMenuContent}>
         
        <TouchableOpacity onPress={() => setMenu(true)}>
          <Text style={{color: '#EF30F2', fontSize: 20}}>Trabalhos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenu(false)}>
        <Text style={{color: '#EF30F2', fontSize: 20}}>Trabalhos</Text>
        </TouchableOpacity>
       
       </View>
      </View>
  </SafeAreaView>


};


const estilo = StyleSheet.create({

  Safe: {
    flex: 1,
    backgroundColor: '#0D0D0D',
   
    
  },

  BottomMenu: {

    backgroundColor: '#313640',
    marginHorizontal: 0,
    height: 80, 
  },

  BottomMenuContent: {
    marginHorizontal: 100,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})