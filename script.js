// 질문 데이터
const questions = [
    {
        id: 'currentAge',
        emoji: '🎂',
        title: '현재 나이가 어떻게 되세요?',
        subtitle: '정확한 계산을 위해 알려주세요',
        type: 'slider',
        min: 20,
        max: 65,
        default: 35,
        unit: '세',
        label: '현재 나이'
    },
    {
        id: 'retireAge',
        emoji: '🏖️',
        title: '몇 살에 은퇴하고 싶으세요?',
        subtitle: '일에서 해방되는 그날을 상상해보세요',
        type: 'slider',
        min: 50,
        max: 70,
        default: 60,
        unit: '세',
        label: '은퇴 희망 나이'
    },
    {
        id: 'lifeExpectancy',
        emoji: '🌟',
        title: '몇 살까지 살고 싶으세요?',
        subtitle: '건강하게 오래오래!',
        type: 'slider',
        min: 70,
        max: 100,
        default: 85,
        unit: '세',
        label: '기대 수명'
    },
    {
        id: 'housing',
        emoji: '🏠',
        title: '현재 주거 형태는요?',
        subtitle: '노후 주거비 계산에 참고해요',
        type: 'options',
        options: [
            { value: 'own', label: '자가', desc: '내 집이 있어요', emoji: '🏡' },
            { value: 'jeonse', label: '전세', desc: '보증금만 내고 살아요', emoji: '🏢' },
            { value: 'monthly', label: '월세', desc: '매달 월세를 내요', emoji: '🏬' },
            { value: 'plan', label: '구입 예정', desc: '집 살 계획이 있어요', emoji: '🔑' }
        ]
    },
    {
        id: 'livingArea',
        emoji: '📍',
        title: '노후에 어디서 살고 싶으세요?',
        subtitle: '지역에 따라 생활비가 달라요',
        type: 'options',
        options: [
            { value: 'seoul', label: '서울', desc: '수도권 핵심 지역', emoji: '🏙️' },
            { value: 'metro', label: '수도권', desc: '경기도, 인천 등', emoji: '🌆' },
            { value: 'city', label: '광역시', desc: '부산, 대구 등', emoji: '🌇' },
            { value: 'rural', label: '지방/시골', desc: '여유로운 전원생활', emoji: '🌾' }
        ]
    },
    {
        id: 'monthlyLiving',
        emoji: '💳',
        title: '노후 월 생활비는 얼마 정도?',
        subtitle: '현재 기준으로 예상해주세요',
        type: 'slider',
        min: 100,
        max: 500,
        default: 200,
        unit: '만원',
        step: 10,
        label: '월 생활비'
    },
    {
        id: 'travelStyle',
        emoji: '✈️',
        title: '여행은 어떤 스타일이세요?',
        subtitle: '노후에 즐기고 싶은 여행 수준',
        type: 'options',
        options: [
            { value: 'none', label: '집이 좋아', desc: '여행 안 해도 행복해요', emoji: '🏠' },
            { value: 'domestic', label: '국내파', desc: '연 1-2회 국내여행', emoji: '🚗' },
            { value: 'asia', label: '아시아권', desc: '연 1회 가까운 해외', emoji: '🌏' },
            { value: 'world', label: '세계여행', desc: '연 1회 이상 해외여행', emoji: '🌍' }
        ]
    },
    {
        id: 'travelFrequency',
        emoji: '🗓️',
        title: '여행은 1년에 몇 번 정도?',
        subtitle: '국내외 모두 포함해서요',
        type: 'slider',
        min: 0,
        max: 12,
        default: 2,
        unit: '회',
        label: '연간 여행 횟수'
    },
    {
        id: 'diningOut',
        emoji: '🍽️',
        title: '외식은 얼마나 자주 하세요?',
        subtitle: '배달음식 포함이에요',
        type: 'options',
        options: [
            { value: 'rare', label: '거의 안 해요', desc: '집밥이 최고!', emoji: '🏠' },
            { value: 'sometimes', label: '가끔', desc: '주 1-2회 정도', emoji: '🍜' },
            { value: 'often', label: '자주', desc: '주 3-4회 정도', emoji: '🍝' },
            { value: 'always', label: '매일', desc: '요리는 싫어요', emoji: '🍱' }
        ]
    },
    {
        id: 'hobby',
        emoji: '🎨',
        title: '노후에 즐기고 싶은 취미는?',
        subtitle: '가장 관심 있는 것 하나만!',
        type: 'options',
        options: [
            { value: 'free', label: '무료 취미', desc: '산책, 독서, TV 등', emoji: '📚' },
            { value: 'light', label: '가벼운 취미', desc: '등산, 낚시, 텃밭 등', emoji: '🎣' },
            { value: 'active', label: '활동적 취미', desc: '골프, 테니스, 수영 등', emoji: '⛳' },
            { value: 'expensive', label: '고급 취미', desc: '요트, 해외골프 등', emoji: '🚤' }
        ]
    },
    {
        id: 'hobbyCost',
        emoji: '💰',
        title: '취미에 월 얼마 쓰고 싶으세요?',
        subtitle: '여유롭게 즐기려면?',
        type: 'slider',
        min: 0,
        max: 100,
        default: 30,
        unit: '만원',
        step: 5,
        label: '월 취미비'
    },
    {
        id: 'car',
        emoji: '🚗',
        title: '노후에 차량 유지할 계획인가요?',
        subtitle: '차량 유지비도 만만치 않죠',
        type: 'options',
        options: [
            { value: 'none', label: '차 없이', desc: '대중교통으로 충분해요', emoji: '🚌' },
            { value: 'small', label: '소형차', desc: '경제적인 차량', emoji: '🚙' },
            { value: 'mid', label: '중형차', desc: '적당한 편의성', emoji: '🚗' },
            { value: 'suv', label: 'SUV/대형', desc: '넓고 편한 차', emoji: '🚐' }
        ]
    },
    {
        id: 'health',
        emoji: '🏥',
        title: '건강관리에 얼마나 투자할까요?',
        subtitle: '병원비, 영양제, 운동 등',
        type: 'options',
        options: [
            { value: 'basic', label: '기본만', desc: '국민건강보험 위주', emoji: '💊' },
            { value: 'normal', label: '보통', desc: '적당한 건강관리', emoji: '🩺' },
            { value: 'active', label: '적극적', desc: '정기검진 + 운동', emoji: '💪' },
            { value: 'premium', label: '프리미엄', desc: '고급 검진 + 관리', emoji: '🏋️' }
        ]
    },
    {
        id: 'insurance',
        emoji: '🛡️',
        title: '보험료는 얼마나 내고 계세요?',
        subtitle: '노후까지 유지할 보험 기준',
        type: 'slider',
        min: 0,
        max: 50,
        default: 15,
        unit: '만원',
        step: 5,
        label: '월 보험료'
    },
    {
        id: 'children',
        emoji: '👨‍👩‍👧‍👦',
        title: '자녀에게 경제적 지원 계획은?',
        subtitle: '결혼, 주거 등 목돈 지원',
        type: 'options',
        options: [
            { value: 'none', label: '지원 없음', desc: '독립하면 끝!', emoji: '✋' },
            { value: 'some', label: '약간', desc: '필요시 조금만', emoji: '💵' },
            { value: 'medium', label: '적당히', desc: '결혼자금 일부 등', emoji: '💰' },
            { value: 'full', label: '전폭 지원', desc: '집 사줄 거예요', emoji: '🏠' }
        ]
    },
    {
        id: 'pet',
        emoji: '🐾',
        title: '반려동물 키울 계획이세요?',
        subtitle: '동물 친구도 비용이 들어요',
        type: 'options',
        options: [
            { value: 'none', label: '키우지 않아요', desc: '', emoji: '❌' },
            { value: 'small', label: '소형 반려동물', desc: '고양이, 소형견 등', emoji: '🐱' },
            { value: 'large', label: '대형 반려동물', desc: '대형견 등', emoji: '🐕' },
            { value: 'multiple', label: '여러 마리', desc: '동물 농장 수준', emoji: '🐾' }
        ]
    },
    {
        id: 'culture',
        emoji: '🎭',
        title: '문화생활은 얼마나 즐기세요?',
        subtitle: '영화, 공연, 전시 등',
        type: 'options',
        options: [
            { value: 'rare', label: '거의 안 해요', desc: 'TV면 충분해요', emoji: '📺' },
            { value: 'sometimes', label: '가끔', desc: '월 1-2회 정도', emoji: '🎬' },
            { value: 'often', label: '자주', desc: '주 1회 정도', emoji: '🎪' },
            { value: 'always', label: '매우 자주', desc: '문화인 그 자체', emoji: '🎻' }
        ]
    },
    {
        id: 'socialEvents',
        emoji: '🎊',
        title: '경조사비는 얼마 정도 쓰세요?',
        subtitle: '결혼식, 장례식, 모임 등',
        type: 'slider',
        min: 0,
        max: 50,
        default: 10,
        unit: '만원',
        step: 5,
        label: '월 평균 경조사비'
    },
    {
        id: 'currentSavings',
        emoji: '🏦',
        title: '현재 노후 준비 자금은 얼마?',
        subtitle: '연금, 저축, 투자 등 총액',
        type: 'slider',
        min: 0,
        max: 50000,
        default: 10000,
        unit: '만원',
        step: 1000,
        label: '현재 노후 자금'
    },
    {
        id: 'pension',
        emoji: '📋',
        title: '예상 국민연금 수령액은?',
        subtitle: '국민연금공단 앱에서 확인 가능해요',
        type: 'slider',
        min: 0,
        max: 200,
        default: 80,
        unit: '만원',
        step: 10,
        label: '월 예상 연금'
    }
];

