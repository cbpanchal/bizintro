import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, Icon, Title } from "native-base";
import PlusIcon from "../../components/Fabs/Plus"
import Header from "../../components/Header/CustomHeader";

class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header
                transparent
                showLeft
                showRight
                showCenter
                leftComponent={<Icon name="menu" color="#bcbcbe" iconStyle={styles.iconSize}/>}
                rightComponent={<Icon name="search" iconStyle={styles.iconSize} />}
                bodyComponent={<Title style={styles.bodyContainerTitle}>Body</Title>}
                />
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <Text>Home Screen</Text>
                    <PlusIcon />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
    },
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
    },
    iconSize: {
        fontSize: 35
    }
});

export default HomeScreen;
