import { useState, useCallback } from "react"
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { color, font, global } from "../styles"
import Ionicons from "@expo/vector-icons/Ionicons"
import { AddButton } from "../components"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../connections/FirebaseConfig"


export default function HomeScreen({ navigation }) {

  const [listData, setListData] = useState([])

  const fetchData = async() => {
    let tempList = []
    const querySnapshot = await getDocs(collection(db, "data"))
    querySnapshot.forEach((doc) => {
      tempList.push({
        id: doc.id,
        ...doc.data()
      })
    })
    setListData(tempList)
  }

  // Fungsi untuk mengambil data dari Firestore dan menyimpannya ke state 'listData'
  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, [])
  )

  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={font.heading}>Beranda</Text>

        {/* <Pressable onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search" size={24} color={color.black} />
        </Pressable> */}

      </View>

      {/* Jika list kosong, tampilkan pesan khusus di tengah layar */}
      {/* Tetapi jika ada isinya, maka list akan ditampilkan di tengah */}
      {listData.length === 0 ? 
        ( <Text style={styles.emptyWarningText}>Nampaknya Anda belum pernah mengisi formulir. Klik tombol (+)  untuk melakukan pengisian formulir.</Text> ) : (
          <FlatList
            data={listData}
            keyExtractor={(item) => item.id}
            style={{ width: "100%" }}
            renderItem={({ item }) => { 
              return (
                <TouchableOpacity activeOpacity={0.75} style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>{item.nama}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="calendar" size={16} color={color.gray}/>
                    <Text style={styles.dataTime}>{item.tanggal}</Text>
                  </View>
                </TouchableOpacity>
                )
              }
            }
          />
        )
      }

      {/* FLoating button */}
      <AddButton style={styles.addButton} onPress={() => navigation.navigate("Form")}/>
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
    paddingTop: 40,
    width: "100%"
  },

  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    width: "100%"
  },

  emptyWarningText: {
    ...font.body,
    color: color.gray,
    position: "absolute",
    top: "50%",
    alignSelf: "center",
    textAlign: "center"
  },

  addButton: {
    position: "absolute",
    bottom: global.marginY,
    right: global.marginX
  },

  dataContainer: {
    marginVertical: 6,
    borderBottomWidth: 1,
    borderColor: color.gray,
    height: 60,
    width: "100%",
    justifyContent: "center",
  },

  dataTitle: {
    ...font.body,
    color: color.black,
    marginBottom: 6
  },

  dataTime: {
    ...font.caption,
    color: color.gray,
    marginLeft: 6
  }
})