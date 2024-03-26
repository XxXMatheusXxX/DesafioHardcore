import { StatusBar } from 'expo-status-bar';
import {  Text, View,Image } from 'react-native';
import { styles } from '../css/index.style';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Link style={styles.btn} href={"/"}>Inicio</Link>
      <Link style={styles.btn1} href={"/contatos"}>Contato</Link>
      <Text>Início</Text><Image style={styles.imagens}

source={require('../../assets/yas.jpg')}
/>
      <StatusBar style="auto" />
    </View>
  );
}

