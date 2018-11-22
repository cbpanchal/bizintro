import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { Container, Content, Icon } from "native-base";
import { Agenda } from '../../components/Calender';
import PlusIcon from "../../components/Fabs/Plus"
import Header from "../../components/Header/CustomHeader";
import MonthPicker from "../../components/MonthPicker";
import { monthNames } from "../../variables";
import Events from "../../components/Events";
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
        this.state = {
          items: {}
        };
    }
    loadItems(day) {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
              const numItems = Math.floor(Math.random() * 5);
              for (let j = 0; j < numItems; j++) {
                this.state.items[strTime].push({
                  name: 'Item for ' + strTime,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          console.log(this.state.items);
          const newItems = {};
          Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
          this.setState({
            items: newItems
          });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }
    renderItem(item) {
        return (
          <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
    }
    
    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }
    
    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }
    
    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
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
                    bodyComponent={<MonthPicker items={monthNames}/>}
                />
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <Agenda
                        items={events}
                        selected={'2018-11-17'}
                        renderItem={this.renderItem.bind(this)}
                        renderEmptyDate={this.renderEmptyDate.bind(this)}
                        rowHasChanged={this.rowHasChanged.bind(this)}
                        hideKnob={true}
                    />
                    <PlusIcon />
                </Content>
            </Container>
        );
    }  
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
    },
    iconSize: {
        fontSize: 35
    }
});

export default HomeScreen;
