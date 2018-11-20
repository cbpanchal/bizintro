import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, View } from "native-base";


class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <Text>Home Screen</Text>
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
        backgroundColor: '#2c3e50',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default HomeScreen;
