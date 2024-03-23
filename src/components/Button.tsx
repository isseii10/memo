import { StyleSheet, Text, View } from 'react-native'

interface Props {
  label: string
}
const Button = ({ label }: Props): JSX.Element => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#234123',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
