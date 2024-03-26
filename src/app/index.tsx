import { StatusBar } from 'expo-status-bar';
import {  Text, View,Image } from 'react-native';
import { styles } from '../css/index.style';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Início</Text><Image style={styles.imagens}

source={require('../../assets/yas.jpg')}
/>
      <Link style={styles.btn} href={"/sobre"}>Sobre</Link>
      <Link style={styles.btn1} href={"/contatos"}>Contato</Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

