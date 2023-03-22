import { useState, useCallback } from "react"
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { color, font, global } from "../styles"
import { BackButton, Entry, WideButton } from "../components"
import Ionicons from "@expo/vector-icons/Ionicons"


export default function FormScreen({ navigation }) {

  const [nik, setNik] = useState("")
  const [nama, setNama] = useState("")
  const [nohp, setNohp] = useState("")
  const [jk, setJk] = useState("")
  const [alamat, setAlamat] = useState("")
  const [lokasi, setLokasi] = useState("")
  // TODO: Upload image

  const handleSubmit = () => {
    // TODO: Implement
  }

  useFocusEffect(
    useCallback(() => {
      // TODO: Implement
    }, [])
  )

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <BackButton onPress={() => navigation.goBack()}/>
        <Text style={styles.headerText}>Pengisian Formulir</Text>
      </View>

      {/* Form */}
      <KeyboardAvoidingView style={styles.formContainer} behavior="padding" enabled>
        <Entry label="Masukkan NIK" icon="browsers-outline" value="nik"/>
        <Entry label="Masukkan Nama Lengkap" icon="person" value="nama"/>
        <Entry label="Masukkan Nomor Telepon" icon="call" value="nohp"/>

        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%"}}>

          {/* Laki-laki */}
          <TouchableOpacity activeOpacity={0.75} style={jk === "laki"? styles.lakiContainerActive : styles.lakiContainerInactive} onPress={() => setJk("laki")}>
            <Ionicons name="male" size={16} color={jk === "laki"? color.white : color.primary}/>
            <Text style={jk === "laki"? styles.lakiTextActive : styles.lakiTextInactive}>Laki-laki</Text>
          </TouchableOpacity>

          {/* Perempuan */}
          <TouchableOpacity activeOpacity={0.75} style={jk === "perempuan"? styles.perempuanContainerActive : styles.perempuanContainerInactive} onPress={() => setJk("perempuan")}>
            <Ionicons name="female" size={16} color={jk === "perempuan"? color.white : color.secondary}/>
            <Text style={jk === "perempuan"? styles.perempuanTextActive : styles.perempuanTextInactive}>Perempuan</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

      <WideButton icon="paper-plane" isActive={true} title="Kirim" onPress={handleSubmit}/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: color.white,
    paddingHorizontal: global.marginX,
    paddingVertical: global.marginY,
    paddingTop: 40
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center", 
    width: "100%",
  },

  headerText: {
    ...font.heading,
    marginLeft: 12,
    alignSelf: "center",
  },

  formContainer: {
    marginTop: 24,
    width: "100%"
  },

  lakiContainerInactive: {
    alignItems: "center",
    backgroundColor: color.white,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 6,
    paddingHorizontal: 10,
    width: "48.5%",
    height: 36
  },

  lakiTextInactive: {
    ...font.body,
    color: color.primary,
    marginLeft: 8
  },

  lakiContainerActive: {
    alignItems: "center",
    backgroundColor: color.primary,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 6,
    paddingHorizontal: 10,
    width: "48.5%",
    height: 36
  },

  lakiTextActive: {
    ...font.body,
    color: color.white,
    marginLeft: 8
  },

  perempuanContainerInactive: {
    alignItems: "center",
    backgroundColor: color.white,
    borderColor: color.secondary,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 6,
    paddingHorizontal: 10,
    width: "48.5%",
    height: 36
  },

  perempuanTextInactive: {
    ...font.body,
    color: color.secondary,
    marginLeft: 8
  },

  perempuanContainerActive: {
    alignItems: "center",
    backgroundColor: color.secondary,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 6,
    paddingHorizontal: 10,
    width: "48.5%",
    height: 36
  },

  perempuanTextActive: {
    ...font.body,
    color: color.white,
    marginLeft: 8
  }
})