// CPTED 샘플 데이터 (초기 로컬스토리지 시딩용)
const INITIAL_CPTED_DATA = [
  {
    id: "CPTED-2026-1042",
    createdAt: "2026-10-15 21:30",
    status: "현장조사중", // 접수완료 | 현장조사중 | 설계반영 | 조치완료
    facilityTypes: ["스마트 보안등", "안심 비상벨", "방범 CCTV"],
    riskFactors: ["야간 조도 매우 낮음", "사각지대 / 막다른 골목"],
    riskTime: "심야 (24:00~06:00)",
    detailContent: "퇴근길 빌라 사이 좁은 골목인데 가로등이 고장 난 채 방치되어 밤마다 너무 어둡습니다. 비상벨과 밝은 스마트 보안등 설치가 시급합니다.",
    applicant: "안심주민",
    location: {
      lat: 37.5665,
      lng: 126.9780,
      address: "서울특별시 중구 태평로1가 31 (세종대로 인근 골목)"
    },
    // 플레이스홀더 이미지 (SVG Data URL)
    photoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='400' height='260' fill='%231e293b'/><text x='50%25' y='45%25' fill='%2394a3b8' font-size='16' font-family='sans-serif' text-anchor='middle'>골목길 야간 조도 취약 지점</text><text x='50%25' y='60%25' fill='%2338bdf8' font-size='13' font-family='sans-serif' text-anchor='middle'>[현장 증빙 사진: 가로등 부재 및 사각지대]</text></svg>"
  },
  {
    id: "CPTED-2026-1039",
    createdAt: "2026-10-14 18:40",
    status: "설계반영",
    facilityTypes: ["안심 반사경", "바닥표지병 (솔라)"],
    riskFactors: ["사각지대 / 막다른 골목", "유동인구가 거의 없음"],
    riskTime: "야간/퇴근길 (18:00~24:00)",
    detailContent: "시야 확보가 되지 않는 급커브 구간이라 오토바이나 보행자가 갑자기 튀어나와 위험합니다. 바닥 안심 표지병과 반사경 설치를 요청드립니다.",
    applicant: "보행자안전",
    location: {
      lat: 37.5692,
      lng: 126.9825,
      address: "서울특별시 종로구 인사동길 12"
    },
    photoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' fill='%23334155' viewBox='0 0 400 260'><rect width='400' height='260' fill='%230f172a'/><text x='50%25' y='45%25' fill='%23cbd5e1' font-size='16' font-family='sans-serif' text-anchor='middle'>급커브 사각지대 골목길</text><text x='50%25' y='60%25' fill='%23f59e0b' font-size='13' font-family='sans-serif' text-anchor='middle'>[현장 증빙 사진: 시야 미확보 급커브]</text></svg>"
  },
  {
    id: "CPTED-2026-1021",
    createdAt: "2026-10-12 14:15",
    status: "조치완료",
    facilityTypes: ["노후 담장 정비/벽화", "은폐물/수목 전지"],
    riskFactors: ["방치된 공가/폐가/공터", "무단투기 쓰레기 방치"],
    riskTime: "상시 위험",
    detailContent: "오래된 폐가 담장이 무너져 가고 쓰레기가 쌓여 있어 우범지대화되고 있습니다. 밝은 색채의 셉테드 벽화 및 조경 정비로 시야 확보가 필요합니다.",
    applicant: "동네지킴이",
    location: {
      lat: 37.5630,
      lng: 126.9740,
      address: "서울특별시 중구 서소문로 89"
    },
    photoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='400' height='260' fill='%231e293b'/><text x='50%25' y='45%25' fill='%23e2e8f0' font-size='16' font-family='sans-serif' text-anchor='middle'>노후 옹벽 및 방치 공간</text><text x='50%25' y='60%25' fill='%2310b981' font-size='13' font-family='sans-serif' text-anchor='middle'>[조치완료: 셉테드 안심벽화 시공구역]</text></svg>"
  }
];
