import { StyleSheet, TextInput, View } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../config'
import { useState } from 'react'
import KeyboardSafeView from '../../components/KeyboardSafeView'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText, // keyとvalueの変数名が同じなら省略できる
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      console.log('success', docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
        />
      </View>
      <CircleButton onPress={() => { handlePress(bodyText) }}>
        < Feather name='check' size={40} />
      </CircleButton>

    </KeyboardSafeView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    lineHeight: 24,
    fontSize: 16
  }
})
export default Create
