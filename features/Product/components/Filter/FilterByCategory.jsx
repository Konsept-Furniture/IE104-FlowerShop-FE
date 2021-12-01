import React from 'react'
import PropTypes from 'prop-types'
import './FilterByCategory.scss'
import { NavLink } from 'react-router-dom'
import { path } from '@/constants/path'
import queryString from 'query-string'
import { Skeleton } from '@mui/material'

FilterByCategory.propTypes = {
   categories: PropTypes.array.isRequired,
   filters: PropTypes.object.isRequired
}

function FilterByCategory({ categories, filters }) {
   const renderCategories = () => {
      if (categories.length === 0) {
         return (new Array(5)).map((_, idx) => (
            <Skeleton key={idx}/>
         ))
      }
      return categories.map((category) => (
         <li className="category" key={category.name}>
            <NavLink
               to={() => {
                  const _filters = { ...filters, category: category._id }
                  return path.products + `?${queryString.stringify(_filters)}`
               }}
               isActive={(match, location) => {
                  if (!match) {
                     return false
                  }
                  const query = queryString.parse(location.search)
                  return query.category === category._id
               }}
            >{`${category.name} ${category.number ? `(${category.number})` : ''}`}</NavLink>
         </li>
      ))
   }

   return (
      <div className="filter-by-category">
         <h4>Categories</h4>
         <ul className="categories">
            {renderCategories()}
         </ul>
      </div>
   )
}

export default FilterByCategory
