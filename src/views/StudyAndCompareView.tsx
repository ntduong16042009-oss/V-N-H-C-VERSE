import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  RotateCcw,
  Check,
  Copy,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Award,
  Layers,
  FileText,
  Scale,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { WORKS } from '../data/works';
import { AUTHORS } from '../data/authors';
import { Work } from '../types/literature';

interface StudyAndCompareViewProps {
  initialTab?: 'compare' | 'flashcards' | 'quiz' | 'outliner';
  initialWorkSlug?: string;
  onSelectWork: (slug: string) => void;
  onSelectAuthor: (id: string) => void;
  masteredSlugs: string[];
  onToggleMastered: (slug: string) => void;
}

type EssayPromptType = 'comprehensive' | 'character_image' | 'artistic_detail' | 'humanitarian';

interface QuizQuestion {
  id: string;
  workSlug: string;
  question: string;
  excerpt?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    workSlug: 'vo-nhat',
    question: 'Chi tiết nào ở cuối truyện ngắn "Vợ nhặt" (Kim Lân) thể hiện bước chuyển biến về nhận thức và hướng đi mới của nhân vật Tràng?',
    options: [
      'Hình ảnh Tràng mua hai hào dầu thắp sáng trong đêm tân hôn',
      'Hình ảnh đoàn người đói ầm ầm kéo đi trên đê Sộp và lá cờ đỏ bay phấp phới',
      'Hình ảnh bà cụ Tứ kể chuyện làm ăn, nuôi gà trong bữa cơm ngày đói',
      'Hình ảnh người vợ nhặt quét tước nhà cửa sạch sẽ vào buổi sáng hôm sau',
    ],
    correctIndex: 1,
    explanation:
      'Hình ảnh đoàn người đi phá kho thóc Nhật cùng lá cờ đỏ sao vàng trong tâm trí Tràng khép lại tác phẩm là biểu tượng của ánh sáng cách mạng, mở ra con đường tự giải phóng cho người nông dân.',
  },
  {
    id: 'q2',
    workSlug: 'song',
    question: 'Vì sao khổ thơ thứ 5 trong bài thơ "Sóng" (Xuân Quỳnh) lại có 6 dòng thơ trong khi các khổ khác đều có 4 dòng?',
    excerpt: 'Con sóng dưới lòng sâu\nCon sóng trên mặt nước\nÔi con sóng nhớ bờ\nNgày đêm không ngủ được\nLòng em nhớ đến anh\nCả trong mơ còn thức',
    options: [
      'Để mô phỏng quy luật thủy triều lên xuống của biển cả tự nhiên',
      'Sự phá cách hình thức nhằm dung nạp nỗi nhớ trào dâng mãnh liệt cả trong ý thức lẫn tiềm thức',
      'Để chuyển mạch thơ từ tự sự sang nghị luận triết học thuần túy',
      'Để đối lập giữa tình yêu thời chiến và tình yêu thời bình',
    ],
    correctIndex: 1,
    explanation:
      'Khổ 5 dôi ra 2 dòng thơ là sự bùng vỡ của dung lượng cảm xúc: nỗi nhớ bao trùm mọi tầng không gian (dưới lòng sâu - trên mặt nước), thời gian (ngày đêm) và chạm tới cả cõi vô thức ("Cả trong mơ còn thức").',
  },
  {
    id: 'q3',
    workSlug: 'nguoi-lai-do-song-da',
    question: 'Trong tùy bút "Người lái đò Sông Đà", Nguyễn Tuân đã khám phá vẻ đẹp của con sông Đà qua hai nét tính cách đối lập nào?',
    options: [
      'Cổ kính trang nghiêm và Hiện đại trẻ trung',
      'Hung bạo dữ dội và Trữ tình thơ mộng',
      'Bình lặng hiền hòa và Khô cằn sỏi đá',
      'Huyền bí tâm linh và Thực dụng đời thường',
    ],
    correctIndex: 1,
    explanation:
      'Nguyễn Tuân nhân hóa Sông Đà như một sinh thể có tính cách: nơi thượng nguồn hung bạo như "kẻ thù số một" với trùng vi thạch trận; nơi hạ lưu lại trữ tình, thơ mộng như "một cố nhân".',
  },
  {
    id: 'q4',
    workSlug: 'hon-truong-ba-da-hang-thit',
    question: 'Bi kịch cốt lõi của nhân vật Hồn Trương Ba trong vở kịch của Lưu Quang Vũ là gì?',
    options: [
      'Bi kịch của người nghệ sĩ đánh cờ không tìm được đối thủ xứng tầm',
      'Bi kịch phải sống nhờ, sống chắp vá, linh hồn thanh cao bị tha hóa dần bởi thể xác phàm tục',
      'Bi kịch nghèo đói không đủ tiền nuôi gia đình trong xã hội cũ',
      'Bi kịch bị Đế Thích trừng phạt vì dám cãi lại luật lệ thiên đình',
    ],
    correctIndex: 1,
    explanation:
      'Trương Ba rơi vào nghịch cảnh "bên trong một đằng, bên ngoài một nẻo": linh hồn ông vốn trong sạch, nhân hậu nhưng khi trú nhờ xác anh hàng thịt lại dần bị nhiễm những thói quen thô lỗ, phàm phu.',
  },
  {
    id: 'q5',
    workSlug: 'chi-pheo',
    question: 'Chi tiết "bát cháo hành" của Thị Nở trong kiệt tác "Chí Phèo" (Nam Cao) mang ý nghĩa biểu tượng nổi bật nào?',
    options: [
      'Biểu tượng cho sự giàu có sung túc của làng Vũ Đại',
      'Hương vị của tình thương chân thành đánh thức bản tính lương thiện trong Chí Phèo',
      'Món ăn thử thách lòng kiên nhẫn của Chí Phèo trước khi đến nhà Bá Kiến',
      'Kỷ vật cuối cùng của bà cô Thị Nở gửi cho Chí Phèo',
    ],
    correctIndex: 1,
    explanation:
      'Bát cháo hành là lần đầu tiên Chí Phèo được một người đàn bà cho mà không phải đi dọa nạt. Hơi ấm và hương vị tình người ấy đã đưa Chí từ "con quỷ dữ làng Vũ Đại" trở về với khao khát làm người lương thiện.',
  },
  {
    id: 'q6',
    workSlug: 'tay-tien',
    question: 'Câu thơ "Nhà ai Pha Luông mưa xa khơi" trong bài thơ "Tây Tiến" (Quang Dũng) sử dụng thủ pháp âm hưởng đặc sắc nào?',
    options: [
      'Sử dụng toàn thanh trắc để diễn tả vách đá dựng đứng hiểm trở',
      'Sử dụng toàn thanh bằng để mở ra không gian mênh mông, êm dịu sau chặng đường leo dốc gian khổ',
      'Sử dụng nhịp thơ 2/2/3 dồn dập như tiếng bước chân hành quân',
      'Sử dụng từ cổ Hán Việt trang trọng để khắc họa sự hy sinh',
    ],
    correctIndex: 1,
    explanation:
      'Sau ba câu thơ dày đặc thanh trắc gợi dốc cao khúc khuỷu ("Dốc lên khúc khuỷu dốc thăm thẳm..."), câu thơ "Nhà ai Pha Luông mưa xa khơi" gồm toàn thanh bằng như một tiếng thở phào nhẹ nhõm, phóng tầm mắt ra biển sương mưa thơ mộng.',
  },
  {
    id: 'q7',
    workSlug: 'binh-ngo-dai-cao',
    question: 'Trong đoạn mở đầu "Bình Ngô đại cáo", Nguyễn Trãi đã xác lập những yếu tố căn bản nào để khẳng định chủ quyền độc lập của Đại Việt?',
    options: [
      'Quân đội hùng mạnh, vũ khí tối tân và thành trì kiên cố',
      'Nền văn hiến lâu đời, cương vực lãnh thổ, phong tục tập quán, lịch sử các triều đại và hào kiệt riêng',
      'Sự công nhận bằng sắc phong của các triều đại Hán, Đường, Tống, Nguyên',
      'Tài năng mưu lược quân sự của riêng các vị tướng lĩnh Lam Sơn',
    ],
    correctIndex: 1,
    explanation:
      'Nguyễn Trãi đã đưa ra quan niệm hoàn chỉnh về quốc gia - dân tộc gồm 5 yếu tố: Văn hiến, Cương vực (núi sông bờ cõi), Phong tục Bắc Nam, Lịch sử triều đại (Triệu, Đinh, Lý, Trần) và Hào kiệt đời nào cũng có.',
  },
  {
    id: 'q8',
    workSlug: 'trao-duyen',
    question: 'Hành động Thúy Kiều "lạy" rồi mới "thưa" với em gái Thúy Vân trong đoạn trích "Trao duyên" (Truyện Kiều - Nguyễn Du) thể hiện tâm lý gì?',
    excerpt: 'Cậy em, em có chịu lời,\nNgồi lên cho chị lạy rồi sẽ thưa.',
    options: [
      'Sự xa cách lạnh lùng giữa hai chị em trong gia đình phong kiến',
      'Sự trân trọng, hàm ơn sâu sắc đối với sự hy sinh tuổi xuân của Thúy Vân khi nhận lời thay chị trả nghĩa chàng Kim',
      'Nghi lễ bắt buộc trong gia tộc họ Vương mỗi khi trao kỷ vật',
      'Sự tuyệt vọng muốn quyên sinh ngay lập tức trước mặt em gái',
    ],
    correctIndex: 1,
    explanation:
      'Dù là chị nhưng Kiều lại cúi lạy em: hành động phi thường ấy cho thấy sự tinh tế, thấu hiểu và lòng biết ơn tột cùng của Kiều khi đặt gánh nặng tình duyên dang dở của mình lên vai em gái.',
  },
  {
    id: 'q9',
    workSlug: 'chu-nguoi-tu-tu',
    question: 'Trong "Chữ người tử tù" (Nguyễn Tuân), lời khuyên của Huấn Cao dành cho Quản ngục trước khi ra pháp trường gửi gắm quan niệm thẩm mỹ gì?',
    options: [
      'Cái Đẹp có thể tồn tại độc lập, không liên quan đến môi trường sống hay đạo đức',
      'Cái Đẹp không thể sống chung với cái ác; muốn thưởng thức cái Đẹp phải giữ trọn "thiên lương" trong sạch',
      'Nghệ thuật thư pháp chỉ dành cho tầng lớp quan lại quyền quý trong triều đình',
      'Con người cần từ bỏ mọi đam mê nghệ thuật để tập trung vào công việc cai ngục',
    ],
    correctIndex: 1,
    explanation:
      'Câu nói "Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi... rồi hãy nghĩ đến chuyện chơi chữ" khẳng định Cái Đẹp và Cái Thiện (thiên lương) không thể tách rời.',
  },
  {
    id: 'q10',
    workSlug: 'day-thon-vi-da',
    question: 'Cấu tứ không gian và cảm xúc trong bài thơ "Đây thôn Vĩ Dạ" (Hàn Mặc Tử) vận động theo trình tự nào?',
    options: [
      'Từ đêm trăng huyền ảo → bình minh rực rỡ → hoàng hôn tím sẫm',
      'Từ cảnh thôn Vĩ ban mai tinh khôi (cõi thực) → sông trăng chia lìa (cõi mộng) → sương khói mờ nhân ảnh (hư ảo & hoài nghi)',
      'Từ nỗi buồn tuyệt vọng mở đầu → niềm vui sướng đoàn tụ ở khổ cuối',
      'Từ cảnh biển khơi dữ dội → cảnh núi rừng hùng vĩ miền Trung',
    ],
    correctIndex: 1,
    explanation:
      'Bài thơ dịch chuyển qua 3 tầng không gian gắn liền với bi kịch nội tâm của Hàn Mặc Tử: càng khao khát giao cảm với vẻ đẹp trần thế (khổ 1), thi nhân càng cảm thấy chia lìa (khổ 2) và rơi vào cõi sương khói xa cách (khổ 3).',
  },
  {
    id: 'q11',
    workSlug: 'chiec-thuyen-ngoai-xa',
    question: 'Hai phát hiện của nghệ sĩ nhiếp ảnh Phùng trên bãi biển trong "Chiếc thuyền ngoài xa" (Nguyễn Minh Châu) mang lại bài học cốt lõi nào về cái nhìn nghệ thuật?',
    options: [
      'Nhiếp ảnh đen trắng luôn có giá trị nghệ thuật cao hơn nhiếp ảnh màu',
      'Không thể nhìn cuộc đời và con người một cách đơn giản, phiến diện từ khoảng cách xa; nghệ thuật chân chính phải gắn liền với cuộc đời thực',
      'Người nghệ sĩ chỉ nên ghi lại những khoảnh khắc thiên nhiên thơ mộng và tránh xa hiện thực khắc nghiệt',
      'Pháp luật và lý thuyết sách vở có thể giải quyết ngay lập tức mọi bi kịch gia đình',
    ],
    correctIndex: 1,
    explanation:
      'Từ "cảnh đắt trời cho" ngoài xa đến bi kịch bạo lực khi thuyền cập bến và câu chuyện ở tòa án huyện, Nguyễn Minh Châu nhắn gửi: cần có cái nhìn đa diện, nhiều chiều để thấu hiểu bề sâu số phận con người.',
  },
];

