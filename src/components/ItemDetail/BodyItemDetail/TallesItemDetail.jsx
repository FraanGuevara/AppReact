import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { grey, deepPurple } from '@mui/material/colors';

export default function TallesItemDetail() {



  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="S" control={<Radio sx={{ color: grey[900], '&.Mui-checked': { color: deepPurple[300], }, }} />} label="S" />
          <FormControlLabel value="M" control={<Radio sx={{ color: grey[900], '&.Mui-checked': { color: deepPurple[300], }, }} />} label="M" />
          <FormControlLabel value="L" control={<Radio sx={{ color: grey[900], '&.Mui-checked': { color: deepPurple[300], }, }} />} label="L" />
          <FormControlLabel value="XL" control={<Radio sx={{ color: grey[900], '&.Mui-checked': { color: deepPurple[300], }, }} />} label="XL" />
          <FormControlLabel value="2XL" control={<Radio sx={{ color: grey[900], '&.Mui-checked': { color: deepPurple[300], }, }} />} label="2XL" />
        </RadioGroup>
      </FormControl>
    </>

  );
}
