import { Grid, Rating } from '@mui/material';
import Price from './Price';

export default function QuoteResult({ quote }: { quote: Quote }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <h3>{quote.service.name}</h3>
      </Grid>
      <Grid item xs={3}>
        <Rating value={quote.metadata['Rating:Reliability']} readOnly />
      </Grid>
      <Grid item xs={3}>
        <Price variant="body" price={quote.price.gross as number} />
      </Grid>
    </Grid>
  );
}
