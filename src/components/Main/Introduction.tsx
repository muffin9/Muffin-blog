import React, { FunctionComponent } from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <div className="w-full text-white bg-black">
      <div className="w-[48rem] h-[25rem] md:w-full md:h-[18.75rem] md:px-5 m-auto flex flex-col justify-center items-start">
        <ProfileImage profileImage={profileImage} />
        <div>
          <div className="text-xl font-normal md:text-base">
            Nice to Meet You,
          </div>
          <div className="mt-[5px] text-4xl font-bold md:text-2xl">
            I'm Junior Frontend Developer Muffin.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
