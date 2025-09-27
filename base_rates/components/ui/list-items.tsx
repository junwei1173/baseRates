import { View, Text, StyleSheet, Image, TextProps } from 'react-native'

const listItems = [
  {
    id: 1,
    name: 'Keyboard',
    description: 'Keyboard is a device that allows you to type text',
    price: '$105',
    image: require('@/assets/images/keyboard.png'),
  },
  {
    id: 2,
    name: 'Mouse',
    description: 'Mouse is a device that allows you to move the cursor',
    price: '$26.50',
    image: require('@/assets/images/mouse.png')
    },
  
  {
    id: 3,
    name: 'Monitor',
    description: 'Monitor is a device that allows you to see the screen',
    price: '$320.99',
    image: require('@/assets/images/monitor.png'),
  },
]

const ListItems = () => {
  return (
    <View>
      {listItems.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 10,
    flex: 1,
  },
  itemName: {
    fontSize: 16,  
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    numberOfLines: 2,
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  itemPrice: {
    fontSize: 14,
  },
})


export default ListItems