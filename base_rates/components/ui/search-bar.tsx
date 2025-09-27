import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native'
import React, {useState} from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleDelete = () => {
    setSearch('');

  }

  // temporary function to search for items
  const handleSearch = () => {
    console.log(search);
  }

  return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Search items here..."
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <Pressable 
              style={({pressed}) => [
                styles.buttonDelete,
                {
                  backgroundColor: pressed ? '#eee' : 'white',
                }
              ]}
              onPress={handleDelete}
            >
              <Text style={styles.xIcon}>×</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable 
            style={({pressed}) => [
              styles.buttonSearch,
              {
                backgroundColor: pressed ? '#89CFF0' : 'white',
              }
            ]}
            onPress={handleSearch}
          >
            <Text>Search</Text>
          </Pressable>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0,
  },
  inputWrapper: {
    position: 'relative',
    width: 300,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    borderRadius: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 35, // space for the X button
  },
  buttonContainer: {
    paddingTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 10,
  },
  buttonSearch: {
    padding: 10,
    borderRadius: 20,
  },
  buttonDelete: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    zIndex: 1,
  },
  xIcon: {
    fontSize: 20,
    color: '#888',
    fontWeight: 'bold',
  },
})


export default SearchBar