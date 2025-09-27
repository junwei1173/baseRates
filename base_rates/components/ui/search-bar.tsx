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
        <TextInput
            style={styles.input}
            placeholder="Search items here..."
            value={search}
            onChangeText={setSearch}
        />
        <View style={styles.buttonContainer}>
            <Pressable 
                style={({pressed}) => [
                    styles.buttonDelete,
                    {
                        backgroundColor: pressed ? "#D22B2B" : 'white',
                    }
                ]}
                onPress={handleDelete}
            >
                <Text>Delete</Text>
            </Pressable>
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
  input: {
    width: 300,
    borderRadius: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
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
    padding: 10,
    borderRadius: 20,
  },
})


export default SearchBar