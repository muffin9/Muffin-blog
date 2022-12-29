import React, { FunctionComponent } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return (
    <GatsbyImage
      className="w-32 h-32 md:w-20 md:h-20 rounded-full"
      image={profileImage}
      alt="Profile Image"
    />
  )
}

export default ProfileImage