// 별칭 생성 데이터
const nicknames = {
    low: [
        { name: '미니멀 라이프 달인', emoji: '🧘', desc: '소박하지만 행복한 노후를 꿈꾸시네요! 적은 비용으로도 풍요로운 삶이 가능해요.' },
        { name: '알뜰 살림꾼', emoji: '🌱', desc: '검소한 생활의 미학을 아시는군요! 절약하면서도 즐거운 노후가 기다려요.' },
        { name: '소확행 추구자', emoji: '☕', desc: '작지만 확실한 행복을 아는 당신! 심플한 라이프스타일이 멋져요.' }
    ],
    medium: [
        { name: '밸런스 마스터', emoji: '⚖️', desc: '적당히 즐기면서 적당히 아끼는 균형 잡힌 노후 계획이네요!' },
        { name: '현실적 낭만가', emoji: '🌅', desc: '꿈과 현실 사이의 완벽한 밸런스! 알차고 행복한 노후가 될 거예요.' },
        { name: '스마트 시니어', emoji: '🎯', desc: '똑똑하게 준비하는 당신! 계획적인 노후가 기대됩니다.' }
    ],
    high: [
        { name: '럭셔리 드리머', emoji: '✨', desc: '풍요로운 노후를 꿈꾸시네요! 열심히 준비하면 충분히 가능해요.' },
        { name: 'VIP 인생 설계사', emoji: '👑', desc: '품격 있는 노후를 계획 중이시군요! 멋진 시니어 라이프가 펼쳐질 거예요.' },
        { name: '황금기 로열', emoji: '🏆', desc: '화려한 제2의 인생을 꿈꾸시네요! 지금부터 차근차근 준비해볼까요?' }
    ],
    veryHigh: [
        { name: '억대 클럽 멤버', emoji: '💎', desc: '대단한 노후 계획이시네요! 목표가 크면 그만큼 동기부여도 크죠!' },
        { name: '플래티넘 시니어', emoji: '🚀', desc: '하늘 높이 꿈을 펼치시네요! 웅장한 노후가 기다리고 있어요.' },
        { name: '레전드 은퇴자', emoji: '🌟', desc: '전설이 될 노후를 준비 중이시군요! 대단한 비전입니다.' }
    ]
};

