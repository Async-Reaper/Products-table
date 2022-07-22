import { TextField } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setSearch } from '../../store/reducers/searchReducer'
import Select from '../Select/Select'

const Settings: FC = () => {
   const { value } = useTypedSelector(state => state.search)
   const dispatch = useTypedDispatch()
   return (
      <div className='settings'>
         <TextField id="standard-basic" value={value} onChange={(e) => dispatch(setSearch(e.target.value))} label="Поиск" variant="standard" />
         <Select />
      </div>
   )
}

export default Settings