import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Teste from './componentes/teste.js';
import { Multi1, Multi2 } from './componentes/multiteste.js';

export default function App() {
  return (
     <View style={styles.container}>
        <Teste></Teste>
        <Multi1></Multi1>
        <Multi2></Multi2>
        <Text>TESTANDO</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


