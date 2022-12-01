import * as React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

function Result() {
    return (
      <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title style={styles.tableTitle}>Nick</DataTable.Title>
            <DataTable.Title style={styles.tableTitle}>point</DataTable.Title>
            <DataTable.Title style={styles.tableTitle}>Type</DataTable.Title>
            <DataTable.Title style={styles.tableTitle}>Date</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row >
            <DataTable.Cell style={styles.tableRow}>Tomek</DataTable.Cell>
            <DataTable.Cell style={styles.tableRow}>18/20</DataTable.Cell>
            <DataTable.Cell style={styles.tableRow}>Test1</DataTable.Cell>
            <DataTable.Cell style={styles.tableRow}>23-11-2020</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row >
            <DataTable.Cell style={styles.tableRow2}>Tomek</DataTable.Cell>
            <DataTable.Cell style={styles.tableRow2}>18/20</DataTable.Cell>
            <DataTable.Cell style={styles.tableRow2}>Test1</DataTable.Cell>
            <DataTable.Cell style={styles.tableRow2}>23-11-2020</DataTable.Cell>
          </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow2}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow2}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow2}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.tableRow2}>Tomek</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>18/20</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>Test1</DataTable.Cell>
          <DataTable.Cell style={styles.tableRow2}>23-11-2020</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  }

  const styles = StyleSheet.create({
    container: {
      padding:15,
      flex:1,
      justifyContent:'center'
    },
    tableTitle:{
      flex:1,
      justifyContent: 'center',
      borderWidth:1,
      backgroundColor: '#DCDCDC',
    },
    tableRow:{
      backgroundColor:"#f2ffff",
      borderWidth:1,
    },
    tableRow2:{
      backgroundColor:"#fff2ff",
      borderWidth:1,
    }
  });

export default Result;