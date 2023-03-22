import { StyleSheet, SafeAreaView, Text } from "react-native"
import { WideButton } from "../components/"
import { color, font, global } from "../styles"


export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Heading label */}
      <Text style={styles.heading}>
        Informasi
      </Text>

      {/* Information label */}
      <Text style={styles.body}>
        Selamat datang di aplikasi KPU! Aplikasi ini bertujuan untuk membantu pendataan penduduk serta memudahkan 
        proses pemilihan umum di Indonesia. Dengan aplikasi ini, Anda dapat merekam data penduduk, titik lokasi 
        rumah calon pemilih serta foto bukti rekam kunjungan pengambilan data. Dengan adanya aplikasi KPU ini, diharapkan proses pemilihan umum dapat berjalan 
        lebih efektif dan efisien, serta memperkuat demokrasi di Indonesia. {`\n\n`}Selamat menggunakan aplikasi ini!
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
    // justifyContent: "flex-end",
    backgroundColor: color.white,
    paddingHorizontal: global.marginX,
    paddingVertical: global.marginY
  },

  heading: {
    ...font.heading,
    marginTop: 60,
    marginBottom: 18
  },

  body: {
    // ...font.body,
    marginBottom: 64
  }
})