import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import DisplayContent from './DisplayContent';
import useGetProjectAssignees from '../../hooks/taskServices/useGetProjectAssignees';
import { useGetPersonalPerformance } from '../../hooks/taskServices/useGetPersonalPerformance';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.text.secondary};
`;

const StaffPerformancePage = () => {
  const [assigneesData, loading] = useGetProjectAssignees('M04');
  const [selectedEmail, setEmail] = useState(null);
  const handleSetEmail = (email) => {
    setEmail(email);
    console.log(selectedEmail);
  };
  const [performance] = useGetPersonalPerformance('M04', selectedEmail);
  console.log(performance);
  return (
    <Container>
      <List
        assigneesData={assigneesData}
        cardOnClick={handleSetEmail}
        loading={loading}
      />
      <DisplayContent performanceData={performance} />
    </Container>
  );
};

export default StaffPerformancePage;
