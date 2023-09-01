<br/>

## 📌 배포 사이트
// 현재는 서버 종료되었습니다.
https://numble-react.netlify.app

<br>

## 📌 프로젝트 실행 방법

1. Clone the repo

```javascript
$ git clone https://github.com/jeongdopark/date.git
```

2. Install NPM packages

```javascript
$ npm install
```

3. Getting Started

```javascript
$ npm start
```

<br/>

## 📌 프로젝트에 적용하고자 했던 목표

<br>
1. Axios Interceptor 사용하여 Refresh Token 처리 & Header Token 처리
<details>
<summary>상세보기</summary>
<div>

```ts
// client.ts

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accesstoken = token.get(ACCESS_TOKEN)
    if (accesstoken !== null)
      Object.assign(config.headers, { authorization: `${accesstoken}` })
    return config
  },

  (error) => {
    return Promise.reject(error)
  },
)
```

API 호출 시 헤더에 입력해야하는 accesstoken을 interceptors로 일괄 처리했습니다.

```ts
// client.ts
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('get response', response)
    return response
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error

    // 만료된 토큰일 경우
    if (status === 419) {
      const originalRequest = config
      const refreshToken = storage.get(REFRESH_TOKEN)
      // refresh token Post API 호출
      return await instance
        .post(ApiUrl.refreshToken, {
          refresh: refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            storage.set(ACCESS_TOKEN, res.data[ACCESS_TOKEN])
            originalRequest.header.authorization = res.data[ACCESS_TOKEN]
            return axios(originalRequest)
          }
        })
    }

    toast(error.response.data.message)
    return Promise.reject(error)
  },
)
```

accesstoken 만료되었을 경우
axios interceptors로 refreshToken 처리를 했습니다.

</div>
</details>

<br>
<br>
2. createReactRouter 적용 및 Authorization 페이지 분기 처리 ( 권한으로 페이지 나누기)
<details>
<summary>상세보기</summary>
<div>

```ts
// index.tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: PATH_NAME.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PATH_NAME.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: PATH_NAME.MYPAGE,
        element: <MyPage />,
      },
      {
        path: PATH_NAME.LIKELIST,
        element: <LikeList />,
      },
      {
        path: PATH_NAME.CHOICE,
        element: <Choice />,
      },
    ],
  },
])
```

createBrowserRouter 적용해 봤습니다.

```ts
//Auth.tsx
const PRIVATE_ROUTES = [PATH_NAME.LIKELIST, PATH_NAME.MYPAGE, PATH_NAME.CHOICE]
const PUBLIC_ROUTES = [PATH_NAME.MAIN, PATH_NAME.SIGN_IN, PATH_NAME.SIGN_UP]

const Auth = () => {
  const { pathname } = useLocation()

  const accessToken = token.get(ACCESS_TOKEN)
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname)
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

  if (isPrivateRoute) {
    if (!accessToken) {
      return <Navigate to={PATH_NAME.SIGN_IN} />
    }
    return (
      <React.Fragment>
        <Outlet />
        <Footer />
      </React.Fragment>
    )
  }

  if (isPublicRoute) {
    if (accessToken) {
      return <Navigate to={PATH_NAME.MYPAGE} />
    }
    return <Outlet />
  }

  return <NotFound />
}
```

가장 최상단에 Auth 컴포넌트를 두고 accessToken 체크를 했습니다.

</div>
</details>
<br>
3. 단일 책임 원칙 및 UI와 로직 분리
<details>
<summary>상세보기</summary>
<div>
하나의 컴포넌트는 하나의 책임만을 담당하도록 고민을 했습니다. <br>
custom hook을 적극적으로 활용하여 UI와 로직을 분리시키고 <br> 컴포넌트의 목적이 명확하게 드러나는 방향으로 설계하기 위한 노력을 했습니다.

<br>
이번 프로젝트에서 구현한 로그인 페이지를 예시로 들겠습니다.

```ts
// pages/Signin.tsx

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <SignInForm />
      <S.Button onClick={() => navigate(PATH_NAME.SIGN_UP)}>
        Go Sign Up
      </S.Button>
    </S.Container>
  )
}
```

스타일 파일을 따로 분리하였습니다. <br>
S.dot 네이밍을 활용하여 스타일 컴포넌트를 구분지었습니다. <br>
<br>
SignIn 컴포넌트는 (Title, SignInForm, Button)컴포넌트로 이루어져 있음을 한 눈에 파악이 가능합니다. <br>
<br>
이어서 SignInForm 컴포넌트를 보면

```ts
const SignInForm = () => {
  const [inputValue, inputOnChange, warnMessage, valid] = useValidate()
  const { handleSubmit } = useHandleSubmit(inputValue, SIGN_IN)

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <FormElement
        type={USER_ID}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <FormElement
        type={PASSWORD}
        inputOnChange={inputOnChange}
        warnMessage={warnMessage}
      />
      <S.Button disabled={valid}>SignIn</S.Button>
    </S.FormContainer>
  )
}
```

custom Hook을 사용하여 UI와 로직을 명확하게 분리했습니다 <br>
(FormElement, Button)컴포넌트로 이루어져 있음을 쉽게 파악 가능합니다.

useHandleSubmit hook은 회원가입 로직에서도 사용되는 재사용 가능한 훅입니다.
custom hook을 사용함으로써 불필요하게 반복되는 코드를 줄일 수 있었습니다.

</div>
</details>
