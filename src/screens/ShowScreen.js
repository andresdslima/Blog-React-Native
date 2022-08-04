import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

export default function ShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");

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
});
