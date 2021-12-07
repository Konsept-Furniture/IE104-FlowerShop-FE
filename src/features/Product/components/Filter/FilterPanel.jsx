import PrimaryButton from '@/components/button/Button'
import { path } from '@/constants/path'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import FilterBySearching from './FilterBySearching'
import FilterBySorting from './FilterBySorting'

FilterPanel.propTypes = {
   categories: PropTypes.array.isRequired,
   filters: PropTypes.object.isRequired
}

function FilterPanel({ categories, filters }) {
   const history = useHistory()

   return (
      <Box>
         <FilterBySearching filters={filters} />
         <FilterBySorting filters={filters} />
         <FilterByCategory categories={categories} filters={filters} />
         <FilterByPrice filters={filters} />

         <Box sx={{ mt: 2 }}>
            <PrimaryButton fullWidth onClick={() => history.push(path.products)}>
               Reset filters
            </PrimaryButton>
         </Box>
      </Box>
   )
}

export default FilterPanel
