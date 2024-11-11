/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Boat from './Boat';
import Icon from 'react-native-vector-icons/FontAwesome6';
const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    color: '#003366',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    borderWidth: 2,
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
  },
});

const AllBoats = () => {
  return (
    <ScrollView>
      <Text style={styles.headerText}>
        <Icon name="sailboat" size={25} color="#800080" />
        GetABoat - For Sale
      </Text>

      <Boat title="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." price="450,000" icon_name="thumbs-up" poster={require("../img/sea_ray.jpg")}/>
      <Boat title="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." price="30,000" icon_name="thumbs-up" poster={require("../img/four_winns.jpg")}/>
      <Boat title="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." price="40,000" icon_name="thumbs-up" poster={require("../img/flipper.jpg")}/>
      <Boat title="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." price="800,000" icon_name="thumbs-up" poster={require("../img/princess.jpg")}/>
      <Boat title="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." price="25,000" icon_name="thumbs-up" poster={require("../img/bayliner.jpg")}/>
      <Boat title="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." price="600,000" icon_name="thumbs-up" poster={require("../img/fairline.jpg")}/>
    </ScrollView>
  );
};

export default AllBoats;
