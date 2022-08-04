import { StyleSheet } from "react-native";
import { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  const navigateBack = () => navigation.pop();

  return (
    <BlogPostForm
      buttonText="Edit"
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, navigateBack);
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
}

const styles = StyleSheet.create({});
