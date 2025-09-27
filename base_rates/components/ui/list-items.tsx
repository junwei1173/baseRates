import { View, Text, StyleSheet, Image, TextProps } from 'react-native'

const defaultItems = [
  {
    id: 1,
    name: 'Keyboard',
    description: "The EquiType Pro is more than just a peripheral—it's a commitment to inclusive design and digital accessibility. Built on a foundation of ergonomic science and user feedback from diverse communities, this keyboard ensures comfort, clarity, and reliability, regardless of your physical or digital literacy needs.",
    price: '$105',
    image: require('@/assets/images/keyboard.png'),
    stars: 4.5,
  },
  {
    id: 2,
    name: 'Mouse',
    description: "With 3 levels of sensitivity, smooth scrolling, and customizable buttons, the FlexComfort Mouse is designed to adapt to your needs and preferences. It's built with the latest technology to ensure precise tracking, ergonomic comfort, and seamless performance, making it ideal for both work and play.",
    price: '$26.50',
    image: require('@/assets/images/mouse.png'),
    stars: 4.5,
  },
  {
    id: 3,
    name: 'Monitor',
    description: "With a 32-inch screen, 4K resolution, and 100% sRGB color gamut, the Infinity View Pro is designed to provide you with the best possible viewing experience. It's built with the latest technology to ensure precise tracking, ergonomic comfort, and seamless performance, making it ideal for both work and play.",
    price: '$320.99',
    image: require('@/assets/images/monitor.png'),
    stars: 4.5,
  },
];

interface Item {
  id?: number;
  name: string;
  description: string;
  price: string;
  image?: any;
  stars: number;
}

const ListItems = ({ items }: { items?: Item[] | null }) => {
  // If no items provided, show default mockup
  const displayItems = Array.isArray(items) && items?.length > 0 ? items : defaultItems;
  return (
    <View>
      {displayItems.map((item, idx) => (
        <View key={item.id || idx} style={styles.item}>
          {item.image ? (
            <Image source={item.image} style={styles.itemImage} />
          ) : (
            <View style={[styles.itemImage, {backgroundColor: '#eaf3e2', justifyContent: 'center', alignItems: 'center'}]}>
              <Text>🛒</Text>
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription} numberOfLines={5}>{item.description}</Text>
            <Text style={styles.itemStars}>{item.stars}</Text>  
          </View>
          <Text style={styles.itemPrice}>{item.price}</Text>
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
    height: 200,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Change from 'center' to 'flex-start'
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: 5,
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
  },
  itemName: {
    fontSize: 20,  
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    textAlign: 'left',
    flexShrink: 0,
  },
  itemPrice: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  itemStars: {
    fontSize: 14,
    marginLeft: 0,
    fontWeight: 'bold',
    color: 'gold',
},
})


export default ListItems