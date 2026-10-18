"use strict";

const STORAGE_KEY = "little-guardians-save-v1";
const episodes = [
  {
    title: "달콤한 선물의 비밀", chapter: "01 · 즐거운 놀이터", place: "놀이터", icon: "🎡", badge: "든든한 약속",
    art: "park", friend: "다람이", prop: "🪁",
    goal: "선물이나 간식으로 권해도 보호자에게 먼저 확인하고, 허락 없이 따라가지 않아요.",
    story: [
      { speaker: "세이", text: "축제 전날, 놀이터 미끄럼틀 근처의 첫 번째 약속 불빛이 갑자기 깜빡이기 시작했어." },
      { speaker: "다람이", text: "보호자랑 잠깐 떨어져 연을 찾고 있었어. 한 사람이 간식을 주며 같이 가자고 했어. 마음이 조금 불편해." },
      { speaker: "세이", text: "그 사람의 겉모습이 아니라, '보호자 몰래 같이 가자'는 행동을 살펴보자. 다람이를 어떻게 도울까?" }
    ],
    steps: [{
      prompt: "놀이터에서 어떤 사람이 간식을 주며 다른 곳으로 같이 가자고 해요. 보호자는 근처에 보이지 않아요. 어떻게 할까요?",
      choices: [
        { icon: "🍪", title: "간식을 받고 같이 가요", correct: false, consequence: "다람이는 걸음을 멈춰도 괜찮아요. 간식을 받거나 따라갈 필요가 없어요.", feedback: "선물이나 간식을 주어도 보호자에게 확인하기 전에는 따라가지 않아요. 불편하면 사람이 있는 안전한 곳으로 가서 도움을 청해요." },
        { icon: "👨‍👧", title: "정중히 거절하고 안전한 어른에게 알려요", correct: true, consequence: "다람이는 보호자 곁으로 돌아왔어요. 함께 온 보호자와 안전한 곳에서 기다려요.", feedback: "잘했어요! 보호자에게 먼저 확인하고 허락 없이 따라가지 않아요. 누가 권했든 불편하면 보호자나 가까운 안전한 어른에게 알려요." },
        { icon: "🚶", title: "혼자 다른 길로 가서 찾아요", correct: false, consequence: "혼자 멀리 가면 보호자와 더 엇갈릴 수 있어요. 함께 온 일행이 있는 곳으로 돌아가요.", feedback: "혼자 다른 곳으로 이동하지 말아요. 안전한 곳에 머물며 보호자나 도움을 줄 수 있는 어른을 찾아요." }
      ]
    }]
  },
  {
    title: "사라진 보호자", chapter: "02 · 북적이는 마트", place: "마트", icon: "🛒", badge: "도움 요청",
    art: "market", friend: "토토", prop: "🧸",
    goal: "보호자와 떨어지면 안전한 곳에 머물며 직원이나 안내 데스크에 도움을 청해요.",
    story: [
      { speaker: "세이", text: "마트 안 두 번째 약속 불빛도 희미해졌어. 주말 손님들 사이로 작은 토토의 목소리가 들려." },
      { speaker: "토토", text: "장난감 진열대를 구경하다가 보호자가 안 보여. 사람들은 바쁘게 지나가고, 어디로 가야 할지 모르겠어." },
      { speaker: "세이", text: "놀라면 생각이 잘 안 날 수 있어. 혼자 찾으러 가지 않아도 돼. 여기 있는 도움 장소를 살펴보자." }
    ],
    steps: [{
      prompt: "마트에서 보호자와 떨어졌어요. 계산대와 출입문이 보여요. 가장 안전한 도움은 어디서 구할까요?",
      choices: [
        { icon: "🚪", title: "마트 밖으로 나가 혼자 찾아요", correct: false, consequence: "출입문을 지나면 보호자와 엇갈릴 수 있어요. 마트 안의 눈에 잘 띄는 안전한 곳으로 돌아가요.", feedback: "혼자 밖으로 나가지 않아요. 마트 안에 머무르며 직원이나 안내 데스크처럼 도움을 줄 수 있는 어른에게 알려요." },
        { icon: "🧑‍💼", title: "직원이나 안내 데스크에 말해요", correct: true, consequence: "직원이 안내 데스크에서 토토와 함께 기다려요. 보호자에게 연락해 다시 만났어요.", feedback: "맞아요! 마트 안의 직원이나 안내 데스크에 '보호자와 떨어졌어요. 도와주세요'라고 말해요. 직원 곁에서 함께 기다려요." },
        { icon: "👣", title: "처음 만난 어른을 따라가며 찾아요", correct: false, consequence: "따라갈 필요는 없어요. 사람이 잘 보이는 매장 안에서 직원에게 도움을 부탁해요.", feedback: "누군가를 따라가지 않아도 괜찮아요. 마트 안에 머물며 직원이나 안내 데스크에 도움을 청해요." }
      ]
    }]
  },
  {
    title: "나의 소중한 몸과 마음", chapter: "03 · 따뜻한 어린이집", place: "어린이집", icon: "🏫", badge: "내 마음",
    art: "school", friend: "몽이", prop: "🎒",
    goal: "불편한 마음은 중요해요. 거절하거나 자리를 옮기고, 믿을 수 있는 어른에게 알릴 수 있어요.",
    story: [
      { speaker: "세이", text: "세 번째 약속 불빛은 어린이집 마당에서 깜빡이고 있어. 몽이가 선생님을 찾고 있네." },
      { speaker: "몽이", text: "놀이 중에 싫다고 했는데도 누군가 계속 몸을 간질였어. 목소리가 바로 나오지 않아서 속상해." },
      { speaker: "세이", text: "말이 나오지 않았어도 몽이의 잘못이 아니야. 몸과 마음을 지킬 방법은 여러 가지야." }
    ],
    steps: [{
      prompt: "누군가의 행동이 불편하고 싫은 느낌이 들어요. 말이 잘 나오지 않는다면 어떻게 해도 괜찮을까요?",
      choices: [
        { icon: "🗣️", title: "할 수 있는 방법으로 거절하고 어른에게 알려요", correct: true, consequence: "몽이는 선생님 곁으로 가서 도움을 받았어요. 선생님은 몽이의 이야기를 차분히 들었어요.", feedback: "맞아요. '싫어요'라고 말하거나 자리를 옮겨도 돼요. 말하거나 움직이지 못했더라도 네 잘못이 아니에요. 믿을 수 있는 어른에게 알려요." },
        { icon: "🤐", title: "불편해도 꼭 참고만 있어요", correct: false, consequence: "몽이의 불편한 마음은 그냥 넘기지 않아도 돼요. 선생님과 함께 안전한 곳에서 이야기해요.", feedback: "불편한 행동을 참을 필요는 없어요. 바로 말하기 어렵다면 자리를 옮기거나, 나중에 믿을 수 있는 어른에게 알려도 괜찮아요." },
        { icon: "🧍", title: "내가 잘못했는지 혼자 생각해요", correct: false, consequence: "이 일을 혼자 해결하지 않아도 돼요. 몽이 곁에 선생님이 와서 이야기를 들어줘요.", feedback: "불편한 행동은 네 잘못이 아니에요. 상대가 누구든 믿을 수 있는 어른에게 이야기하고 도움을 받아도 괜찮아요." }
      ]
    }]
  },
  {
    title: "말할 수 있는 비밀", chapter: "04 · 오래된 골목", place: "우리 동네", icon: "🏡", badge: "용기 있는 마음",
    art: "neighborhood", friend: "삐약이", prop: "✉️",
    goal: "즐거운 깜짝 선물과 무섭고 불편해 숨기라고 하는 비밀은 달라요.",
    story: [
      { speaker: "세이", text: "네 번째 약속은 골목 끝 우체통 근처에 있어. 삐약이가 두 가지 비밀을 생각하고 있대." },
      { speaker: "삐약이", text: "첫 번째는 친구 생일 선물이야. 두 번째는 누군가 불편한 일을 하고 아무에게도 말하지 말라고 한 일이야." },
      { speaker: "세이", text: "둘 다 비밀이라고 부르지만 느낌과 이유가 달라. 어떤 비밀은 어른에게 알려야 할까?" }
    ],
    steps: [
      {
        prompt: "친구 생일 선물을 함께 준비해요. 생일날까지 비밀로 하자고 해요. 이 비밀은 어떤 비밀일까요?",
        choices: [
          { icon: "🎂", title: "친구를 기쁘게 할 즐거운 비밀이에요", correct: true, consequence: "삐약이와 친구는 생일날 깜짝 선물을 건넸어요. 모두 함께 웃었어요.", feedback: "맞아요! 모두를 기쁘게 할 깜짝 선물은 즐거운 비밀일 수 있어요. 그래도 마음이 불편하면 어른에게 물어봐도 괜찮아요." },
          { icon: "😟", title: "모든 비밀은 무조건 위험해요", correct: false, consequence: "비밀의 내용과 느낌을 살펴보면 돼요. 생일 선물처럼 즐거운 비밀도 있어요.", feedback: "생일 선물처럼 누군가를 기쁘게 하려는 비밀도 있어요. 불편하거나 걱정되면 믿을 수 있는 어른에게 물어보세요." }
        ]
      },
      {
        prompt: "누군가 불편한 일을 한 뒤 아무에게도 말하지 말라고 해요. 처음 이야기한 어른도 바빠 보여요. 어떻게 할까요?",
        choices: [
          { icon: "🤫", title: "약속했으니 혼자 계속 숨겨요", correct: false, consequence: "삐약이는 혼자 숨길 필요가 없어요. 다른 믿을 수 있는 어른에게도 도움을 청해요.", feedback: "무섭거나 불편한 비밀은 꼭 지키지 않아도 돼요. 한 어른이 바로 돕지 못하면 다른 믿을 수 있는 어른에게도 계속 말해요." },
          { icon: "🧑‍🏫", title: "다른 믿을 수 있는 어른에게도 말해요", correct: true, consequence: "삐약이는 선생님에게 다시 이야기했어요. 선생님은 곁에 머물며 도움을 준비했어요.", feedback: "잘했어요! 위협하거나 숨기라고 하는 일은 혼자 감당하지 않아도 돼요. 도움을 받을 때까지 다른 어른에게도 이야기해요." }
        ]
      }
    ]
  },
  {
    title: "마지막 안전 작전", chapter: "05 · 축제의 밤", place: "안전 축제 광장", icon: "🎡", badge: "꼬마 수호대",
    art: "festival", friend: "마을 친구들", prop: "🏮",
    goal: "새로운 상황에서도 허락 확인, 안전한 도움 요청, 불편한 행동 알리기를 실천해요.",
    story: [
      { speaker: "세이", text: "축제의 밤이 왔어. 마지막 약속 불빛 하나가 광장 멀리에서 빛을 보내고 있어!" },
      { speaker: "다람이", text: "우리가 배운 약속을 여기서도 기억할 수 있을까? 아까와는 조금 다른 상황들이 나타나고 있어." },
      { speaker: "세이", text: "천천히 살펴보자. 위험한 상황에서 벗어나 도움을 받는 게 가장 중요해. 준비됐니?" }
    ],
    steps: [
      {
        prompt: "축제에서 만난 사람이 보호자에게 묻지 말고 자기 부스 뒤편으로 오라고 해요.",
        choices: [
          { icon: "🎪", title: "따라가지 않고 보호자나 안내 직원에게 알려요", correct: true, consequence: "친구는 부스 뒤로 가지 않았어요. 축제 안내 직원이 보호자 곁까지 함께 갔어요.", feedback: "맞아요! 누구든 보호자 허락 없이 따라가지 않아요. 보호자 곁으로 가거나 축제 안내 직원에게 알려요." },
          { icon: "🎈", title: "잠깐이면 괜찮으니 뒤편으로 가요", correct: false, consequence: "잠깐이어도 혼자 따라갈 필요가 없어요. 사람 많은 안전한 곳에서 도움을 받아요.", feedback: "잠깐이어도 보호자에게 확인하기 전에는 따라가지 않아요. 보호자나 안내 직원에게 알려요." }
        ]
      },
      {
        prompt: "거리 공연을 보다가 보호자가 보이지 않아요. 축제장이 복잡해요.",
        choices: [
          { icon: "🏃", title: "사람들 사이를 혼자 돌아다녀 찾아요", correct: false, consequence: "혼자 헤매지 않아도 돼요. 근처 안내소에서 직원이 함께 기다려 줘요.", feedback: "혼자 돌아다니지 말고 안전한 곳에 머물러요. 축제 안내 직원이나 안내소에 보호자와 떨어졌다고 말해요." },
          { icon: "🦺", title: "안전한 곳에서 안내 직원에게 말해요", correct: true, consequence: "안내 직원이 안내소에서 친구와 기다려 보호자와 다시 만나게 도왔어요.", feedback: "잘했어요! 안내 직원에게 보호자와 떨어졌다고 말하고 안내소처럼 정해진 안전한 곳에서 함께 기다려요." }
        ]
      },
      {
        prompt: "친한 사람이 네가 싫어하는 행동을 해요. 지금은 무슨 말을 해야 할지 잘 모르겠어요.",
        choices: [
          { icon: "🫶", title: "할 수 있는 방법으로 벗어나 믿는 어른에게 알려요", correct: true, consequence: "친구는 안전한 곳으로 이동했어요. 믿을 수 있는 어른이 곁에서 이야기를 들었어요.", feedback: "아는 사람이어도 불편한 행동은 괜찮지 않아요. 바로 말하지 못하거나 움직이지 못했어도 네 잘못이 아니에요. 믿는 어른에게 알려요." },
          { icon: "🤐", title: "아는 사람이니 꼭 참고 있어요", correct: false, consequence: "친한 사람이어도 불편한 행동을 참을 필요가 없어요. 믿을 수 있는 어른에게 알려요.", feedback: "누구든 불편하게 할 수 있어요. 가능한 방법으로 안전한 곳에 가서 믿을 수 있는 어른에게 이야기해요." }
        ]
      },
      {
        prompt: "누군가 축제에서 겪은 무서운 일을 숨기라고 해요. 처음 말한 어른은 듣지 못했어요.",
        choices: [
          { icon: "📣", title: "다른 믿을 수 있는 어른에게도 말해요", correct: true, consequence: "친구가 다시 용기 내어 말했어요. 다른 어른이 함께 도울 방법을 찾았어요.", feedback: "아주 잘했어요! 도움을 받을 때까지 선생님, 보호자, 안내 직원 등 다른 믿을 수 있는 어른에게 계속 알려도 괜찮아요." },
          { icon: "🤫", title: "한 번 말했으니 이제 혼자 참아요", correct: false, consequence: "도움을 받을 때까지 여러 어른에게 알려도 괜찮아요. 친구 곁에는 도와줄 어른이 있어요.", feedback: "도움을 받지 못했다면 다른 믿을 수 있는 어른에게도 말해요. 계속 도움을 청하는 건 괜찮아요." }
        ]
      }
    ]
  }
];

