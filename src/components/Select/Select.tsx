import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { setLimit } from '../../store/reducers/paginationReducer'

const Select: FC = () => {
   const dispatch = useTypedDispatch()

   const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setLimit(e.target.value))
   }

   return (
      <FormControl>
         <InputLabel variant="standard" htmlFor="uncontrolled-native">
            По
         </InputLabel>
         <NativeSelect
            onChange={e => selectHandle(e)}
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