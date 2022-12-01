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
 import TouchButton from './components/TouochButton';
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
 
 
 
 const[result,setResult]=React.useState("0");
 
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
      //  Dimensions.removeEventListener("change", onChange);
     };
   });
 
   const buttonsCol1=[
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
       title:'7',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"7":"7")
        ,
        color:'red',
     },{
       backgroundColor: "#DDDDDD",
       title:'4',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"4":"4")
        ,
        color:'red',
     },{
       backgroundColor: "#DDDDDD",
       title:'1',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"1":"1")
        ,
        color:'red',
     }, {
      backgroundColor: "#DDDDDD",
      title:'0',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+"0":"0"),
       color:'red',
    }
     
   ];
   const buttonsCol2=[
     {
       backgroundColor: "#DDDDDD",
       title:'',
       //  disable:false,
        onPress:()=>
        setResult('0')
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
       title:'5',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"5":"5")
        ,
        color:'red',
     },{
       backgroundColor: "#DDDDDD",
       title:'2',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"2":"2")
        ,
        color:'red',
     },{
      backgroundColor: "#DDDDDD",
      title:'',
      //  disable:false,
       onPress:()=>
       setResult('0')
       ,
       color:'red',
    }
     
   ];
 
   const buttonsCol3=[
    {
      backgroundColor: "#DDDDDD",
      title:'',
      //  disable:false,
       onPress:()=>
       setResult('0')
       ,
       color:'red',
    },
     {
       backgroundColor: "#DDDDDD",
       title:'9',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"9":"9")
        ,
        color:'red',
     },
     {
       backgroundColor: "#DDDDDD",
       title:'6',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"6":"6")
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
       title:',',
       //  disable:false,
        onPress:()=>
        setResult(result+".")
        ,
        color:'red',
     }
     
   ]; 
 
   const buttonsCol4=[
     {
       backgroundColor: "#DDDDDD",
       title:'/',
       //  disable:false,
        onPress:()=>
        setResult(result+"/")
        ,
        color:'red',
     },
     {
       backgroundColor: "#DDDDDD",
       title:'x',
       //  disable:false,
        onPress:()=>
        setResult(result+"*")
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
     },{
       backgroundColor: "#DDDDDD",
       title:'+',
       //  disable:false,
        onPress:()=>
        setResult(result+"+")
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
   const buttonsCol5=[
     {
       backgroundColor: "#DDDDDD",
       title:'x^2',
       //  disable:false,
        onPress:()=>
        setResult(result+"**2")
        ,
        color:'red',
     },
     {
       backgroundColor: "#DDDDDD",
       title:'x^3',
       //  disable:false,
        onPress:()=>
        setResult(result+"**3")
        ,
        color:'red',
     },{
       backgroundColor: "#DDDDDD",
       title:'(',
       //  disable:false,
        onPress:()=>
        setResult((result!="0")?result+"(":"(")
        ,
        color:'red',
     },{
      backgroundColor: "#DDDDDD",
      title:')',
      //  disable:false,
       onPress:()=>
       setResult((result!="0")?result+")":")")
       ,
       color:'red',
    },
    {
      backgroundColor: "#DDDDDD",
      title:'00',
      //  disable:false,
       onPress:()=>
       setResult(result+"00")
       ,
       color:'red',
    }
     
   ];
   const buttons=[buttonsCol1,buttonsCol2,buttonsCol3,buttonsCol4];
 
  
const buttonsmap=buttons.map((items)=>(
<View style={styles.colStyle}>
  {items.map((butTab)=>
  <TouchButton
  backgroundColor={butTab.backgroundColor}
  title={butTab.title}
  onPress={butTab.onPress}
  colorText={butTab.color}
  ></TouchButton> 
  
  )} 
  </View>));
   const buttonMap5= buttonsCol5.map((butTab)=>
  //  <TouchableOpacity style={[{flex:1},{backgroundColor:butTab.backgroundColor}]} onPress={butTab.onPress} ><Text style={[{textAlign:'center'},{color:butTab.color},{fontSize:45}]}>{butTab.title}</Text></TouchableOpacity>
  <TouchButton
  backgroundColor={butTab.backgroundColor}
  title={butTab.title}
  onPress={butTab.onPress}
  colorText={butTab.color}
  ></TouchButton> 
  );
   return (
 
     <>
      <View style={styles.resultStyle}>
       <Text style={styles.TextSize}>{result}</Text>
     </View>
      <View style={styles.numberStyle}>
      
              {isLandscape()?( <View style={styles.colStyle}>{buttonMap5}</View>):null}
              {buttonsmap}
          </View>
          </>
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
     flexDirection: 'row',
    
     
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
   colStyle:{
      flexDirection:'column',
   // height:'20%',
  backgroundColor:"green",
  justifyContent:'center',
 flex:1,
 
 
 }
 });
 
 export default App;
