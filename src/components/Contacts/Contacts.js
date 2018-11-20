import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScrollView from "../ScrollView";
import FlatList from "../FlatList";
import Items from "./Items";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { items } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.scrollViewContainer} >
                <FlatList 
                    style={styles.flatListContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    extraData={items}
                    keyExtractor={(value , key) => key.toString()}
                    renderItem={(item) => <Items item={item} avatar thumbnailContainerStyle={styles.thumbnailContainer} />}
                />
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 15,
        paddingRight: 7
    },
    flatListContainer:{
        flex: 1
    },
    thumbnailContainer:{
        backgroundColor: "lightgrey", 
        resizeMode: "cover"
    }
});

export default Contacts;
