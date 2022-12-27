import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

type PostItemProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) {
  return (
    <Link className="flex flex-col rounded-lg cursor-pointer" to={link}>
      <img
        className="w-full h-[12.5rem] rounded-t-xl object-cover"
        src={thumbnail}
        alt="Post Item Image"
      />
      <div className="flex flex-col flex-1 p-3.5">
        <div className="whitespace-normal overflow-hidden text-ellipsis mb-[3px] text-xl font-bold">
          {title}
        </div>
        <div className="text-sm font-normal opacity-70">{date}</div>
        <div className="flex flex-wrap my-[10px] mx-[-5px]">
          {categories.map(category => (
            <div
              className="my-[2.5px] mx-[5px] py-[3px] px-[5px] bg-black rounded-sm font-bold text-sm text-white"
              key={category}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="whitespace-normal overflow-hidden text-ellipsis mt-auto opacity-80">
          {summary}
        </div>
      </div>
    </Link>
  )
}

export default PostItem
