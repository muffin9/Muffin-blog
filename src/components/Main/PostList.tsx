import React, { FunctionComponent } from 'react'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail: '/default.png',
  link: '<https://www.google.co.kr/>',
}

const PostList: FunctionComponent = function () {
  return (
    <div className="w-[48rem] grid grid-cols-2 gap-5 m-auto pt-[50px] pb-[100px] md:grid-cols-1 md:w-full md:py-12 md:px-5">
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </div>
  )
}

export default PostList
