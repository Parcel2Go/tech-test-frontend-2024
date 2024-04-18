import { useQuotes } from '../hooks/useQuotes';
import { SearchFilters } from '../types/SearchFilters';
import QuoteResult from './QuoteResult';

export type ResultsProps = {
  searchFilters: SearchFilters;
};

export default function Results({ searchFilters }: ResultsProps) {
  const { quotes, isLoading, error } = useQuotes({ searchFilters, quantity: 1 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Results</h2>
      {quotes.map((quote) => (
        <QuoteResult key={quote.service.slug} quote={quote} />
      ))}
    </div>
  );
}