const prologue = [
  { speaker: "나레이션", text: "해가 지고, 별빛 축제가 시작되기 직전. 마을 광장 위로 반짝이던 다섯 안전 약속 불빛이 하나씩 희미해졌어요." },
  { speaker: "세이", text: "큰일이야! 불빛이 완전히 꺼지기 전에, 마을 친구들이 안전 약속을 다시 떠올릴 수 있게 도와야 해." },
  { speaker: "세이", text: "걱정 마. 무서운 사람을 찾는 모험이 아니야. 친구들의 이야기를 듣고, 안전한 선택을 함께 연습하는 모험이야." },
  { speaker: "다람이", text: "저기 놀이터에서 첫 번째 불빛이 깜빡여! 같이 가 줄래?" }
];

const defaultState = () => ({ completed: [], episode: 0, step: 0, phase: "start", playerName: "" });
let state = loadState();
let storyIndex = 0;
let storyContext = "prologue";
let lastAnswer = { episodeComplete: false };
let nameEntryNextAction = "begin";
const app = document.querySelector("#app");
const toastEl = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || !Array.isArray(saved.completed)) return defaultState();
    return {
      completed: [...new Set(saved.completed.filter(n => Number.isInteger(n) && n >= 0 && n < episodes.length))],
      episode: Number.isInteger(saved.episode) ? Math.min(episodes.length - 1, Math.max(0, saved.episode)) : 0,
      step: Number.isInteger(saved.step) ? Math.max(0, saved.step) : 0,
      phase: "start",
      playerName: (typeof saved.playerName === "string" && saved.playerName.trim() !== "꼬마 탐험가")
        ? saved.playerName.trim()
        : ""
    };
  } catch (error) {
    console.warn("저장된 게임을 불러오지 못했습니다.", error);
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ 
      completed: state.completed, 
      episode: state.episode, 
      step: state.step,
      playerName: state.playerName
    }));
  } catch (error) {
    console.warn("게임 진행 상황을 저장하지 못했습니다.", error);
    showToast("저장 공간을 사용할 수 없어요. 이 화면에서 계속할 수 있어요.");
  }
}

