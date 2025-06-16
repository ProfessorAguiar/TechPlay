import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:"30px"}}>TechPlay</Text>
      <TouchableOpacity style={styles.botao}>Comprar</TouchableOpacity>
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
  botao:{
    backgroundColor:'#333333',
    fontSize:'22px',
    borderRadius:'12px',
    padding:'20px',
    color:'#ffffff',
    fontWeight:700,
    margin:'20px',
    fontFamily:'arial',
  },
});
