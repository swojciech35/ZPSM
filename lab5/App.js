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
  Dimensions,
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

const isLandscape=()=>{
  const dim= Dimensions.get("screen");
  return dim.height<=dim.width;
}



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

// do obracania

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const [dimensions, setDimensions] = React.useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  React.useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      // Dimensions.removeEventListener("change", onChange);
    };
  });

  const buttonsRow1=[
    {
      backgroundColor: "#DDDDDD",
      title:'AC',
      //  disable:false,
       onPress:()=>
         setResult("0")
       ,
       color:'red',
    },
    {
      backgroundColor: "#DDDDDD",
      title:'',
      //  disable:false,
       onPress:()=>
         setResult("0")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'',
      //  disable:false,
       onPress:()=>
         setResult("0")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'/',
      //  disable:false,
       onPress:()=>
       setResult(result+"/")
       ,
       color:'red',
    }
    
  ];
  const buttonsRow2=[
    {
      backgroundColor: "#DDDDDD",
      title:'7',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"7":"7")
       ,
       color:'red',
    },
    {
      backgroundColor: "#DDDDDD",
      title:'8',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"8":"8")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'9',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"9":"9")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'x',
      //  disable:false,
       onPress:()=>
       setResult(result+"*")
       ,
       color:'red',
    }
    
  ];

  const buttonsRow3=[
    {
      backgroundColor: "#DDDDDD",
      title:'4',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"4":"4")
       ,
       color:'red',
    },
    {
      backgroundColor: "#DDDDDD",
      title:'5',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"5":"5")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'9',
      //  disable:false,
       onPress:()=>
       setResult((result!="6")?result+"6":"6")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'-',
      //  disable:false,
       onPress:()=>
       setResult(result+"-")
       ,
       color:'red',
    }
    
  ]; 

  const buttonsRow4=[
    {
      backgroundColor: "#DDDDDD",
      title:'1',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"1":"1")
       ,
       color:'red',
    },
    {
      backgroundColor: "#DDDDDD",
      title:'2',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"2":"2")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'3',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"3":"3")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'+',
      //  disable:false,
       onPress:()=>
       setResult(result+"+")
       ,
       color:'red',
    }
    
  ];
  const buttonsRow5=[
    {
      backgroundColor: "#DDDDDD",
      title:'0',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"0":"0")
       ,
       color:'red',
    },
    {
      backgroundColor: "#DDDDDD",
      title:'',
      //  disable:false,
       onPress:()=>
       setResult("0")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:',',
      //  disable:false,
       onPress:()=>
       setResult(result+",")
       ,
       color:'red',
    },{
      backgroundColor: "#DDDDDD",
      title:'=',
      //  disable:false,
       onPress:()=>{
       setResult(parse(result))}
       ,
       color:'red',
    }
    
  ];
  

  const buttonMap1= buttonsRow1.map((butTab)=>
  <TouchableOpacity style={[{flex:1},{backgroundColor:butTab.backgroundColor}]} onPress={butTab.onPress} ><Text style={[{textAlign:'center'},{color:butTab.color},{fontSize:45}]}>{butTab.title}</Text></TouchableOpacity>
  );
  const buttonMap2= buttonsRow2.map((butTab)=>
  <TouchableOpacity style={[{flex:1},{backgroundColor:butTab.backgroundColor}]} onPress={butTab.onPress} ><Text style={[{textAlign:'center'},{color:butTab.color},{fontSize:45}]}>{butTab.title}</Text></TouchableOpacity>
  );
  const buttonMap3= buttonsRow3.map((butTab)=>
  <TouchableOpacity style={[{flex:1},{backgroundColor:butTab.backgroundColor}]} onPress={butTab.onPress} ><Text style={[{textAlign:'center'},{color:butTab.color},{fontSize:45}]}>{butTab.title}</Text></TouchableOpacity>
  );
  const buttonMap4= buttonsRow4.map((butTab)=>
  <TouchableOpacity style={[{flex:1},{backgroundColor:butTab.backgroundColor}]} onPress={butTab.onPress} ><Text style={[{textAlign:'center'},{color:butTab.color},{fontSize:45}]}>{butTab.title}</Text></TouchableOpacity>
  );
  const buttonMap5= buttonsRow5.map((butTab)=>
  <TouchableOpacity style={[{flex:1},{backgroundColor:butTab.backgroundColor}]} onPress={butTab.onPress} ><Text style={[{textAlign:'center'},{color:butTab.color},{fontSize:45}]}>{butTab.title}</Text></TouchableOpacity>
  );
  return (

    <>
   
  

     <View style={styles.resultStyle}>
      <Text style={styles.TextSize}>{result}</Text>
    </View>
    
     <View style={styles.numberStyle}>
     {/* <TouchableOpacity style={styles.button} onPress={()=>setResult("0")}><Text style={styles.TextSize} >AC</Text></TouchableOpacity> */}
     <View style={styles.rowStyle}>
    {buttonMap1}
    
    </View>
    <View style={styles.rowStyle}>
    {buttonMap2}
    
    </View>
    <View style={styles.rowStyle}>
    {buttonMap3}
    
    </View>
    <View style={styles.rowStyle}>
    {buttonMap4}
    
    </View>
    <View style={styles.rowStyle}>
    {buttonMap5}
    
    </View>
    
   

    </View>
    {/*<View style={styles.numberStyle}>
    <View style={styles.rowStyle}>
    {isLandscape()?( <TouchableOpacity style={styles.button} onPress={()=>setResult(result+"**2")}><Text style={styles.TextSize} >x^2</Text></TouchableOpacity>):<View/>}
      <TouchableOpacity style={styles.button} onPress={()=>setResult("0")}><Text style={styles.TextSize} >AC</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}> </Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}> </Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"/")}><Text style={styles.TextSize}>/</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
    {isLandscape()?( <TouchableOpacity style={styles.button} onPress={()=>setResult(result+"**3")}><Text style={styles.TextSize} >x^3</Text></TouchableOpacity>):<View/>}
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"7":"7")}><Text style={styles.TextSize} >7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>setResult((result!="0")?result+"8":"8")} ><Text style={styles.TextSize} >8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>setResult((result!="0")?result+"9":"9")}><Text style={styles.TextSize}>9</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"*")}><Text style={styles.TextSize}>x</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
    {isLandscape()?( <TouchableOpacity style={styles.button} onPress={()=>setResult(result+"(")}><Text style={styles.TextSize} >(</Text></TouchableOpacity>):<View/>}
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"4":"4")}><Text style={styles.TextSize}>4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"5":"5")}><Text style={styles.TextSize}>5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"6":"6")}><Text style={styles.TextSize}>6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"-")}><Text style={styles.TextSize}>-</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
    {isLandscape()?( <TouchableOpacity style={styles.button} onPress={()=>setResult(result+")")}><Text style={styles.TextSize} >)</Text></TouchableOpacity>):<View/>}
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"1":"1")}><Text style={styles.TextSize}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"2":"2")}><Text style={styles.TextSize}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"3":"3")}><Text style={styles.TextSize}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+"+")}><Text style={styles.TextSize}>+</Text></TouchableOpacity>

    </View>
    <View style={styles.rowStyle}>
    {isLandscape()?( <TouchableOpacity style={styles.button} onPress={()=>setResult(result+"00")}><Text style={styles.TextSize} >00</Text></TouchableOpacity>):<View/>}
      <TouchableOpacity style={styles.button}onPress={()=>setResult((result!="0")?result+"0":"0")}><Text style={styles.TextSize}>0</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}></Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setResult(result+".")}><Text style={styles.TextSize}>,</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.TextSize}onPress={()=>setResult(parse(result))}>=</Text></TouchableOpacity>

    </View>


    </View>
    <View></View>
     */}
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
    backgroundColor :'blue',
    flexDirection: 'column',
   
    
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
    fontSize:45,
    textAlign:'center',
    color:'red',
  },
  button:{
    
    backgroundColor: "#DDDDDD",
    // width:'25%',
    flex:1,

  },
  rowStyle:{
     flexDirection:"row",
  // height:'20%',
 backgroundColor:"white",
 justifyContent:'center',
flex:1,


}
});

export default App;
