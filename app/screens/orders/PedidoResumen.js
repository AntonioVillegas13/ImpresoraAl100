import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import StyledText from "../../theme/StyledText";
import { Card, Title, Paragraph, List } from "react-native-paper";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import theme from "../../theme/theme";
import { useEffect, useState } from "react";
import { calcularFactura, traerproductos } from "../../services/ProductoItem";
import PedidoCard from "./PedidoCard";

export default function PedidoResumen() {
  const [factura, setFactura] = useState();
  const [carrito, setCarrito] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
  
    setCurrentDate(
      date + '/' + month + '/' + year 
    );
  }, []);


  const cargarCarrito = () => {
    setCarrito(traerproductos());
    setFactura(calcularFactura());
  };

  useState(() => {
    cargarCarrito();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cajaCabecera}>
        <StyledText heading>RESUMEN DE PEDIDO</StyledText>
        <Text>{currentDate}</Text>
      </View>
      <View style={styles.cajaCuerpo}>
        {/* ______________________________________________________________________________________________ */}
        <Text
          style={{
            color: theme.colors.modernaRed,
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          $ {factura?.subtotal + factura?.iva}
        </Text>
        <View style={styles.cajaTitulo}>
          <Text style={{ color: "#ffff" }}>Resumen: </Text>
        </View>
        {/* ______________________________________________________________________________________________ */}
        <View style={styles.cajaFinal}>

          <View style={{ flexDirection: 'row', /*backgroundColor: 'green'*/ }}>
            <View style={{/*backgroundColor:'green',*/justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text style={{fontWeight:'bold'}}>Subtotal:</Text>
              <Text style={{fontWeight:'bold'}}>IVA :</Text>
              <Text style={{fontWeight:'bold'}}>Total :</Text>
            </View>
            <View style={{/*backgroundColor:'red',*/justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text>{factura?.subtotal}</Text>
              <Text>{factura?.iva}</Text>
              <Text>{factura?.subtotal + factura?.iva}</Text>
            </View>
          </View>
        </View>
        {/* ______________________________________________________________________________________________ */}
        <View style={styles.cajaTitulo}>
          <Text style={{ color: "#ffff" }}>Lista Productos: </Text>
        </View>

        {/* ______________________________________________________________________________________________ */}

        <FlatList
          data={carrito}
          renderItem={({ item }) => {
            return <PedidoCard producto={item} />;
          }}
          keyExtractor={(item) => {
            return item.producto;
          }}
          
        />
        <View style={styles.cajaBotones}>
          <Button
            title=" Cancelar Pedido "
            buttonStyle={{
              borderRadius: 5,
              marginHorizontal: 10,
              backgroundColor: theme.colors.modernaRed,
            }}
            size="lg"
          />

          <Button
            title="Guardar"
            buttonStyle={{
              width: 180,
              borderRadius: 5,
              marginHorizontal: 10,
              backgroundColor: theme.colors.modernaYellow,
            }}
            size="lg"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
  },
  cajaCabecera: {
    //marginBottom:25,
   // flex: 2,
    // backgroundColor: 'cyan',
    alignItems: "center",
    //justifyContent: "flex-end",
   // paddingBottom: 25,
  },
  cajaCuerpo: {
    flex: 6,
    // backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemProducto: {
    borderWidth: 1,
    flexDirection: "row",
  },
  cajaBotones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 45,
  },
  cajaFinal: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'cyan',
    marginBottom: 10,
    position: "relative",
  },
  cajaTitulo: {
    backgroundColor: theme.colors.modernaYellow,
    height: 25,
    justifyContent: "center",
    paddingLeft: 10,
  },
});
