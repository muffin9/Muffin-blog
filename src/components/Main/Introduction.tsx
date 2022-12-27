import React, { FunctionComponent } from 'react'
import ProfileImage from 'components/Main/ProfileImage'

const Introduction: FunctionComponent = function () {
  return (
    <div className="w-full text-white bg-black">
      <div className="w-[48rem] h-[25rem] m-auto flex flex-col justify-center items-start">
        <ProfileImage />
        <div>
          <div className="text-xl font-normal">Nice to Meet You,</div>
          <div className="mt-[5px] text-4xl font-bold">
            I'm Junior Frontend Developer Muffin.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
