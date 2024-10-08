import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import theme from 'src/theme';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';


export default function App() {
  useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (

    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
    

  );
}

