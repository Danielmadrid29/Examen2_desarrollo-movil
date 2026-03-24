import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

type Producto ={

id: number;
nombre: string;
descripcion: string;
precio: number;
estado: string
categoria: string;
};

export default function listaProducto(){
const[productos, setProductos] = useState<Producto[]>([]);
const navigation = useNavigation();

useEffect(() =>{
fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => setProductos(data));


}, []);

const eliminarProducto = (id: number) =>{
fetch(`https://dummyjson.com/products${id}`, {method: "Delete"})
.then(() => setProductos(productos.filter(p => p.id !== id)));

};

return(
<View>
<FlatList data={productos} keyExtractor={item => item.id.toString()} renderItem={({item})=>(
<View style={{margin: 10}}>
<Text>{item.nombre} - ${item.precio}</Text>
<Button title="Eliminar" onPress={() => eliminarProducto(item.id)}></Button>

</View>




)}>





</FlatList>

<Button title="Agregar producto" onPress={() => navigation.navigate}></Button>



</View>




)


}