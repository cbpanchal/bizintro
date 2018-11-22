import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body, Icon, View } from "native-base";

export default class CalendarCard extends Component {
  render() {
    return (
      <Card style={styles.cardContainer}>
        <CardItem style={styles.cardItemContainer}>
          <Body>
            <Text style={styles.cardTitle}>
              Lunch Break
            </Text>
            <View style={styles.cardLocationContainer}>
              <Icon style={styles.locationIcon} type="MaterialIcons" name="location-on"/>
              <Text style={styles.locationText}>Vegano Cafe</Text>
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
    borderStartColor: "#96c3cf",
  },
  cardItemContainer: {
    backgroundColor: "#fff"
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
