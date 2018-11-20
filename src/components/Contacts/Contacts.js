//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Thumbnail } from "native-base";

// create a component
class Contacts extends Component {
    render() {
        const { contacts } = this.props;
        return (
            <List>
                <ListItem avatar>
                    <Thumbnail source={{ uri: `${contacts.uri}` }} />
                </ListItem>
            </List>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Contacts;
