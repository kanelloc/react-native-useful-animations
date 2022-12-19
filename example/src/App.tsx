import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollableFlatList } from 'react-native-useful-animations';
import { HEADER_HEIGHT_MAX } from './utils/constants';
import { Card } from './components/Card';
import { Header } from './components/Header';

const App = () => {
  const data = Array.from(Array(20).keys());
  const renderItem = ({ item }: any) => {
    return <Card item={item} />;
  };

  const keyExtractor = (_: any, index: number) => {
    return `${index}`;
  };

  return (
    <ScrollableFlatList
      HeaderComponent={<Header />}
      headerImg={require('../assets/cabin.jpg')}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.list}
      contentContainerStyle={styles.container}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  list: { flex: 1 },
  container: { paddingTop: HEADER_HEIGHT_MAX },
});
