import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MemoListItem = (): JSX.Element => {
  return (
    <Link href='/memo/detail' asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2024-01-01 01:00</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name='closecircleo' color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
