import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import HomeElement from './elements/HomeElement';

function Home({navigation}) {
    return (
        <>
        <ScrollView>
      <View style={{ flex: 1,margin:30 }}>
        
        
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />
        <HomeElement
        backgroundColor={"#ffffff"}
        title={"QUIZ"}
        text={"opis Quizuuuuu"}
        colorText={"#000000"}
        />

        
        
        
      </View>
      </ScrollView>
      <View >
        <TouchableOpacity style={{borderWidth:5,borderColor:'yellow',margin:15,marginTop:30,backgroundColor:"#2f2f2f"}} 
        onPress={()=>navigation.navigate('Result')}>
        <Text style={{fontSize:35,textAlign:'center',color:"#ffffff"}}>Wyniki</Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }

  export default Home;