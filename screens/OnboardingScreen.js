import { StyleSheet, SafeAreaView, Text } from "react-native"
import WideButton from "../components/WideButton"
import { color, font, global } from "../styles"


export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Heading label */}
      <Text style={{...font.heading, ...styles.heading}}>
        Welcome to KPU
      </Text>

      {/* Information label */}
      <Text style={{...font.body, ...styles.body}}>
        KPU is a mobile app that helps you track your daily activities and habits.
      </Text>

      {/* Next button */}
      <WideButton title="Lanjutkan" onPress={() => navigation.navigate("Home")} isActive={true} icon="arrow-forward-outline" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: color.white,
    paddingHorizontal: global.marginX,
    paddingVertical: global.marginY
  },

  heading: {
    marginBottom: 12
  },

  body: {
    marginBottom: 32
  }
})