import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* justify-content: center; */
  align-items: center;
  width: 280px;
  border-radius: 4px;
`;

export const FriendItem = styled.li`
  padding: 8px 12px;
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
