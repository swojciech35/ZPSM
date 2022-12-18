import * as React from 'react';
import {
  StyleSheet,
  RefreshControl,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function Result() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [isLoading, setLoading] = React.useState(true);
  const [results, setResult] = React.useState([]);

  const getResults = async () => {
    try {
      const response = await fetch('https://tgryl.pl/quiz/results?last=5');
      const json = await response.json();
      setResult(json);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getResults();
  }, []);

  const Item = item => (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.tableRow2}>{item.nick}</Text>
      <Text style={styles.tableRow2}>
        {item.score}/{item.total}
      </Text>
      <Text style={styles.tableRow2}>{item.type}</Text>
      <Text style={styles.tableRow2}>{item.createdOn}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      nick={item.nick}
      score={item.score}
      total={item.total}
      type={item.type}
      createdOn={item.createdOn}
    />
  );

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            marginBottom: 100,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.tableTitle}>Nick</Text>
            <Text style={styles.tableTitle}>Point</Text>
            <Text style={styles.tableTitle}>Type</Text>
            <Text style={styles.tableTitle}>Date</Text>
          </View>
          {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }> */}
          <FlatList
            data={results}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          {/* </ScrollView> */}
        </View>
      )}
    </View>
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
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: '#DCDCDC',
  },
  tableRow: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: '#f2ffff',
    borderWidth: 1,
  },
  tableRow2: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#fff2ff',
    borderWidth: 1,
    color: 'black',
    textAlign: 'center',
  },
});

export default Result;
