import PropTypes from 'prop-types';
import {StatisticsSection, StatList, StatListItem, Title, ListItemLabel, ListItemInfo} from "../Statistics/Statistics.styled"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  
    return (
        <StatisticsSection >
        {title && <Title>{title}</Title>}

            <StatList >
                
                {stats.map(stat => (
                    <StatListItem style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
                        <ListItemLabel >{stat.label}</ListItemLabel>
                        <ListItemInfo >{stat.percentage}%</ListItemInfo>
                    </StatListItem>
                ))}
            
            </StatList>
        </StatisticsSection>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
        
    ).isRequired

}