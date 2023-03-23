import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, AvatarDiv } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return <ProfileCard>
      <Description class="description" >
        <AvatarDiv>
    <Avatar
      src={avatar}
      alt="User avatar"
      class="avatar"
          />
          </AvatarDiv>
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </Description>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</ProfileCard>

}

Profile.PropTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}