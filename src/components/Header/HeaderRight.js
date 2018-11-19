import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Icon, Thumbnail, Button } from "native-base";

const HeaderRight = () => {
    return (
        <View style={styles.container}>
            <View style={styles.plusContainer}>
                <Button transparent>
                    <Icon name='add' style={styles.iconSize}/>
                </Button>
            </View>
            <Thumbnail style={styles.thumbnail} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    plusContainer: {
        justifyContent: 'space-around',
        paddingRight:10
    },
    thumbnail: {
        height: 50,
        width: 50,
    },
    iconSize:{
        fontSize: 35,
        color: "#bcbcbe"
    }
});

export default HeaderRight;
