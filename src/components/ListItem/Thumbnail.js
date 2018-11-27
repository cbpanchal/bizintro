import React  from 'react';
import { Dimensions } from 'react-native';
import { Thumbnail } from "native-base";

const { height } = Dimensions.get("window");
let isLargeDevice = (height > 700) ? true : false;
let thumbnailSize = !isLargeDevice ? {height: 50, width: 50} : {height: 60, width: 60}

const Component = ({...props}) => {
    return (
        <Thumbnail {...props} style={[thumbnailSize, {backgroundColor: "#eee"}]} />
    );
};

export default Component;
