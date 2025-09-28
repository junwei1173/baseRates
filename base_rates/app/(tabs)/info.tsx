import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetails() {
  const params = useLocalSearchParams();
  
  // Get product data from navigation params
  const productName = params.name as string || 'Product';
  const productDescription = params.description as string || 'No description available.';
  const productPrice = params.price as string || '$0.00';
  const productStars = parseFloat(params.stars as string) || 0;
  const productImage = params.image as string;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.productContainer}>
        {productImage ? (
          <Image 
            source={{ uri: productImage }} 
            style={styles.image} 
          />
        ) : (
          <View style={[styles.image, { backgroundColor: '#eaf3e2', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ fontSize: 48 }}>🛒</Text>
          </View>
        )}
        
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.productPrice}>{productPrice}</Text>
          <Text style={styles.productStars}>
            {'★'.repeat(Math.floor(productStars))}{'☆'.repeat(5 - Math.floor(productStars))} ({productStars}/5)
          </Text>
          <Text style={styles.productDescription}>
            {productDescription}
          </Text>
        </View>
        
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  productContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 100,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  textContainer: {
    gap: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  productStars: {
    fontSize: 16,
    color: '#f7c948',
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'left',
  },
  buyButton: {
    backgroundColor: '#4dbe6c',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 20,
  },
  buyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

