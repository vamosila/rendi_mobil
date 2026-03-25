import { Button, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { startArriving } from '../services/visitService';

export default function Reader() {
    const [permission, requestPermission] = useCameraPermissions()
    const [scanned, setScanned] = useState(false)

    // if(!permission) return <View />

    // if(!permission.granted) {
    //     return(
    //         <View style={styles.container}>
    //             <Text>Engedély szükséges a kamerához</Text>
    //             <Button 
    //                 title="Engedélyez"
    //                 onPress={requestPermission}
    //             />
    //         </View>
    //     )
    // }

    const updateArrived = async (data) => {
        const host = 'http://localhost:8000/api/visits'
        const url = host + '/' + data.id
        let response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                event_id: data.event_id,
                arrived: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    // const startArriving = async () => {
    //     const url = 'http://localhost:8000/api/visits'
    //     let id = await AsyncStorage.getItem('rendiId')
    //     console.log('id: ', id)
    //     let response = await fetch(url + '/' + id)
    //     let result = await response.json()
    //     console.log(result.data.id == id)
    //     if(result.data.id == id) {
    //         updateArrived(result.data)
    //     }
    // }

    // startArriving()
    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true)
        alert('Üzenet: ' + data)
        startArriving()
    }

  return (
    <View style={styles.container}>
      <CameraView 
        style={StyleSheet.absoluteFill}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
            barcodeTypes: ["qr"],
        }}
      />
      {scanned && (
        <View style={styles.buttonContainer}>
            <Button
                title="Vissza"
                onPress={() => setScanned(false)} 
            />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
    },
})
