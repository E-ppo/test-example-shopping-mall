import { screen } from '@testing-library/react';
import React from 'react';

import EmptyNotice from '@/pages/cart/components/EmptyNotice';
import render from '@/utils/test/render';

// 실제 모듈을, 모킹한 모듈로 대체하여 테스트를 진행
// useNavigate 훅이 반환하는 navigate 함수가 올바르게 호출되는지 테스트하기 위함 -> 스파이 함수

const navigateFn = vi.fn(); // Spy 함수 생성 (함수 호출여부 + 인자 검증 가능)

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn, // 실제 useNavigate 훅 대신 navigateFn 스파이 함수를 반환하도록 모킹
  };
});

it('"홈으로 가기" 링크를 클릭할경우 "/"경로로 navigate함수가 호출된다', async () => {
  const { user } = await render(<EmptyNotice />);

  await user.click(screen.getByText('홈으로 가기'));

  // 모킹한 navigate 함수가 1번만 호출되는가, 인자값은 '/'인가 검증함
  expect(navigateFn).toHaveBeenNthCalledWith(1, '/');
});
