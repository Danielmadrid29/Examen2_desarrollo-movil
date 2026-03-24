import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'; 
import listaProducto from './components/listaProducto';
import crearProducto from './hooks/crearProducto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='Lista' component={listaProducto}></Stack.Screen>
       <Stack.Screen name='Crear' component={crearProducto}></Stack.Screen>


     </Stack.Navigator>



    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
