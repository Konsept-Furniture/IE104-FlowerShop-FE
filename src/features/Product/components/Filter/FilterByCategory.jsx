import React from 'react'
import PropTypes from 'prop-types'
import './FilterByCategory.scss'

FilterByCategory.propTypes = {
   categories: PropTypes.array.isRequired,
   filters: PropTypes.object.isRequired
}

function FilterByCategory({ categories, filters }) {
   return (
      <div className="filter-by-category">
         <h4>Categories</h4>
         <ul className="categories">
            {categories.map((category) => (
               <li className="category" key={category.name}>
                  <a>{category.name} ({category.number})</a>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default FilterByCategory
