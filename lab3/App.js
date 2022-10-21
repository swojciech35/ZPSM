/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const fontSize={
    fontSize: 40
  };

React.useEffect(()=>{
if(show){}
},[show]);

const[result,setResult]=React.useState("");

const[show,setShow]=React.useState(false);

function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}

  return (

    <>
    <View style={styles.resultStyle}>
      <Text style={styles.TextSize}>{result}</Text>
    </View>
    <View style={styles.numberStyle}>
    <View style={styles.rowStyle}>
      <TouchableOpacity style={styles.button} onPress={()=>setResult("0")}><Text style={styles.TextSize} >AC</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}> </Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}> </Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"/")}><Text style={styles.TextSize}>/</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"7":"7")}><Text style={styles.TextSize} >7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>setResult((result!="0")?result+"8":"8")} ><Text style={styles.TextSize} >8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>setResult((result!="0")?result+"9":"9")}><Text style={styles.TextSize}>9</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"*")}><Text style={styles.TextSize}>x</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"4":"4")}><Text style={styles.TextSize}>4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"5":"5")}><Text style={styles.TextSize}>5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"6":"6")}><Text style={styles.TextSize}>6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"-")}><Text style={styles.TextSize}>-</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"1":"1")}><Text style={styles.TextSize}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"2":"2")}><Text style={styles.TextSize}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"3":"3")}><Text style={styles.TextSize}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"+")}><Text style={styles.TextSize}>+</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"0":"0")}><Text style={styles.TextSize}>0</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}></Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+".")}><Text style={styles.TextSize}>,</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}onPress={()=>setResult(parse(result))}>=</Text></TouchableOpacity>

    </View>


    </View>
    <View></View>
    
    </>

        // zad3
        // <View
        //   style={{
        //     backgroundColor: isDarkMode ? Colors.black : Colors.white,
        //     alignContent: 'center',
        //   }}>
        //   {show ?( <Text style={styles.TextSize}>Wojtek</Text>):<View/>}
        //   {show ?(<Button title='hide' onPress={()=>setShow(!show)}></Button>):(<Button title='show' onPress={()=>setShow(!show)}></Button>)}
        // </View>




  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  resultStyle:{
    flex:1,
    backgroundColor :'yellow',
     alignItems: 'flex-end'
  },
  numberStyle:{
    flex:2,
    backgroundColor :'green',
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  TextSize:{
    fontSize:50,
    textAlign:'center',
    color:'red',
  },
  button:{
    
    backgroundColor: "#DDDDDD",
    width:'25%',

  },
  rowStyle:{flexDirection:"row",
  height:'20%',
}
});

export default App;
