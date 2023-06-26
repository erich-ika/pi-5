import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/index'
import Perfil from './src/pages/Perfil/index'
import Cadastro from './src/pages/CadastroConta'
import ListaJogosJogador from './src/pages/ListaJogosJogador'
import ListaJogos from './src/pages/ListaJogos'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ListaJogosJogador" component={ListaJogosJogador} />
        <Stack.Screen name="ListaJogos" component={ListaJogos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
