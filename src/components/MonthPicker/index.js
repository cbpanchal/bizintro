import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

class MonthPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { items, onValueChange, selectedValue } = this.props;
        const pickerItems = items.map((itemValue, key) =>  <Picker.Item key={key} label={itemValue} value={itemValue} />)
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ width: 100 }}
                    onValueChange={onValueChange}>
                    {pickerItems}
                </Picker>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width:"100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export default MonthPicker;
