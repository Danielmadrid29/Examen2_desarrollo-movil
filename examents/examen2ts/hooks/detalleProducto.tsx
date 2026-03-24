import React from "react";
import { Text, View } from "react-native";

type Producto ={
id: number;
nombre: string;
descripcion: string;
precio: number;
estado: string;
categoria: string;
};

export default function dettalleProducto({route}: any){
const{producto} : {producto: Producto} = route.params;

return(
<View style={{padding: 20}}>
<Text>Nombre: {producto.nombre}</Text>
<Text>Descripcion: {producto.descripcion}</Text>
<Text>Precio: {producto.precio}</Text>
<Text>Estado: {producto.estado}</Text>
<Text>Categoria: {producto.categoria}</Text>


</View>




);


}