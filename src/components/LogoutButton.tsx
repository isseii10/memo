import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const LogoutButton = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.logoutText}>logout</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  logoutText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)'
  }
})

export default LogoutButton
