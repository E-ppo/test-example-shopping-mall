import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * userEvent : 사용자 이벤트 시뮬레이터 -> 클릭, 입력, 포커스 등등의 사용자 행동을 시뮬레이션하는 도구
 */

export default async component => {
  const user = userEvent.setup(); // 사용자 이벤트 시뮬레이터 설정 -> 비동기 이벤트 처리 지원

  return {
    user,
    ...render(component),
  };
};
