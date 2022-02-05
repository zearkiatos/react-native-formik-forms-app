import React from "react";
import { TextInput, StyleSheet } from "react-native-web";
import { useField } from "formik";

const FieldText = ({ fieldName, ...props }) => {
  const [field] = useField(fieldName);
  console.log(field);
  return (
    <TextInput
      style={styles.input}
      onChangeText={field.onChange(fieldName)}
      value={field.value}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#eee"
  }
});

export default FieldText;
