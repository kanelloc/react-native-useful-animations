import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ArrowRight } from '../icons/ArrowRight';
import { Share } from '../icons/Share';

export const Header = () => {
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.roundBtn}>
        <Text>X</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.roundBtn, { marginRight: 8 }]}>
          <ArrowRight />
        </View>
        <View style={styles.roundBtn}>
          <Share />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    paddingHorizontal: 8,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roundBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
