import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from "moment";
import DayView from "./DayView";

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
    } = this.props
    return (
        <View style={[styles.container, { width }]}>
            <FlatList
                renderItem={this.renderRow.bind(this)}
                data={items}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={200}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
});
export default Events;
