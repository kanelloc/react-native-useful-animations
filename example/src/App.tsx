import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollableFlatList } from 'react-native-useful-animations';
import { HEADER_HEIGHT_MAX } from './utils/constants';
import { Card } from './components/Card';
// import Scrollable from './screens/Test';

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
      headerImg={require('../assets/cabin.jpg')}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.list}
      contentContainerStyle={styles.container}
    />
  );
  // return <Scrollable />;
};

export default App;

const styles = StyleSheet.create({
  list: { flex: 1 },
  container: { paddingTop: HEADER_HEIGHT_MAX },
  separator: {
    height: 2,
    backgroundColor: '#545252',
  },
});
