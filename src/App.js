import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [summary, saveSummary] = useState({
    quote: 0,
    data: {
      trademark: '',
      year: '',
      plan: ''
    }
  });

  const {data} = summary;

  return (
    <Container>
      <Header
      title='Quote of insurance'
      />
      
      <FormContainer>
        <Form
          saveSummary={saveSummary}
        />
        <Summary 
          data={data}
        />
      </FormContainer>
    </Container>
  );
}

export default App;
