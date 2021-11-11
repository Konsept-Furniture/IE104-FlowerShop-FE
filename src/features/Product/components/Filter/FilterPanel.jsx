import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'

FilterPanel.propTypes = {
   categories: PropTypes.array.isRequired,
   filters: PropTypes.object.isRequired
}

function FilterPanel({ categories, filters }) {
   return (
      <Box>
         <FilterByCategory categories={categories} filters={filters}/>
         <FilterByPrice filters={filters}/>
      </Box>
   )
}

export default FilterPanel
