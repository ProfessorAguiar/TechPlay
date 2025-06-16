import { StatusBar } from 'expo-status-bar';
import logo from'./assets/Logo.png'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width:'300px', height:'100px'}}/>
      {/* <Text style={{fontSize:"30px"}}>TechPlay</Text> */}
      <TouchableOpacity style={styles.botao}>Comprar</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33fb22',
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
