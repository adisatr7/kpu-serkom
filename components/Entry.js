import { StyleSheet, TextInput, View } from "react-native"
import { color, font } from "../styles"


export default function Entry({ icon, label, value }) {
  return (
    <View style={styles.container}>
      { icon === undefined ? null : <Ionicons name={icon} size={16} color={color.gray} /> }
      <TextInput style={styles.textInput} placeholder={label} text={value} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.white,
    borderColor: color.gray,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    height: 32
  },

  textInput: {
    fontSize: font.body,
    color: color.black,
    marginHorizontal: 10
  }
})