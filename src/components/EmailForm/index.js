import React, { Fragment } from "react";
import { Text, Button, View } from "react-native";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import FieldText from "../FieldText";

const Form = () => {
  const { submitForm } = useFormikContext();
  return (
    <Fragment>
      <Text>Email</Text>
      <FieldText fieldName="email" />
      <FieldText fieldName="name" />
      <Button onPress={submitForm} title="Submit" />
    </Fragment>
  );
};

const EmailForm = () => {
  return (
    <View>
      <Formik
        onSubmit={(form) => console.log(form)}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid Email").required("Required"),
          name: Yup.string().min(10).required("Required")
        })}
        initialValues={{
          email: "",
          name: ""
        }}
      >
        <Form />
      </Formik>
    </View>
  );
};

export default EmailForm;
