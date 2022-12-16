import styled from 'styled-components';

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? '#48af4d' : '#f9564a')};

  margin-right: 12px;
`;

export const Photo = styled.img`
  display: block;
  width: 72px;
  border-radius: 4px;
  margin-right: 12px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #122236;
`;
