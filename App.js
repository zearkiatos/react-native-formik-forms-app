import { useFormik } from "formik";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as Yup from "yup";
import EmailForm from "./src/components/EmailForm";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }

  return errors;
};

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required")
    }),
    onSubmit: (form) => console.warn(form)
  });
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        onBlur={formik.handleBlur("email")}
        style={styles.input}
        onChangeText={formik.handleChange("email")}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? (
        <Text>{formik.errors.email}</Text>
      ) : null}
      <Button title="Submit" onPress={formik.handleSubmit} />
        <Text>Another Form</Text>
        <EmailForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#eee"
  }
});