function shell(content, className = "") {
  app.innerHTML = `<section class="screen ${className}">${content}</section>`;
}

function cast(expression = "calm") {
  const artworkId = `portrait-${++cast.sequence}`;
  const mouth = expression === "concerned"
    ? '<path d="M99 112 Q110 104 121 112" fill="none" stroke="#815c4e" stroke-width="3" stroke-linecap="round"/>'
    : '<path d="M99 108 Q110 119 121 108" fill="none" stroke="#815c4e" stroke-width="3" stroke-linecap="round"/>';
  const brows = expression === "concerned"
    ? '<path d="M88 86l10 3m21-3l10-3" stroke="#624338" stroke-width="3" stroke-linecap="round"/>'
    : '<path d="M88 86l10-1m21 0l10 1" stroke="#624338" stroke-width="3" stroke-linecap="round"/>';
  return `<svg class="hero-illustration face-${expression}" viewBox="0 0 220 360" role="img" aria-label="꼬마 탐험가">
    <defs>
      <linearGradient id="${artworkId}-coat" x1="0" x2="1" y2="1"><stop stop-color="#efae83"/><stop offset=".55" stop-color="#c97661"/><stop offset="1" stop-color="#8c514b"/></linearGradient>
      <linearGradient id="${artworkId}-skin" x1="0" x2="1" y2="1"><stop stop-color="#f0c8a3"/><stop offset="1" stop-color="#bd826b"/></linearGradient>
      <linearGradient id="${artworkId}-hair" x1="0" x2="1" y2="1"><stop stop-color="#624a3d"/><stop offset="1" stop-color="#292b2c"/></linearGradient>
      <filter id="${artworkId}-shadow" x="-30%" y="-20%" width="160%" height="150%"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="111" cy="344" rx="68" ry="10" fill="#11191b" opacity=".34" filter="url(#${artworkId}-shadow)"/>
    <path d="M78 270q-13 33-11 57l-2 12q1 9 20 8l12-4 3-17 8-47zm48 0q15 29 17 55l6 14q0 9-18 11l-13-5-3-16-8-47z" fill="#344853"/>
    <path d="M64 334q-12 3-11 12 2 8 27 8 15 0 17-7l-6-10-12-5zm67 1q15-6 22 4l11 8q3 8-12 9l-27-3-4-8z" fill="#e6d4b4" stroke="#66564b" stroke-width="3"/>
    <path d="M69 170q-30 8-34 44l-8 45q-2 13 11 15t18-12l12-40 6 48q2 21 6 36l29 10 29-10q5-15 7-36l7-48 12 40q4 13 17 11t11-15l-9-46q-4-34-34-42z" fill="url(#${artworkId}-coat)" stroke="#754d48" stroke-width="3"/>
    <path d="M88 174l22 25 21-25 7 15-17 26 1 82h-23l1-82-18-26z" fill="#e8d4b4"/>
    <path d="M106 198h8v96h-8z" fill="#824d49" opacity=".62"/><path d="M111 208v72" stroke="#f0c794" stroke-width="2" opacity=".65"/>
    <path d="M74 193q17 15 33 12l-5 23q-20 2-33-12zm39 12q18 4 32-11l7 22q-15 15-35 12z" fill="#e3bd7c"/>
    <path d="M81 150h59v42q-27 15-59 0z" fill="url(#${artworkId}-skin)"/>
    <path d="M79 63q-7-23 10-35 11-19 38-13 27 1 33 25 9 35-1 83l-12 30-72-2-8-48z" fill="url(#${artworkId}-hair)"/>
    <ellipse cx="111" cy="94" rx="39" ry="51" fill="url(#${artworkId}-skin)" stroke="#a87562" stroke-width="1.5"/>
    <path d="M73 82q-1-37 30-48 33-13 56 13 8 10 6 37-12-17-20-28-13 14-41 12-13 14-30 17z" fill="url(#${artworkId}-hair)"/>
    <path d="M76 75q-8 16-4 38l8 5 4-22m68-22q10 16 4 40l-9 8-4-27" fill="url(#${artworkId}-hair)"/>
    <ellipse cx="72" cy="99" rx="7" ry="11" fill="#d99e80"/><ellipse cx="150" cy="99" rx="7" ry="11" fill="#d99e80"/>
    ${brows}<ellipse cx="94" cy="96" rx="3.7" ry="5.7" fill="#382d29"/><ellipse cx="128" cy="96" rx="3.7" ry="5.7" fill="#382d29"/>
    <circle cx="95" cy="94" r="1.2" fill="#fff"/><circle cx="129" cy="94" r="1.2" fill="#fff"/>
    <ellipse cx="83" cy="108" rx="8" ry="3.5" fill="#d98e78" opacity=".48"/><ellipse cx="139" cy="108" rx="8" ry="3.5" fill="#d98e78" opacity=".48"/>
    <path d="M110 98l-3 12 5 2" fill="none" stroke="#ad755f" stroke-width="2" stroke-linecap="round"/>${mouth}
    <path d="M81 58q13-17 28-18" fill="none" stroke="#88705b" stroke-width="4" opacity=".45"/>
  </svg>
  <svg class="robot-illustration" viewBox="0 0 130 200" role="img" aria-label="안전 안내 로봇 세이">
    <defs><linearGradient id="robot-shell" x1="0" x2="1" y2="1"><stop stop-color="#d4e7d3"/><stop offset=".55" stop-color="#8ebdb0"/><stop offset="1" stop-color="#477b7d"/></linearGradient><linearGradient id="robot-screen" x1="0" x2="0" y2="1"><stop stop-color="#263f47"/><stop offset="1" stop-color="#142c34"/></linearGradient></defs>
    <ellipse cx="65" cy="190" rx="40" ry="7" fill="#11191b" opacity=".36"/>
    <path d="M63 22V11" stroke="#c3d4c8" stroke-width="5"/><circle cx="64" cy="10" r="8" fill="#e8bd72" stroke="#e3eadf" stroke-width="3"/>
    <rect x="17" y="26" width="94" height="91" rx="28" fill="url(#robot-shell)" stroke="#e2e9dd" stroke-width="5"/>
    <rect x="27" y="47" width="74" height="47" rx="16" fill="url(#robot-screen)"/>
    <ellipse cx="49" cy="67" rx="4" ry="7" fill="#a7e0d0"/><ellipse cx="79" cy="67" rx="4" ry="7" fill="#a7e0d0"/>
    <path d="M52 81q13 9 25 0" fill="none" stroke="#a7e0d0" stroke-width="3" stroke-linecap="round"/>
    <path d="M17 63H8v27h10m94-27h9v27h-10" fill="none" stroke="#d6e4d7" stroke-width="7" stroke-linecap="round"/>
    <rect x="29" y="119" width="72" height="56" rx="17" fill="url(#robot-shell)" stroke="#e2e9dd" stroke-width="4"/>
    <circle cx="65" cy="147" r="17" fill="#e6c67e"/><path d="M65 136l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#527f79"/>
    <path d="M44 176v8m42-8v8" stroke="#d5e5d8" stroke-width="7" stroke-linecap="round"/>
  </svg>`;
}
cast.sequence = 0;

