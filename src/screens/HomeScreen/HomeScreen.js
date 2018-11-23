import React, { Component } from 'react';
import { Modal } from 'react-native';
import ModalView from '../../components/Modal/ModalView';
import { Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Container, Content, Icon, Title , Fab, View} from "native-base";
import PlusIcon from "../../components/Fabs/Plus"
import Header from "../../components/Header/CustomHeader";
import MonthPicker from "../../components/MonthPicker";
import { monthNames } from "../../variables";
import Calender from "../../components/Calender"
import Button from '../../components/Button/Button';
import ReservationsList from "../../components/Events";

let { width } = Dimensions.get('window')
const events = [
    { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
]

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        const windowSize = Dimensions.get('window');
        this.viewHeight = windowSize.height;
        this.viewWidth = windowSize.width;
        this.state = {
          items: {},
          showAllDays: false,
          modalVisible: false,
        };
        this.handleMonthChange = this.handleMonthChange.bind(this);
    }
    handleMonthChange(){
        this.setState((prevState) => {
            return {
                ...prevState,
                showAllDays: !prevState.showAllDays
            }
        });
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
                    leftComponent={<Button styleContainer={styles.buttonContainer}><Image source={require('../../../assets/menu.png')} style={{height: 80, width: 80}} /></Button>}
                    rightComponent={<Button><Image source={require('../../../assets/search.png')} style={{height: 80, width: 80}} /></Button>}
                    bodyComponent={
                        <View style={styles.headerBodyContainer}>
                            <Button styleContainer ={styles.buttonStyle} onPress={this.handleMonthChange}>
                                <Text style={styles.textIconColor}>JUNE</Text>
                                <Icon style={styles.textIconColor} type="MaterialCommunityIcons" name={this.state.showAllDays ? `menu-up`: `menu-down`}/>
                            </Button>
                        </View>
                    }
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
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <Calender firstDay={1} items={events} showAllDays={this.state.showAllDays}/>
                    <ReservationsList  items={this.props.items} width={this.viewWidth} />
                    <PlusIcon onPress ={() => { this.setModalVisible(!this.state.modalVisible)}} />
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
        paddingHorizontal: 0
    },
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerBodyContainer: {
        width: "100%",
        alignItems: 'center',
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: "center"
    },
    buttonStyle: {
        alignItems: 'center',
        flexDirection:'row', 
        flexWrap:'wrap',
    },
    textIconColor: {
        color: "#2e2e39"
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
