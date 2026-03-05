import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

// my-class라는 class가 항상 적용된 컴포넌트를 렌더링

// beforeEach(async () => {
//   await render(<TextField className="my-class" />);
// });

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

// 기대 결과를 정의한다.
// it -> test 함수의 alias
// it -> 'should~~~' 또는 test -> 'if~~~' 적용
// describe -> it 또는 test 함수들을 그룹핑하여 테스트를 진행
describe('placeholder', () => {
  // 기대결과 === 실제 결과 --> 성공
  // 기대결과 !== 실제 결과 --> 실패

  it('[describe placeholder] 기본 placeholder "텍스트를 입력 해주세요."가 노출된다.', async () => {
    // Arrange
    await render(<TextField />);

    // Act 생략

    // Assert
    // 단언(assertion) -> 테스트가 통과하기 위한 조건 -> 검증 실행
    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
    expect(textInput).toBeInTheDocument();
  });

  it('[describe placeholder]placeholder prop에 따라 placeholder가 변경된다.', async () => {
    // Arrange
    await render(<TextField placeholder={'플레이스 홀더가 변경'} />);

    // Act 생략

    // Assert
    const textInput = screen.getByPlaceholderText('플레이스 홀더가 변경');
    expect(textInput).toBeInTheDocument();
  });
});

it('텍스트를 입력하면 onChange prop으로 등록한 함수가 호출된다.', async () => {
  // Arrange
  const spy = vi.fn(); // spy 함수 -> 특정 함수의 호출 여부, 호출 횟수, 전달된 인자 등을 추적할 수 있는 도구
  const { user } = await render(<TextField onChange={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  // Act
  await user.type(textInput, 'test');

  // Assert
  expect(spy).toHaveBeenCalledWith('test');
});

it('엔터키를 입력하면 onEnter prop으로 등록한 함수가 호출된다.', async () => {
  // Arrange
  const spy = vi.fn();
  const { user } = await render(<TextField onEnter={spy} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  // Act
  await user.type(textInput, 'test{enter}');

  // Assert
  expect(spy).toHaveBeenCalledWith('test');
});

describe('focus', () => {
  // 포커스 활성화 조건
  // 1) 탭 키로 인풋 요소에 포커스
  // 2) 마우스로 인풋 요소 클릭
  // 3) textInput.focus() 메서드로 포커스 활성화
  // onFocus는 별도 인자가 필요없는 함수임.
  // toHaveBeenCalled : spy 함수가 호출되었는지 검증하는 역할을 수행함

  // Arrange 분리
  let spy;
  let user;
  let textInput;

  beforeEach(async () => {
    spy = vi.fn();
    ({ user } = await render(<TextField onFocus={spy} />));
    textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
  });

  it('탭키로 포커스되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
    await user.tab();

    expect(spy).toHaveBeenCalled();
  });

  it('클릭으로 포커스되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
    await user.click(textInput);

    expect(spy).toHaveBeenCalled();
  });

  it('textInput.focus() 메서드로 포커스되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
    textInput.focus();

    expect(spy).toHaveBeenCalled();
  });

  it('포커스가 활성화되면 border 스타일이 변경된다.', async () => {
    await user.click(textInput);

    expect(textInput).toHaveStyle({
      borderWidth: '2px',
      borderColor: 'rgb(25, 118, 210)',
    });
  });

  // afterEach에 expect를 넣으면 안되는 이유
  // afterEach는 정리(cleanup) 용도이고, 검증(assert)*은 it 안에 있어야
  // 어떤 테스트가 왜 실패했는지 명확하게 알 수 있기 때문에 넣으면 안된다.
});
