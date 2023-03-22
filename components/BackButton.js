import Ionicons from "@expo/vector-icons/Ionicons"
import { color } from "../styles"


export default function BackButton({ navigation }) {
  return (
    <Ionicons
      name="arrow-back"
      size={16}
      color={color.black}
      onPress={() => navigation.goBack()}
    />
  )
}