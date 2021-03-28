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

### pureComponent 사용 시 주의

- 얕은 비교를 하기 때문에 무작정 작은 단위 컴포넌트를 pureComponent로 감싸면 내부 데이터가 변경됐더라도 pureComponent는 참조하는 오브젝트만 비교하기 때문에 같다고 판단해서 렌더 함수를 호출하지 않는다. (즉, 업데이트를 하지 않는다)   

1. 해결법
업데이트 되는 값은 props로 자식 컴포넌트에 넘겨준다.   
이 방법은 props가 많아지고 가독성이 낮아질 수 있다.
2. 해결법
업데이트 로직에서 업데이트된 부분만 if문으로 처리해서 새로운 오브젝트를 만들어서 다른 오브젝트라고 판단하게 하여 업데이트를 시킨다.


> 오브젝트는 값(Value) 자체가 변수에 저장되는 것이 아니라, 참조값(Reference)이 저장된다


### netlify 배포 시
package.json에 작성한 homepage: 링크 삭제하기