import React, { FunctionComponent } from 'react'

const ProfileImage: FunctionComponent = function () {
  return (
    <img
      className="w-32 h-32 md:w-20 md:h-20 mb-7 rounded-full"
      src="/default.png"
      alt="Profile Image"
    />
  )
}

export default ProfileImage
