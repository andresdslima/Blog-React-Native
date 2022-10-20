import { StyleSheet } from "react-native";
import { useContext } from "react";
import { Context } from "../context/BlogContext";
import { BlogPostForm } from "../components/BlogPostForm";

export function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  const navigate = () => navigation.navigate("Index");

  return (
    <BlogPostForm
      buttonText="Create"
      onSubmit={(title, content) => {
        addBlogPost(title, content, navigate);
      }}
    />
  );
}
