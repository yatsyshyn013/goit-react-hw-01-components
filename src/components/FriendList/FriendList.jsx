import { FriendListItem } from "./FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import {FriendListSection, ListItem} from "./FriendList.styled"

export const FriendList = ({friends}) => {
    
    return (
        <FriendListSection >
            {friends.map(({ avatar, name, isOnline, id }) => (
                <ListItem key={id}>
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
                </ListItem>
            ))}
           
        </FriendListSection>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
        
    )
}