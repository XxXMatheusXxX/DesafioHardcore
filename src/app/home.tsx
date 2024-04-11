import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../css/index.style';
import {Link} from 'expo-router';


    export default function Home() {
      return (
        <View style={styles.ImageBody}>
          <Image style={styles.images} source={require('../../assets/sesi-senai.webp')} />
    
          <View style={styles.form}>

            <Text style={styles.text1}>CADASTRO</Text>
            <Text style={styles.text}>CPF</Text>
    
            <TextInput placeholder='Insira seu CPF' style={styles.input} />
    
            <Text style={styles.text}>SENHA</Text>
    
            <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input} />
            <TextInput secureTextEntry placeholder='Confirme sua senha' style={styles.input} />
            <View style={styles.subBtn}>
              <TouchableOpacity><Link href={'login'} style={styles.subBtn1}>Login</Link></TouchableOpacity>
        
            </View>
    
          </View>
          <View style={styles.formbtn}>
            <Link href={'login'} style={styles.btn}>CADASTRAR</Link>
          </View>
    
        </View>
  );
}

