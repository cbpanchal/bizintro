import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, Card, CardItem, Body, Icon, View } from "native-base";

export default class CalendarCard extends Component {
  render() {
    const { styleContainer, eventName, location, color, style, isLocationEvent } = this.props;
    return (
      <Card style={[styles.cardContainer, styleContainer, {borderStartColor: color}]}>
        <CardItem style={[styles.cardItemContainer, style]}>
          <Body>
            <Text style={styles.cardTitle}>
             {eventName}
            </Text>
            <View style={styles.cardLocationContainer}>
              {isLocationEvent && 
              <Icon style={styles.locationIcon} type="MaterialIcons" name="location-on"/>
              // <Image source={require('../../../assets/location.png')} style={{height: 80, width: 80}} />
              }
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10, 
    borderLeftWidth: 7, 
    elevation: 0,
    zIndex: 1000,
    borderWidth: 0,
  },
  cardItemContainer: {
    backgroundColor: "#fff",
  },
  cardTitle: {
    color: "#3c5468"
  },
  cardLocationContainer: {
    paddingTop: 15,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  locationText: {
    color: "#cbc9d5",
    fontWeight: "100",
    fontSize: 18,
  },
  locationIcon: {
    color: "#cbc9d5",
    fontSize: 25
  }
  
})
