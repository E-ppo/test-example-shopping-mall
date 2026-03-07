import { screen } from '@testing-library/react';
import React from 'react';

import ErrorPage from '@/pages/error/components/ErrorPage';
import render from '@/utils/test/render';

/* vi.mock은 Vitest가 파일 최상단으로 자동 호이스팅하는 특수 매크로
 유틸 함수 안에 넣어서 호출하면 호이스팅이 안 돼서 mock이 제대로 안 걸림
 여러 파일에서 쓸 거라면 Vitest 전역 setup 파일(vitest.setup.ts)에 mock을 등록하는 방법을 사용
 그러면 매 테스트 파일마다 반복 안 해도 됨 */

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

it('"뒤로 이동" 버튼 클릭시 뒤로 이동하는 navigate(-1) 함수가 호출된다', async () => {
  const { user } = await render(<ErrorPage />);
  // getByRole로 버튼 요소를 가져옴 -> 접근성 좋은 요소 선택자 사용 권장 (getByText보다 getByRole이 더 명확한 선택자)
  // getByRole은 동기 함수라서 await 가 필요 없음
  const button = screen.getByRole('button', { name: '뒤로 이동' });

  await user.click(button);

  expect(navigateFn).toHaveBeenNthCalledWith(1, -1);
});
