import React from "react";
import { StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function ClienteCard({ cliente, navigation }) {
  const sincronizar = () => {
    Alert.alert("Imagina una función de sincronizar");
  };

  const navegarConParametro = (screenName) => {
    if (!navigation) {
      return;
    }
    navigation.navigate(screenName, { cliente });
  };
  const detalleCliente = () => {
    navegarConParametro("ResumenPedidos");
  };
  const editarCliente = () => {
    navegarConParametro("RegistroCliente");
  };
  return (
    <View style={styles.card}>
      {/* <TouchableOpacity onPress={editarCliente}> */}
      <View style={styles.horizontal}>
        <View style={styles.information}>
          <StyledText light style={{ paddingLeft: 7 }}>
            {cliente.dni}
          </StyledText>
          <View style={styles.iconwithtext}>
            <Icons user size={18} style={{ paddingRight: 4 }} />
            <StyledText bold>
              {cliente.nombre} {cliente.apellido}
            </StyledText>
          </View>
          <View style={styles.iconwithtext}>
            <Icons
              address
              size={20}
              style={{ paddingRight: 4, paddingLeft: 1.5 }}
            />
            <StyledText bold>{cliente.direccion}</StyledText>
          </View>
        </View>
        <View style={styles.buttons}>
          {/* <TouchableOpacity onPress={sincronizar}> */}
          <Icons
            check
            color={
              cliente.sincronizado ? theme.colors.active : theme.colors.inactive
            }
          />
          {/* </TouchableOpacity> */}
        </View>
      </View>
      {/* </TouchableOpacity> */}
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
