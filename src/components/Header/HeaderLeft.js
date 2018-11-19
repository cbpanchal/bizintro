import React from 'react';
import { StyleSheet, View } from "react-native";
import { Icon } from 'native-base'

const HeaderLeft = (props) => {
    return (
        <View style={styles.container}>
           <Icon name="menu" color="#bcbcbe" iconStyle={styles.iconSize} onPress={() => props.openDrawer()}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: 0
    },
    iconSize: {
        fontSize: 35
    }
});

export default HeaderLeft;
