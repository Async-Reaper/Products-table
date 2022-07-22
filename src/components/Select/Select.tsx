import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React, { FC } from 'react'

const Select: FC = () => {
   return (
      <FormControl>
         <InputLabel variant="standard" htmlFor="uncontrolled-native">
            По
         </InputLabel>
         <NativeSelect
            defaultValue={5}
            inputProps={{
               name: 'age',
               id: 'uncontrolled-native',
            }}
         >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
         </NativeSelect>
      </FormControl>
   )
}

export default Select