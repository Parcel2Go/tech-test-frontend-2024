import { Typography } from '@mui/material';

export default function Price({ price, variant }) {
  return <Typography variant={variant}>£{price / 100}</Typography>;
}
