import { StatusBar } from 'expo-status-bar';
import {  Text, View,Image } from 'react-native';
import { styles } from '../css/index.style';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Contatos</Text>
      <Link style={styles.btn} href={"/sobre"}>Sobre</Link>
      <Link style={styles.btn} href={"/"}>Inicio</Link>
      <Text>Início</Text><Image style={styles.imagens}

source={require('../../assets/yas.jpg')}
/>
      <StatusBar style="auto" />
    </View>
  );
}

