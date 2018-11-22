import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body } from "native-base";

const CardBox = ({ children, style, styleContainer, text, isCardSquare, name, date, time, ...props}) => 
  ( !isCardSquare ? 
    (
      <Card transparent {...props} style={styleContainer}>
        <CardItem style={styles.cardItemContainer}> 
          <Body>
            <Text style={[style, styles.textColor]}>
              {text}
            </Text>
          </Body>
        </CardItem>
      </Card>
    ) : 
    (
      <Card transparent {...props} style={styleContainer}>
        <CardItem style={[styles.cardItemContainer, {height: 130}]}> 
          <Body>
            <Text style={styles.header}>
              {name}
            </Text>
            <Text style={styles.body}>
              {date}
            </Text>
            <Text style={styles.footer}>
              {time}
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  )

const styles = StyleSheet.create({
  cardItemContainer: {
    backgroundColor: "#f5f4f7",
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
  },
  textColor: {
    color: "#3c5468"
  },
  header: {
    color: "#778699",
    fontWeight: "100"
  },
  body: {
    color: "#3c5468",
    fontSize: 25,
    fontWeight: "400",
    paddingTop: 10
  },
  footer: {
    color: "#3c5468",
    fontSize: 25,
    paddingTop: 7,
    fontWeight: "100",
  }
})

export default CardBox;

