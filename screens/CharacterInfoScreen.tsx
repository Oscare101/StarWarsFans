import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CharacterInfoScreen({route}: any) {
  console.log(route.params.character);

  return (
    <SafeAreaView style={styles.container}>
      <Text>CharacterInfoScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
