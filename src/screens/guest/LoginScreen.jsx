import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import TextInput from "../../components/ui/TextInput";
import { Button, IconButton, HelperText } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { login } from "../../utils/backend/auth";
import { login as loginStore } from "../../reducers/auth";
import { widthDP, heightDP } from "../../utils/responsive";

import { useDispatch } from "react-redux";
const initialInputs = {
  email: { value: "", error: "" },
  password: { value: "", error: "" },
};
const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    if (loading) {
      return;
    }
    requestAnimationFrame(async () => {
      if (inputs?.email?.value === "") {
        setInputs((currInputs) => ({
          ...currInputs,
          email: {
            value: currInputs.email.value,
            error: "Please fill this field",
          },
        }));
        return;
      } else {
        setInputs((currInputs) => ({
          ...currInputs,
          email: {
            value: currInputs.email.value,
            error: "",
          },
        }));
      }
      if (inputs?.password?.value === "") {
        setInputs((currInputs) => ({
          ...currInputs,
          password: {
            value: currInputs.password.value,
            error: "Please fill this field",
          },
        }));
        return;
      } else {
        setInputs((currInputs) => ({
          ...currInputs,
          password: {
            value: currInputs.password.value,
            error: "",
          },
        }));
      }
      setLoading(true);
      navigation.navigate("HomeScreen");
      // const response = await login(inputs);
      // if (response?.error) {
      //   setInputs((currInputs) => ({
      //     ...currInputs,
      //     email: { value: currInputs.email.value, error: response?.error },
      //   }));
      // } else if (response?.user) {
      //   setInputs((currInputs) => ({
      //     ...currInputs,
      //     email: { value: currInputs.email.value, error: "" },
      //   }));
      //   dispatch(
      //     loginStore({
      //       auth: response.user,
      //     })
      //   );
      // }
      setLoading(false);
    });
  };
  const showSignup = () => {
    if (loading) {
      return;
    }
    requestAnimationFrame(async () => {
      navigation.navigate("SignupScreen");
    });
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/logo.png")}
            style={{
              flex: 1,
              resizeMode: "contain",
              width: widthDP(40),
              alignSelf: "center",
            }}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.inputRow}>
            <Text
              style={{
                fontFamily: "Inter_700Bold",
                fontSize: heightDP(4),
                color: "white",
                marginVertical: heightDP(2),
              }}
            >
              Login
            </Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              label="Email"
              text={true}
              style={styles.textInput}
              error={inputs.email.error !== ""}
              keyboardType="email-address"
              textContentType="emailAddress"
              value={inputs.email.value}
              onChangeText={(text) => {
                setInputs((currInpus) => ({
                  ...currInpus,
                  email: { value: text, error: currInpus.email.error },
                }));
              }}
            />
          </View>
          <HelperText type="error" visible={inputs.email.error !== ""}>
            {inputs.email.error}
          </HelperText>
          <View style={styles.inputRow}>
            <TextInput
              label="Password"
              text={true}
              style={styles.textInput}
              textContentType="password"
              autoComplete="password"
              error={inputs.password.error !== ""}
              secureTextEntry={true}
              value={inputs.password.value}
              onChangeText={(text) => {
                setInputs((currInpus) => ({
                  ...currInpus,
                  password: { value: text, error: currInpus.password.error },
                }));
              }}
            />
          </View>
          <HelperText type="error" visible={inputs.password.error !== ""}>
            {inputs.password.error}
          </HelperText>
          <View style={[styles.inputRow, { width: widthDP(55) }]}>
            <Button
              mode="contained"
              buttonColor={loading ? Colors.blue[100] : Colors.blue[300]}
              contentStyle={{ flexDirection: "row-reverse", padding: 5 }}
              style={{ flex: 1, borderRadius: 25 }}
              labelStyle={{ color: "white", fontSize: heightDP(2.5) }}
              loading={loading}
              onPress={onSubmit}
            >
              Login
            </Button>
          </View>
          <View style={[styles.inputRow, { marginTop: heightDP(3) }]}>
            <IconButton
              icon={({ size, color }) => (
                <Entypo name="facebook-with-circle" size={30} color="#4267B2" />
              )}
              iconColor="#4267B2"
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon={({ size, color }) => (
                <Entypo name="twitter-with-circle" size={30} color="#1DA1F2" />
              )}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon={({ size, color }) => (
                <FontAwesome
                  name="google-plus-circle"
                  size={30}
                  color="#db3236"
                />
              )}
              onPress={() => console.log("Pressed")}
            />
          </View>
          <View
            style={[
              styles.inputRow,
              {
                marginTop: heightDP(3),
                width: widthDP(55),
                alignSelf: "center",
              },
            ]}
          >
            <Button
              mode="contained"
              buttonColor={Colors.blue[100]}
              contentStyle={{ flexDirection: "row-reverse", padding: 5 }}
              style={{ flex: 1, borderRadius: 25 }}
              labelStyle={{ color: "white" }}
              onPress={showSignup}
            >
              Create An Account
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: heightDP(2),
    paddingHorizontal: widthDP(7),
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cardContent: {
    flex: 2,
    paddingVertical: heightDP(2),
    paddingHorizontal: widthDP(5),
    alignItems: "center",
    backgroundColor: Colors.coklat[200],
    borderRadius: 26,
    marginTop: heightDP(2),
  },
  textInput: {
    flex: 1,
    marginHorizontal: widthDP(2),
    borderRadius: 10,
    textDecorationColor: "white",
    backgroundColor: "white",
  },
});
