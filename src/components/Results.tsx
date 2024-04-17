import QuoteResult from './QuoteResult';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url, { headers: { 'X-Tenant': 'PARCEL2GO' } }).then((res) => res.json());

export default function Results() {
  //TODO: 1. Replace with a custom hook that retrieves the Quotes from the API
  const { data, error, isLoading } = useSWR(
    'https://api.global.test.p2g.ninja/quote/shipments/GBR/GBR?weight=1.00&quantity=1',
    fetcher
  );

  return (
    (isLoading && <div>Loading...</div>) || (
      <div>
        <h2>Results</h2>
        {data.result.map((quote) => (
          <QuoteResult key={quote.service.slug} quote={quote} />
        ))}
      </div>
    )
  );
}
