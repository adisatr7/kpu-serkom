import { useFocusEffect } from "@react-navigation/native"
import { StyleSheet, View } from "react-native"


export default DataScreen = ({ navigation, currentData }) => {

  // Data yang akan ditampilkan di layar ini
  const [data, setData] = useState(currentData)

  // Fungsi yang akan dipanggil ketika layar ini difokuskan
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        // TODO: Fetch data from API
      }
    }, [])
  )

  // Fungsi untuk menampilkan UI
  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({

})