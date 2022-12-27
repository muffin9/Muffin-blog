import React, { FunctionComponent } from 'react'

const ProfileImage: FunctionComponent = function () {
  return (
    <img
      className="w-[7.5rem] h-[7.5rem] mb-7 rounded-full"
      src="../../assets/default.png"
      alt="Profile Image"
    />
  )
}

export default ProfileImage
