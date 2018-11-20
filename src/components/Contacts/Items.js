
import React from 'react';
import List from "../ListItem/List";
import ListItem from "../ListItem/ListItem";
import Thumbnail from "../ListItem/Thumbnail";

const Items = ({item, thumbnailContainerStyle, ...props}) => {
    return (
        <List>
            <ListItem {...props}>
                <Thumbnail source={{ uri: `${item.item.uri}` }} style={thumbnailContainerStyle}/>
            </ListItem>
        </List>
    );
};

export default Items;
