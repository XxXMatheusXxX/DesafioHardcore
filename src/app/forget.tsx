import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../css/index.style';
import {Link} from 'expo-router';


    export default function Forget() {
      return (
        <View style={styles.ImageBody}>
          <Image style={styles.images} source={require('../../assets/sesi-senai.webp')} />
    
          <View style={styles.form}>
            
            <Text style={styles.text1}>Esqueci a senha</Text>
            <Text style={styles.text}>CPF</Text>
    
            <TextInput placeholder='Insira seu CPF' style={styles.input} />
    
            <Text style={styles.text}>Email</Text>
    
            <TextInput secureTextEntry placeholder='Insira seu email de recuperação' style={styles.input} />
            
            <View style={styles.subBtn}>
              <TouchableOpacity><Link href={'login'} style={styles.subBtn1}>Login</Link></TouchableOpacity>
            </View>
    
          </View>
          <View style={styles.formbtn}>
            <Link href={'inicio'} style={styles.btn}>Enviar código</Link>
          </View>
    
        </View>
  );
}
