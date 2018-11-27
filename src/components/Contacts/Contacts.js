import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
            <View style={styles.scrollViewContainer} >
                <FlatList 
                    style={styles.flatListContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    extraData={items}
                    keyExtractor={(value , key) => key.toString()}
                    renderItem={(item) => <Items item={item} avatar thumbnailContainerStyle={styles.thumbnailContainer} />}
                />
            </View>
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
        paddingTop: 10,
        flex: 0.3
    },
    flatListContainer:{
        flex: 1
    },
    thumbnailContainer:{
        backgroundColor: "lightgrey", 
        resizeMode: "cover",
    }
});

export default Contacts;
