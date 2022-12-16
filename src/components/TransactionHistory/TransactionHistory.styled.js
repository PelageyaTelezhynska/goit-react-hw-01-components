import styled from 'styled-components';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-collapse: collapse;
  border-radius: 4px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

export const Thead = styled.thead`
  color: #fff;
`;

// export const TrHead = styled.tr`
//   border-radius: 4px 4px 0 0;
// `;

export const Th = styled.th`
  background-color: #00bcd5;
  width: 240px;
  height: 44px;

  :first-child {
    border-top-left-radius: 4px;
  }

  :last-child {
    border-top-right-radius: 4px;
  }
`;

export const TrList = styled.tr`
  color: #7b828a;
  background-color: #fff;
  height: 44px;

  :nth-child(even) {
    background-color: #ecf1f4;
  }

  :last-child td:first-child {
    border-bottom-left-radius: 4px;
  }

  :last-child td:last-child {
    border-bottom-right-radius: 4px;
  }
`;
