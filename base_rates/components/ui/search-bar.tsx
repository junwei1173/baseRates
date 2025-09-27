import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleClear = () => {
    setSearch('');

  }

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
        />
        <Button title="Clear" onPress={handleClear} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    marginTop: 10,
  },
})


export default SearchBar