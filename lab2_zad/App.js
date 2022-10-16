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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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

  const user={
    name:'Imie',
    surname: 'Nazwisko',
    allGrades:[
      {
        subjectName:'Name1',
        grades:[5,4,3,5,2],
        weight: 3
      },
      {
        subjectName:'Name2',
        grades:[3,3.5,2],
        weight: 1
      },
      {
        subjectName:'Name3',
        grades:[4,3,3.5],
        weight: 5
      }
    ]
  }
  const _ = require("lodash"); 
 function wynik(user){
let srednia=0;
let waga=0
for(let i=0; i<user.allGrades.length;i++){

srednia+=_.sum(user.allGrades[i].grades)*user.allGrades[i].weight;
waga+=user.allGrades[i].weight*user.allGrades[i].grades.length;

}

  return(user.name+" "+user.surname+" "+srednia/waga)
 }
function findWeight1(){ 
   return("subject name:"+_.find(user.allGrades,weight1=>{return weight1.weight===1}).subjectName );
}

 let x=wynik(user);

 const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ['aaa', 'bbb', 5],
  'admin@gmail.com',
  undefined,
  'a34@yahoo.com',
  '321@a',
  '321.pl'
  ];
  

  function getMails(collections){
    return(_.filter(collections,function(o){ return /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i.test(o) }).sort())
  }

 return (
    <Section>
      <Text>
        {x}
      </Text>
      
      <Text>
        
        {"\n\n"+ findWeight1()}

      </Text>
      <Text>
        
        {"\n\n"+ getMails(collections)}

      </Text>
      
    </Section>
    
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
});

export default App;
