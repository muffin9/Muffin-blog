import React, { FunctionComponent } from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const MarkdownRenderer = styled.div([
  tw`
     w-[48rem] m-auto flex flex-col py-[6.25rem] break-all leading-relaxed text-base font-normal
  `,
  css`
    p {
      padding: 3px 0;
    }

    h1,
    h2,
    h3 {
      font-weight: 800;
      margin-bottom: 30px;
    }

    * + h1,
    * + h2,
    * + h3 {
      margin-top: 80px;
    }

    hr + h1,
    hr + h2,
    hr + h3 {
      margin-top: 0;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }

    blockquote {
      margin: 30px 0;
      padding: 5px 15px;
      border-left: 2px solid #000000;
      font-weight: 800;
    }

    ol,
    ul {
      margin-left: 20px;
      padding: 30px 0;
    }

    hr {
      border: 1px solid #000000;
      margin: 100px 0;
    }

    a {
      color: #4263eb;
      text-decoration: underline;
    }

    pre[class*='language-'] {
      margin: 30px 0;
      padding: 15px;
      font-size: 15px;

      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
      }
    }

    code[class*='language-'],
    pre[class*='language-'] {
      tab-size: 2;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 80px 20px;
      line-height: 1.6;
      font-size: 14px;

      h1 {
        font-size: 23px;
      }

      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 17px;
      }

      img {
        width: 100%;
      }

      hr {
        margin: 50px 0;
      }
    }
  `,
])

interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
