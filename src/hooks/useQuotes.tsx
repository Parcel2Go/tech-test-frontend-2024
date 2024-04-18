import { useState, useEffect } from 'react';
import { QuotesResult } from '../types/Quotes';
import { SearchFilters } from '../types/SearchFilters';

const API_URL = 'https://api.global.test.p2g.ninja/quote/shipments/GBR/GBR';

const fetchQuotes = async (searchFilters: SearchFilters) => {
  try {
    const response = await fetch(`${API_URL}?weight=${searchFilters.weight}&quantity=1`, {
      headers: { 'X-Tenant': 'PARCEL2GO' }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error('Failed to fetch quotes');
  }
};

type QuotesHook = { quantity: number; searchFilters: SearchFilters };

export const useQuotes = ({ searchFilters }: QuotesHook) => {
  const [quotes, setQuotes] = useState<QuotesResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchQuotesData = async () => {
      setIsLoading(true);
      try {
        const quotesData = await fetchQuotes(searchFilters);
        setQuotes(quotesData);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
        setIsLoading(false);
      }
    };
    fetchQuotesData();
  }, [searchFilters]);

  return { quotes, isLoading, error };
};
