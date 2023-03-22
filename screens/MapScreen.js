import { useState, useCallback } from "react"
import { Alert, SafeAreaView, StyleSheet, View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { color, font, global } from "../styles"
import { BackButton, WideButton } from "../components"
import MapView, { Marker } from "react-native-maps"
import * as Location from "expo-location"


export default function MapScreen({ navigation, route }) {

  const { selectedLocation, mode, onSubmit } = route.params

  const [koordinat, setKoordinat] = useState(selectedLocation || {
    latitude: -6.175392,
    longitude: 106.827153,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })

  const handleSubmit = () => {
    onSubmit(koordinat)
    navigation.goBack()
  }

  useFocusEffect(
    useCallback(() => {

      // Jika mode 'view', tidak perlu mengambil lokasi
      if(mode === "view") 
        return
      
      // Ambil lokasi saat ini
      const getPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== "granted") {
          Alert.alert("Perhatian", "Ijin lokasi diperlukan untuk menggunakan aplikasi ini!")
          return
        }

        // Atur lokasi saat ini ke state 'lokasi'
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
        setKoordinat({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        })
      }
      getPermission()
    }, [])
  )

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* Map */}
      <MapView
        style={styles.map}
        region={koordinat}
      >
        <Marker
          coordinate={koordinat}
          title="Lokasi terpilih"
          description="Tahan dan geser untuk mengubah lokasi"
          draggable={mode === "edit"}
          onDragEnd={(e) => setKoordinat({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          })}
        />
      </MapView>

      {/* Header */}
      <View style={styles.headerContainer}>
        <BackButton onPress={() => navigation.goBack()}/>
        {/* <Text style={styles.headerText}>Pilih Lokasi</Text> */}
      </View>

    {/* Tombol Pilih Lokasi */}
    { onSubmit && (
    <View style={{ position: "absolute", bottom: 8, width: "100%", paddingHorizontal: global.marginX }}>
       <WideButton icon="checkmark" isActive={true} title="Pilih Lokasi" onPress={handleSubmit}/> 
    </View> )}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: color.white
  },
  
  headerContainer: {
    alignItems: "center", 
    flexDirection: "row",
    paddingTop: 40,
    paddingHorizontal: global.marginX,
    width: "100%",
  },

  headerText: {
    ...font.heading,
    marginLeft: 12,
    alignSelf: "center",
  },

  mapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  map: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }

})