const artImages = {
  meeting: "bg_story_meeting.jpg",
  park: "bg_playground.png",
  market: "bg_market.png",
  school: "bg_kindergarten.jpg",
  neighborhood: "bg_town.jpg",
  festival: "bg_festival.jpg"
};

function scenicArt(theme, mood = "calm", extra = "") {
  const ep = episodes.find(e => e.art === theme);
  const location = ep?.place || (theme === "festival" ? "안전 축제 광장" : "마을 광장");
  const imgUrl = artImages[theme] || artImages.meeting;

  if (imgUrl) {
    const photoLayers = extra.includes("full-photo")
      ? '<div class="scene-photo-blur" aria-hidden="true"></div><div class="scene-photo-full" aria-hidden="true"></div>'
      : "";
    return `<div class="scene-art has-photo scene-${theme} mood-${mood} ${extra}" style="--scene-photo: url('${imgUrl}'); background-image: url('${imgUrl}') !important;" role="img" aria-label="${location} 이야기 장면">
      ${photoLayers}
      <div class="scene-vignette"></div>
      <div class="scene-sign">${extra.includes("large") ? "안전 약속을 찾는 중" : location}</div>
    </div>`;
  }

}


function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  window.setTimeout(() => toastEl.classList.remove("show"), 2700);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("이 브라우저에서는 음성 읽기를 사용할 수 없어요.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function progressMarkup() {
  const count = state.completed.length;
  return `<div class="progress-wrap"><span>약속 불빛 ${count}/5</span><div class="progress-track"><div class="progress-fill" style="width:${count / episodes.length * 100}%"></div></div></div>`;
}

