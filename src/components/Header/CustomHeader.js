import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from "react-native-elements";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";

const CustomHeader = (props) => {
    return (
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={<HeaderLeft {...props}/>}
                centerComponent={<HeaderCenter />}
                rightComponent={<HeaderRight />}
                innerContainerStyles={styles.innerContainer}
                outerContainerStyles={styles.outerContainer}
            />
        );
};


const styles = StyleSheet.create({
    innerContainer: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    outerContainer: {
        marginTop: 20,
        padding: 0,
        paddingHorizontal: 10,
        borderBottomWidth: 0,
        backgroundColor:"transparent"
    }
});

export default CustomHeader;
