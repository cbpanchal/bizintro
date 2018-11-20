//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from "native-base";
import Header from "../../components/Header/CustomHeader";
import UserSlider from '../../components/Contacts/Contacts';
import CardScroll from "../../components/Card";

const contacts = [
    {
        uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png"
    },
    {
        uri: "https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg"
    },
    {
        uri: "https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg"
    },
    {
        uri: "http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png"
    },
    {
        uri: "https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png"
    },
    {
        uri: "https://assets.entrepreneur.com/images/misc/1485880429_Grant%20Cardone_alt.png"
    },
    {
        uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png"
    },
    {
        uri: "https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg"
    },
    {
        uri: "https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg"
    },
    {
        uri: "http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png"
    },
    {
        uri: "https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png"
    },
    {
        uri: "https://assets.entrepreneur.com/images/misc/1485880429_Grant%20Cardone_alt.png"
    },
];
const cardArray = [
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },

];
class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header 
                    transparent
                    title="bizintro"
                    showCenter
                />
                <Content>
                    <View style={styles.titleText}>
                        <Text style={styles.recentContactText}>Recent Contacts</Text>
                    </View>
                    <UserSlider items={contacts} />
                    <CardScroll items={cardArray} />
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    titleText: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 18
    },
    recentContactText: {
        color: "#cbc9d5",
        fontSize: 15
    }
});

export default SearchScreen;
