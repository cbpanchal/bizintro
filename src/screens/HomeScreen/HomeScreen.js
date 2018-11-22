import React, { Component } from 'react';
import {Modal} from 'react-native';
import ModalView from '../../components/Modal/ModalView';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, Icon, Title , Fab, View} from "native-base";
import PlusIcon from "../../components/Fabs/Plus"
import Header from "../../components/Header/CustomHeader";
import CalendarCard from '../../components/Calendar/CalendarCard';

class HomeScreen extends Component {
    constructor(props) {
       super(props)
       this.state = {
            modalVisible: false,
       }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header
                    transparent
                    showLeft
                    showRight
                    showCenter
                    leftComponent={<Icon name="menu" color="#bcbcbe" iconStyle={styles.iconSize}/>}
                    rightComponent={<Icon name="search" iconStyle={styles.iconSize} />}
                    bodyComponent={<Title style={styles.bodyContainerTitle}>Body</Title>}
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}
                >
                    <ModalView navigation= {navigation} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
                </Modal>
                <View style={styles.calendarCardContainer}>
                    <CalendarCard />
                </View>
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <PlusIcon 
                        onPress ={() => { this.setModalVisible(!this.state.modalVisible)}}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
    },
    iconSize: {
        fontSize: 35
    },
    calendarCardContainer: {
        paddingTop: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 25
    }
});

export default HomeScreen;
