import { Avatar, FriendName, FriendsContainer, OfflineStatus, OnlineStatus } from "./FriendListItem.styled"
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
   
    return (
        
        <FriendsContainer>
            {isOnline === true
                ? <OnlineStatus></OnlineStatus>
                : <OfflineStatus></OfflineStatus>
            }
            <Avatar src={avatar} alt="User avatar" width="48" />
            <FriendName >{name}</FriendName>
        </FriendsContainer>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}