import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native"
import { BackButton, WideButton } from "../components"
import { color, font, global } from "../styles"


export default function DataScreen ({ navigation, route }) {

  // Dapatkan data dari halaman sebelumnya
  const { data } = route.params 

  // Fungsi untuk menampilkan UI
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground source={{ uri: data.imageUrl }} style={styles.image} imageStyle={{ resizeMode: "cover", height: "100%", width: "100%" }}>
        <View style={styles.headerContainer}>
          <BackButton onPress={() => navigation.goBack()}/>
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        
        {/* Nama Lengkap */}
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <Text style={{...font.body, color: color.gray}}>Nama: </Text>
          <Text style={{...font.body, color: color.black}}>{data.nama}</Text>
        </View>

        {/* NIK */}
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <Text style={{...font.body, color: color.gray}}>NIK: </Text>
          <Text style={{...font.body, color: color.black}}>{data.nik}</Text>
        </View>

        {/* Jenis Kelamin */}
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <Text style={{...font.body, color: color.gray}}>Jenis Kelamin: </Text>
          <Text style={{...font.body, color: color.black}}>{ data.jk === "l"? "Laki-laki" : "Perempuan" }</Text>
        </View>

        {/* Nomor Telepon */}
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <Text style={{...font.body, color: color.gray}}>Nomor Telp: </Text>
          <Text style={{...font.body, color: color.black}}>{data.nohp}</Text>
        </View>

        {/* Tanggal Pendataan */}
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <Text style={{...font.body, color: color.gray}}>Tanggal Pendataan: </Text>
          <Text style={{...font.body, color: color.black}}>{data.tanggal}</Text>
        </View>

        {/* Lokasi */}
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <Text style={{...font.body, color: color.gray}}>Koordinat: </Text>
          <Text style={{...font.body, color: color.black, flex: 1}}>{`${data.lokasi.latitude}, ${data.lokasi.longitude}`}</Text>
        </View>

        <WideButton icon="location" isActive={true} title="Lihat Lokasi" onPress={() => navigation.navigate("Map", { mode: "view", selectedLocation: data.lokasi })} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    // paddingVertical: global.marginY,
  },
  
  headerContainer: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.white,
    top: global.marginY * 2,
    left: global.marginX,
    borderRadius: 5,
    height: 40,
    width: 40,
  },

  image: {
    width: "100%",
    height: "30%"
  },
  
  textContainer: {
    paddingTop: global.marginY,
    width: "100%",
    height: "70%",
    paddingHorizontal: global.marginX
  }
})