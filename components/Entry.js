import { StyleSheet, TextInput, View } from "react-native"
import { color, font } from "../styles"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function Entry({ icon, label, onChangeText, type, maxDigit }) {
  return (
    <View style={styles.container}>
      { icon && <Ionicons name={icon} size={16} color={color.gray}/> }
      <TextInput style={styles.textInput} placeholder={label} onChangeText={onChangeText} keyboardType={type || "default"} maxLength={maxDigit || 64} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.white,
    borderColor: color.gray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 6,
    paddingHorizontal: 10,
    width: "100%",
    height: 36
  },

  textInput: {
    ...font.body,
    color: color.black,
    marginHorizontal: 10,
    flex: 1
  }
})