// 맞춤 조언 생성
const tips = {
    housing: {
        own: '자가 소유로 주거비 부담이 적어요! 다만 주택 유지비용도 고려해주세요.',
        jeonse: '전세 만기 시 이사 비용을 고려해 여유 자금을 마련해두세요.',
        monthly: '월세 지출이 꾸준히 발생해요. 가능하다면 주거 안정을 위한 계획을 세워보세요.',
        plan: '주택 구입 시기와 자금 계획을 구체적으로 세워보세요!'
    },
    travel: {
        none: '집에서의 여유로운 시간도 좋지만, 가끔 가까운 곳 여행도 추천드려요!',
        domestic: '국내여행은 가성비 좋은 선택이에요! 지역 축제나 템플스테이도 고려해보세요.',
        asia: '동남아 여행은 비용 대비 만족도가 높아요! 일찍 예약하면 더 저렴해요.',
        world: '해외여행은 미리 예약하고 마일리지를 활용하면 비용을 줄일 수 있어요!'
    },
    health: {
        basic: '기본 건강보험만으로도 충분할 수 있지만, 실손보험은 꼭 챙기세요!',
        normal: '균형 잡힌 건강관리 계획이에요! 정기검진 잊지 마세요.',
        active: '적극적인 건강관리로 장기적으로 의료비를 절약할 수 있어요!',
        premium: '프리미엄 건강관리로 삶의 질이 높아질 거예요!'
    }
};

