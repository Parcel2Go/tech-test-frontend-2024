import { Container, CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/Header';
import Results from './components/Results';
import SearchFilters from './components/SearchFilters';
import { QuoteContextProvider } from './contexts/quote-context';
import { FilterContextProvider } from './contexts/quote-filters';

function App() {
  return (
    <>
    <QuoteContextProvider>
      <FilterContextProvider>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <SearchFilters />
        <Results />
      </Container>
      </FilterContextProvider>
      </QuoteContextProvider>
    </>
  );
}

export default App;
