import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '@/components/ui/search-bar'

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})