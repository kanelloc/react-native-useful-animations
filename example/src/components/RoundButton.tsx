import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRight } from '../icons/ArrowRight';

export const RoundButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => null}>
      <ArrowRight />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
