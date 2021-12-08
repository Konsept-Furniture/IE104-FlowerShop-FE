import { path } from '@/constants/path'
import { FormControl, MenuItem, Select } from '@mui/material'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import React from 'react'
import { useHistory } from 'react-router'
import './FilterBySorting.scss'

FilterBySorting.propTypes = {
   filters: PropTypes.object.isRequired
}

function FilterBySorting({ filters }) {
   const history = useHistory()

   const handleChange = e => {
      history.push({
         pathname: path.products,
         search: queryString.stringify({ ...filters, orderBy: e.target.value })
      })
   }

   return (
      <div className="filter-by-sorting">
         <h4>Sorting</h4>
         <FormControl fullWidth variant="standard" sx={{ minWidth: 120, height: 50 }}>
            <Select
               value={filters.orderBy ? filters.orderBy : 'updatedAt-desc'}
               onChange={handleChange}
               color="black"
            >
               <MenuItem value="updatedAt-desc">
                  <em>Default Sorting</em>
               </MenuItem>

               <MenuItem value="createdAt-desc">Sort by latest</MenuItem>
               <MenuItem value="price-asc">Sort by price: low to high</MenuItem>
               <MenuItem value="price-desc">Sort by price: high to low</MenuItem>
            </Select>
         </FormControl>
      </div>
   )
}

export default FilterBySorting
