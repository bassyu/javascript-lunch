# 구현할 기능 목록

## 도메인

- [ ] 음식점 데이터 검증

- [x] 정렬

- [x] 카테고리 필터링

- [x] 좋아하는 음식점 필터링

## 유틸

- [x] 로컬 스토리지 활용

## UI

### DOM 구조

```
앱
├─ 헤더
├─ 메인
    ├─ 탭바
    ├─ 필터
    │   ├─ *샐랙트*
    │
    ├─ 리스트
    │   ├─ 음식점 리스트
    │       ├─ *음식점*
    │       ├─ *음식점*
    │
    ├─ 모달
        ├─ 폼
        │   ├─ *샐랙트*
        │   ├─ *버튼 2개*
        │
        ├─ 디테일
```

- [x] HTML 구조를 생성하는 기능
- [x] 이벤트가 발생하면 원하는 HTML을 변경
  - [ ] 이벤트 타겟으로 데이터를 정재하는 기능
  - [ ] 데이터에 맞게 HTML 구조를 바꾸는 기능
