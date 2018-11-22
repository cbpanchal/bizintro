import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from "moment";
import DayView from "./DayView";
import CalendarCard from '../Calendar/CalendarCard';
import { ScrollView } from 'react-native-gesture-handler';

const CALENDER_HEIGHT = 2400;

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderRow({ index, item }) {
    const { width, format24h, initDate, scrollToFirst } = this.props
    const date = moment(initDate).add(index - this.props.size, 'days')
    return (
      <DayView
        date={date}
        index={index}
        format24h={format24h}
        renderEvent={this.props.renderEvent}
        eventTapped={this.props.eventTapped}
        events={item}
        width={width}
        styles={this.styles}
        scrollToFirst={scrollToFirst}
      />
    )
  }
  render() {
    const {
        width,
        items,
        initDate
    } = this.props;
    const offset = CALENDER_HEIGHT / 24
    return (
        <View style={[styles.container, { width }]}>
          <ScrollView>
            <Text
              style={[styles.timeLabel, { top: offset * 1 - 6 }]}
              >
              9:00
            </Text>
            <View
                style={[styles.line, { top: offset * 1, width: width - 20 }]}
                />
              <CalendarCard 
                styleContainer={{ marginLeft: 60, marginTop: 70, top: offset * 1, width: width/ 1.29}}
                eventName="Lunch Break"
                location="Vegano Cafe"
                color="#96c3cf"
                isLocationEvent
                />
            <Text
              style={[styles.timeLabel, { top: offset * 2 - 6 }]}
              >
              10:00
            </Text>
            <View
                style={[styles.line, { top: offset * 2, width: width - 20 }]}
                />
            <Text
              style={[styles.timeLabel, { top: offset * 3 - 6 }]}
              >
              11:00
            </Text>
            <View
                style={[styles.line, { top: offset * 3, width: width - 20 }]}
                />
              <CalendarCard 
                styleContainer={{ marginLeft: 60, marginTop: 160, marginBottom: 15, width: width/ 1.29}}
                eventName="Tentative: Introduction with John Albrerts"
                location="You are still waiting to hear back from John about this meeting."
                color="#ffa200"
                style={{height: 285}}
                />
            <Text
              style={[styles.timeLabel, { top: offset * 4 - 6 }]}
              >
              12:00
            </Text>
            <View
                style={[styles.line, { top: offset * 4, width: width - 20 }]}
                />
            <Text
              style={[styles.timeLabel, { top: offset * 5 - 6 }]}
              >
              13:00
            </Text>
            <View
                style={[styles.line, { top: offset * 5, width: width - 20 }]}
                />
            <Text
              style={[styles.timeLabel, { top: offset * 6 - 6 }]}
              >
              14:00
            </Text>
            <View
                style={[styles.line, { top: offset * 6, width: width - 20 }]}
                />
            </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9fa',
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: 'rgb(170,170,170)',
      fontSize: 15,
      fontFamily: 'Helvetica Neue',
      fontWeight: '100'
  },
  line: {
    height: 1,
    position: 'absolute',
    left: 60 - 1,
    backgroundColor: 'rgba(195, 198, 205, 0.35)',
}
});
export default Events;
