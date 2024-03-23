import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.back()
}

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value='' />
      </View>
      <CircleButton onPress={handlePress}>
        < Feather name='check' size={40} />
      </CircleButton>

    </KeyboardAvoidingView >
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