// 상태 관리
let currentQuestion = 0;
let answers = {};

// DOM 요소
const screens = document.querySelectorAll('.screen');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionContainer = document.getElementById('question-container');
const btnNext = document.getElementById('btn-next');

// 화면 전환 함수
function showScreen(screenId) {
    screens.forEach(screen => {
        if (screen.id === screenId) {
            screen.classList.add('active');
            screen.classList.remove('exit');
        } else {
            if (screen.classList.contains('active')) {
                screen.classList.add('exit');
            }
            screen.classList.remove('active');
        }
    });
}

// 설문 시작
function startSurvey() {
    showScreen('survey-screen');
    renderQuestion();
}

// 질문 렌더링
function renderQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
    
    let html = `
        <div class="question-wrapper">
            <div class="question-emoji">${question.emoji}</div>
            <div class="question-number">Q${currentQuestion + 1}</div>
            <h2 class="question-title">${question.title}</h2>
            <p class="question-subtitle">${question.subtitle}</p>
    `;
    
    if (question.type === 'options') {
        const gridClass = question.options.length <= 4 ? '' : '';
        html += `<div class="options-grid ${gridClass}">`;
        question.options.forEach(opt => {
            const selected = answers[question.id] === opt.value ? 'selected' : '';
            html += `
                <div class="option-item ${selected}" onclick="selectOption('${question.id}', '${opt.value}', this)">
                    <div class="option-check"></div>
                    <div class="option-content">
                        <span class="option-emoji">${opt.emoji}</span>
                        <span class="option-label">${opt.label}</span>
                        ${opt.desc ? `<div class="option-desc">${opt.desc}</div>` : ''}
                    </div>
                </div>
            `;
        });
        html += '</div>';
    } else if (question.type === 'slider') {
        const value = answers[question.id] !== undefined ? answers[question.id] : question.default;
        const step = question.step || 1;
        html += `
            <div class="slider-container">
                <div class="slider-value">
                    <span id="slider-value-display">${value.toLocaleString()}</span>
                    <span class="slider-unit">${question.unit}</span>
                </div>
                <div class="slider-label">${question.label}</div>
                <input type="range" class="slider-input" 
                    id="slider-input"
                    min="${question.min}" 
                    max="${question.max}" 
                    value="${value}"
                    step="${step}"
                    oninput="updateSlider('${question.id}', this.value)">
                <div class="slider-range">
                    <span>${question.min.toLocaleString()}${question.unit}</span>
                    <span>${question.max.toLocaleString()}${question.unit}</span>
                </div>
            </div>
        `;
        // 슬라이더는 기본값이 있으므로 자동 선택
        if (answers[question.id] === undefined) {
            answers[question.id] = question.default;
        }
    }
    
    html += '</div>';
    questionContainer.innerHTML = html;
    
    updateNextButton();
}

