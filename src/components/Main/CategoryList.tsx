import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <div className="w-[48rem] flex flex-wrap mt-[6.25rem] mx-auto">
      {Object.entries(categoryList).map(([name, count]) => (
        <Link
          className={`mr-5 py-1 text-lg cursor-pointer ${
            name === selectedCategory ? 'font-extrabold' : 'font-normal'
          }`}
          key={name}
          to={`/?category=${name}`}
        >
          #{name}({count})
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
