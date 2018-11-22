import React from 'react';
import { StyleSheet } from "react-native";
import { Header, Body, Title, Subtitle, Left, Icon, Right } from "native-base";
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
    leftComponent,
    rightComponent,
    bodyComponent,
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
                <Left>
                    {leftComponent}
                </Left>
            )}
            {showCenter &&
            (<Body>
                {bodyComponent}
            </Body>)}
            {showRight && (
                <Right>
                    {rightComponent}
                </Right>
            )}
        </Header>
        );
};
const styles = StyleSheet.create({
    leftIconSize: {
        fontSize: 35
    },
    bodyContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
        textAlign: "center"
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
