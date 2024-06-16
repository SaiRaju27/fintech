import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import MembershipManagement from './MembershipManagement';
import { Container, MainContent } from './styles';

const App = () => {
  return (
    <Router>
      <Container>
        <SideNav />
        <MainContent>
          <Routes>
            <Route path="/" exact element={<MembershipManagement/>} />
          </Routes>
        </MainContent>
      </Container>
    </Router>
  );
};

export default App;
