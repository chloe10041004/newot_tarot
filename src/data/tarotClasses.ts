export type CurriculumWeek = {
  week: string;
  title: string;
  items: string[];
};

export type CurriculumBlock = {
  time: string;
  title: string;
  description: string;
};

export type TarotClassProduct = {
  id: "tuesday" | "lenormand";
  tabLabel: string;
  projectName: string;
  title: string;
  badge: string;
  hook: string;
  hookSub?: string;
  ctaLabel: string;
  painPoints: string[];
  painStory?: string;
  solution: {
    lead: string;
    paragraphs: string[];
    bullets?: string[];
  };
  transformations: { title: string; description: string }[];
  curriculumIntro: string;
  curriculumWeeks?: CurriculumWeek[];
  curriculumBlocks?: CurriculumBlock[];
  classInfo: {
    capacity: string;
    schedule: string;
    location: string;
    price: string;
    priceNote?: string;
    materials: string;
  };
  enrollment: {
    isFree?: boolean;
    selectiveNote?: string;
    bankAccount?: string;
    accountHolder?: string;
    formUrl: string;
    note: string;
  };
  refundPolicy: { condition: string; rate: string }[];
  heroImage: string;
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
};

export const tarotClasses: TarotClassProduct[] = [
  {
    id: "tuesday",
    tabLabel: "화요 힐링반",
    projectName: "뉴잇아카데미-썸머프로젝트",
    title: "뉴잇 썸머나이트 타로 클래스",
    badge: "화요 힐링반 · 4주 과정",
    hook: "아직도 유튜브 제너럴 리딩 영상만 찾아보시나요?",
    hookSub:
      "수만 명이 듣는 포괄적 이야기 대신, 내 삶에 맞는 리딩을 배우는 4주 실전 클래스",
    ctaLabel: "화요 힐링반 수강 신청하기",
    painPoints: [
      "수만 명, 수십만 명이 똑같이 듣는 포괄적인 이야기. 들을 때는 잠깐 위안이 되지만, 영상을 끄고 나면 내 진짜 고민은 그대로입니다.",
      "내 삶의 맥락과 디테일이 빠진 제너럴 리딩으로는 결코 '나만의 해답'을 찾을 수 없습니다.",
      "타로, 외우려니까 입이 안 떨어지는 겁니다. 카드를 펼치면 머릿속이 하얘지지 않나요?",
    ],
    solution: {
      lead: "타로카드를 사놓고 서랍 속에 방치하고 계신가요?",
      paragraphs: [
        "타로는 신비로운 예언 도구가 아니라, 내 무의식을 비추고 삶의 방향을 스스로 기획하는 가장 직관적인 '라이프 디자인' 도구입니다.",
        "중요한 것은 카드 한 장의 뜻을 달달 외우는 암기가 아니라, 내 상황에 맞게 스토리를 엮어내는 '연결'입니다.",
        "남의 입을 통해 듣는 뻔한 위로 대신, 내 손으로 직접 카드를 뽑고 내 삶에 맞춰 해석하는 방법을 알려드립니다.",
      ],
    },
    transformations: [
      {
        title: "답답한 밤, 스스로 위로하는 나",
        description:
          "고민이 생길 때마다 남을 찾지 않고, 스스로 카드를 펼쳐 내 마음을 읽고 내일의 방향을 잡는 단단한 나를 만나게 됩니다.",
      },
      {
        title: "매력적인 조언자",
        description:
          "커피 한 잔을 마시며, 친구의 연애 고민이나 직장 스트레스까지 명쾌하게 짚어주고 위로를 건네는 사람이 되어 있을 것입니다.",
      },
    ],
    curriculumIntro:
      "실전 코칭 70% + 핵심 이론 30% — 지루한 이론 수업은 지양합니다. 수강생 본인의 실제 고민을 테이블 위에 올려두고 직접 풀어보는 '초개인화 실습' 위주로 진행됩니다.",
    curriculumWeeks: [
      {
        week: "1주차",
        title: "타로와 친해지기 & 내 무의식 읽기",
        items: [
          "타로를 라이프 디자인 도구로 활용하는 법",
          "메이저 카드 핵심 인사이트 도출",
          "(실습) 오늘 나의 스트레스 원인과 해결책 뽑아보기",
        ],
      },
      {
        week: "2주차",
        title: "키워드 연결의 비밀 & 오늘의 운세",
        items: [
          "마이너 카드의 원소 심리학",
          "파편화된 카드를 하나의 스토리로 연결하는 공식",
          "(실습) 남의 도움 없이 스스로 보는 '내일의 운세'",
        ],
      },
      {
        week: "3주차",
        title: "실전 배열법 & 친구 연애운 봐주기",
        items: [
          "질문을 예리하게 다듬는 법",
          "3카드 배열법의 응용",
          "(실습) 지인의 연애/인간관계 고민 롤플레잉 리딩",
        ],
      },
      {
        week: "4주차",
        title: "실전 고민 상담 & 나만의 리딩 스타일 찾기",
        items: [
          "각자의 가장 깊은 고민을 타로로 풀어보는 밀착 코칭",
          "리딩이 막힐 때 탈출하는 비밀 스킬",
          "수료 후 지속 가능한 타로 활용법 안내",
        ],
      },
    ],
    classInfo: {
      capacity: "선착순 5명 (소수정예)",
      schedule:
        "6월 30일(화) 시작 ~ 4주간 / 매주 화요일 20:00~21:30 (90분)",
      location:
        "뉴잇(소율타로사주) — 대구 달서구 송현동길 25, 1층 / Zoom 동시 송출",
      price: "120,000원",
      materials:
        "개인 유니버셜 웨이트 타로카드 (없으신 분은 스튜디오 공용 카드 사용 가능)",
    },
    enrollment: {
      bankAccount: "카카오뱅크 3333-37-7000214",
      accountHolder: "김보경(소율타로사주)",
      formUrl: "https://forms.gle/5KvYQYAJYfAq9eE97",
      note: "수강료 입금 후 신청서를 작성해 주시면 개별 안내 문자를 드립니다. (입금순 마감)",
    },
    refundPolicy: [
      { condition: "클래스 시작 3일 전까지", rate: "100% 환불" },
      { condition: "클래스 시작 1~2일 전", rate: "50% 환불" },
      { condition: "클래스 시작 당일 및 이후", rate: "환불 불가" },
    ],
    heroImage: "/tarot/hero-tuesday.jpg",
  },
  {
    id: "lenormand",
    tabLabel: "레노먼드 맛보기",
    projectName: "뉴잇아카데미-레노먼드 맛보기",
    title: "온라인 원데이 레노먼드 타로 클래스",
    badge: "6월 25일(목) 20:00 · 120분 라이브",
    hook:
      "78장 타로 카드의 미로 속에서 길을 잃으셨나요? 단 36장의 레노먼드로 암기 없이 오늘 밤 당장 리딩을 시작하세요!",
    hookSub:
      "복잡한 그리스 신화, 까다로운 별자리 공식, 머리 아픈 정·역방향 해석은 전부 내려놓으세요. 당신이 이미 알고 있는 일상 속 36가지 그림만으로 인생의 가장 명쾌한 지도를 그릴 수 있습니다.",
    ctaLabel: "어렵고 복잡한 타로 공부 끝내기 — 2시간 속성 클래스 신청",
    painPoints: [
      "78장에 달하는 방대한 카드 수와 정·역방향 해석 규칙 — 입문까지 수개월이 걸립니다.",
      "점성학, 카발라, 사원소설이 얽힌 다층적 상징 체계가 초보자에게는 너무 어렵습니다.",
      "책을 뒤적이거나 검색창을 켜야만 리딩할 수 있다면, 타로는 '나의 도구'가 아닙니다.",
    ],
    painStory:
      "타로에 관심은 있지만 '어렵다, 영감이 필요하다'고 생각해 포기하셨나요? 유니버셜 웨이트를 독학하다 중도 포기한 경험, 공감되시나요?",
    solution: {
      lead: "레노먼드는 36장, 암기 없이, 오늘부터.",
      paragraphs: [
        "레노먼드 카드는 집, 열쇠, 편지, 개, 낫, 반지처럼 일상적인 상징물만 사용합니다. 보는 즉시 떠오르는 직관적 이미지라 별도의 암기가 필요 없습니다.",
        "단어 두 개를 이어 문장을 만드는 '컴비네이션 리딩' — 반지+남자=계약 관계의 남성, 편지+별=희망적인 서면 소식. 문법처럼 명쾌합니다.",
        "타로가 내면 심리를 헤아리는 '상담가'라면, 레노먼드는 현실의 사건을 짚어주는 '안내판'입니다. 이래서 2시간이면 충분합니다.",
      ],
      bullets: [
        "반지 + 남자 → 결혼·파트너십에 얽힌 구체적 남성",
        "배 + 여우 → 비즈니스 목적의 이동·출장",
        "편지 + 별 → 합격 통지·계약 체결 등 희망적 소식",
        "나무 + 클로버 → 건강 회복의 조짐",
      ],
    },
    transformations: [
      {
        title: "두꺼운 가이드북의 영구적 탈피",
        description:
          "리딩 시 책을 뒤적이지 않고 36장 카드의 극성과 키워드를 머릿속에서 즉시 꺼내 쓸 수 있습니다.",
      },
      {
        title: "셀프 데일리 리딩",
        description:
          "매일 아침 2~3장만으로 오늘의 흐름, 주의할 인물, 최적의 행동 방침을 명료하게 구조화합니다.",
      },
      {
        title: "타인의 고민을 돕는 리더",
        description:
          "연애·커리어 고민을 두는 지인에게 모호한 위로 대신, 뼈 때리는 직설적 조언을 당당히 제시합니다.",
      },
    ],
    curriculumIntro:
      "단순 녹화 시청이 아닌 쌍방향 라이브 클래스. 실시간 채팅 퀴즈, 라이브 드로잉, 즉석 고민 리딩으로 지루할 틈 없이 진행됩니다.",
    curriculumBlocks: [
      {
        time: "20분",
        title: "1단계: 이미지 뉴런 각인",
        description:
          "36장 카드의 일상 상징물을 시각 스캐닝하고, 암기 없이 긍정·부정 극성을 다이렉트 매핑",
      },
      {
        time: "30분",
        title: "2단계: 문장 공식 마스터",
        description:
          "2카드·3카드 문법 공식을 배우고, 주체+수식 카드를 연어 구조로 변환하는 메커니즘 학습",
      },
      {
        time: "50분",
        title: "3단계: 실생활 밀착 스프레드",
        description:
          "연애(속마음), 금전(비즈니스), 이직(커리어) 등 현대인 핵심 질문 실무 스프레드 집중 실습",
      },
      {
        time: "20분",
        title: "4단계: 인터랙션 클리닉 & Q&A",
        description:
          "수강생이 뽑은 카드를 실시간 교정하고, 해석 오차를 줄이는 정밀 피드백",
      },
    ],
    classInfo: {
      capacity: "선착순 무료 · 열정 있는 분만",
      schedule: "6월 25일(목) 20:00~22:00 (120분) · 온라인 라이브",
      location: "Zoom 라이브 (신청 후 링크 개별 안내)",
      price: "무료",
      priceNote: "열정과 학습 의지가 있는 분만 모집합니다. 선착순 마감.",
      materials: "레노먼드 카드 36장 (없으신 분 사전 안내)",
    },
    enrollment: {
      isFree: true,
      selectiveNote:
        "선착순 무료 클래스입니다. 타로·레노먼드에 진심으로 관심 있고, 라이브에 적극 참여할 분만 신청해 주세요.",
      formUrl: "https://forms.gle/5KvYQYAJYfAq9eE97",
      note: "신청서 작성 후 선별 안내 문자를 드립니다. (선착순 마감)",
    },
    refundPolicy: [],
    heroImage: "/tarot/hero-lenormand.jpg",
    comparisonTable: {
      headers: ["비교 항목", "유니버셜 웨이트 타로", "레노먼드 카드"],
      rows: [
        ["카드 구성", "78장 (메이저+마이너)", "36장 (고정 번호)"],
        ["상징 체계", "점성학·카발라 등 복잡", "집·열쇠·개 등 일상 사물"],
        ["리딩 성격", "내면 심리·영적 조언", "물리적 사건·명확한 예측"],
        ["해석 방식", "정·역방향·맥락 해석", "키워드 조합 문법"],
        ["학습 난이도", "수개월 이상", "2시간 속성 가능"],
      ],
    },
  },
];

export function getTarotClass(id: string): TarotClassProduct {
  return tarotClasses.find((c) => c.id === id) ?? tarotClasses[0];
}
