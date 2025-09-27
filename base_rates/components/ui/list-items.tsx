import { View, Text, StyleSheet } from 'react-native'


const listItems = [
  {
    id: 1,
    name: 'Item 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Item 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
  },
  
  {
    id: 3,
    name: 'Item 3',
    price: 300,
    image: 'https://via.placeholder.com/150',
  },
]

const ListItems = () => {
  return (
    <View>
      <Text>List Items</Text>
    </View>
  )
}

export default ListItems