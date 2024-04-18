import { Container, CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/Header';
import Results from './components/Results';
import SearchFilters from './components/SearchFilters';
import { useState } from 'react';

function App() {
  const [searchFilters, setSearchFilters] = useState({
    weight: 0,
    reliability: 4,
    courier: 'DHL'
  });
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <SearchFilters searchFilters={searchFilters} setSearchFilters={setSearchFilters} />
        <Results searchFilters={searchFilters} />
      </Container>
    </>
  );
}

export default App;
