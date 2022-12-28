import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const NotFoundPage: FunctionComponent = function () {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-9xl font-extrabold md:text-8xl">404</div>
      <div className="leading-tight text-2xl text-center md:text-xl">
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </div>
      <Link className="mt-8 text-xl" to="/">
        메인으로
      </Link>
    </div>
  )
}

export default NotFoundPage
