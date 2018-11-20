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
                    latitude: 41.881832,
                    longitude: -87.623177,
                    latitudeDelta: 2.0111,
                    longitudeDelta: 0.0150,
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
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default GoogleMap;
