import PropTypes from 'prop-types';
import {
  StatisticSection,
  Title,
  StatisticsList,
  StatisticInfo,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticSection>
      {title && <Title>{title.toUpperCase()}</Title>}
      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <StatisticInfo key={id} style={{ backgroundColor: getColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticInfo>
        ))}
      </StatisticsList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
}
