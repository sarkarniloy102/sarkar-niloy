import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Utilities/Theme';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}> {/* Pass the theme directly */}
      <Body>
        anything
      </Body>
    </ThemeProvider>
  );
}

export default App;
