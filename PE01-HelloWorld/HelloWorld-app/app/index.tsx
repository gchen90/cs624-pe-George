import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.ViewContainer}>
      <Text style={styles.textStyle}>George Chen</Text>
      <Text style={styles.textStyle}>MSCS</Text>
      <Text style={styles.textStyle}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef72b'
  },
  textStyle: {
    fontSize: 24
  },
});
