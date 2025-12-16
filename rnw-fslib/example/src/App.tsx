import { Text, View, StyleSheet } from 'react-native';
import { multiply } from 'rnw-fslib';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
