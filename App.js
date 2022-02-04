import { useFormik } from "formik";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: 'caprilespe@outlook.com'
    },
    onSubmit: form => console.warn(form)
  });
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
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
  }
});
