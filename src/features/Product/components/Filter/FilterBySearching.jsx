import { path } from '@/constants/path'
import { FormControl, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import './FilterBySearching.scss'

FilterBySearching.propTypes = {
   filters: PropTypes.object.isRequired
}

function FilterBySearching({ filters }) {
   const history = useHistory()
   const ref = useRef(null)

   const handleChange = e => {
      if (ref.current) {
         clearTimeout(ref.current)
      }
      ref.current = setTimeout(() => {
         history.push({
            pathname: path.products,
            search: queryString.stringify({ ...filters, search: e.target.value.trim() })
         })
      }, 1000)
   }

   return (
      <div className="filter-by-sorting">
         {/* <h4>Searching</h4> */}
         <FormControl
            fullWidth
            variant="standard"
            sx={{ minWidth: 120, width: '100%', height: 50 }}
         >
            <TextField
               sx={{ width: '100%' }}
               id="standard-basic"
               label="Search"
               variant="standard"
               color="black"
               onChange={handleChange}
            />
         </FormControl>
      </div>
   )
}

export default FilterBySearching
