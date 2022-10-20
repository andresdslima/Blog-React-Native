import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

export function ShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  navigation.setOpt

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <EvilIcons name="pencil" style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 30,
  },
  content: {
    textAlign: "justify",
    marginHorizontal: 30,
    fontSize: 18,
  },
});
