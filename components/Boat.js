/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  contentBox: {
    flexDirection: 'column',
    borderWidth: 3,
    padding: 5,
    marginTop: 20,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgrey',
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 15,
    borderWidth: 2,
    paddingVertical: 1,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Playfair Display',
    fontSize: 23,
    color: 'white',
    textTransform: 'uppercase',
    marginLeft: 10,
    flex: 1,
  },
  descriptionBox: {
    borderWidth: 1,
    borderColor: 'purple',
    padding: 5,
    marginVertical: 5,
    width: 320,
    height: 90,
    backgroundColor: 'lightgrey',
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2B7A0B',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#e4e4e4',
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  buyButton: {
    backgroundColor: '#007BFF',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

const Boat = ({ title, description, icon_name, poster, price })=> {
  const handleBuyNow = () => {
    console.log(`Buying ${title} for $${price}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <View style={styles.titleBox}>
          <Icon name={icon_name} size={25} color="white" />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        <Text style={styles.priceText}>Price: ${price}</Text>

        <Image source={poster} style={styles.image} />

        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Boat;