// 옵션 선택
function selectOption(questionId, value, element) {
    answers[questionId] = value;
    
    // UI 업데이트
    document.querySelectorAll('.option-item').forEach(item => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
    
    updateNextButton();
    
    // 자동으로 다음 질문으로 (0.3초 후)
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        }
    }, 300);
}

// 슬라이더 업데이트
function updateSlider(questionId, value) {
    const numValue = parseInt(value);
    answers[questionId] = numValue;
    document.getElementById('slider-value-display').textContent = numValue.toLocaleString();
    updateNextButton();
}

// 다음 버튼 상태 업데이트
function updateNextButton() {
    const question = questions[currentQuestion];
    const hasAnswer = answers[question.id] !== undefined;
    btnNext.disabled = !hasAnswer;
    
    // 마지막 질문이면 버튼 텍스트 변경
    if (currentQuestion === questions.length - 1) {
        btnNext.innerHTML = '결과 보기 <span class="btn-arrow">→</span>';
    } else {
        btnNext.innerHTML = '다음 <span class="btn-arrow">→</span>';
    }
}

// 다음 질문
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showLoading();
    }
}

// 이전 질문
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    } else {
        showScreen('intro-screen');
    }
}

// 로딩 화면
function showLoading() {
    showScreen('loading-screen');
    
    const loadingTexts = [
        '당신의 노후를 분석하고 있어요',
        '여행 예산을 계산하는 중...',
        '생활비를 꼼꼼히 더하는 중...',
        '맞춤 별칭을 생성하는 중...',
        '거의 다 됐어요!'
    ];
    
    let textIndex = 0;
    const loadingTextEl = document.getElementById('loading-text');
    
    const interval = setInterval(() => {
        textIndex++;
        if (textIndex < loadingTexts.length) {
            loadingTextEl.textContent = loadingTexts[textIndex];
        }
    }, 600);
    
    setTimeout(() => {
        clearInterval(interval);
        calculateAndShowResult();
    }, 3000);
}

// 결과 계산 및 표시
function calculateAndShowResult() {
    const result = calculateRetirement();
    showResult(result);
}

