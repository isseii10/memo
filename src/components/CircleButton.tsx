import { StyleSheet, Text, View, type ViewStyle } from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
}

const CircleButton = ({ children, style }: Props): JSX.Element => {
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#234123',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
    // iosの影
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // androidの影
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 42
  }
})

export default CircleButton
