import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/FirstPage/logo.png";
import Background from "../assets/FirstPage/back.png";

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.Background}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.Skiptxt}>Skip {">>"}</Text>
          </TouchableOpacity>
          <Text style={styles.Welcometxt}>Welcome</Text>
        </View>
        <Image style={styles.logo} source={logo} />
        <View style={styles.foot}>
          <View style={styles.btn}>
            <Button title="Log in" color="#FB081F"></Button>
          </View>
          <Text style={styles.ORtxt}>OR</Text>
          <View style={styles.btn}>
            <Button title="Sign up" color="#FB081F"></Button>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  header: {
    flexDirection: "column",
  },
  Skiptxt: {
    color: "#FB081F",
    fontSize: 15,
    marginLeft: 280,
  },
  Welcometxt: {
    color: "#FB081F",
    fontSize: 30,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
  },
  logo: {
    width: 370,
    height: 320,
    marginTop: 260,
  },
  foot: {
    flexDirection: "row",
    marginBottom: 30,
  },
  ORtxt: {
    marginHorizontal: 20,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    width: 130,
    borderRadius: 10,
    overflow: "hidden",
  },
});

{
  /* <ImageBackground
        source={{ uri: back }}
        resizeMode="cover"
        style={styles.Background}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.Skiptxt}>Skip {">>"}</Text>
          </TouchableOpacity>
          <Text style={styles.Welcometxt}>Welcome</Text>
        </View>

        <Image style={styles.logo} source={{ uri: logo }} />
        <View style={styles.foot}>
          <View style={styles.btn}>
            <Button title="Log in" color="#FB081F"></Button>
          </View>
          <Text style={styles.ORtxt}>OR</Text>
          <View style={styles.btn}>
            <Button title="Sign up" color="#FB081F"></Button>
          </View>
        </View>
      </ImageBackground> */
}
