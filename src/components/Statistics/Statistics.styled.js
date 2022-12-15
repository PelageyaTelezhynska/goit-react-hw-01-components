import styled from 'styled-components';

export const StatisticSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  color: #122236;
  font-weight: 700;
  font-size: 24px;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticInfo = styled.li`
  padding: 16px 24px;
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 16px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: #fff;
`;
