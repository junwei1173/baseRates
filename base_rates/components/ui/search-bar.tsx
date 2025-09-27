import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleClear = () => {
    setSearch('');

  }

  // temporary function to search for items
  const handleSearch = () => {
    console.log(search);
  }

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Search items here..."
            value={search}
            onChangeText={setSearch}
        />
        <View style={styles.buttonContainer}>
        <Button title="Delete" onPress={handleClear}/>
        <Button title="Search" onPress={handleSearch}/>
        </View>
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
    width: 300,
    borderRadius: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
})


export default SearchBar