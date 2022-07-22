import { TextField } from '@mui/material'
import React, { FC } from 'react'
import Select from '../Select/Select'

const Settings: FC = () => {
   return (
      <div className='settings'>
         <TextField id="standard-basic" label="Поиск" variant="standard" />
         <Select />
      </div>
   )
}

export default Settings