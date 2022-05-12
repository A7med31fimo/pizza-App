import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { React, useState, useEffect } from "react";
import { auth } from "../../db/Config";
import { SignOut, getUserUId } from "../../db/auth/auth";
import { getUserById } from "../../db/Edit/Info";
const UserInfo = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getUserUId().then((id) => {
      //console.log(id);
      if (id) {
        getUserById(id).then((user) => {
          setEmail(user[0].email);
          setfName(user[0].fName);
          setlName(user[0].lName);
          setage(user[0].age);
          setphone(user[0].phone);
          setaddress(user[0].address);
        });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.square}>
            <Text style={styles.texticon}>{fName.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={styles.Nameview}>
            <Text style={styles.Name}>
              {fName} {lName}
            </Text>
            <Icon name="edit" size={25} color="grey" />
          </View>
        </View>
        {/* <View style={styles.header}>
        <View style={styles.square}>
          <Text style={styles.texticon}>{lName.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={styles.Nameview}>
          <Text style={styles.Name}>{lName}</Text>
          <Icon name="edit" size={25} color="grey" />
        </View>
      </View> */}
        <View style={styles.body}>
          <View style={styles.textView}>
            <Text style={styles.text}>Email:</Text>
            <Text style={styles.textVal}>{email}</Text>
            <Icon name="edit" size={20} color="grey" />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Number:</Text>
            <Text style={styles.textVal}>{phone}</Text>
            <Icon name="edit" size={20} color="grey" />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Address:</Text>
            <Text style={styles.textVal}>{address}</Text>
            <Icon name="edit" size={20} color="grey" />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Age:</Text>
            <Text style={styles.textVal}>{age}</Text>
            <Icon name="edit" size={20} color="grey" />
          </View>

          <View style={styles.btns}>
            <View style={styles.btn}>
              <Button
                onPress={() => {
                  navigation.navigate("Home");
                }}
                title="Home"
                color="#FB081F"
              ></Button>
            </View>
            <Text style={styles.ORtxt}>OR</Text>
            <View style={styles.btn}>
              <Button
                onPress={() => {
                  {
                    SignOut()
                      .then(() => {
                        console.log("sign out");
                        navigation.navigate("FirstPage");
                      })
                      .catch((err) => {
                        setError(err.message);
                      });
                  }
                }}
                title="Log out"
                color="#FB081F"
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    margin: 10,
    // alignItems: "center",
    // marginTop: 30,
    // marginBottom: 40,
  },
  header: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "95%",
    height: 80,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
  },
  square: {
    width: 60,
    height: "100%",
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
  },
  texticon: {
    fontSize: 30,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  Nameview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  Name: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    marginRight: 20,
  },
  body: {
    paddingTop: 30,
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "95%",
    height: 600,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    alignItems: "center",
    padding: 10,
    paddingBottom: 15,
  },
  text: {
    fontSize: 23,
    textAlign: "center",
    color: "#000000",
  },
  textVal: {
    fontSize: 15,
    textAlign: "center",
    color: "#000000",
  },
  ORtxt: {
    marginVertical: 5,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
