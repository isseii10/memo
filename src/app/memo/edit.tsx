import { Alert, StyleSheet, TextInput, View } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { auth, db } from '../../config'
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore'
import KeyboardSafeView from '../../components/KeyboardSafeView'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser?.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('更新に失敗しました')
    })
}

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState<string>('')
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser?.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const remoteBodyText = String(docRef?.data()?.bodyText)
        setBodyText(remoteBodyText)
      })
      .catch((error) => { console.log(error) })
  }, [])

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => { handlePress(id, bodyText) }}>
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
    flex: 1
  },
  input: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
    textAlignVertical: 'top',
    lineHeight: 24,
    fontSize: 16
  }
})
export default Edit
