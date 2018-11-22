import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Marker from "./MarkerItem";

const GoogleMap = ({items, ...props}) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapView}
                zoomEnabled
                region={{
                    latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
                }}
            >
            {
                items.map((item, key) => {
                    return(<Marker {...item} key={key}/>)
                })
            }
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default GoogleMap;
