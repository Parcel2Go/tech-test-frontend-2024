// import { useContext } from 'react';
import QuoteResult from './QuoteResult';
import { useQuoteContext } from '../contexts/quote-context';
import { useFilterContext } from '../contexts/quote-filters';

// const fetcher = (url: string) => fetch(url, { headers: { 'X-Tenant': 'PARCEL2GO' } }).then((res) => res.json());

export default function Results() {
  //TODO: 1. Replace with a custom hook that retrieves the Quotes from the API
  // const { data, error, isLoading } = useSWR(
  //   'https://api.global.test.p2g.ninja/quote/shipments/GBR/GBR?weight=1.00&quantity=1',
  //   fetcher
  // );

  const quoteCtx = useQuoteContext();
  const filterCtx = useFilterContext();

  return (
    (quoteCtx.isLoading && <div>Loading...</div>) || (
      <div>
        <h2>Results</h2>
        {filterCtx.displayQuotes.map((quote) => (
          <QuoteResult key={quote.service.slug} quote={quote} />
        ))}
      </div>
    )
  );
}
