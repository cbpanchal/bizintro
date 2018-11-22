import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Lines from "./Lines";
const LEFT_MARGIN = 60 - 1;
const CALENDER_HEIGHT = 2400;
const TEXT_LINE_HEIGHT = 17;

class DayView extends Component {
    constructor(props) {
        super(props);
        const width = props.width - LEFT_MARGIN;
        this.state = {};
    }
    
    render() {
        const { width, format24h } = this.props;
        return (
            <View style={styles.contentStyle}>
                <Lines width={width} format24h={format24h} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentStyle: {
        backgroundColor: '#ffff',
        height: CALENDER_HEIGHT + 10
    }
});


export default DayView;