function renderStart() {
  const hasSave = state.completed.length > 0;
  shell(`
    <div class="start-stage start-photo-stage" style="background-image: url('start_bg.jpg') !important; background-size: cover !important; background-position: center !important;" role="region" aria-label="꼬마 수호대 비밀 작전 시작 화면">
      <h1 class="sr-only">꼬마 수호대 비밀 작전!</h1>
      
      <!-- 우측 상단 톱니바퀴 설정 버튼 -->
      <button class="img-hotspot hotspot-settings-top" data-action="settings" title="설정" aria-label="설정"></button>
      
      <!-- 하단 4개 인터랙티브 버튼 -->
      <button class="img-hotspot hotspot-start-settings" data-action="settings" title="설정" aria-label="설정"></button>
      
      <button class="img-hotspot hotspot-start-begin" data-action="begin" title="게임 시작" aria-label="게임 시작">
        <span class="hotspot-pulse-ring" aria-hidden="true"></span>
      </button>
      
      <button class="img-hotspot hotspot-start-resume ${hasSave ? '' : 'disabled'}" 
              data-action="${hasSave ? 'resume' : 'no-save'}" 
              title="${hasSave ? '이어 하기' : '이어 할 모험 기록이 없어요'}" 
              aria-label="이어 하기">
        ${hasSave ? `<span class="start-save-counter">${state.completed.length}/5</span>` : ''}
      </button>
      
      <button class="img-hotspot hotspot-start-rules" data-action="rules" title="안전 약속 수칙" aria-label="안전 약속"></button>
    </div>
  `, "start-screen");
}

function renderNameEntry() {
  shell(`<div class="start-stage start-photo-stage" style="background-image: url('start_bg.jpg') !important; background-size: cover !important; background-position: center !important;" role="region" aria-label="이름 입력">
    <div class="name-modal-overlay">
      <div class="name-modal-card">
        <span class="name-modal-icon" aria-hidden="true">✦</span>
        <h2>이름을 알려 주세요</h2>
        <p>모험을 마치면 입력한 이름으로<br>꼬마 수호대 임명장을 만들어 줄게요.</p>
        <label class="name-input-wrap">
          <input id="player-name" type="text" maxlength="12" autocomplete="name" placeholder="이름을 입력해 주세요" value="${escapeAttr(state.playerName)}" aria-label="임명장에 표시할 이름">
        </label>
        <div class="name-modal-actions">
          <button class="primary-button" data-action="save-name">모험 시작하기 <span>→</span></button>
          <button class="quiet-button" data-action="cancel-name">돌아가기</button>
        </div>
      </div>
    </div>
  </div>`, "start-screen");
  document.querySelector("#player-name").focus();
}

function beginPrologue() {
  storyContext = "prologue";
  storyIndex = 0;
  state.phase = "story";
  renderStory();
}

