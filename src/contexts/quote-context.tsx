import { createContext, useContext, useState } from "react";
import useSWR from "swr";

type Quote = {
    service: {
        slug: string;
        name: string;
        courier: string;
    };
    price: number;
    deliveryDate: string;
};

type QuoteContextType = {
    quotes: Quote[];
    setWeight: React.Dispatch<React.SetStateAction<number>>;
    weight: number;
    error?: string;
    isLoading: boolean;
};


const defaultContextState: QuoteContextType = {
    quotes: [],
    setWeight: () => {},
    isLoading: false,
    weight: 1.
};
const QuoteContext = createContext<QuoteContextType>(defaultContextState);

export const useQuoteContext = () => {
    const context = useContext(QuoteContext);
    if (context === undefined) {
        throw new Error('useQuoteContext must be used within a QuoteContextProvider');
    }
    return context;
}

const fetcher = (url: string) => fetch(url, { headers: { 'X-Tenant': 'PARCEL2GO' } }).then((res) => res.json());

export const QuoteContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [weight, setWeight] = useState(defaultContextState.weight);

    const { data, error, isLoading } = useSWR<{ result: Quote[]}>(
        `https://api.global.test.p2g.ninja/quote/shipments/GBR/GBR?weight=${weight}&quantity=1`,
        fetcher
      );


    return (
        <QuoteContext.Provider value={{ quotes: data?.result ?? [], error: error, isLoading, setWeight, weight }}>
            {children}
        </QuoteContext.Provider>
    );
}