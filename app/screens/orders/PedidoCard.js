import { ListItem } from "@rneui/base";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function PedidoCard({ producto, showbuttons }) {
  const [image, setImage] = useState(producto?.producto?.imagen);
  return (
    <View style={styles.card}>
      <View style={{ borderWidth: 0, borderColor: 'black' }}>
        <View style={{ /*backgroundColor: 'red',*/ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
          <View style={{ /*backgroundColor: 'cyan',*/ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{ color: theme.colors.modernaRed, fontWeight: 'bold', fontSize: 18 }}>{producto?.producto.nombre}</Text></View>
          <View style={{ /*backgroundColor: 'green',*/ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: theme.colors.inputcolor }}>234{producto?.producto.nombre}458</Text></View>
          <View style={{ /*backgroundColor: 'white', */flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity>
              <Icons edit color={theme.colors.modernaYellow} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons eliminar color={"red"} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
          <View style={{ /*backgroundColor: 'cyan',*/ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={[
                styles.logo,
                {
                  // width: 50,
                  // height: 50,
                  height: 50,
                  // Dimensions.get("window").width - 30
                  width: 50,
                },
              ]}
              source={{ uri: image }}
            />
          </View>

          <View style={{ /*backgroundColor: 'green',*/ flex: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5 }}>
            {/* <View> */}
            <View style={{ backgroundColor: theme.colors.inputcolor, flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 1 }}>
              <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>Cant.</Text>
              <Text style={{ paddingVertical: 5 }}>{producto.cantidad}</Text>
            </View>
            <View style={{ backgroundColor: theme.colors.inputcolor, flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 1 }}>
              <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>P. Unit</Text>
              <Text style={{ paddingVertical: 5 }}>${producto.producto.precio}</Text>
            </View>
            <View style={{ backgroundColor: theme.colors.inputcolor, flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 1 }}>
              <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>Total</Text>
              <Text style={{ paddingVertical: 5 }}>${producto.cantidad * producto.producto.precio}</Text>
            </View>
            {/* </View> */}
          </View>
        </View>

      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  card: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    marginVertical: 3,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  information: {
    flex: 6,
  },
  iconwithtext: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
