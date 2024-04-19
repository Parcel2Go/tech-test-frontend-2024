import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuoteContext } from '../contexts/quote-context';
import { useFilterContext } from '../contexts/quote-filters';

export default function SearchFilters() {
  const quoteCtx = useQuoteContext();
  const filterCtx = useFilterContext();

  const [weight, setWeight] = useState(quoteCtx.weight);
  const [reliability, setReliability] = useState<number>(filterCtx.reliability ?? 4);
  const [courierFilter, setCourierFilter] = useState<string>('');

  useEffect(() => {
    // Reset value if the context changes
    setWeight(quoteCtx.weight);
  }, [quoteCtx.weight]);

  const onSearch = () => {
    console.log('Search clicked');
    console.log(weight, reliability, courierFilter);
    quoteCtx.setWeight(weight);
    filterCtx.setCourier(courierFilter);
    filterCtx.setReliability(reliability);

    //TODO: 2. If the weight changes; fetch updated quotes from the API and update the results
    //TODO: 3. If the reliability or courier changes; filter the results in memory and update the results
  };

  const onReset = () => {
    setWeight(quoteCtx.weight);
    setCourierFilter('');
    setReliability(4);
    console.log('Reset clicked');
  };

  const handleSelect = (e: SelectChangeEvent) => {
    setCourierFilter(e.target.value);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <label>
          <TextField
            label="Weight"
            variant="filled"
            type="number"
            InputProps={{
              inputProps: {
                max: 50,
                min: 0.1,
                step: 0.1
              }
            }}
            name="weight"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </label>
      </Grid>
      <Grid item xs={3}>
        <label>
          Reliability:
          <Slider
            defaultValue={4}
            value={reliability}
            onChange={(_e, v) => setReliability(Array.isArray(v) ? v[0] : v)}
            step={1}
            min={1}
            max={5}
            name="reliability"
            marks
          />
        </label>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth variant="filled">
          <InputLabel id="courier-label">Courier</InputLabel>
          <Select labelId="courier-label" id="courier=select" name="courier" value={courierFilter ?? ''} onChange={handleSelect}>
            <MenuItem value="DHL Parcel">DHL</MenuItem>
            <MenuItem value="UPS Access Point">UPS</MenuItem>
            <MenuItem value="Parcelforce">Parcelforce</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onSearch}>
            Search
          </Button>
          <Button variant="outlined" onClick={onReset}>
            Reset
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