const PRESET_COMPARISONS = [
  {
    label: 'Vợ nhặt & Chí Phèo',
    desc: 'Số phận người nông dân trước CM & Sức mạnh tình người',
    slugA: 'vo-nhat',
    slugB: 'chi-pheo',
  },
  {
    label: 'Sóng & Đây thôn Vĩ Dạ',
    desc: 'Thơ trữ tình hiện đại: Khát vọng tình yêu & Giao cảm',
    slugA: 'song',
    slugB: 'day-thon-vi-da',
  },
  {
    label: 'Sông Đà & Chữ người tử tù',
    desc: 'Phong cách Nguyễn Tuân trước & sau Cách mạng tháng Tám',
    slugA: 'nguoi-lai-do-song-da',
    slugB: 'chu-nguoi-tu-tu',
  },
  {
    label: 'Hồn Trương Ba & Chiếc thuyền ngoài xa',
    desc: 'Văn học thời kỳ Đổi mới: Triết lý nhân sinh & Đa diện',
    slugA: 'hon-truong-ba-da-hang-thit',
    slugB: 'chiec-thuyen-ngoai-xa',
  },
  {
    label: 'Tây Tiến & Bình Ngô đại cáo',
    desc: 'Cảm hứng yêu nước, hào khí dân tộc & Chất bi tráng',
    slugA: 'tay-tien',
    slugB: 'binh-ngo-dai-cao',
  },
];

