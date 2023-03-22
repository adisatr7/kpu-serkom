import { StyleSheet, TouchableOpacity } from "react-native"
import { color } from "../styles"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function AddButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name="add"
        size={26}
        color={color.white}
        onPress={() => navigation.navigate("Form")}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    // shadowColor: color.black,
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // shadowOffset: { width: 0, height: 2 },
  }
})