function resumeGame() {
  if (state.completed.length === episodes.length) {
    renderEnding();
  } else if (!state.completed.includes(state.episode) && state.step > 0) {
    state.phase = "mission";
    renderMission();
  } else {
    state.episode = episodes.findIndex((_, index) => !state.completed.includes(index));
    state.step = 0;
    state.phase = "map";
    renderMap();
  }
}

function currentStory() {
  return storyContext === "prologue" ? prologue : episodes[state.episode].story;
}

function storyDestination() {
  if (storyContext === "prologue") {
    state.phase = "map";
    renderMap();
  } else {
    state.phase = "mission";
    renderMission();
  }
}

function renderStory() {
  const lines = currentStory();
  const line = lines[storyIndex];
  const ep = episodes[state.episode];
  const speakerLabel = line.speaker === "나레이션" ? "EPISODE ZERO" : line.speaker === "세이" ? "세이 · 안내 로봇" : `${line.speaker} · 마을 친구`;
  shell(`<div class="story-stage">
    ${scenicArt("festival", storyIndex === 1 ? "tense" : "calm")}
    <div class="story-top"><span class="chapter-label">${storyContext === "prologue" ? "프롤로그 · 꺼져 가는 불빛" : ep.chapter}</span>
      <button class="quiet-button" data-action="skip-story">장면 건너뛰기 <span>Ⅱ</span></button></div>
    <div class="story-subtitle"><span class="story-speaker">${speakerLabel}</span><p>${line.text}</p></div>
    <div class="story-controls"><div class="story-progress">${lines.map((_, i) => `<i class="${i <= storyIndex ? "lit" : ""}"></i>`).join("")}</div>
      <button class="icon-button" data-action="speak" data-text="${escapeAttr(line.text)}" aria-label="대사 읽어 주기">◖))</button>
      <button class="primary-button" data-action="next-story">${storyIndex === lines.length - 1 ? "계속하기" : "다음 대사"} <span>→</span></button></div>
  </div>`, "story-screen");
}

function renderMap() {
  if (state.completed.length === episodes.length) return renderEnding();

  const spots = [
    { index: 0, name: "놀이터", style: "left: 29.2%; top: 21.5%; width: 15.5%; height: 27.5%;" },
    { index: 1, name: "마트", style: "left: 9.5%; top: 33.5%; width: 16.5%; height: 29.5%;" },
    { index: 2, name: "어린이집", style: "left: 56.5%; top: 22.5%; width: 15.5%; height: 27.5%;" },
    { index: 3, name: "우리 동네", style: "left: 28.5%; top: 52.5%; width: 19.5%; height: 34.5%;" },
    { index: 4, name: "안전 축제 광장", style: "left: 75.5%; top: 32.5%; width: 18%; height: 32%;" }
  ];

  const spotsHtml = spots.map(spot => {
    const ep = episodes[spot.index];
    const isDone = state.completed.includes(spot.index);

    let statusClass = isDone ? "done" : "unlocked";
    let badgeHtml = isDone 
      ? '<span class="bubble-badge-status done" aria-hidden="true">✓</span>' 
      : '<span class="bubble-badge-status current" aria-hidden="true">GO!</span>';
    let tooltip = isDone 
      ? `${ep.place} · 약속을 찾았어요! (다시 가기)` 
      : `${ep.place} · 탐험하러 가기!`;

    return `
      <button class="map-bubble-hotspot ${statusClass}" 
              style="${spot.style}" 
              data-action="place" 
              data-index="${spot.index}" 
              title="${tooltip}" 
              aria-label="${tooltip}">
        <span class="bubble-halo" aria-hidden="true"></span>
        ${badgeHtml}
        <span class="bubble-tooltip">${ep.place}</span>
      </button>
    `;
  }).join("");

  const uncompletedIndex = episodes.findIndex((_, i) => !state.completed.includes(i));
  const quickTarget = uncompletedIndex !== -1 ? uncompletedIndex : 0;
  const quickLabel = uncompletedIndex !== -1 ? `${episodes[quickTarget].place} 바로 가기` : "별빛 축제 가기";

  shell(`
    <div class="map-stage map-photo-stage" style="background-image: url('map_bg.jpg') !important; background-size: cover !important; background-position: center !important;" role="region" aria-label="마을 지도 화면">
      <h2 class="sr-only">꼬마 수호대 비밀 작전 마을 지도</h2>
      
      <!-- 상단 네비게이션/설정 -->
      <button class="img-hotspot map-menu-top" data-action="home" title="처음 화면" aria-label="처음 화면"></button>
      <button class="img-hotspot map-settings-top" data-action="settings" title="설정" aria-label="설정"></button>
      
      <!-- 진행 상태 HUD -->
      <div class="map-hud-progress">
        <span>찾은 약속 <b>${state.completed.length} / 5</b> · 가고 싶은 곳을 터치해요!</span>
        <div class="map-hud-dots" aria-hidden="true">
          ${episodes.map((ep, i) => `<span class="hud-dot ${state.completed.includes(i) ? 'lit' : ''}">✦</span>`).join("")}
        </div>
      </div>

      <!-- 5개 장소 버블 (모두 자유롭게 선택 가능) -->
      <div class="map-bubbles-layer">
        ${spotsHtml}
      </div>

      <!-- 중앙 세이 로봇 안내 -->
      <button class="img-hotspot map-robot-hint" data-action="say-hint" title="세이에게 길 안내 듣기" aria-label="세이의 길 안내"></button>

      <!-- 하단 버튼들 -->
      <button class="img-hotspot map-btn-home" data-action="home" title="처음 화면" aria-label="처음 화면으로"></button>
      <button class="img-hotspot map-btn-rules" data-action="rules" title="안전 약속 수칙" aria-label="안전 약속 수칙"></button>
      <button class="img-hotspot map-btn-next" data-action="quick-play" title="${quickLabel}" aria-label="${quickLabel}"></button>
    </div>
  `, "map-screen");
}

