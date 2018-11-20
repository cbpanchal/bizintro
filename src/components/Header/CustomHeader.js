import React from 'react';
import { StyleSheet } from "react-native";
import { Header, Body, Title, Subtitle } from "native-base";
const CustomHeader = ({ 
    transparent, 
    androidStatusBarColor, 
    iosBarStyle, 
    showLeft, 
    showCenter, 
    showRight, 
    title, 
    subTitle,
    showSubtitle,
    openDrawer,
    ...props }) => {
    return (
        <Header  
            transparent={transparent}
            androidStatusBarColor={androidStatusBarColor}
            iosBarStyle={iosBarStyle}
            style={styles.headerContainer}
        >
            {showLeft && 
            (
                <Left style={styles.leftContainer}>
                    <Icon name="menu" color="#bcbcbe" iconStyle={styles.leftIconSize} onPress={() => openDrawer()}/>
                </Left>
            )}
            {showCenter &&
            (<Body style={styles.bodyContainer}>
                <Title style={styles.bodyContainerTitle}>{title}</Title>
                {showSubtitle && <Subtitle>{subTitle}</Subtitle>}
            </Body>)}
        </Header>
        );
};
const styles = StyleSheet.create({
    headerContainer:{
        marginBottom:10
    },
    leftContainer: {
        paddingLeft: 0
    },
    leftIconSize: {
        fontSize: 35
    },
    bodyContainer: {
        justifyContent: "center", 
        alignItems: "center"
    },
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
        fontSize: 30
    }
});
CustomHeader.defaultProps = {
    transparent: false,
    androidStatusBarColor: "#fff",
    iosBarStyle: "dark-content"
}
export default CustomHeader;
