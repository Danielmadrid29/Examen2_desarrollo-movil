import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function crearProducto(){
const[nombre, setNombre] = useState("");
const[descripcion, setDescripcion] =useState("");
const[precio, setPrecio] = useState("");
const[estado, setEstado] = useState("");
const[categoria, setCategoria] = useState("");
const navigation = useNavigation();

const creaProducto = () => {
fetch("https://dummyjson.com/products",{
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({nombre, descripcion, precio: Number(precio), estado, categoria})

})

.then(() => navigation.goBack());

};

return(
<View style={{padding: 20}}>
<TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre}></TextInput>
<TextInput placeholder="Descripcion" value={descripcion} onChangeText={setDescripcion}></TextInput>
<TextInput placeholder="Precio" value={precio} onChangeText={setPrecio}></TextInput>
<TextInput placeholder="Estado" value={estado} onChangeText={setEstado}></TextInput>
<TextInput placeholder="Categoria" value={categoria} onChangeText={setCategoria}></TextInput>
<Button title="Guardar" onPress={creaProducto}></Button>


</View>





);


}