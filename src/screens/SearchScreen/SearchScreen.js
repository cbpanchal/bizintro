//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Header, 
    Container, 
    Content,
    Left, 
    Body, 
    Title, 
    List, 
    ListItem,
    Thumbnail 
} from "native-base";
import Contacts from '../../components/Contacts/Contacts';
import CardContainer from '../../components/Cards/CardContainer';

const dataArray = [
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
    {
        uri: "http://www.st-michaelsacademy.com/images/diogo.png"
    },
];

const cardArray = [
    {
        header: "header",
        body: "Body text",
        footer: "footer"
    },
    {
        header: "header",
        body: "Body text",
        footer: "footer"
    },
    {
        header: "header",
        body: "Body text",
        footer: "footer"
    },
    {
        header: "header",
        body: "Body text",
        footer: "footer"
    },
    {
        header: "header",
        body: "Body text",
        footer: "footer"
    },
    {
        header: "header",
        body: "Body text",
        footer: "footer"
    },

];

// create a component
class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item}) => (
        <Contacts contacts={item} />
    )

    _renderCard= ({item}) => (
        <CardContainer cards={item} />
    )
    
    render() {
        return (
            <Container>
                <Header 
                    transparent 
                    androidStatusBarColor="#fff" 
                    iosBarStyle="dark-content"
                >
                    <Body style={styles.headerContainer}>
                        <Title style={styles.headerTitle}>bizintro</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.titleText}>
                        <Text style={styles.recentContactText}>Recent Contacts</Text>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.contactsScrollView}
                    >
                        <FlatList
                           style={{flex: 1}}
                            horizontal={true}
                            data={dataArray}
                            extraData={dataArray}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </ScrollView>
                    <ScrollView
                        contentContainerStyle={styles.cardScrollView}
                    >
                        <FlatList
                           style={{flex: 1}}
                            horizontal={true}
                            data={cardArray}
                            extraData={cardArray}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderCard}
                            showsHorizontalScrollIndicator={false}
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headerContainer: {
        justifyContent: "center", 
        alignItems: "center"
    },
    headerTitle: {
        color: "#425563",
        fontWeight: "bold",
        fontSize: 30
    },
    titleText: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 24
    },
    contactsScrollView: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
        paddingRight: 7
    },
    cardScrollView: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 15,
        paddingLeft: 7,
        paddingRight: 7
    },
    recentContactText: {
        color: "#cbc9d5",
        fontSize: 15
    }
});

//make this component available to the app
export default SearchScreen;
