import React from 'react';
import { SafeAreaView,View } from 'react-native';

const ProgressButtons = props => (
  <SafeAreaView style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
    <View style={{ flexGrow: 1, alignItems: 'flex-start' }}>
      {props.renderPreviousButton()}
    </View>
    <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>{props.renderNextButton()}
    </View>
  </SafeAreaView>
);

export default ProgressButtons;
