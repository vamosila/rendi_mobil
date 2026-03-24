import AsyncStorage from '@react-native-async-storage/async-storage';

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

const startArriving = async () => {
    let id = await AsyncStorage.getItem('rendiId')
    const url = host + '/' + data.id
    console.log('id: ', id)
    let response = await fetch(url)
    let result = await response.json()
    console.log(result.data.id == id)
    if(result.data.id == id) {
        updateArrived(result.data)
    }
}

const createVisit = async (visit) => {
    const url = 'http://localhost:8000/api/visits'
    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: visit.name,
                email: visit.email,
                event_id: 1
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let result = await response.json()
        console.log(result.data.id)
        AsyncStorage.setItem('rendiId', result.data.id)
    } catch (error) {
        console.error('Hiba! A regisztráció sikertelen')
        console.error(error)
    }
}

export { startArriving, createVisit }