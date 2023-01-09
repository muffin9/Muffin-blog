import React, { FunctionComponent } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail,
}) {
  return (
    <div className="w-full h-[20rem] relative object-cover md:h-[18.75rem]">
      <GatsbyImage
        className="w-full h-[20rem] absolute z-[-1] brightness-[0.25] md:h-[18.75rem]"
        image={thumbnail || ''}
        style={{ position: 'absolute' }}
        alt="thumbnail"
      />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </div>
  )
}

export default PostHead
