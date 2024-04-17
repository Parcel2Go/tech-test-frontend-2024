import { Grid } from '@mui/material';
import Price from './Price';

export default function QuoteResult({ quote }: { quote: Quote }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <h3>{quote.service.name}</h3>
      </Grid>
      <Grid item xs={4}>
        <Price variant="body" price={quote.price.gross as number} />
      </Grid>
    </Grid>
  );
}
