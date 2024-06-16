import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Nav = styled.nav`
  width: 250px;
  background: #343a40;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const NavLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const NavItem = styled.div`
  margin-bottom: 10px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// export const Header = styled.div`
//   margin-bottom: 20px;
// `;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left:238px;

  & > div {
    display: flex;
  }

  input,
  select,
  button {
    margin-right: 10px;
    padding: 10px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const TableContainer = styled.div`
  margin-top: 20px;
  margin-left:238px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid #ddd;
`;

export const TableHead = styled.thead`
  background-color: #f4f4f4;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: left;
  &:last-child {
    border-right: 0;
  }
`;

export const ApprovalBadge = styled.span`
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  &.approved {
    background-color: green;
  }
  &.waiting-for-approval {
    background-color: orange;
  }
  &.approval-denied {
    background-color: red;
  }
  &.normal {
    background-color: blue;
  }
`;
