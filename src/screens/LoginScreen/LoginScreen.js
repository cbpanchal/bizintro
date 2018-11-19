import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Container, Button, View, Text, Form, Item, Label, Input } from 'native-base';
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Bubble from "./Bubble";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding"  style={{flex: 1}}>
                    <BackgroundImage source={require("../../assets/images/background/drawer-bg.jpg")}>
                        <ScrollView contentContainerStyle={styles.container}>
                                <View style={styles.bubbleContainer}>
                                    <Bubble />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.startText}>Get Started!</Text>
                                </View>
                                <Form style={styles.formContainer}>
                                    <Item floatingLabel style={styles.itemContainer}>
                                        <Label style={styles.label}>Username</Label>
                                        <Input style={styles.input} />
                                    </Item>
                                    <Item floatingLabel style={styles.itemContainer}>
                                        <Label style={styles.label}>Password</Label>
                                        <Input style={styles.input} />
                                    </Item>
                                    <Button full style={styles.buttonContainer} onPress={this.handleSubmit}>
                                        <Text uppercase={false} style={styles.buttonText}>Sign In</Text>
                                    </Button>
                                    <Button full transparent>
                                        <Text 
                                        uppercase={false} 
                                        style={styles.buttonText}>
                                            Don't have account? Sign Up
                                        </Text>
                                    </Button>
                                </Form>
                        </ScrollView>
                    </BackgroundImage>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        backgroundColor: 'rgba(80, 210, 194, 0.8)',
    },
    bubbleContainer: {
        marginTop: 103,
    },
    textContainer: {
        marginVertical: 15,
        alignItems: 'center',
    },
    startText: {
        color: "#fff",
        fontSize: 30,
        fontFamily: 'Roboto-Regular',
    },
    formContainer: {
        backgroundColor: 'rgba(80, 210, 194, 0.6)',
    },
    label: {
        color: "#fff",
        paddingLeft: 20,
        fontSize: 25
    },
    itemContainer: {
        marginLeft: 0,
    },
    input: {
        color: "#fff",
        height: 70,
        paddingLeft: 20,
    },
    buttonContainer: {
        backgroundColor: "#6562a4",
        height: 50,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        color: "#fff"
    }
});

export default LoginScreen;
