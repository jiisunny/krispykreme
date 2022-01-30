[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](#)

# KrispyKreme 크리스피크림 도넛 🍩 🍩

크리스피크림 웹페이지 리뉴얼 및 제작

[크리스피크림 웹페이지](https://elegant-thompson-69b225.netlify.app/)

[크리스피크림 서브페이지 - 메뉴](https://elegant-thompson-69b225.netlify.app/kkd_submenu.html)

메인페이지 -

![크리스피크림 메인페이지](https://raw.githubusercontent.com/jiisunny/krispykreme/master/_assets/main_screenshot.png)

서브페이지 - 

![크리스피크림 메인페이지](https://raw.githubusercontent.com/jiisunny/krispykreme/master/_assets/sub_screenshot.png)


## 뷰포트(Viewport) 렌더링 방식 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정한다.<br />
모바일 환경에서 적용 된다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width` : 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0` : 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no` : 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1` : 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북, 카카오톡 등)로 공유될 때 우선적으로 활용되는 정보를 지정한다.

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/jiisunny/krispykreme/master/_assets/kakao_opengraph_example.png)

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="KrispyKreme" />
  <meta property="og:title" content="KrispyKreme" />
  <meta property="og:description" content="크리스피 크림 도넛 소개 사이트, 도너츠, 커피 제품 종류 및 정보, 매장위치 안내." />
  <meta property="og:image" content="./images/krispykreme_seo.png" />
  <meta property="og:url" content="#" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정한다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="KrispyKreme" />
  <meta property="twitter:title" content="KrispyKreme" />
  <meta property="twitter:description" content="크리스피 크림 도넛 소개 사이트, 도너츠, 커피 제품 종류 및 정보, 매장위치 안내." />
  <meta property="twitter:image" content="./images/krispykreme_seo.png" />
  <meta property="twitter:url" content="#" />
```

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정한다.<br/>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />`를 작성할 필요가 없다. `favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성해야한다.

> 파비콘 이미지는 루트 경로에 있어야 한다
```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```
- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

<img src="https://raw.githubusercontent.com/jiisunny/krispykreme/master/favicon.png" alt="donga" width="16" /><br />
<img src="https://raw.githubusercontent.com/jiisunny/krispykreme/master/favicon.png" alt="donga" width="200" />

### .ico 파일 제작

이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있다.

[iconifier.net](https://iconifier.net/)

## Reset.css

각 브라우저의 기본 스타일을 초기화 할 수 있는 css 파일 링크

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```