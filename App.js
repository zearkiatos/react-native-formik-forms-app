import { useFormik } from "formik";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

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
      email: "caprilespe@outlook.com"
    },
    validate,
    onSubmit: (form) => console.warn(form)
  });
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange("email")}
        value={formik.values.email}
      />
      {formik.errors.email ? <Text>{formik.errors.email}</Text> : null}
      <Button title="Submit" onPress={formik.handleSubmit} />
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
