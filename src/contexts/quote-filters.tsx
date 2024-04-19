/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useQuoteContext } from './quote-context';

type FilterContextType = {
  courier: string;
  setCourier: React.Dispatch<React.SetStateAction<string>>;

  reliability: number | undefined;
  setReliability: React.Dispatch<React.SetStateAction<number | undefined>>;

  displayQuotes: Quote[];
};

const FilterContext = createContext<FilterContextType>({
  courier: '',
  reliability: 4,
  setCourier: () => {},
  setReliability: () => {},
  displayQuotes: []
});

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext must be used within a FilterContextProvider');
  }
  return context;
};


type Quote = {
    service: {
        slug: string;
        name: string;
        courier: string;
    };
    price: number;
    deliveryDate: string;
    metadata: any;
};

export const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [courier, setCourier] = useState('');
  const [reliability, setReliability] = useState<number | undefined>(undefined);
  const [displayQuotes, setDisplayQuotes] = useState<Quote[]>([]);

  const quoteCtx = useQuoteContext();

  const filterQuotes = useCallback((quotes: Quote[]) => {
    return quotes.filter((quote) => {
        console.log({courier, c: quote.service.courier})
      if (courier && quote.service.courier !== courier) {
        return false;
      }

      if (reliability && reliability >= quote.metadata['Rating:Reliability']) {
        return false;
      }

      return true;
    });
  }, [courier, reliability])

    useEffect(() => {
        setDisplayQuotes(filterQuotes(quoteCtx.quotes as Quote[]));
    }, [quoteCtx.quotes, courier, reliability, filterQuotes]);

  return (
    <FilterContext.Provider value={{ courier, setCourier, reliability, setReliability, displayQuotes }}>
      {children}
    </FilterContext.Provider>
  );
};