// 노후 자금 계산
function calculateRetirement() {
    const retireAge = answers.retireAge || 60;
    const lifeExpectancy = answers.lifeExpectancy || 85;
    const retirementYears = lifeExpectancy - retireAge;
    const retirementMonths = retirementYears * 12;
    
    // 월 생활비 기본
    let monthlyBase = (answers.monthlyLiving || 200) * 10000;
    
    // 주거비 조정
    const housingCost = {
        own: 30, // 유지비만
        jeonse: 0, // 전세는 목돈으로 따로 계산
        monthly: 80, // 월세
        plan: 50 // 구입 후 유지비
    };
    const housingMonthly = (housingCost[answers.housing] || 50) * 10000;
    
    // 지역별 생활비 조정 계수
    const areaCost = {
        seoul: 1.3,
        metro: 1.1,
        city: 1.0,
        rural: 0.8
    };
    const areaMultiplier = areaCost[answers.livingArea] || 1.0;
    
    // 여행비 (연간)
    const travelCost = {
        none: 0,
        domestic: 100,
        asia: 300,
        world: 600
    };
    const yearlyTravel = (travelCost[answers.travelStyle] || 100) * (answers.travelFrequency || 2) * 10000;
    const monthlyTravel = yearlyTravel / 12;
    
    // 외식비
    const diningCost = {
        rare: 10,
        sometimes: 30,
        often: 60,
        always: 100
    };
    const monthlyDining = (diningCost[answers.diningOut] || 30) * 10000;
    
    // 취미비
    const monthlyHobby = (answers.hobbyCost || 30) * 10000;
    
    // 차량 유지비
    const carCost = {
        none: 0,
        small: 30,
        mid: 50,
        suv: 70
    };
    const monthlyCar = (carCost[answers.car] || 0) * 10000;
    
    // 건강관리비
    const healthCost = {
        basic: 10,
        normal: 30,
        active: 50,
        premium: 100
    };
    const monthlyHealth = (healthCost[answers.health] || 30) * 10000;
    
    // 보험료
    const monthlyInsurance = (answers.insurance || 15) * 10000;
    
    // 반려동물
    const petCost = {
        none: 0,
        small: 15,
        large: 30,
        multiple: 50
    };
    const monthlyPet = (petCost[answers.pet] || 0) * 10000;
    
    // 문화생활비
    const cultureCost = {
        rare: 5,
        sometimes: 15,
        often: 30,
        always: 50
    };
    const monthlyCulture = (cultureCost[answers.culture] || 15) * 10000;
    
    // 경조사비
    const monthlySocial = (answers.socialEvents || 10) * 10000;
    
    // 자녀 지원 (일시금)
    const childSupport = {
        none: 0,
        some: 5000,
        medium: 15000,
        full: 50000
    };
    const childLumpSum = (childSupport[answers.children] || 0) * 10000;
    
    // 월 총 지출 계산
    let monthlyTotal = monthlyBase + housingMonthly + monthlyTravel + monthlyDining + 
                       monthlyHobby + monthlyCar + monthlyHealth + monthlyInsurance + 
                       monthlyPet + monthlyCulture + monthlySocial;
    
    // 지역별 조정
    monthlyTotal *= areaMultiplier;
    
    // 인플레이션 고려 (연 2.5% 가정)
    const inflationRate = 0.025;
    const yearsUntilRetire = retireAge - (answers.currentAge || 35);
    const inflationMultiplier = Math.pow(1 + inflationRate, yearsUntilRetire);
    monthlyTotal *= inflationMultiplier;
    
    // 총 필요 금액
    let totalNeeded = monthlyTotal * retirementMonths;
    
    // 자녀 지원금 추가
    totalNeeded += childLumpSum;
    
    // 전세인 경우 전세금 추가 (평균 3억 가정)
    if (answers.housing === 'jeonse') {
        totalNeeded += 300000000;
    }
    
    // 집 구입 계획인 경우
    if (answers.housing === 'plan') {
        const houseCost = {
            seoul: 800000000,
            metro: 500000000,
            city: 350000000,
            rural: 200000000
        };
        totalNeeded += houseCost[answers.livingArea] || 400000000;
    }
    
    // 현재 보유 자금 차감
    const currentSavings = (answers.currentSavings || 0) * 10000;
    
    // 예상 연금 수령액 차감
    const monthlyPension = (answers.pension || 80) * 10000;
    const totalPension = monthlyPension * retirementMonths;
    
    const finalNeeded = Math.max(0, totalNeeded - currentSavings - totalPension);
    
    // 항목별 breakdown
    const breakdown = [
        { name: '기본 생활비', amount: monthlyBase * retirementMonths * areaMultiplier * inflationMultiplier, icon: '🏠' },
        { name: '여행비', amount: yearlyTravel * retirementYears * inflationMultiplier, icon: '✈️' },
        { name: '외식/여가', amount: (monthlyDining + monthlyCulture) * retirementMonths * inflationMultiplier, icon: '🍽️' },
        { name: '건강관리', amount: (monthlyHealth + monthlyInsurance) * retirementMonths * inflationMultiplier, icon: '🏥' },
        { name: '취미/차량', amount: (monthlyHobby + monthlyCar) * retirementMonths * inflationMultiplier, icon: '🎨' }
    ];
    
    return {
        totalNeeded: finalNeeded,
        monthlyNeeded: monthlyTotal,
        retirementYears,
        breakdown,
        answers
    };
}

