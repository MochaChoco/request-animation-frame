# request-animation-frame
자바스크립트 내장 함수 requestAnimationFrame의 사용 방법과 유의 사항을 다룬 프로젝트입니다.

# 명령어
- dependency 설치 : yarn install
- 로컬 실행 : yarn dev

# 테스트 방법
- hover mouse라는 영역에 mouseEnter하면 애니메이션이 재생되고 mouseLeave하면 애니메이션이 사라지면서 멈추는 구조입니다.
- 마우스를 초반 10초 동안 mouseEnter 상태에서 가만히 두고, 나머지 10초는 mouseLeave 한 상태에서 가만히 두는 식으로 테스트를 진행합니다.
- /components/animation.js 파일의 destroy 함수 내부에 있는 cancelAnimationFrame 함수를 주석 처리하고 다시 테스트를 진행해봅니다.
- 여러번 테스트 해보면서 콘솔창에서 cancelAnimationFrame 함수가 있을때와 없을때의 차이점을 확인합니다.
