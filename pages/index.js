import styled from 'styled-components';
import Clock from './clock'
import Counter from './counter'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react';

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = ({ lastUpdate, light }) => (
  <StyledContainer>
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <h1>Next.js + Semantic UI!</h1>
    </div>
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  </StyledContainer>
);

const mstp = (state) => {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mstp)(Home);
