import { View, Text, Image, StyleSheet, Pressable } from 'react-native';


export default function MockProductDetails() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/keyboard.png')} style={styles.image} />
      {/* Carousel indicator */}
      <View style={styles.carouselIndicator}>
        <View style={styles.carouselDotActive} />
        <View style={styles.carouselDot} />
        <View style={styles.carouselDot} />
        <View style={styles.carouselDot} />
      </View>
      <View style={styles.priceRow}>
        <View>
          <Text style={styles.price}>$24,00</Text>
          <View style={styles.discountRow}>
            <Text style={styles.oldPrice}>$30,00</Text>
            <Text style={styles.discountBadge}>-20%</Text>
          </View>
        </View>
        <Text style={styles.stars}>★★★★★</Text>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.
      </Text>
      <View style={styles.variationRow}>
        <Text style={styles.variationLabel}>Variations</Text>
        <View style={styles.variationOptions}>
          <Text style={styles.variationOption}>green</Text>
          <Text style={styles.variationOption}>M</Text>
        </View>
      </View>
      <View style={styles.variationImagesRow}>
        <Image source={require('@/assets/images/keyboard.png')} style={styles.variationImage} />
        <Image source={require('@/assets/images/keyboard.png')} style={styles.variationImage} />
        <Image source={require('@/assets/images/keyboard.png')} style={styles.variationImage} />
      </View>
      <View style={styles.buyRow}>
        <View style={styles.heartCircle}>
          <Text style={styles.heartIcon}>♡</Text>
        </View>
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy now on Amazon</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingHorizontal: 0,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 260,
    marginTop: 0,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  carouselIndicator: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  carouselDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#eaf3e2',
    opacity: 0.5,
  },
  carouselDotActive: {
    width: 24,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#c6e3c6',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 8,
    alignSelf: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  oldPrice: {
    fontSize: 16,
    color: '#d22b2b',
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#4dbe6c',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  stars: {
    fontSize: 18,
    color: '#f7c948',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: '#222',
    marginBottom: 12,
    textAlign: 'left',
    width: '90%',
    alignSelf: 'center',
  },
  variationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 8,
    alignSelf: 'center',
  },
  variationLabel: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 8,
  },
  variationOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  variationOption: {
    backgroundColor: '#eaf3e2',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 15,
    marginRight: 4,
  },
  variationArrow: {
    backgroundColor: '#4dbe6c',
    borderRadius: 16,
    padding: 6,
    marginLeft: 8,
  },
  variationImagesRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    alignSelf: 'center',
  },
  variationImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#eaf3e2',
  },
  buyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 16,
    gap: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heartCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eaf3e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 24,
    color: '#4dbe6c',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#c6e3c6',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

