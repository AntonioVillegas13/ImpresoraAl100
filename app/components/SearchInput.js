import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme/theme";
import { HelperText, TextInput } from "react-native-paper";

//si no se manda un placeHolder, se pondrá por defecto Buscar
//si no se manda un label, no se mostrara nada en la parte superior derecha
//onSubmit se ejecuta cuando se toca el botón o cuando se manda el texto del input
const MAX_LENGTH_SEARCH = 30;
export default function SearhInput({
  label,
  placeholder,
  value,
  onChangeText,
  onSubmit,
  style,
  errorMessage,
  max_length = MAX_LENGTH_SEARCH,
  mayus,
}) {
  const submitSearch = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <View style={style}>
      <TextInput
        keyboardType="default"
        label={label}
        value={value}
        mode="outlined"
        outlineColor={theme.colors.inputcolor}
        activeOutlineColor={theme.colors.active}
        placeholder={placeholder ? placeholder : "Búsqueda"}
        error={errorMessage}
        onSubmitEditing={submitSearch}
        onChangeText={(e) => {
          let text = e;
          if (mayus) {
            text = text.toUpperCase();
          }
          onChangeText(text);
        }}
        maxLength={max_length}
        autoCapitalize={mayus ? "characters" : "sentences"}
        right={<TextInput.Icon icon="search" onPress={submitSearch} />}
      />
      <HelperText type="error" visible={errorMessage}>
        {errorMessage}
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  nobackground: {
    backgroundColor: "transparent",
  },
  search: {
    marginVertical: -5,
    borderWidth: 1,
    paddingVertical: 1,
    paddingLeft: 15,
    borderRadius: 10,
    borderColor: theme.colors.inputcolor,
  },
  label: {
    zIndex: 100,
    position: "absolute",
    backgroundColor: "white",
    top: -15,
    left: 22,
  },
});
