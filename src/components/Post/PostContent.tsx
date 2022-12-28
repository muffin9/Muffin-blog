import React, { FunctionComponent } from 'react'

interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return (
    <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default PostContent
