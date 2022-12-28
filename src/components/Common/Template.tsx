import React, { FunctionComponent, ReactNode } from 'react'
import Footer from 'components/Common/Footer'

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <div className="h-screen flex flex-col">
      {children}
      <Footer />
    </div>
  )
}

export default Template
