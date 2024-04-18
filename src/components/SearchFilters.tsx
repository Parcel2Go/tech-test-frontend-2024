import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, Stack } from '@mui/material';
import type { SearchFilters as SearchFiltersType } from '../types/SearchFilters';

type SearchFiltersProps = {
  searchFilters: SearchFiltersType;
  setSearchFilters: React.Dispatch<React.SetStateAction<SearchFiltersType>>;
};
export default function SearchFilters({ searchFilters, setSearchFilters }: SearchFiltersProps) {
  const onSearch = () => {
    //TODO: 2. If the weight changes; fetch updated quotes from the API and update the results
    //TODO: 3. If the reliability or courier changes; filter the results in memory and update the results
  };

  const onReset = () => {
    setSearchFilters({ weight: 0, reliability: 4, courier: 'DHL' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({ ...searchFilters, [name]: value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <label>
          <TextField
            label="Weight"
            variant="filled"
            type="number"
            min="0"
            max="50"
            name="weight"
            onChange={handleChange}
            value={searchFilters.weight}
          />
        </label>
      </Grid>
      <Grid item xs={3}>
        <label>
          Reliability:
          <Slider
            defaultValue={4}
            step={1}
            min={1}
            max={5}
            name="reliability"
            marks
            onChange={handleChange}
            value={searchFilters.reliability}
          />
        </label>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth variant="filled">
          <InputLabel id="courier-label">Courier</InputLabel>
          <Select
            labelId="courier-label"
            id="courier=select"
            name="courier"
            onChange={handleChange}
            value={searchFilters.courier}
          >
            <MenuItem value="DHL">DHL</MenuItem>
            <MenuItem value="UPS">UPS</MenuItem>
            <MenuItem value="FedEx">FedEx</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => onSearch()}>
            Search
          </Button>
          <Button variant="outlined" onClick={() => onReset()}>
            Reset
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
