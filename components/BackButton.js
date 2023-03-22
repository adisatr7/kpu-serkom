import { TouchableOpacity  } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { color } from "../styles"


export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
      <Ionicons
        name="arrow-back"
        size={24}
        color={color.black}
      />
    </TouchableOpacity >
  )
}