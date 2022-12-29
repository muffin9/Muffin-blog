import React, { FunctionComponent } from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <div className="w-full">
      <div className="w-[48rem] mt-10 mx-auto flex gap-4 items-center md:w-full md:h-[18.75rem] md:px-5">
        <ProfileImage profileImage={profileImage} />
        <div className="flex flex-col gap-1">
          <div>
            Written by{' '}
            <Link
              className="inline-block font-bold text-[#6d28d9] bg-[#ecf0f2] py-[2px] px-[6px] rounded-lg animate-wave"
              to="/"
            >
              @[Muffin]
            </Link>
          </div>
          <span className="text-gray-500 text-xs">Muffin Dev Blog</span>
          <Link className="w-14 text-navy" to="https://github.com/muffin9">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction
