import React, { FunctionComponent } from 'react'

import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
}

const IndexPage: FunctionComponent = function () {
  return (
    <div className="h-screen flex flex-col">
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </div>
  )
}

export default IndexPage
