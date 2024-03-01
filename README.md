# Benchmark Performance Emotion
CSS in JS 중의 대표적인 라이브러리인 `Emotion`으로 스타일링을 하는 다양한 방법들이 존재합니다. 여러 방법들을 라이브러리가 지원하기 때문에 사용자는 원하는 형식을 선택하여 자유롭게 프로젝트의 스타일을 완성할 수 있었습니다.

그러나 제공되는 모든 방법들을 임의로 사용하는 것이 정말 효과적인 방법이였는가에 대해서는 다시 생각해봐야합니다. CSS in JS는 런타임에서 CSS를 처리한다는 태생적인 한계 때문에 성능과 관련된 이슈가 계속해서 등장하고 있습니다. 최근에는 `StyleX`나 `vanilla-extract`와 같은 zero-runtime CSS들이 등장하여 이러한 한계점을 돌파하고 있습니다.

그럼에도 `Emotion`을 사용하거나 유지해야하는 여러 이유가 존재한다면, 어떤 방식으로 스타일을 작성해야 가장 효과적일지 고민이 필요할 것입니다. 따라서 이 프로젝트에서는 `Emotion`을 활용하여 스타일 작성하는 여러 방법들을 1대1 비교를 통해서 성능을 측정하고 더 나은 방식을 선택할 수 있는 지표를 제공하고자 합니다.

<br/>

## 프로젝트 실행방법
[배포된 페이지](https://mitchell-up.github.io/benchmark-performance-emotion)로 접속하거나 해당 프로젝트를 클론하고 다음의 명령어를 통해 실행하여 접속하세요.

```bash
npm run dev 
```

<br/>

## 측정 방법
각 컴포넌트의 성능측정은 React의 `<Profiler/>` 컴포넌트를 사용하여 측정된 값을 사용합니다.

### 비교 기준
컴포넌트의 성능비교는 측정지표 중 하나인 `baseDuration`을 기준으로 비교하여, 측정단위는 `ms(밀리세컨드)`입니다.

### 비교 방법
"Measure" 버튼을 누르면 비교대상 컴포넌트를 1회 렌더링하고 각 속도의 측정하고 모든 시도에 대한 평균을 계산합니다. 1회의 성능지표만 확인하기 보다는 특정 횟수 이상만큼 버튼을 눌러나온 평균치로 결과를 이해하는 것이 더 낫습니다.

<br/>

## 비교 대상

### Styled vs CssProp (Object)
Object 형식으로 스타일링 하는 상황에서 styled와 cssProp의 성능을 비교합니다.

<br/>

### Styled vs CssProp (Literal)
Template Literal 형식으로 스타일링 하는 상황에서 styled와 cssProp의 성능을 비교합니다.

<br/>

### Object vs Literal (CssProp)
CssProp으로 적용하는 상황에서 Object와 Template Literal 형식의 스타일링 성능을 비교합니다.

<br/>

### Inside vs Outside
스타일을 컴포넌트의 내부에서 선언하는 방식과 컴포넌트 바깥에서 선언하고 가져다쓰는 방식의 성능을 비교합니다.

<br/>

### Separate vs ClassName
각 요소에 분리된 cssProp을 이용하는 방법과 하나의 cssProp과 className을 조합하는 방법의 성능을 비교합니다.

<br/>

### Dynamic vs ClassName
사용자로부터 동적으로 값을 받아서 처리해야하는 상황일 때, cssProp으로 그 값을 전달하는 방식과 미리 스타일된 className을 전달하는 방식의 성능을 비교합니다.

<br/>

### Theme vs Constants
테마를 이용한 스타일링 시 Emotion의 ThemeProvider를 통한 방식과 Css Variable을 활용한 js 상수 값을 활용하는 방식의 성능을 비교합니다.

<br/>

## 지원
문제가 있거나 도움이 필요한 부분이 있다면 아래의 이메일을 통해서 문의를 남겨주세요.
- author: mitchell-up
- email: kim3603di@gamil.com
