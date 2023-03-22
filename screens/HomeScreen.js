import { useState, useCallback } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { color, font, global } from "../styles"
import Ionicons from "@expo/vector-icons/Ionicons"
import { AddButton } from "../components"


export default function HomeScreen({ navigation }) {

  const [listData, setListData] = useState([])

  useFocusEffect(
    useCallback(() => {
      // TODO: Implement
    }, [])
  )

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={font.heading}>Beranda</Text>

        {/* <Pressable onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search" size={24} color={color.black} />
        </Pressable> */}

      </View>

      {listData.length === 0 && (
        <Text style={styles.emptyWarningText}>Nampaknya Anda belum pernah mengisi formulir. Klik tombol (+)  untuk melakukan pengisian formulir.</Text>
      )}
      
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
    paddingTop: 40
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
  }
})