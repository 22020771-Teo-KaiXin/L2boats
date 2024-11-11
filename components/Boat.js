/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ title, description, icon_name, poster, price })=> {
  const handleBuyNow = () => {
    console.log(`Buying ${title} for $${price}`);
  };
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 35 }}>
        <Icon name={icon_name} size={25} color="#800080" />

        <Text style={{ fontFamily: 'Playfair Display', fontSize: 25, color: '#000000', textTransform: 'uppercase', marginLeft: 3 }}>
          {title}
        </Text>
      </View>

      <Text style={{fontSize: 16}}>
        {description}
      </Text>

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2B7A0B' }}>
        Price: ${price}
      </Text>

      <Image source={poster} style={{width:450, height: 300 }}/>
      <View style={{ height: 20 }} />

      <TouchableOpacity
        style={{ backgroundColor: '#007BFF', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 15, width: 100, alignItems: 'center', alignSelf: 'center'}}
        onPress={handleBuyNow}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Boat;