function getStep() {
  const ep = episodes[state.episode];
  return ep.steps[Math.min(state.step, ep.steps.length - 1)];
}

function renderMission() {
  const ep = episodes[state.episode], step = getStep();
  const choices = step.choices.map((choice, index) => `<button class="choice-card" data-action="choose" data-choice="${index}">
    <span class="choice-icon">${choice.icon}</span><span class="choice-copy"><small>선택 ${String.fromCharCode(65 + index)}</small><b>${choice.title}</b></span><span class="choice-arrow">↗</span>
  </button>`).join("");
  const dots = ep.steps.map((_, index) => `<i class="${index < state.step ? "done" : ""} ${index === state.step ? "active" : ""}"></i>`).join("");
  shell(`<div class="mission-stage">
    <div class="mission-top"><button class="back-button" data-action="map">← <span>마을 지도</span></button><div><span class="chapter-label">${ep.chapter}</span><b class="mission-place">${ep.place}</b></div>${progressMarkup()}</div>
    <div class="mission-grid">
      <div class="mission-art">${scenicArt(ep.art, "tense", "full-photo")}<div class="scene-location"><span class="live-dot"></span> ${ep.place} · ${ep.friend}의 이야기</div>
        <div class="art-caption"><span>MISSION ${String(state.episode + 1).padStart(2, "0")}</span><b>${ep.title}</b></div></div>
      <div class="mission-panel"><div class="mission-overline">잠깐 멈추고 생각해 봐요 <span>${String(state.step + 1).padStart(2, "0")} / ${String(ep.steps.length).padStart(2, "0")}</span></div>
        <h2>${step.prompt}</h2><div class="guide-line"><span class="guide-avatar">S</span><p><b>세이</b> · 서두르지 않아도 괜찮아. 안전한 방법을 생각해 보자.</p><button class="speak-mini" data-action="speak" data-text="${escapeAttr(step.prompt)}" aria-label="상황 읽기">◖))</button></div>
        <div class="choice-grid">${choices}</div><div class="mission-footer"><span>정답을 맞히는 시험이 아니야. 안전한 방법을 함께 연습해 보자.</span><div class="step-indicator">${dots}</div></div>
      </div>
    </div>
  </div>`, "mission-screen");
}

function renderResult(correct, choice, feedback) {
  const ep = episodes[state.episode];
  const consequence = choice.consequence || feedback;
  const allComplete = state.completed.length === episodes.length;
  const nextActionLabel = correct
    ? (lastAnswer.episodeComplete
      ? (allComplete ? "마을 이야기 마무리하기" : "지도에서 다음 장소 고르기")
      : "다음 질문으로")
    : "다시 선택해 보기";

  shell(`<div class="result-stage">
    ${scenicArt(ep.art, correct ? "calm" : "tense")}
    <div class="result-shade"></div>
    <div class="result-top">
      <span class="chapter-label">${ep.chapter} · 선택의 결과</span>
      <button class="quiet-button" data-action="map">마을 지도 보기</button>
    </div>
    <div class="result-content ${correct ? "is-correct" : "is-incorrect"}">
      <span class="result-kicker">${correct ? "안전한 선택" : "다시 생각해 봐요"}</span>
      <h2>${correct ? "좋아, 안전한 선택이야!" : "괜찮아, 다시 생각해 보자."}</h2>
      <p class="result-consequence">${consequence}</p>
      <p class="result-message">${feedback}</p>
      ${!correct ? `<div class="retry-note">어려운 상황에서 바로 말하거나 움직이지 못해도 네 잘못이 아니야. 믿을 수 있는 어른에게 도움을 청해도 괜찮아.</div>` : ""}
      <div class="result-actions">
        <button class="primary-button" data-action="${correct ? "continue" : "retry"}">${nextActionLabel} <span>→</span></button>
        <button class="icon-button result-speech" data-action="speak" data-text="${escapeAttr(feedback)}">대사 듣기 ◖))</button>
      </div>
    </div>
    <div class="result-beacon ${correct ? "lit" : ""}">✦</div>
  </div>`, "result-screen");
}

function renderEnding() {
  shell(`<div class="ending-stage">${scenicArt("festival", "calm", "large")}<div class="ending-overlay"></div><div class="ending-content">
    <span class="eyebrow">THE LAST LIGHT IS ON</span><h1>마을의 불빛이<br><em>다시 켜졌어요.</em></h1>
    <p>친구들의 이야기를 듣고 안전한 약속을 함께 찾았어요.<br>오늘부터 너는 꼬마 수호대원!</p>
    <div class="ending-medals">${episodes.map(ep => `<span title="${ep.badge}">✦</span>`).join("")}</div>
    <div class="promise-list"><span>멈추기</span><i>·</i><span>안전한 곳으로</span><i>·</i><span>믿는 어른에게 알리기</span></div>
    <p class="safety-note">상황에 따라 안전한 곳으로 먼저 대피하거나 곁의 어른에게 도움을 청해요. 바로 말하거나 움직이지 못했어도 네 잘못이 아니에요.</p>
    <div class="ending-actions">
      <button class="primary-button" data-action="certificate">임명장 받기 <span>✦</span></button>
      <button class="quiet-button" data-action="replay">이야기 다시 시작 <span>↺</span></button>
    </div></div></div>`, "ending-screen");
}

function renderCertificate() {
  shell(`<div class="certificate-stage" role="img" aria-label="꼬마 수호대 임명장">
    <span class="certificate-name-overlay">${escapeAttr(state.playerName)}</span>
    <div class="certificate-controls">
      <button class="btn-cert-replay" data-action="ending">← 엔딩으로</button>
      <button class="btn-cert-print" data-action="print-certificate">임명장 인쇄</button>
      <button class="btn-cert-replay" data-action="replay">처음부터 다시</button>
    </div>
  </div>`, "certificate-screen");
}

