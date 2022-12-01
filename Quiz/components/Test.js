import * as React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

function Test() {
    return (
      <><View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 30 }}>
            <Text style={{ color: 'black' }}>Question: 30/20</Text>
            <Text style={{ color: 'black' }}>Time: mało</Text>
        </View>
        <View>
            <Text style={{ color: 'black',fontSize:20, }}>Tutaj kiedyś będzie pasek </Text>    
        </View>
        <View style={{justifyContent:'center',alignItems:'center',margin:25}}>
        <Text style={{ color: 'black',fontSize:20, }}>Tutaj będzie treść ptytania </Text>    
        <Text style={{ color: 'black',fontSize:15, }}>tu jakiś tam tekst xD </Text>  
        <Text style={{ color: 'black',fontSize:15, }}>tu jakiś tam tekst xD </Text> 
        <Text style={{ color: 'black',fontSize:15, }}>tu jakiś tam tekst xD </Text>   
        </View>
        <View style={styles.answerBox}>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:15,color:"black",textAlign:'center'}}>Answer A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:15,color:"black",textAlign:'center'}}>Answer B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:15,color:"black",textAlign:'center'}}>Answer C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:15,color:"black",textAlign:'center'}}>Answer D</Text>
            </TouchableOpacity>
            

        </View>
        </>
    );
  }

  const styles= StyleSheet.create({
    answerBox:{
        display:'flex',
        backgroundColor:"#FFFFFF",
        paddingTop:"8%",
        paddingBottom:"8%",
        margin:25,
        borderWidth:2,
        flexDirection:'row',
        justifyContent: 'space-between',
        flexWrap:'wrap'
    },
    button:{
        backgroundColor:"gray",
        margin:"8%",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:25,
        paddingRight:25


    }

  });

  export default Test;