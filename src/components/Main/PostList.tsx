import React, { FunctionComponent, useMemo } from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <div
      ref={containerRef}
      className="w-[48rem] grid grid-cols-2 gap-5 m-auto pt-[50px] pb-[100px] md:grid-cols-1 md:w-full md:py-12 md:px-5"
    >
      {postList.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem
          {...frontmatter}
          link="<https://www.google.co.kr/>"
          key={id}
        />
      ))}
    </div>
  )
}

export default PostList
