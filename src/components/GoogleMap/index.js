import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Marker from "./MarkerItem";
import CustomMarker from './CustomMarker';
import getScreenSize from '../../util/ScreenSize';

const { height } = Dimensions.get("window");
const deviceSize = getScreenSize(height);

let defaultMapHeightHome, mapStyle;

const GoogleMap = ({items, zoomEnabled, isHome, markerImage, showsCompass, defaultRegion, changedRegion, mapHeight, customMapStyle, ...props}) => {
    defaultMapHeightHome = deviceSize === "isVeryLarge" ? 225 : deviceSize === "isLarge" ? 180 : 95
    mapStyle = isHome && { height: mapHeight - defaultMapHeightHome} || { flex: 1 }
    return (
        <View style={[styles.container, mapStyle ]}>
            <MapView
                style={styles.mapView}
                zoomEnabled={zoomEnabled}
                showsCompass={showsCompass}
                region={changedRegion}
                initialRegion={defaultRegion}
                customMapStyle= {customMapStyle}
                showsUserLocation
            >
            { items &&
                items.map((item, key) => (
                    isHome ? 
                            <Marker 
                                {...item} 
                                image={item.imageSrc}
                                key={key}
                            />
                        : 
                            <CustomMarker 
                                {...item} 
                                image={markerImage}
                                key={key}
                                item={item}
                            />
                    )
                )
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
