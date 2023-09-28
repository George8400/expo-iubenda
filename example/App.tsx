import { StyleSheet, Text, View } from 'react-native';

import * as ExpoIubenda from 'expo-iubenda';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoIubenda.hello()}</Text>
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
