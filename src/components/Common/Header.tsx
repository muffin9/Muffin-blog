import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header: FunctionComponent = function () {
  return (
    <header className="w-full flex justify-between items-center py-5 px-10 bg-main_header_bg">
      <Link className="font-bold text-2xl text-white opacity-70" to="/">
        Muffin's dev
      </Link>
      <Link to="https://github.com/muffin9">
        <FontAwesomeIcon className="text-2xl" icon={faGithub} />
      </Link>
    </header>
  )
}

export default Header
