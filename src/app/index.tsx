import { StyleSheet, Text, View } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>MemoApp</Text>
          <Text>logout</Text>
        </View>
      </View>

      <View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024-01-01 01:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024-01-01 01:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024-01-01 01:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <Text>+</Text>
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
