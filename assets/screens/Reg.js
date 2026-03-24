
import { Button, StyleSheet, Text, View } from 'react-native'
import Input from '../../components/Input'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Reg = ( {navigation} ) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')

    async function save() {
        console.log('Mentés...');

    }

  return (
    <View styles={styles.container}>
      <Text>Regisztráció</Text>
      <Input 
        title="Nev"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Input 
        title="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View styles={styles.button}>
          <Button
            title="Mentés"
            onPress={() => save()}
          />
      </View>
      <Input 
        title="Id"
        onChangeText={(text) => setId(text)}
        value={id}
      />
    </View>
  )
}

export default Reg

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        margin: 10
    },
})