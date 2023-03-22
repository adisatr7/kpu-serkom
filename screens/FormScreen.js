import { useEffect, useState, useCallback } from "react"
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { color, font, global } from "../styles"
import { BackButton, Entry, WideButton } from "../components"
import Ionicons from "@expo/vector-icons/Ionicons"
import DateTimePicker from "@react-native-community/datetimepicker"


export default function FormScreen({ navigation }) {

  const [nik, setNik] = useState("")
  const [nama, setNama] = useState("")
  const [nohp, setNohp] = useState("")
  const [jk, setJk] = useState("")
  const [tanggal, setTanggal] = useState(new Date())
  const [tanggalFormatted, setTanggalFormatted] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [lokasi, setLokasi] = useState({})
  const [lokasiFormatted, setLokasiFormatted] = useState("")
  // TODO: Upload image
  const [isFormFilled, setIsFormFilled] = useState(false)

  const handleDatePicker = (event, selectedDate) => {

    // Atur tanggal yang dipilih ke state 'tanggal'
    const currentDate = selectedDate || tanggal
    setShowDatePicker(false)
    setTanggal(currentDate)

    // Proses memformat tanggal untuk ditampilkan di layar
    let tempDate = new Date(currentDate)
    const tgl = tempDate.getDate()
    const namaBulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ]
    const bln = namaBulan[tempDate.getMonth()]
    const thn = tempDate.getFullYear()

    // Atur tanggal yang ditampilkan di layar
    setTanggalFormatted(`${tgl} ${bln} ${thn}`)
  }

  const handleLocationPicker = (selectedLocation) => {
    const longitude = selectedLocation.longitude
    const latitude = selectedLocation.latitude
    
    setLokasi(selectedLocation)
    setLokasiFormatted(`${latitude}, ${longitude}`)
  }


  const handleSubmit = () => {
    // TODO: Implement
  }

  useEffect(() => {
    setIsFormFilled(nik !== "" && nama !== "" && nohp !== "" && jk !== "" && tanggalFormatted !== "" && lokasiFormatted !== "")
  }, [nik, nama, nohp, jk, tanggalFormatted, lokasiFormatted])

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
        <Entry label="Masukkan NIK" icon="browsers-outline" onChangeText={(text) => setNik(text)} type="numeric" maxDigit={16}/>
        <Entry label="Masukkan Nama Lengkap" icon="person" onChangeText={(text) => setNama(text)}/>
        <Entry label="Masukkan Nomor Telepon" icon="call" onChangeText={(text) => setNohp(text)} type="phone-pad" maxDigit={12}/>

        {/* Gender Selector */}
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

        {/* Date Picker */}
        <TouchableOpacity activeOpacity={0.75} style={styles.entryContainer} onPress={() => setShowDatePicker(true)}>
          <Ionicons name="calendar" size={16} color={color.gray}/>
          <Text style={tanggalFormatted? {...font.body, color: color.black, marginHorizontal: 10, flex: 1} : {...font.body, color: color.gray, marginHorizontal: 10, flex: 1}}>{tanggalFormatted? tanggalFormatted : "Masukkan tanggal pendataan"}</Text>
        </TouchableOpacity>

        { showDatePicker && 
          <DateTimePicker 
            value={tanggal} 
            mode="date" 
            display="default" 
            onChange={handleDatePicker}  
          /> 
        }

        {/* Location Picker */}
        <TouchableOpacity activeOpacity={0.75} style={styles.entryContainer} onPress={() => navigation.navigate("Map", { mode: "edit", selectedLocation: lokasiFormatted? lokasi : null, onSubmit: handleLocationPicker })}>
          <Ionicons name="location" size={16} color={color.gray}/>
          <Text numberOfLines={1} style={lokasiFormatted? {...font.body, color: color.black, marginHorizontal: 10, flex: 1} : {...font.body, color: color.gray, marginHorizontal: 10, flex: 1}}>{lokasiFormatted? lokasiFormatted : "Pilih lokasi pendataan"}</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      {/* Submit button */}
      <WideButton icon="paper-plane" isActive={isFormFilled} title="Kirim" onPress={handleSubmit}/>
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
    ...font.buttonText,
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
    ...font.buttonText,
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
    ...font.buttonText,
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
    ...font.buttonText,
    color: color.white,
    marginLeft: 8
  },

  entryContainer: {
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
  }
})