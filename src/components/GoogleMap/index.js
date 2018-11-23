import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Marker from "./MarkerItem";

const GoogleMap = ({items, defaultRegion, mapHeight, ...props}) => {
    return (
        <View style={[styles.container, {height: mapHeight}]}>
            <MapView
                style={styles.mapView}
                zoomEnabled
                region={defaultRegion}
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
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default GoogleMap;
