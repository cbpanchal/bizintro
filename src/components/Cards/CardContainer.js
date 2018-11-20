import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, CardItem, Text, Body, Icon } from 'native-base';

export default class CardContainer extends Component {
  render() {
    const { cards } = this.props
    return (
      <Card transparent style={styles.cardContainer}>
        <CardItem cardBody style={styles.cardItem}>
            <Body style={{padding: 10}}>
              <Text note style={[styles.cardtext, {color: "#4a6073"}]}>
                  Intro Request
              </Text>
              <Text style={[styles.cardtext, {color: "#4a6073"}]}>
                From John Alberts
              </Text>
              <View style={styles.cardBottomContent}>
                <Text note style={{color: "#4a6073"}}>
                  Accept
                </Text>
                <Text>
                  <Icon type="MaterialCommunityIcons" name="dots-horizontal" color="#d8d8d8"/>
                </Text>
              </View>
            </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 180, 
    marginLeft: 10,
  },
  cardItem: {
    backgroundColor: "#F5F4F7",
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8, 
    borderTopLeftRadius: 8, 
    borderTopRightRadius: 8,
  },
  cardtext: {
    paddingBottom: 10
  },
  cardBottomContent: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    width: "100%"
  }

})