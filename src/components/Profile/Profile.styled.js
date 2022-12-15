import styled from 'styled-components';

export const ProfileInfo = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
`;

export const UserPhoto = styled.img`
  display: block;
  width: 112px;
  border-radius: 50%;
  margin-bottom: 36px;
`;

export const UserName = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  color: #122236;
`;

export const Tag = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #949fab;
`;

export const Location = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #949fab;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%
  background-color: #f3f6f9;
`;

export const StatsItem = styled.li`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 400;
  color: #949fab;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #122236;
`;