function renderRules() {
  shell(`<div class="rules-stage">${scenicArt("school", "calm")}<div class="rules-overlay"></div>
    <button class="quiet-button rules-close" data-action="home">← 처음 화면</button>
    <div class="rules-content"><span class="eyebrow">SAFETY NOTES · FOR EVERYONE</span><h2>기억해 둘 약속</h2>
      <div class="rule-card"><b>01</b><span>선물이나 간식을 주어도 보호자 허락 없이 따라가지 않아요.</span></div>
      <div class="rule-card"><b>02</b><span>보호자를 잃어버리면 안전한 곳에서 직원이나 도움을 줄 어른에게 알려요.</span></div>
      <div class="rule-card"><b>03</b><span>불편한 행동은 거절해도 괜찮아요. 바로 말하지 못한 건 네 잘못이 아니에요.</span></div>
      <div class="rule-card"><b>04</b><span>무섭거나 불편한 비밀은 믿을 수 있는 어른에게 말해요. 처음 말한 어른이 듣지 못하면 다른 어른에게도 알려요.</span></div>
      <div class="rule-card"><b>05</b><span>누구든 도움을 줄 수 있고, 누구든 불편하게 할 수 있어요. 겉모습으로 판단하지 않아요.</span></div>
    </div></div>`, "rules-screen");
}

function escapeAttr(text) {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function choose(index) {
  const choice = getStep().choices[index];
  if (!choice) return;
  const ep = episodes[state.episode];
  const episodeComplete = choice.correct && state.step === ep.steps.length - 1;
  lastAnswer = { episodeComplete };
  if (episodeComplete && !state.completed.includes(state.episode)) {
    state.completed.push(state.episode);
    state.completed.sort((a, b) => a - b);
  }
  if (episodeComplete) {
    state.step = 0;
  }
  state.phase = "result";
  saveState();
  renderResult(choice.correct, choice, choice.feedback);
}

function advance() {
  const ep = episodes[state.episode];
  if (lastAnswer.episodeComplete) {
    lastAnswer = { episodeComplete: false };
    if (state.completed.length === episodes.length) {
      state.phase = "ending";
      renderEnding();
      return;
    }
    state.phase = "map";
    state.step = 0;
    saveState();
    renderMap();
    return;
  }
  state.step += 1;
  state.phase = "mission";
  saveState();
  renderMission();
}

app.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  
  if (action === "begin") {
    if (state.playerName) beginPrologue();
    else {
      nameEntryNextAction = "begin";
      renderNameEntry();
    }
  }
  if (action === "resume") {
    if (state.playerName) resumeGame();
    else {
      nameEntryNextAction = "resume";
      renderNameEntry();
    }
  }
  if (action === "save-name") {
    const input = document.querySelector("#player-name");
    const playerName = input.value.trim();
    if (!playerName) {
      showToast("임명장에 넣을 이름을 입력해 주세요.");
      input.focus();
      return;
    }
    state.playerName = playerName;
    saveState();
    if (nameEntryNextAction === "resume") resumeGame();
    else beginPrologue();
  }
  if (action === "cancel-name") renderStart();
  if (action === "no-save") {
    showToast("아직 저장된 모험 기록이 없어요. [게임 시작]을 눌러 모험을 떠나요!");
  }
  if (action === "settings") {
    showToast("대사 읽기 버튼 ◖))을 누르면 음성으로 들려줘요!");
  }
  if (action === "say-hint") {
    const uncompleted = episodes.filter((_, i) => !state.completed.includes(i));
    const hintText = uncompleted.length === 0
      ? "모든 약속을 지켰어! 너는 정말 최고의 꼬마 수호대원이야!"
      : `세이: "지도의 어떤 장소든 가고 싶은 곳을 골라봐! (${uncompleted.map(e => e.place).join(', ')})에서 약속 불빛을 찾을 수 있어!"`;
    showToast(hintText);
    speak(hintText);
  }
  if (action === "quick-play") {
    const uncompletedIndex = episodes.findIndex((_, i) => !state.completed.includes(i));
    const targetIndex = uncompletedIndex !== -1 ? uncompletedIndex : 0;
    state.episode = targetIndex;
    state.step = 0;
    storyContext = "episode";
    storyIndex = 0;
    state.phase = "story";
    saveState();
    renderStory();
  }
  if (action === "rules") renderRules();
  if (action === "home") { state.phase = "start"; renderStart(); }
  if (action === "skip-story") storyDestination();
  if (action === "next-story") {
    if (storyIndex < currentStory().length - 1) { storyIndex += 1; renderStory(); }
    else storyDestination();
  }
  if (action === "speak") speak(button.dataset.text);
  if (action === "place") {
    const index = Number(button.dataset.index);
    state.episode = index; 
    state.step = 0; 
    storyContext = "episode"; 
    storyIndex = 0; 
    state.phase = "story"; 
    saveState(); 
    renderStory();
  }
  if (action === "map") { state.phase = "map"; renderMap(); }
  if (action === "choose") choose(Number(button.dataset.choice));
  if (action === "retry") { state.phase = "mission"; renderMission(); }
  if (action === "continue") advance();
  if (action === "certificate") renderCertificate();
  if (action === "ending") renderEnding();
  if (action === "print-certificate") window.print();
  if (action === "replay") {
    state = defaultState();
    try { localStorage.removeItem(STORAGE_KEY); } catch (error) { console.warn("이전 진행 상황을 지우지 못했습니다.", error); }
    renderStart();
  }
});

app.addEventListener("keydown", event => {
  if (event.key === "Enter" && event.target.id === "player-name") {
    event.preventDefault();
    app.querySelector('[data-action="save-name"]').click();
  }
});

renderStart();
