import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Content, Title } from "native-base";
import Header from "../../components/Header/CustomHeader";
import UserSlider from '../../components/Contacts/Contacts';
import CardScroll from "../../components/Card";
import GoogleMap from '../../components/GoogleMap'
import MapView from 'react-native-maps';
import Button from '../../components/Button/Button';

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
const markers = [
    {
      latlon: {
        latitude: 41.881832,
        longitude: -87.623177
      },
      title: 'Foo Place',
      subtitle: '1234 Foo Drive',
      image: 'https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png'
    },
    {
      latlon: {
        latitude: 41.434345,
        longitude: -87.546576
      },
      title: 'Foo Place2',
      subtitle: '1234 Foo Drive2',
      image: 'https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg'
    },
    {
      latlon: {
        latitude: 41.212121,
        longitude: -87.323232
      },
      title: 'Foo Place3',
      subtitle: '1234 Foo Drive3',
      image: 'https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg'
    },
    {
      latlon: {
        latitude: 41.012121,
        longitude: -87.343434
      },
      title: 'Foo Place4',
      subtitle: '1234 Foo Drive4',
      image: 'http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png'
    },
    {
      latlon: {
        latitude: 41.989898,
        longitude: -87.878787
      },
      title: 'Foo Place5',
      subtitle: '1234 Foo Drive5',
      image: 'https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png'
    },
  ];

const { height } = Dimensions.get('window');
const mainHeight = height - 50; 
let isLargeDevice = (height > 700) ? true : false;
let flexStyle = isLargeDevice ? {flex: 0.8} : {flex: 0.6}
let mapHeight = mainHeight * flexStyle.flex;

class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log({mainHeight}, {height}, mainHeight * flexStyle.flex)
        return (
            <Container>
                <Header 
                    transparent
                    title="bizintro"
                    showCenter
                    showLeft
                    showRight
                    styleContainer= {{marginVertical: 10}}
                    bodyComponent={<Image source={require('../../../assets/logo.png')} style={{height: 40, width: 160, flex :1}}/>}
                />
                <View style={{height: mainHeight}}>
                    <View style={{flex: 0.4}}>
                        <View style={styles.titleText}>
                            <Text style={styles.recentContactText}>Recent Contacts</Text>
                            <UserSlider items={contacts} />
                            <CardScroll items={cardArray} />
                        </View>
                    </View>
                    <View style={flexStyle}>
                        <GoogleMap 
                            defaultRegion={{
                                latitude: 41.881832,
                                longitude: -87.623177,
                                latitudeDelta: 2.0111,
                                longitudeDelta: 0.0150
                            }}
                            items={markers}
                            mapHeight={mapHeight}
                        />
                    </View>
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
        fontSize: 30
    },
    titleText: {
        flex: 1,
        textAlign: "left",
    },
    recentContactText: {
        color: "#cbc9d5",
        fontSize: 15,
        paddingLeft: 18
    },
    mapContainer: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default SearchScreen;
