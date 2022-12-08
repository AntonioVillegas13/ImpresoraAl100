import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../../theme/theme";
import { Input, Button, Icon } from "@rneui/base";
import StyledText from "../../components/StyledText";

export default function Login({ navigation }) {
  const [correo, setcorreo] = useState();
  const [password, setpassword] = useState();
  const [showpassword, setshowpassword] = useState(false);
  const [errorCorreo, seterrorCorreo] = useState();
  const [errorPassword, seterrorPassword] = useState();
  const correoexample = "moderna@gmail.com";
  const passwordexample = "moderna123";

  const personaIngreso = () => {
    seterrorCorreo(null);
    seterrorPassword(null);
    validate();
    if (correo == correoexample && password == passwordexample) {
      navigation.navigate("ClientesScreen");
    } else {
      console.log("No puedes ingresar");
    }
  };

  const validateEmail = (email) => {
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // const re = "@";
    return re.test(email);
  };

  const validate = () => {
    if (correo == null || correo == "") {
      seterrorCorreo("Debe ingresar su correo");
    } else if (!validateEmail(correo)) {
      seterrorCorreo("Debe ingresar un correo valido");
    } else if (correo != correoexample) {
      seterrorCorreo("Correo invalido");
    }

    if (password == null || password == "") {
      seterrorPassword("Debe ingresar su contraseña");
    } else if (password != passwordexample) {
      seterrorPassword("Contraseña invalida");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cajaCabecera}>
        <Image
          source={require("../../../assets/moderna/Logotipo-original.png")}
          style={{ width: 310, height: 100 }}
        />
      </View>
      <View style={styles.cajaCuerpo}>
        <Text style={styles.titulo}>Ingresa tu correo y contraseña</Text>
        <View style={styles.caja}>
          <View style={styles.label}>
            <StyledText small color={theme.colors.inputcolor}>
              Correo
            </StyledText>
          </View>
          <Input
            value={correo}
            onChangeText={setcorreo}
            errorMessage={errorCorreo}
            inputContainerStyle={styles.txtinput}
          />
        </View>
        <View style={styles.caja}>
          <View style={styles.label}>
            <StyledText small color={theme.colors.inputcolor}>
              Contraseña
            </StyledText>
          </View>
          <Input
            value={password}
            onChangeText={setpassword}
            secureTextEntry={!showpassword}
            rightIcon={
              <TouchableOpacity onPress={() => setshowpassword(!showpassword)}>
                <Icon
                  style={styles.icon}
                  type="antdesign"
                  name={showpassword ? "eyeo" : "eye"}
                />
              </TouchableOpacity>
            }
            errorMessage={errorPassword}
            inputContainerStyle={styles.txtinput}
          />
        </View>

        <Button
          title="Iniciar sesion"
          color={theme.colors.modernaRed}
          buttonStyle={{ borderRadius: 10 }}
          containerStyle={{
            width: 200,
            paddingTop: 40,
          }}
          size="lg"
          onPress={personaIngreso}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    //alignItems: 'center',
    justifyContent: "center",
    padding: 10,
  },
  cajaCabecera: {
    //backgroundColor: 'cyan',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cajaCuerpo: {
    //backgroundColor: 'brown',
    flex: 2,
    alignItems: "center",
    paddingHorizontal: 30,
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 39,
  },
  caja: {
    paddingBottom: 10,
  },
  txtinput: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "gray",
    width: 310,
    height: 50,
  },
  label: {
    zIndex: 100,
    position: "absolute",
    backgroundColor: "white",
    top: -11,
    left: 10,
    marginLeft: 11,
  },
});
