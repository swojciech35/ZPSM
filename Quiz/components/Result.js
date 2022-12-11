import * as React from 'react';
import {StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';

function Result() {
  const results = [
    {
      nick: 'Marek',
      score: 18,
      total: 20,
      type: 'historia',
      date: '2022-11-22',
    },
    {
      nick: 'Darek',
      score: 12,
      total: 24,
      type: 'teatr polski',
      date: '2022-11-23',
    },{
      nick: 'Marek',
      score: 18,
      total: 20,
      type: 'historia',
      date: '2022-11-22',
    },
    {
      nick: 'Darek',
      score: 12,
      total: 24,
      type: 'teatr polski',
      date: '2022-11-23',
    },
    {
      nick: 'Marek',
      score: 18,
      total: 20,
      type: 'historia',
      date: '2022-11-22',
    },
    {
      nick: 'Darek',
      score: 12,
      total: 24,
      type: 'teatr polski',
      date: '2022-11-23',
    },
    {
      nick: 'Marek',
      score: 18,
      total: 20,
      type: 'historia',
      date: '2022-11-22',
    },
    {
      nick: 'Darek',
      score: 12,
      total: 24,
      type: 'teatr polski',
      date: '2022-11-23',
    },
  ];

  const Item=(item,index)=>(
 <DataTable.Row>
        <DataTable.Cell style={styles.tableRow2}>{item.nick}</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow2}>{item.score}/{item.total}</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow2}>{item.type}</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow2}>{item.date}</DataTable.Cell>
      </DataTable.Row>
      

  );

  const renderItem = ({ item }) => (
    <Item nick={item.nick}
    score={item.score}
    total={item.total}
    type={item.type}
    date={item.date}
    />
  );

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.tableTitle}>Nick</DataTable.Title>
        <DataTable.Title style={styles.tableTitle}>point</DataTable.Title>
        <DataTable.Title style={styles.tableTitle}>Type</DataTable.Title>
        <DataTable.Title style={styles.tableTitle}>Date</DataTable.Title>
      </DataTable.Header>
     <FlatList
     data={results}
     renderItem={renderItem}
     
     />
     
    </DataTable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  tableTitle: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#DCDCDC',
  },
  tableRow: {
    backgroundColor: '#f2ffff',
    borderWidth: 1,
  },
  tableRow2: {
    backgroundColor: '#fff2ff',
    borderWidth: 1,
  },
});

export default Result;
