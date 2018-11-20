import React from 'react';
import { StyleSheet } from 'react-native';
import ScrollView from "../ScrollView";
import FlatList from "../FlatList";
import Items from "./CardItems";

const CardScroll = ({ items }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer} >
            <FlatList 
                style={styles.flatListContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                extraData={items}
                keyExtractor={(value , key) => key.toString()}
                renderItem={(item) => <Items item={item.item} transparent />}
            />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 15,
        paddingLeft: 7,
        paddingRight: 7
    },
    flatListContainer:{
        flex: 1
    }
});


export default CardScroll;
