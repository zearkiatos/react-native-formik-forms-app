import React, { Fragment } from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";

const Form = () => {
  const { handleChange, submitForm, values } = useFormikContext();
  return (
    <Fragment>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("email")}
        value={values.email}
      />
      <Button onPress={submitForm} title="Submit" />
    </Fragment>
  );
};

const EmailForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid Email").required("Required")
        })}
      >
        <Form />
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#eee"
  }
});

export default EmailForm;
