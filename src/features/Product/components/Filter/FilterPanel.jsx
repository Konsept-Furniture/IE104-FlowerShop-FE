import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './FilterByCategory'

FilterPanel.propTypes = {
   categories: PropTypes.array.isRequired,
   filters: PropTypes.object.isRequired
}

function FilterPanel({ categories, filters }) {
   return (
      <div>
         <FilterByCategory categories={categories} filters={filters}/>
      </div>
   )
}

export default FilterPanel
