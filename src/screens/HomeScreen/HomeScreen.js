import React, { Component } from 'react';
import {Modal, Text, TouchableOpacity, View, Alert, StyleSheet} from 'react-native';
import { Container, Content, Fab, Icon } from "native-base";

import ModalView from '../../components/Modal/ModalView';

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
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        navigation.goBack()
                    }}
                >
                    <ModalViewContainer />
                </Modal>
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <Fab
                        active={true}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#3B95E5' }}
                        position="bottomRight"
                        onPress={() => { this.setModalVisible(!this.state.modalVisible)}}>
                        <Icon type="MaterialIcons" name="add" />
                    </Fab>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default HomeScreen;
