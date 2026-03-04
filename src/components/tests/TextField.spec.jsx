import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  // 1) Arrange - 테스트를 위한 환경 만들기  -> className을 지닌 컴포넌트 렌더링
  // render API를 호출 -> 테스트 환경의 jsDOM에 리엑트 컴포넌트가 렌더링 된 DOM 구조가 반영
  // jsDOM : Node.js 에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현
  await render(<TextField className="my-class" />);

  // 2) Act - 테스트 할 동작 발생
  // ->  렌더링에 대한 검증이기 때문에 이 단계는 생략
  // -> 클릭이나 메서드 호출, prop 변경 등등에 대한 작업이 여기에 해당

  //테스트 돔 구조를 확인할 수 있는 메서드
  screen.debug();

  // 3) Assert - 올바른 동작이 실행되었는지 검증  -> 렌더링 후 DOM에 해당 class가 존재하는지 검증
  // vitest의 expect 함수를 사용하여 기대 결과를 검증
  // toHaveClass : 렌더링 된 요소에 지정된 css 클래스가 올바르게 적용되었는지 검증하는 역할을 수행함
  // className 이란 내부 props나 state 값을 검증(X)
  // 렌더링되는 DOM 구조가 올바르게 변경되었는지 확인 (0) -> 최종적으로 사용자가 보는 결과는 DOM
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});
