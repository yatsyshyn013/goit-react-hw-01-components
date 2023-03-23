import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, ProfileName,  ProfileInfo, ProfileStats, ProfileStatsItem, ProfileLabel, ProfileQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return <ProfileCard>
      <Description class="description" >
        
    <Avatar
      src={avatar}
      alt="User avatar"
      class="avatar"
          />
    <ProfileName >{username}</ProfileName>
    <ProfileInfo >@{tag}</ProfileInfo>
    <ProfileInfo >{location}</ProfileInfo>
  </Description>

  <ProfileStats >
    <ProfileStatsItem>
      <ProfileLabel >Followers</ProfileLabel>
      <ProfileQuantity class="quantity">{stats.followers}</ProfileQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileLabel >Views</ProfileLabel>
      <ProfileQuantity class="quantity">{stats.views}</ProfileQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileLabel >Likes</ProfileLabel>
      <ProfileQuantity class="quantity">{stats.likes}</ProfileQuantity>
    </ProfileStatsItem>
  </ProfileStats>
</ProfileCard>

}

Profile.propTypes = {
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