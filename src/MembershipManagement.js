import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import {
//   Header,
  SearchBar,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ApprovalBadge,
} from './styles';
import Header from './Header';

const MembershipManagement = () => {
  const data = useMemo(
    () => [
      {
        no: 1,
        membershipNumber: 'Abc123',
        name: 'Mari Kim',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        approval: 'Approved',
        dormant: 'normal',
        division: 'invest',
        category: 'general individual',
        guid: 'U1JtXgAj5Q72Wn',
      },
      {
        no: 2,
        membershipNumber: 'Bcd123',
        name: 'kanaka sai raju',
        phone: '1234-010-5678',
        email: 'bd@naver.com',
        approval: 'Waiting-For-Approval',
        dormant: 'normal',
        division: 'invest',
        category: 'open individual',
        guid: 'SFJtXgAj5Q72Wn',
      },
      {
        no: 3,
        membershipNumber: 'egh123',
        name: 'sai',
        phone: '5678-010-1234',
        email: 'bed@naver.com',
        approval: 'Approved',
        dormant: 'normal',
        division: 'invest',
        category: 'general individual',
        guid: 'L2JtXgAj5Q72Wn',
      },
      {
        no: 4,
        membershipNumber: 'IG123',
        name: 'Raju',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        approval: 'Approved',
        dormant: 'normal',
        division: 'invest',
        category: 'open individual',
        guid: 'OPtXgAj5Q72Wn',
      },
      {
        no: 5,
        membershipNumber: 'OL123',
        name: 'Sonu',
        phone: '1234-5678-234',
        email: 'soiaabc@naver.com',
        approval: 'Waiting-For-Approval',
        dormant: 'normal',
        division: 'invest',
        category: 'general individual',
        guid: 'POJtXgAj5Q72Wn',
      },
      {
        no: 6,
        membershipNumber: 'PTRc123',
        name: 'MAni',
        phone: '93094-1234-5678',
        email: 'mani@naver.com',
        approval: 'Approved',
        dormant: 'normal',
        division: 'invest',
        category: 'ope individual',
        guid: 'LKJtXgAj5Q72Wn',
      },
      {
        no: 7,
        membershipNumber: 'PM123',
        name: 'Hello',
        phone: '1234-5678',
        email: 'hello@naver.com',
        approval: 'Waiting-For-Approval',
        dormant: 'normal',
        division: 'invest',
        category: 'general individual',
        guid: 'VBJtXgAj5Q72Wn',
      },
      {
        no: 8,
        membershipNumber: 'NVM123',
        name: 'Hai',
        phone: '010-5678',
        email: 'hai@naver.com',
        approval: 'Approved',
        dormant: 'normal',
        division: 'invest',
        category: 'general individual',
        guid: 'LSDMJtXgAj5Q72Wn',
      },
      // Add more data here as needed
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'NO', accessor: 'no' },
      { Header: 'Membership number', accessor: 'membershipNumber' },
      { Header: 'Member name/corporation name', accessor: 'name' },
      { Header: 'Phone number', accessor: 'phone' },
      { Header: 'Email ID', accessor: 'email' },
      {
        Header: 'Approval',
        accessor: 'approval',
        Cell: ({ cell: { value } }) => (
          <ApprovalBadge className={value.toLowerCase().replace(' ', '-')}>
            {value}
          </ApprovalBadge>
        ),
      },
      { Header: 'Dormant state', accessor: 'dormant' },
      { Header: 'Division', accessor: 'division' },
      { Header: 'Category', accessor: 'category' },
      { Header: 'GUID', accessor: 'guid' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
  );

  return (
    <div>
      <Header>
        <h2>Membership Management</h2>
      </Header>
      <div style={styles.container}>
      <div style={styles.filters}>

        
      {/* <font style={{"vertical-align":"inherit","margin-left":"230px"}}><font style={{"vertical-align": "inherit"}}>Membership Management</font></font> */}
      <div className='containerBlock'>
        <div>
        <li className='liststyle'> <label>Join date:</label>
          <input type="text" name="joinDate" value="entire" className='inputstyles'/> 
          <input type="text" name="joinDate" value="today" className='inputstyles'/> 
          <input type="text" name="joinDate" value="yesterday" className='inputstyles'/> 
          <input type="text" name="joinDate" value="1 week" className='inputstyles'/>
          <input type="text" name="joinDate" value="1 month" className='inputstyles'/> 
          <input type="text" name="joinDate" value="3 months" className='inputstyles'/> 
          <input type="date" name="startDate" />
          <input type="date" name="endDate" />
          </li>
        </div>
        <div>
        <li><label>Channel:</label>
          <input type="checkbox" /> entire
          <input type="checkbox" /> PC
          <input type="checkbox" /> Mobile App
          <input type="checkbox" /> Mobile Web
          </li>
        </div>
        <li><label>Channel:</label>
          <input type="checkbox" /> entire
          <input type="checkbox" /> waiting for approval
          <input type="checkbox" /> Approval
          <input type="checkbox" /> Approval denied
          </li>
        
        
        <div>
            <li>
          <label>Posting:</label>
          <input type="checkbox" /> entire
          <input type="checkbox" /> posting
          <input type="checkbox" /> Not posted
          </li>
        </div>
        <div>
        <li>
          <input type="text" placeholder="Please enter your search term." />
          <button>search</button>
          <button>reset</button>
          </li>
        </div>
      </div>
      <div style={styles.memberList}>
        <div className='hybrid'>
          <span > Member List (Total 100 people | 10 waiting for approval)</span>
          {/* <div>
            <span>Sorted by date of registration</span>
            <span>View 50 each</span>
            <button>excel download</button>
          </div> */}
        </div>
        {/* <table style={{    "margin-left": "233px",
    "margin-top": "40px"}}>
          <thead>
            <tr>
              <th>NO</th>
              <th>Membership</th>
              <th>Member name/corp...</th>
              <th>phone number</th>
              <th>Email ID</th>
              <th>Approval</th>
              <th>dormant st...</th>
              <th>division</th>
              <th>category</th>
              <th>GUID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaaabc@naver.com</td>
              <td>Approved</td>
              <td>normal</td>
              <td>invest</td>
              <td>general in...</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaaabc@naver.com</td>
              <td>Waiting for approval</td>
              <td>normal</td>
              <td>invest</td>
              <td>individual</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaaabc@naver.com</td>
              <td>Waiting for approval</td>
              <td>normal</td>
              <td>invest</td>
              <td>individual</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaaabc@naver.com</td>
              <td>Waiting for approval</td>
              <td>normal</td>
              <td>invest</td>
              <td>individual</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaaabc@naver.com</td>
              <td>Waiting for approval</td>
              <td>normal</td>
              <td>invest</td>
              <td>individual</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaPaaabc@naver.com</td>
              <td>Waiting for approval</td>
              <td>normal</td>
              <td>invest</td>
              <td>individual</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abc123</td>
              <td>Marie Kim</td>
              <td>010-1234-5678</td>
              <td>aaaaaaaabc@naver.com</td>
              <td>Waiting for approval</td>
              <td>normal</td>
              <td>invest</td>
              <td>individual</td>
              <td>U1JtXgAj5Q72Wn</td>
            </tr>
          </tbody>
        </table> */}
        <div>
        </div>
          <button>Change approval</button>
          <button>save</button>
        </div>
      </div>
    </div>
      <SearchBar>
        <div>
          <input type="text" placeholder="Please enter your search term." />
          <button>search</button>
          <button>reset</button>
        </div>
        <div>
          <select>
            <option value="date">Sorted by date of registration</option>
          </select>
          <select>
            <option value="50">View 50 each</option>
          </select>
          <button>excel download</button>
        </div>
      </SearchBar>
      <TableContainer>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      background: '#2a39580d',
      marginLeft:"238px",
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    filters: {
      marginBottom: '20px',
    },
    memberList: {
      marginTop: '20px',
    },
  };

export default MembershipManagement;
