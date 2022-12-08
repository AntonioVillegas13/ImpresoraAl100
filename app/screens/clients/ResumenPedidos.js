import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function ResumenPedidos({ route, navigation }) {
  const cliente = route.params.cliente;
  return (
    <View style={styles.container}>
      <StyledText heading modernaPrimary center bold>
        RESUMEN PEDIDOS      </StyledText>
      <View style={styles.cliente}>
        <StyledText center subtitle light>
          {cliente?.nombre}{" "}
        </StyledText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RegistroCliente", { cliente });
          }}
        >
          <Icons edit color={theme.colors.modernaYellow} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 2,
  },
  cliente: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
