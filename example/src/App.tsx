import 'react-native-gesture-handler';
import * as React from 'react';
import { AnimatedScrollView } from 'react-native-useful-animations';
import { Card } from './components/Card';
import { Header } from './components/Header';

const App = () => {
  const data = Array.from(Array(20).keys());

  return (
    <AnimatedScrollView
      headerImgHeight={300}
      HeaderComponent={<Header />}
      imgSource={require('../assets/cabin.jpg')}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};

export default App;
