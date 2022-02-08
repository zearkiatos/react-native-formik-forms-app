import React, { Fragment } from "react";
import { TextInput, StyleSheet } from "react-native-web";
import { useField } from "formik";

const FieldText = ({ fieldName, ...props }) => {
  const [field, meta] = useField(fieldName);
  return (
    <Fragment>
      <TextInput
        style={styles.input}
        onChangeText={field.onChange(fieldName)}
        onBlur={field.onBlur(fieldName)}
        value={field.value}
        {...props}
      />
      {meta.error && meta.touched && <Text style={{ color: "red" }}></Text>}
    </Fragment>
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
