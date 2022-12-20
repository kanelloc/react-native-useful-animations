import { RoundButton } from './RoundButton';
import { View } from 'react-native';
import * as React from 'react';

export const Header = () => {
  return (
    <View
      style={{
        paddingVertical: 8,
        width: '100%',
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <RoundButton />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          <RoundButton />
        </View>
        <RoundButton />
      </View>
    </View>
  );
};
