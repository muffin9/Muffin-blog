### Gatsby FrameWork로 블로그 구축 진행하기

Gatsby란 ? 정적사이트를 구축하는데 JAM Stack 기반 프레임워크

JAM Stack ? JavaScript API MarkUp Stack 의 약어로 React 기반 으로 만들어졌다. 장점으론 기존 웹사이트를 구성하는 방법보다 성능적인 이점이 굉장히 많다.

1. 렌더링할 화면들을 모두 Pre-Render하여 제공되며, CDN을 통해 제공된다.

2. API가 사이트 생성을 위한 프로세스가 추상화되어있기 때문에 공격 노출 범위가 감소하여 취약점에 신경을 많이 쓰지 않아도 된다.

그래서.. Gatsby를 선택한 이유 ? JAM Stack 기반 프레임워크중 Next.js 가 가장 인기가 높지만 블로그는 동적인 기능이 없을거라 생각하여 Gatsby가 더 적합하다 생각했기 때문.

### Gatsby 프로젝트 Setting

```shell
# getsby start
npx gatsby-cli new muffin-blog // npx를 통해 gatsby-cli 라이브러리로 프로젝트 생성
yarn install
yarn remove gatsby-plugin-manifest 사용하지 않는 라이브러리 삭제
yarn develop // 프로젝트 띄워보기

# typescript setting
yarn add typescript --dev
yarn add gatsby-plugin-typescript
yarn tsc --init
```

Gatsby + Tailwind -> https://tailwindcss.com/docs/guides/gatsby

`postcss.config.js`

```javascript
module.exports = () => ({
  plugins: [require('tailwindcss')],
})
```

공식문서대로 하면 tailwind가 반영되지 않는데, postcss.config.js 파일에 tailwindcss를 불러와야 한다.
