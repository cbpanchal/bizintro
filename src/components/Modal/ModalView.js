import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, View, Text } from "native-base";

import Header from "../Header/CustomHeader";

export default class ModalViewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header
          transparent={true}
          showLeft
          showRight
          leftIconType = "MaterialCommunityIcons"
          leftIconName = ""
        />
      <Content>
        <Text>fghfhghgh</Text>
      </Content>
    </Container>
    )
  }
}
