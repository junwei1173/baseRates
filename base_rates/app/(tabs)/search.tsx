import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '@/components/ui/search-bar'
import { Image } from 'expo-image';
import ListItems from '@/components/ui/list-items';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('@/assets/images/logo-icon.png')} style={styles.logo} />
      <SearchBar />
      <ListItems />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 10,
  },
})