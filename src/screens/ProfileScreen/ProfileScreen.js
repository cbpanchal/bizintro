import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from "native-base";
import Header from "../../components/Header/CustomHeader";
import Button from "../../components/Button/Button";

class ProfileScreen extends Component {
    render() {
        return (
           <Container>
                <Header 
                transparent
                title="bizintro"
                showCenter
                bodyContainer={styles.bodyContainer}
                bodyComponent={
                    <View style={styles.actionContainer}>
                        <Button>
                            <Text>Add</Text>
                        </Button>
                    </View>
                }
                />
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <View style={styles.requestContainer}>
                        <Text>Hello</Text>
                    </View>
                    <View style={styles.mapContainer}>
                        <Text>Map</Text>
                    </View>
                </Content>
           </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: 0
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    actionContainer: {
        fontSize: 20
    },
    requestContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default ProfileScreen;