// 결과 표시
function showResult(result) {
    showScreen('result-screen');
    
    // 별칭 선택
    let category;
    if (result.totalNeeded < 300000000) {
        category = 'low';
    } else if (result.totalNeeded < 600000000) {
        category = 'medium';
    } else if (result.totalNeeded < 1000000000) {
        category = 'high';
    } else {
        category = 'veryHigh';
    }
    
    const nicknameData = nicknames[category][Math.floor(Math.random() * nicknames[category].length)];
    
    // 결과 표시
    document.getElementById('result-badge').textContent = nicknameData.emoji;
    document.getElementById('result-nickname').textContent = nicknameData.name;
    document.getElementById('result-description').textContent = nicknameData.desc;
    
    // 금액 포맷
    const totalFormatted = formatMoney(result.totalNeeded);
    document.getElementById('result-amount').textContent = totalFormatted;
    document.getElementById('result-period').textContent = 
        `${result.retirementYears}년 동안의 행복한 노후를 위해`;
    
    // 항목별 breakdown
    const breakdownHtml = result.breakdown.map(item => `
        <div class="breakdown-item">
            <div class="breakdown-left">
                <div class="breakdown-icon">${item.icon}</div>
                <span class="breakdown-name">${item.name}</span>
            </div>
            <span class="breakdown-amount">${formatMoney(item.amount)}</span>
        </div>
    `).join('');
    document.getElementById('breakdown-list').innerHTML = breakdownHtml;
    
    // 맞춤 조언
    const tipsList = [];
    
    if (tips.housing[answers.housing]) {
        tipsList.push({ icon: '🏠', text: tips.housing[answers.housing] });
    }
    if (tips.travel[answers.travelStyle]) {
        tipsList.push({ icon: '✈️', text: tips.travel[answers.travelStyle] });
    }
    if (tips.health[answers.health]) {
        tipsList.push({ icon: '💪', text: tips.health[answers.health] });
    }
    
    // 추가 조언
    const yearsUntilRetire = (answers.retireAge || 60) - (answers.currentAge || 35);
    const monthlyRequired = result.totalNeeded / (yearsUntilRetire * 12);
    
    if (monthlyRequired > 0) {
        tipsList.push({ 
            icon: '💰', 
            text: `지금부터 매달 약 ${formatMoney(monthlyRequired)}씩 모으면 목표 달성이 가능해요!` 
        });
    }
    
    const tipsHtml = tipsList.map(tip => `
        <div class="tip-item">
            <span class="tip-icon">${tip.icon}</span>
            <span class="tip-text">${tip.text}</span>
        </div>
    `).join('');
    document.getElementById('tips-list').innerHTML = tipsHtml;
}

// 금액 포맷 함수
function formatMoney(amount) {
    if (amount >= 100000000) {
        const uk = Math.floor(amount / 100000000);
        const man = Math.floor((amount % 100000000) / 10000);
        if (man > 0) {
            return `${uk}억 ${man.toLocaleString()}만원`;
        }
        return `${uk}억원`;
    } else if (amount >= 10000) {
        return `${Math.floor(amount / 10000).toLocaleString()}만원`;
    }
    return `${amount.toLocaleString()}원`;
}

// 결과 공유
function shareResult() {
    const resultAmount = document.getElementById('result-amount').textContent;
    const nickname = document.getElementById('result-nickname').textContent;
    
    const shareText = `🎯 나의 노후 자금 계산 결과!\n\n별칭: ${nickname}\n필요 금액: ${resultAmount}\n\n나도 계산해보기 👉`;
    
    if (navigator.share) {
        navigator.share({
            title: '노후 머니 계산기',
            text: shareText
        }).catch(console.error);
    } else {
        // 클립보드 복사
        navigator.clipboard.writeText(shareText).then(() => {
            alert('결과가 클립보드에 복사되었어요! 📋');
        }).catch(() => {
            alert('공유 기능을 사용할 수 없어요 😢');
        });
    }
}

// 다시 하기
function retryQuiz() {
    currentQuestion = 0;
    answers = {};
    showScreen('intro-screen');
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    showScreen('intro-screen');
});

