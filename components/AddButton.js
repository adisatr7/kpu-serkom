import { StyleSheet, TouchableOpacity } from "react-native"
import { color } from "../styles"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function AddButton({ style, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.75} style={{...style, ...styles.container}}>
      <Ionicons
        name="add"
        size={26}
        color={color.white}
        onPress={onPress}
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
    justifyContent: "center"
  }
})