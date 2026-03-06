# 프런트엔드 테스트 학습 - 쇼핑몰 예제

> 인프런 "[실무에 바로 적용하는 프런트엔드 테스트](https://www.inflearn.com/)" 강의를 수강하며 학습한 내용을 정리하는 저장소입니다.

## 현재 진행 상황

- **현재 브랜치:** `shopping-mall-unit-test` (3장. 단위 테스트 작성하기)
- 강의를 따라가며 직접 테스트 코드를 작성하고, 학습 내용을 주석으로 정리하고 있습니다.

## 사용 기술 스택

| Types      | Techs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Front      | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Tanstack Query](https://img.shields.io/badge/-tanstack%20Query-FF4154?style=flat&logo=react%20query&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=flat&logo=mui&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white) [zustand](https://github.com/pmndrs/zustand) |
| Server     | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)                                                                                                                                                                                                                                                                                                                                                                                     |
| Build tool | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                        |
| Test       | ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=flat&logo=cypress&logoColor=058a5e) ![Testing-Library](https://img.shields.io/badge/-Testing%20Library-%23E33332?style=flat&logo=testing-library&logoColor=white) ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=flat&logo=storybook&logoColor=white) [MSW](https://mswjs.io/) [Chromatic](https://www.chromatic.com/)                                                                                           |

## 실행

```sh
$ nvm use # node 19.9.0 버전을 사용합니다.
$ npm i
$ npm run dev # 노드 서버와 vite 개발 서버를 동시에 실행합니다.
```

## 브랜치 구조

| 장 | 브랜치 | 정답 브랜치 |
| -- | ------ | ---------- |
| 2장. 단위 테스트란? | `unit-test-example` | `unit-test-example-with-answer` |
| 3장. 단위 테스트 작성하기 | `shopping-mall-unit-test` | `shopping-mall-unit-test-with-answer` |
| 4~5장. 통합 테스트 | `shopping-mall-integration-test` | `shopping-mall-integration-test-with-answer` |
