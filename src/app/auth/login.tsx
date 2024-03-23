import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'

const handlePress = (): void => {
  // login
  // replaceはstack navigationに積まない
  router.replace('/memo/list')
}

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container} >
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          onChangeText={(text) => { setEmail(text) }}
          style={styles.input}
          value={email}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='email address'
          textContentType='emailAddress' // keyChainなどに保存していたら使える
        />
        <TextInput
          onChangeText={(text) => { setPassword(text) }}
          style={styles.input}
          value={password}
          autoCapitalize='none'
          secureTextEntry
          placeholder='password'
          textContentType='password' // keyChainなどに保存していたら使える
        />
        <Button label='Submit' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href='/auth/sign_up' asChild >
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    padding: 8,
    height: 48,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default Login
