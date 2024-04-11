import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { styles } from '../css/index.style';
import { router} from 'expo-router';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <LottieView
          source={require("../../assets/nave.json")}
          style={{width:"100%", height:"100%"}}
          autoPlay
          loop={false}
          autoSize
          onAnimationFinish={()=>router.navigate('login')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

