### 엘리의 베이직 리액트 강의에 타입스크립트 입혀서 공부하기

#### 구조 설명
/public      : 정적 파일에 사용   
/public/maifest.json : 모바일 용
/public/robots.txt : 크롤링에 사용

/src   : 동적으로 만들어주는 파일들   

### react 17 버전
- react/jsx-runtime 타입이 빠져있다. [관련 링크](https://github.com/facebook/create-react-app/issues/10109)   
```js
import reportWebVitals from './reportWebVitals';

```
index 파일에 꼭 포함되어야 한다.