export const StudyAndCompareView: React.FC<StudyAndCompareViewProps> = ({
  initialTab = 'compare',
  initialWorkSlug = 'vo-nhat',
  onSelectWork,
  onSelectAuthor,
  masteredSlugs,
  onToggleMastered,
}) => {
  const [activeTab, setActiveTab] = useState<'compare' | 'flashcards' | 'quiz' | 'outliner'>(
    initialTab
  );

  // All works list
  const allWorks = useMemo(() => Object.values(WORKS), []);

  // --- TAB 1: COMPARE STATE ---
  const [compareSlugA, setCompareSlugA] = useState<string>('vo-nhat');
  const [compareSlugB, setCompareSlugB] = useState<string>('chi-pheo');

  const workA = WORKS[compareSlugA] || allWorks[0];
  const workB = WORKS[compareSlugB] || allWorks[1];

  // --- TAB 2: FLASHCARDS STATE ---
  const [flashcardGrade, setFlashcardGrade] = useState<string>('all');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  const filteredFlashcards = useMemo(() => {
    return allWorks.filter(
      (w) => flashcardGrade === 'all' || w.grade.toString() === flashcardGrade
    );
  }, [allWorks, flashcardGrade]);

  const currentFlashcardWork: Work =
    filteredFlashcards[currentCardIndex % Math.max(1, filteredFlashcards.length)] || allWorks[0];

  // --- TAB 3: QUIZ STATE ---
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuizIdx];
  const userSelectedOption = selectedAnswers[currentQuestion.id];
  const isAnswered = userSelectedOption !== undefined;

  const totalCorrect = useMemo(() => {
    return QUIZ_QUESTIONS.reduce((acc, q) => {
      return selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
    }, 0);
  }, [selectedAnswers]);

  // --- TAB 4: ESSAY OUTLINER STATE ---
  const [outlineSlug, setOutlineSlug] = useState<string>(initialWorkSlug || 'vo-nhat');
  const [promptType, setPromptType] = useState<EssayPromptType>('comprehensive');
  const [copiedOutline, setCopiedOutline] = useState<boolean>(false);

  const outlineWork = WORKS[outlineSlug] || allWorks[0];
  const outlineAuthor = AUTHORS[outlineWork.authorId];

  // Generate structured essay outline based on selected work & prompt type
  const generatedOutline = useMemo(() => {
    const w = outlineWork;
    const a = outlineAuthor;

    const promptTitleMap: Record<EssayPromptType, string> = {
      comprehensive: `Phân tích giá trị nội dung và đặc sắc nghệ thuật của tác phẩm "${w.title}" (${w.authorName})`,
      character_image: `Phân tích hình tượng trung tâm trong tác phẩm "${w.title}" của ${w.authorName}`,
      artistic_detail: `Phân tích các chi tiết nghệ thuật đắt giá làm nên sức sống của "${w.title}" (${w.authorName})`,
      humanitarian: `Làm sáng tỏ tư tưởng nhân văn / giá trị nhân đạo sâu sắc trong "${w.title}" (${w.authorName})`,
    };

    const introHook = `Trong dòng chảy văn học Việt Nam (${w.year}), ${w.authorName} nổi lên với phong cách nghệ thuật độc đáo: ${a?.literaryStyle || 'sâu sắc, giàu tính nhân văn'}. "${w.title}" (${w.origin}) là kết tinh rực rỡ cho tư tưởng thẩm mỹ của tác giả.`;

    const bodyPoints =
      promptType === 'comprehensive'
        ? [
            {
              step: 'Luận điểm 1: Khái quát hoàn cảnh sáng tác & Mạch cấu trúc tác phẩm',
              bullets: [
                `Thời điểm & Bối cảnh: ${w.historicContext.timeframe} — ${w.historicContext.historicalBackground}`,
                `Tác động tới tác phẩm: ${w.historicContext.impactOnWork}`,
                `Tóm tắt mạch vận động: ${w.structureAndSummary.shortSummary}`,
              ],
            },
            {
              step: 'Luận điểm 2: Phân tích hệ thống nội dung tư tưởng trọng tâm',
              bullets: [
                ...w.mainContentPoints,
                `Luận giải chuyên sâu: ${w.analysisLevels.detailed}`,
              ],
            },
            {
              step: 'Luận điểm 3: Giải mã chi tiết tiêu biểu & Đặc sắc thi pháp nghệ thuật',
              bullets: [
                `Nghệ thuật nổi bật: ${w.artisticFeatures.prominentCraft}`,
                `Ngôn ngữ & Giọng điệu: ${w.artisticFeatures.language} — Giọng điệu: ${w.artisticFeatures.tone}`,
                ...w.keyArtisticDetails.map(
                  (d) => `Chi tiết "${d.detailName}": ${d.symbolicMeaning}`
                ),
              ],
            },
          ]
        : promptType === 'character_image'
        ? [
            {
              step: 'Luận điểm 1: Hoàn cảnh xuất hiện & Vị trí của hình tượng trung tâm',
              bullets: [
                `Hình tượng cốt lõi: ${w.quick60s.coreFigureOrCharacter}`,
                `Đặt trong bối cảnh: ${w.historicContext.historicalBackground}`,
                `Ý đồ nghệ thuật của ${w.authorName}: ${a?.aestheticView || w.centralTheme}`,
              ],
            },
            {
              step: 'Luận điểm 2: Phân tích đa diện các bình diện của hình tượng',
              bullets:
                w.characters && w.characters.length > 0
                  ? w.characters.map(
                      (c) =>
                        `Nhân vật ${c.name} (${c.role}): ${c.innerPsychology} → Biểu tượng: ${c.symbolicMeaning}`
                    )
                  : w.poetryAnalysis && w.poetryAnalysis.length > 0
                  ? w.poetryAnalysis.map(
                      (st) => `${st.title}: ${st.contentSummary} (${st.roleInWork})`
                    )
                  : w.mainContentPoints,
            },
            {
              step: 'Luận điểm 3: Nghệ thuật xây dựng hình tượng & Chiều sâu triết lý',
              bullets: [
                `Điểm nhìn & Kết cấu: ${w.artisticFeatures.structureOrPointOfView}`,
                `Bút pháp khắc họa: ${w.artisticFeatures.prominentCraft}`,
                `Góc nhìn nâng cao: ${w.analysisLevels.advanced}`,
              ],
            },
          ]
        : promptType === 'artistic_detail'
        ? [
            {
              step: 'Luận điểm 1: Vai trò của chi tiết nghệ thuật trong chỉnh thể tác phẩm',
              bullets: [
                `"Chi tiết nhỏ làm nên nhà văn lớn" (M. Gorky) — Trong "${w.title}", mỗi chi tiết đều là điểm hội tụ của tư tưởng.`,
                `Chủ đề quy chiếu: ${w.centralTheme}`,
              ],
            },
            {
              step: 'Luận điểm 2: Giải mã chuỗi chi tiết nghệ thuật đắt giá (Mô hình 3 tầng)',
              bullets: w.keyArtisticDetails.map(
                (d) =>
                  `[${d.detailName}] Trực tiếp: ${d.directMeaning} → Biểu tượng: ${d.symbolicMeaning} → Chủ đề: ${d.thematicConnection}`
              ),
            },
            {
              step: 'Luận điểm 3: Sự cộng hưởng với ngôn từ, giọng điệu và bút pháp tác giả',
              bullets: [
                `Hình ảnh & Biện pháp tu từ: ${w.artisticFeatures.imageryOrRhetoric}`,
                ...w.artisticFeatures.distinctiveDevices.map(
                  (dev) => `${dev.name}: ${dev.description}`
                ),
              ],
            },
          ]
        : [
            {
              step: 'Luận điểm 1: Biểu hiện của giá trị hiện thực & Nỗi trăn trở trước số phận con người',
              bullets: [
                w.literaryValues.realisticValue ||
                  w.literaryValues.ideologicalValue ||
                  w.historicContext.historicalBackground,
                `Đề tài phản ánh: ${w.topic}`,
              ],
            },
            {
              step: 'Luận điểm 2: Chiều sâu nhân đạo & Khát vọng nhân sinh cao cả',
              bullets: [
                w.literaryValues.humanitarianValue ||
                  w.literaryValues.ideologicalValue ||
                  w.centralTheme,
                `Phân tích chiều sâu: ${w.analysisLevels.advanced}`,
              ],
            },
            {
              step: 'Luận điểm 3: Hình thức nghệ thuật nâng đỡ tư tưởng nhân đạo',
              bullets: [
                `Giá trị nghệ thuật: ${w.literaryValues.artisticValue}`,
                `Thông điệp vượt thời gian: ${w.literaryValues.message}`,
              ],
            },
          ];

    const conclusion = `Khép lại trang văn "${w.title}", dư âm còn đọng mãi trong tâm thức người đọc hiện đại: "${w.quick60s.takeaway}". Tác phẩm không chỉ khẳng định vị thế bậc thầy của ${w.authorName} mà còn truyền tải thông điệp trường tồn: ${w.literaryValues.modernRelevance}`;

    return {
      title: promptTitleMap[promptType],
      introHook,
      thesisStatement: w.centralTheme,
      bodyPoints,
      conclusion,
      goldenKeywords: w.quick60s.goldenKeywords,
    };
  }, [outlineWork, outlineAuthor, promptType]);

  const handleCopyOutline = () => {
    const text = [
      `DÀN Ý NGHỊ LUẬN VĂN HỌC: ${generatedOutline.title.toUpperCase()}`,
      `\nI. MỞ BÀI`,
      `- Dẫn dắt: ${generatedOutline.introHook}`,
      `- Luận đề trung tâm: ${generatedOutline.thesisStatement}`,
      `\nII. THÂN BÀI`,
      ...generatedOutline.bodyPoints.flatMap((bp) => [
        `\n${bp.step}`,
        ...bp.bullets.map((b) => `  + ${b}`),
      ]),
      `\nIII. KẾT BÀI`,
      `- Khẳng định & Liên hệ: ${generatedOutline.conclusion}`,
      `- Từ khóa vàng cần dùng: ${generatedOutline.goldenKeywords.join(', ')}`,
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopiedOutline(true);
    setTimeout(() => setCopiedOutline(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-[#23202c]">
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
            Không gian Học thuật Chuyên sâu
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-[#f4efe6] text-balance">
            So sánh Đối chiếu · Ôn tập 60 Giây · Lập Dàn ý Nghị luận
          </h1>
          <p className="text-sm text-stone-600 dark:text-[#a9a49c] max-w-2xl leading-relaxed">
            Hệ thống công cụ tương tác hỗ trợ học sinh THPT rèn luyện tư duy so sánh liên văn bản, ghi nhớ hệ thống từ khóa trọng tâm và thiết lập cấu trúc bài làm nghị luận văn học.
          </p>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-stone-200/70 dark:bg-[#14121b] border border-stone-300 dark:border-[#262232] shrink-0">
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'compare'
                ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-semibold shadow-xs'
                : 'text-stone-700 dark:text-[#a9a49c] hover:text-stone-950 dark:hover:text-[#f4efe6]'
            }`}
          >
            <Scale className="w-3.5 h-3.5" /> So sánh Tác phẩm
          </button>
          <button
            onClick={() => setActiveTab('outliner')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'outliner'
                ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-semibold shadow-xs'
                : 'text-stone-700 dark:text-[#a9a49c] hover:text-stone-950 dark:hover:text-[#f4efe6]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Lập Dàn ý Nghị luận
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'flashcards'
                ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-semibold shadow-xs'
                : 'text-stone-700 dark:text-[#a9a49c] hover:text-stone-950 dark:hover:text-[#f4efe6]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Thẻ nhớ 60s ({masteredSlugs.length}/{allWorks.length})
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'quiz'
                ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-semibold shadow-xs'
                : 'text-stone-700 dark:text-[#a9a49c] hover:text-stone-950 dark:hover:text-[#f4efe6]'
            }`}
          >
            <Award className="w-3.5 h-3.5" /> Trắc nghiệm Đọc hiểu
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* TAB 1: BÀN SO SÁNH ĐỐI CHIẾU TÁC PHẨM ĐA CHIỀU                      */}
      {/* =================================================================== */}
      {activeTab === 'compare' && (
        <div className="space-y-8">
          {/* Preset Exam Comparison Pairs */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-[#8e8a84]">
              Cặp tác phẩm liên hệ – so sánh kinh điển trong đề thi THPT:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {PRESET_COMPARISONS.map((pair, idx) => {
                const isCurrentPair =
                  (compareSlugA === pair.slugA && compareSlugB === pair.slugB) ||
                  (compareSlugA === pair.slugB && compareSlugB === pair.slugA);
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCompareSlugA(pair.slugA);
                      setCompareSlugB(pair.slugB);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-1.5 ${
                      isCurrentPair
                        ? 'bg-amber-50/90 dark:bg-[#1e1b29] border-[#8a6421] dark:border-[#c5a059]'
                        : 'bg-[#fdfbf7] dark:bg-[#121117] border-stone-200 dark:border-[#23202c] hover:border-[#8a6421]/60 dark:hover:border-[#c5a059]/60'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-stone-900 dark:text-[#f4efe6]">
                      {pair.label}
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-[#9c978e] line-clamp-2 leading-snug">
                      {pair.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dual Selectors & Visual Header Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                label: 'Tác phẩm đối chiếu thứ nhất (A)',
                selectedSlug: compareSlugA,
                onChange: setCompareSlugA,
                work: workA,
              },
              {
                label: 'Tác phẩm đối chiếu thứ hai (B)',
                selectedSlug: compareSlugB,
                onChange: setCompareSlugB,
                work: workB,
              },
            ].map((slot, sIdx) => (
              <div
                key={sIdx}
                className="rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] overflow-hidden shadow-sm"
              >
                <div className="p-4 border-b border-stone-200 dark:border-[#1f1d28] flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#c5a059]">
                    {slot.label}
                  </span>
                  <select
                    value={slot.selectedSlug}
                    onChange={(e) => slot.onChange(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-[#1a1724] border border-stone-300 dark:border-[#2e2a3c] text-xs font-medium text-stone-900 dark:text-[#f4efe6] focus:outline-hidden focus:border-[#c5a059]"
                  >
                    {allWorks.map((w) => (
                      <option key={w.slug} value={w.slug}>
                        {w.title} — {w.authorName} (Lớp {w.grade})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative h-44 overflow-hidden">
                  <img
                    src={slot.work.coverImage}
                    alt={slot.work.title}
                    className="w-full h-full object-cover filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-xs text-[#d8b26e] font-medium">
                        {slot.work.authorName} · Lớp {slot.work.grade} · {slot.work.genre}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#f4efe6] mt-0.5">
                        {slot.work.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => onSelectWork(slot.work.slug)}
                      className="px-3 py-1.5 rounded-md bg-[#c5a059] hover:bg-[#d8b26e] text-[#0c0c0e] text-xs font-semibold transition-colors shrink-0 whitespace-nowrap"
                    >
                      Đọc bài phân tích
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Structured Side-by-Side Comparison Matrix */}
          <div className="rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] divide-y divide-stone-200 dark:divide-[#1f1d28] overflow-hidden">
            {[
              {
                criterion: '01. Xuất xứ & Hoàn cảnh sáng tác',
                valA: `${workA.year} — ${workA.origin}. Bối cảnh: ${workA.historicContext.historicalBackground}`,
                valB: `${workB.year} — ${workB.origin}. Bối cảnh: ${workB.historicContext.historicalBackground}`,
              },
              {
                criterion: '02. Đề tài & Tư tưởng chủ đề cốt lõi',
                valA: `Đề tài: ${workA.topic}.\nChủ đề: ${workA.centralTheme}`,
                valB: `Đề tài: ${workB.topic}.\nChủ đề: ${workB.centralTheme}`,
              },
              {
                criterion: '03. Hình tượng trung tâm',
                valA: `${workA.quick60s.coreFigureOrCharacter} — ${workA.quick60s.mainIdea}`,
                valB: `${workB.quick60s.coreFigureOrCharacter} — ${workB.quick60s.mainIdea}`,
              },
              {
                criterion: '04. Bút pháp, Ngôn ngữ & Giọng điệu',
                valA: `Đặc trưng: ${workA.artisticFeatures.prominentCraft}\nNgôn ngữ: ${workA.artisticFeatures.language}\nGiọng điệu: ${workA.artisticFeatures.tone}`,
                valB: `Đặc trưng: ${workB.artisticFeatures.prominentCraft}\nNgôn ngữ: ${workB.artisticFeatures.language}\nGiọng điệu: ${workB.artisticFeatures.tone}`,
              },
              {
                criterion: '05. Chi tiết nghệ thuật đắt giá',
                valA: workA.keyArtisticDetails
                  .map((d) => `• ${d.detailName}: ${d.symbolicMeaning}`)
                  .join('\n'),
                valB: workB.keyArtisticDetails
                  .map((d) => `• ${d.detailName}: ${d.symbolicMeaning}`)
                  .join('\n'),
              },
              {
                criterion: '06. Giá trị nhân văn & Thông điệp cốt lõi',
                valA: `${workA.literaryValues.message} (${workA.quick60s.takeaway})`,
                valB: `${workB.literaryValues.message} (${workB.quick60s.takeaway})`,
              },
            ].map((row, rIdx) => (
              <div key={rIdx} className="p-5 sm:p-6 space-y-3">
                <div className="text-xs font-serif font-bold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e]">
                  {row.criterion}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                  <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-[#171520] border border-stone-200/80 dark:border-[#252132] whitespace-pre-line">
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-[#8e8a84] block mb-1">
                      {workA.title} ({workA.authorName})
                    </span>
                    {row.valA}
                  </div>
                  <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-[#171520] border border-stone-200/80 dark:border-[#252132] whitespace-pre-line">
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-[#8e8a84] block mb-1">
                      {workB.title} ({workB.authorName})
                    </span>
                    {row.valB}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 2: TRÌNH LẬP DÀN Ý NGHỊ LUẬN VĂN HỌC                           */}
      {/* =================================================================== */}
      {activeTab === 'outliner' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Column */}
          <div className="lg:col-span-4 p-6 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-5">
            <div className="space-y-1 border-b border-stone-200 dark:border-[#1f1d28] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#c5a059]">
                Thiết lập Đề bài
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-[#f4efe6]">
                Cấu hình Dàn ý Chuẩn THPT
              </h3>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-stone-600 dark:text-[#a9a49c] block">
                1. Chọn tác phẩm trọng tâm:
              </label>
              <select
                value={outlineSlug}
                onChange={(e) => setOutlineSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-stone-100 dark:bg-[#1a1724] border border-stone-300 dark:border-[#2e2a3c] text-xs sm:text-sm text-stone-900 dark:text-[#f4efe6] focus:outline-hidden focus:border-[#c5a059]"
              >
                {allWorks.map((w) => (
                  <option key={w.slug} value={w.slug}>
                    {w.title} — {w.authorName} (Lớp {w.grade})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-stone-600 dark:text-[#a9a49c] block">
                2. Chọn dạng đề nghị luận:
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'comprehensive',
                    label: 'Phân tích toàn diện Nội dung & Nghệ thuật',
                  },
                  {
                    id: 'character_image',
                    label: 'Phân tích Nhân vật / Hình tượng thơ trung tâm',
                  },
                  {
                    id: 'artistic_detail',
                    label: 'Phân tích Chi tiết nghệ thuật đắt giá',
                  },
                  {
                    id: 'humanitarian',
                    label: 'Làm sáng tỏ Giá trị Nhân đạo & Tư tưởng',
                  },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPromptType(type.id as EssayPromptType)}
                    className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition-all ${
                      promptType === type.id
                        ? 'bg-amber-50/90 dark:bg-[#1e1b29] border-[#8a6421] dark:border-[#c5a059] text-stone-900 dark:text-[#f4efe6] font-semibold'
                        : 'bg-stone-50 dark:bg-[#16141f] border-stone-200 dark:border-[#252132] text-stone-600 dark:text-[#a9a49c] hover:text-stone-900 dark:hover:text-[#f4efe6]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-[#1f1d28] space-y-2.5">
              <button
                onClick={handleCopyOutline}
                className="w-full py-2.5 px-4 rounded-lg bg-[#8a6421] dark:bg-[#c5a059] hover:bg-[#6e4e16] dark:hover:bg-[#d8b26e] text-white dark:text-[#0c0c0e] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                {copiedOutline ? (
                  <>
                    <Check className="w-4 h-4" /> Đã sao chép toàn bộ dàn ý
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Sao chép Dàn ý vào bộ nhớ tạm
                  </>
                )}
              </button>
              <button
                onClick={() => onSelectWork(outlineWork.slug)}
                className="w-full py-2 px-4 rounded-lg bg-stone-100 dark:bg-[#181622] hover:bg-stone-200 dark:hover:bg-[#221f30] border border-stone-300 dark:border-[#2f2b3d] text-xs font-medium text-stone-800 dark:text-[#d8b26e] transition-colors flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" /> Mở hồ sơ phân tích "{outlineWork.title}"
              </button>
            </div>
          </div>

          {/* Right Generated Outline Sheet */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-6">
            <div className="pb-4 border-b border-stone-200 dark:border-[#1f1d28] space-y-1.5">
              <div className="text-xs text-stone-500 dark:text-[#8e8a84]">
                Đề bài nghị luận văn học · Khối Lớp {outlineWork.grade} · {outlineWork.genre}
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#f4efe6]">
                {generatedOutline.title}
              </h2>
            </div>

            {/* I. MỞ BÀI */}
            <div className="p-5 rounded-xl bg-stone-100/70 dark:bg-[#16141f] border border-stone-200 dark:border-[#262234] space-y-2.5">
              <div className="font-serif font-bold text-sm text-[#8a6421] dark:text-[#d8b26e] uppercase tracking-wider">
                I. Mở bài (Giới thiệu tác giả, tác phẩm & Vấn đề nghị luận)
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                <strong>Dẫn dắt phong cách:</strong> {generatedOutline.introHook}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                <strong>Nêu luận đề trung tâm:</strong> {generatedOutline.thesisStatement}
              </p>
            </div>

            {/* II. THÂN BÀI */}
            <div className="space-y-4">
              <div className="font-serif font-bold text-sm text-[#8a6421] dark:text-[#d8b26e] uppercase tracking-wider">
                II. Thân bài (Hệ thống Luận điểm triển khai)
              </div>
              {generatedOutline.bodyPoints.map((bp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-stone-50 dark:bg-[#15131d] border border-stone-200 dark:border-[#242030] space-y-3"
                >
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-[#f4efe6]">
                    {bp.step}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                    {bp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#8a6421] dark:text-[#c5a059] font-bold mt-0.5">
                          •
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* III. KẾT BÀI */}
            <div className="p-5 rounded-xl bg-stone-100/70 dark:bg-[#16141f] border border-stone-200 dark:border-[#262234] space-y-3">
              <div className="font-serif font-bold text-sm text-[#8a6421] dark:text-[#d8b26e] uppercase tracking-wider">
                III. Kết bài (Tổng kết giá trị & Dư âm thời đại)
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                {generatedOutline.conclusion}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-[#242031] text-xs text-stone-600 dark:text-[#a9a49c]">
                <strong className="text-stone-900 dark:text-[#f4efe6]">
                  Từ khóa học thuật điểm cao:
                </strong>{' '}
                {generatedOutline.goldenKeywords.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 3: THẺ GHI NHỚ 60 GIÂY (INTERACTIVE FLASHCARDS)                 */}
      {/* =================================================================== */}
      {activeTab === 'flashcards' && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c]">
            <div className="flex items-center gap-2">
              {['all', '10', '11', '12'].map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    setFlashcardGrade(g);
                    setCurrentCardIndex(0);
                    setIsCardFlipped(false);
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    flashcardGrade === g
                      ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-semibold'
                      : 'bg-stone-100 dark:bg-[#181622] text-stone-600 dark:text-[#a9a49c] hover:text-stone-900 dark:hover:text-[#f4efe6]'
                  }`}
                >
                  {g === 'all' ? 'Tất cả khối' : `Lớp ${g}`}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-600 dark:text-[#a9a49c] tabular-nums">
              <span>
                Thẻ <strong className="text-stone-900 dark:text-[#f4efe6]">{(currentCardIndex % filteredFlashcards.length) + 1}</strong> / {filteredFlashcards.length}
              </span>
              <button
                onClick={() => {
                  const randomIdx = Math.floor(Math.random() * filteredFlashcards.length);
                  setCurrentCardIndex(randomIdx);
                  setIsCardFlipped(false);
                }}
                className="px-3 py-1.5 rounded-md bg-stone-100 dark:bg-[#181622] hover:bg-stone-200 dark:hover:bg-[#221f30] border border-stone-300 dark:border-[#2d283b] text-stone-800 dark:text-[#d8b26e] flex items-center gap-1.5 transition-colors"
              >
                <Shuffle className="w-3.5 h-3.5" /> Trộn thẻ
              </button>
            </div>
          </div>

          {/* Interactive Flashcard Surface */}
          <div
            onClick={() => setIsCardFlipped(!isCardFlipped)}
            className="cursor-pointer rounded-2xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-300 dark:border-[#2e293d] shadow-xl overflow-hidden transition-all"
          >
            {!isCardFlipped ? (
              /* FRONT OF CARD: Visual Artwork + Question Prompt */
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
                <div className="md:col-span-5 relative min-h-[220px]">
                  <img
                    src={currentFlashcardWork.coverImage}
                    alt={currentFlashcardWork.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs text-[#f4efe6] font-medium">
                    Lớp {currentFlashcardWork.grade} · {currentFlashcardWork.genre}
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8a6421] dark:text-[#c5a059] font-semibold uppercase tracking-wider">
                      <span>Mặt trước · Nhận diện Tác phẩm</span>
                      {masteredSlugs.includes(currentFlashcardWork.slug) && (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Đã nắm vững
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                      {currentFlashcardWork.title}
                    </h2>
                    <div className="text-sm text-stone-600 dark:text-[#b5afa4]">
                      Tác giả: <strong className="text-stone-900 dark:text-[#f4efe6]">{currentFlashcardWork.authorName}</strong> ({currentFlashcardWork.year})
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-[#a9a49c] italic leading-relaxed pt-2">
                      "{currentFlashcardWork.hookIntro}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 dark:border-[#23202d] flex items-center justify-between text-xs text-[#8a6421] dark:text-[#d8b26e]">
                    <span>Nhấn vào thẻ để lật xem Bảng tổng kết 60 giây</span>
                    <RotateCcw className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ) : (
              /* BACK OF CARD: Complete 60-Second Synthesis */
              <div className="p-6 sm:p-8 space-y-5 min-h-[380px] flex flex-col justify-between bg-amber-50/30 dark:bg-[#161420]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 dark:border-[#262234] pb-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#c5a059]">
                        Mặt sau · Tác phẩm trong 60 Giây
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-[#f4efe6]">
                        {currentFlashcardWork.title} — {currentFlashcardWork.authorName}
                      </h3>
                    </div>
                    <span className="text-xs text-stone-500 dark:text-[#8e8a84]">
                      Nhấn để lật lại
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-lg bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#242031]">
                      <strong className="text-[#8a6421] dark:text-[#d8b26e] block mb-1">
                        Hình tượng trung tâm & Nội dung cốt tử:
                      </strong>
                      <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                        {currentFlashcardWork.quick60s.coreFigureOrCharacter} —{' '}
                        {currentFlashcardWork.quick60s.mainIdea}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#242031]">
                      <strong className="text-[#8a6421] dark:text-[#d8b26e] block mb-1">
                        Nghệ thuật đặc sắc:
                      </strong>
                      <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                        {currentFlashcardWork.quick60s.keyArt}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-stone-600 dark:text-[#b5afa4]">
                    <strong className="text-stone-900 dark:text-[#f4efe6]">Từ khóa vàng:</strong>{' '}
                    {currentFlashcardWork.quick60s.goldenKeywords.join(' · ')}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-[#252133] flex flex-wrap items-center justify-between gap-3">
                  <span className="font-serif italic text-xs text-stone-600 dark:text-[#d5cbba]">
                    "{currentFlashcardWork.quick60s.takeaway}"
                  </span>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 shrink-0"
                  >
                    <button
                      onClick={() => onToggleMastered(currentFlashcardWork.slug)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                        masteredSlugs.includes(currentFlashcardWork.slug)
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-[#fdfbf7] dark:bg-[#1b1826] text-stone-800 dark:text-[#d8b26e] border-stone-300 dark:border-[#342f44]'
                      }`}
                    >
                      {masteredSlugs.includes(currentFlashcardWork.slug)
                        ? 'Đã thuộc lòng'
                        : 'Đánh dấu Đã thuộc'}
                    </button>
                    <button
                      onClick={() => onSelectWork(currentFlashcardWork.slug)}
                      className="px-3 py-1.5 rounded-md bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] text-xs font-semibold"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card Navigation Footer */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setCurrentCardIndex(
                  (prev) => (prev - 1 + filteredFlashcards.length) % filteredFlashcards.length
                );
                setIsCardFlipped(false);
              }}
              className="px-4 py-2 rounded-lg bg-[#fdfbf7] dark:bg-[#121117] hover:bg-stone-100 dark:hover:bg-[#191722] border border-stone-200 dark:border-[#23202c] text-xs font-medium text-stone-800 dark:text-[#e8decb] flex items-center gap-1.5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Tác phẩm trước
            </button>

            <button
              onClick={() => {
                setCurrentCardIndex((prev) => (prev + 1) % filteredFlashcards.length);
                setIsCardFlipped(false);
              }}
              className="px-4 py-2 rounded-lg bg-[#fdfbf7] dark:bg-[#121117] hover:bg-stone-100 dark:hover:bg-[#191722] border border-stone-200 dark:border-[#23202c] text-xs font-medium text-stone-800 dark:text-[#e8decb] flex items-center gap-1.5 transition-colors"
            >
              Tác phẩm tiếp theo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TAB 4: TRẮC NGHIỆM ĐỌC HIỂU & GIẢI MÃ THI PHÁP                      */}
      {/* =================================================================== */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto space-y-6">
          {quizCompleted ? (
            <div className="p-8 rounded-2xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#262232] text-center space-y-5">
              <Award className="w-12 h-12 text-[#8a6421] dark:text-[#c5a059] mx-auto" />
              <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Hoàn thành Bài Luyện tập Đọc hiểu
              </h2>
              <p className="text-sm text-stone-600 dark:text-[#b5afa4] tabular-nums">
                Kết quả của bạn:{' '}
                <strong className="text-lg text-[#8a6421] dark:text-[#d8b26e]">
                  {totalCorrect} / {QUIZ_QUESTIONS.length}
                </strong>{' '}
                câu trả lời chính xác (
                {Math.round((totalCorrect / QUIZ_QUESTIONS.length) * 100)}%)
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setCurrentQuizIdx(0);
                    setQuizCompleted(false);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] text-xs font-semibold flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Làm lại từ đầu
                </button>
                <button
                  onClick={() => setQuizCompleted(false)}
                  className="px-4 py-2.5 rounded-lg bg-stone-100 dark:bg-[#191724] border border-stone-300 dark:border-[#2e2a3c] text-xs font-medium text-stone-800 dark:text-[#d5cbba]"
                >
                  Xem lại đáp án chi tiết
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#262232] space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-[#201d2a] pb-4 text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#c5a059] tabular-nums">
                  Câu hỏi {currentQuizIdx + 1} / {QUIZ_QUESTIONS.length} ·{' '}
                  {WORKS[currentQuestion.workSlug]?.title}
                </span>
                <span className="text-stone-500 dark:text-[#8e8a84] tabular-nums">
                  Điểm hiện tại: {totalCorrect}/{Object.keys(selectedAnswers).length}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#f4efe6] leading-snug">
                {currentQuestion.question}
              </h3>

              {currentQuestion.excerpt && (
                <div className="p-4 rounded-xl bg-stone-100 dark:bg-[#0f0e14] border border-stone-200 dark:border-[#221f2d] font-serif italic text-xs sm:text-sm text-stone-800 dark:text-[#e8decb] whitespace-pre-line">
                  {currentQuestion.excerpt}
                </div>
              )}

              <div className="space-y-3">
                {currentQuestion.options.map((opt, oIdx) => {
                  const isThisSelected = userSelectedOption === oIdx;
                  const isCorrectOption = currentQuestion.correctIndex === oIdx;

                  let btnStyle =
                    'bg-stone-50 dark:bg-[#171520] border-stone-200 dark:border-[#262233] text-stone-800 dark:text-[#d5cbba] hover:border-[#8a6421] dark:hover:border-[#c5a059]';
                  if (isAnswered) {
                    if (isCorrectOption) {
                      btnStyle =
                        'bg-emerald-950/20 dark:bg-emerald-950/40 border-emerald-600 dark:border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isThisSelected && !isCorrectOption) {
                      btnStyle =
                        'bg-rose-950/15 dark:bg-rose-950/40 border-rose-600 dark:border-rose-500 text-rose-900 dark:text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => {
                        if (!isAnswered) {
                          setSelectedAnswers((prev) => ({
                            ...prev,
                            [currentQuestion.id]: oIdx,
                          }));
                        }
                      }}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                    >
                      <span className="leading-relaxed">
                        <strong className="mr-2 font-serif">
                          {String.fromCharCode(65 + oIdx)}.
                        </strong>
                        {opt}
                      </span>
                      {isAnswered && isCorrectOption && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isThisSelected && !isCorrectOption && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-[#191724] border border-amber-300/60 dark:border-[#342f44] space-y-2 text-xs">
                  <div className="font-semibold text-[#8a6421] dark:text-[#d8b26e]">
                    Giải thích học thuật:
                  </div>
                  <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                  <button
                    onClick={() => onSelectWork(currentQuestion.workSlug)}
                    className="text-[#8a6421] dark:text-[#c5a059] hover:underline font-medium inline-flex items-center gap-1 pt-1"
                  >
                    Đọc toàn bộ phân tích "{WORKS[currentQuestion.workSlug]?.title}"{' '}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="pt-4 border-t border-stone-200 dark:border-[#201d2a] flex items-center justify-between">
                <button
                  disabled={currentQuizIdx === 0}
                  onClick={() => setCurrentQuizIdx((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg bg-stone-100 dark:bg-[#181622] disabled:opacity-40 text-xs font-medium text-stone-800 dark:text-[#d5cbba] flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" /> Câu trước
                </button>

                {currentQuizIdx < QUIZ_QUESTIONS.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuizIdx((prev) => prev + 1)}
                    className="px-4 py-2 rounded-lg bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] text-xs font-semibold flex items-center gap-1.5"
                  >
                    Câu tiếp theo <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizCompleted(true)}
                    className="px-5 py-2 rounded-lg bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] text-xs font-semibold"
                  >
                    Xem tổng kết điểm
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
