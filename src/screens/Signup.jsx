import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import Input from "../components/Input.jsx";
import { colors } from "../global/colors.js";
import { useSignUpMutation } from "../services/authServices.js";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice.js";
import { signupSchema } from "../validations/signupSchema.js";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  /* const [triggerSignup, isError, isLoading, isSuccess, error, result] =
    useSignUpMutation(); */

  const [triggerSignup, result] = useSignUpMutation();

  /* const onSubmit = async () => {
    try {
      signupSchema.validateSync(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
      await triggerSignup({ email, password });
      console.log("Registro exitoso");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al registrarse", error.errors);
    }
  }; */

  /*  const onSubmit = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    try {
      signupSchema.validateSync(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
    } catch (error) {
      //console.log(error.errors)
      error.errors.map((e) => {
        console.log(Object.keys(e)[0]);
        const customError = Object.values(e)[0];
        switch (Object.keys(e)[0]) {
          case "empty_email":
            //console.log(customError)
            setEmailError(customError);
          case "invalid_email":
            //console.log(customError)
            setEmailError(customError);
          case "empty_password":
            //console.log(customError)
            setPasswordError(customError);
          case "invalid_password":
            //console.log(customError)
            setPasswordError(customError);
          case "invalid_confirm_password":
            //console.log(customError)
            setConfirmPasswordError(customError);
          case "invalid_match_password":
            //console.log(customError)
            setConfirmPasswordError(customError);
          default:
            break;
        }
      });
    }
    triggerSignup({ email, password });
  }; */

  const onSubmit = () => {
    // Resetear los mensajes de error antes de validar
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    try {
      // Validar usando el esquema de validación
      signupSchema.validateSync(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
    } catch (validationError) {
      // Manejar los errores de validación
      validationError.errors.forEach((error) => {
        const key = Object.keys(error)[0];
        const value = Object.values(error)[0];

        switch (key) {
          case "empty_email":
          case "invalid_email":
            setEmailError(value);
            break;
          case "empty_password":
          case "invalid_password":
            setPasswordError(value);
            break;
          case "invalid_confirm_password":
          case "invalid_match_password":
            setConfirmPasswordError(value);
            break;
          default:
            break;
        }
      });

      // Salir de la función si hay errores de validación
      return;
    }

    // Si no hay errores de validación, realizar la acción
    triggerSignup({ email, password });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Input label="Email" onChange={setEmail} error={emailError} />
      <Input
        label="Contraseña"
        onChange={setPassword}
        isSecureEntry={true}
        error={passwordError}
      />
      <Input
        label="Confirmar contraseña"
        onChange={setConfirmPassword}
        isSecureEntry={true}
        error={confirmPasswordError}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Registrate</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.subtitleLink}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: "#cbd5e1",
    borderRadius: 8,
    margin: 5,
  },
  btnText: {
    color: "#020617",
    fontFamily: colors.fonts.secondary,
  },
  altContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  subtitle: {
    color: "#020617",
    fontFamily: colors.fonts.secondary,
    fontSize: 14,
  },
  subtitleLink: {
    fontFamily: colors.fonts.primary,
    color: "#020617",
    fontSize: 11,
    textDecorationLine: "underline",
  },
});
