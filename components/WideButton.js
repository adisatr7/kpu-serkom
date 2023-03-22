import { StyleSheet,TouchableOpacity, Text } from "react-native"
import { color, font, global } from "../styles"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function WideButton({ title, onPress, isActive, icon }) {

  return (
    <TouchableOpacity activeOpacity={0.75} style={isActive? {...styles.container, ...styles.active} : {...styles.container, ...styles.inactive}} onPress={onPress}>
      <Text style={{...font.buttonText, ...styles.text}}>{title}</Text>
      { icon && <Ionicons name={icon} size={16} color={color.white}/> }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: color.primary
  },

  inactive: {
    backgroundColor: color.gray
  },

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 32,
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    marginBottom: global.marginY,
    alignSelf: "center"
  },

  text: {
    color: color.white,
    marginRight: 3
  }
})