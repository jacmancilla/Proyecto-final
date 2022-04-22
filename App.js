import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,

  StyleSheet,

  Pressable,

} from 'react-native';


const App = () => {



  //
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cruelty Scan</Text>

    </SafeAreaView>
  );
};

/* CSS */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
});

export default App;
