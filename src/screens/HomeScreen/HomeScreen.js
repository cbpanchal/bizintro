import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, View } from "native-base";
import MapView from 'react-native-maps';
import Contacts from "../../components/Contacts/Contacts"


class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content contentContainerStyle={styles.container} bounces={false}>
                   {/* <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        />
                        </View> */}
                    <Contacts />    
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default HomeScreen;
