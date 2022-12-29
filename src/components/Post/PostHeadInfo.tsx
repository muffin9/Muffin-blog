import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  const goBackPage = () => window.history.back()

  return (
    <div className="w-[48rem] h-[20rem] m-auto py-[3.75rem] flex flex-col text-white md:w-full md:py-[2.5rem] md:px-5">
      <div
        className="w-10 h-10 grid place-items-center rounded-full text-2xl bg-white text-black cursor-pointer shadow-card md:w-7 md:h-7 md:text-lg"
        onClick={goBackPage}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="mt-auto overflow-hidden break-words text-ellipsis whitespace-normal text-5xl font-extrabold md:text-3xl">
        {title}
      </div>
      <div className="flex justify-between items-center mt-[10px] text-lg font-bold md:flex-col md:items-start md:text-base md:font-normal">
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default PostHeadInfo
