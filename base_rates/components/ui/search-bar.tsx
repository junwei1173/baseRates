import { View, Text, TextInput, StyleSheet, Pressable, Keyboard} from 'react-native'
import React, {useState} from 'react'
import ListItems from './list-items'

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
  setSearch('');
  setResults(null);
  Keyboard.dismiss();
  }

  const handleSearch = async () => {
    setLoading(true);
    setResults(null);
    Keyboard.dismiss();
    try {
      const response = await fetch('http://localhost:3000/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: search }),
      });
      const data = await response.json();
      // If backend returns array, use it; if string, wrap in array
      let items = Array.isArray(data.result) ? data.result : [{ name: 'Result', description: String(data.result), price: '', image: null, stars: 0 }];
      setResults(items);
    } catch (err) {
      let errorMsg = 'Error occurred';
      if (err instanceof Error) {
        errorMsg = err.message;
      } else if (typeof err === 'string') {
        errorMsg = err;
      }
      setResults([{ name: 'Error', description: errorMsg, price: '', image: null, stars: 0 }]);
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Search items here..."
          value={search}
          onChangeText={setSearch}
          accessibilityLabel="Search items here..."
          accessibilityHint="Search items here..."
          accessibilityRole="search"
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
      {loading ? (
        <Text style={{marginTop: 10}}>Searching...</Text>
      ) : null}
      {!loading && results !== null && (
        <ListItems items={results} />
      )}
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