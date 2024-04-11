import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../css/index.style';
import { Link } from "expo-router";


export default function Login() {
  return (
    <View style={styles.ImageBody}>
      <Image style={styles.images} source={require('../../assets/sesi-senai.webp')} />

      <View style={styles.form}>

        <Text style={styles.text}>LOGIN</Text>

        <TextInput placeholder='Insira seu CPF' style={styles.input} />

        <Text style={styles.text}>SENHA</Text>

        <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input} />

        <View style={styles.subBtn}>
          <TouchableOpacity><Link href={'home'} style={styles.subBtn1}>cadastrar</Link></TouchableOpacity>
          <TouchableOpacity><Link href={'forget'} style={styles.subBtn1}>esqueci a senha</Link></TouchableOpacity>
        </View>

      </View>
      <View style={styles.formbtn}>
        <Link href={'inicio'} style={styles.btn}>ENTRAR</Link>
      </View>

    </View>

  );
}

