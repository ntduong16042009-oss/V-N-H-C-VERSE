import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Brain,
  Clock,
  Users,
  User,
  BookOpen,
  ArrowRight,
  Heart,
  MessageSquare,
  Send,
  Copy,
  Check,
  Bookmark,
  Compass,
  Feather,
  Award,
  Layers,
  FileText,
  Globe,
  Trash2,
} from 'lucide-react';
import { WORKS } from '../data/works';
import { AUTHORS } from '../data/authors';
import { CATEGORY_IMAGES } from '../assets/workImages';

/* ========================================================================== */
/* 1. TRANG KHÁM PHÁ THẾ GIỚI VĂN HỌC (EXPLORE VIEW)                          */
/* ========================================================================== */

interface WorldClassic {
  id: string;
  title: string;
  author: string;
  country: string;
  era: string;
  genre: string;
  summary: string;
  artisticHighlight: string;
  famousQuote: string;
  gradeConnection: string;
}

const WORLD_CLASSICS: WorldClassic[] = [
  {
    id: 'romeo-juliet',
    title: 'Rô-mê-ô và Giu-li-ét (Tình yêu và thù hận)',
    author: 'William Shakespeare',
    country: 'Anh Quốc',
    era: 'Thời kỳ Phục Hưng (1595)',
    genre: 'Bi kịch cổ điển',
    summary:
      'Bi kịch bất hủ về tình yêu trong sáng, mãnh liệt vượt lên mối thù truyền kiếp giữa hai dòng họ Montague và Capulet tại thành Verona.',
    artisticHighlight:
      'Ngôn từ thơ kịch giàu chất trữ tình, độc thoại nội tâm dưới ánh trăng, khẳng định chủ nghĩa nhân văn Phục Hưng.',
    famousQuote:
      '“Chỉ có tên họ chàng là thù địch của em thôi, còn chàng vẫn là chàng...”',
    gradeConnection: 'Ngữ văn THPT · Tinh hoa kịch thế giới',
  },
  {
    id: 'ong-gia-va-bien-ca',
    title: 'Ông già và biển cả (The Old Man and the Sea)',
    author: 'Ernest Hemingway',
    country: 'Hoa Kỳ',
    era: 'Thế kỷ XX (1952 – Giải Nobel Văn học)',
    genre: 'Tiểu thuyết ngắn',
    summary:
      'Hành trình ba ngày đêm đơn độc của lão ngư dân Santiago ngoài khơi vùng biển Cuba chinh phục con cá kiếm khổng lồ — biểu tượng cho vẻ đẹp kiên cường của con người.',
    artisticHighlight:
      'Nguyên lý “Tảng băng trôi” (1 phần nổi, 7 phần chìm), ngôn ngữ cô đọng, giàu tầng nghĩa biểu tượng triết học.',
    famousQuote:
      '“Con người có thể bị hủy diệt nhưng không thể bị khuất phục.”',
    gradeConnection: 'Ngữ văn Lớp 12 · Nguyên lý Tảng băng trôi',
  },
  {
    id: 'nhung-nguoi-khon-kho',
    title: 'Những người khốn khổ (Les Misérables)',
    author: 'Victor Hugo',
    country: 'Pháp',
    era: 'Chủ nghĩa Lãng mạn thế kỷ XIX (1862)',
    genre: 'Tiểu thuyết sử thi',
    summary:
      'Hành trình hoàn lương và cứu rỗi tâm hồn của người tù khổ sai Jean Valjean cùng số phận bi thương của Fantine và bé Cosette giữa lòng xã hội Pháp thế kỷ XIX.',
    artisticHighlight:
      'Bút pháp tương phản lãng mạn hùng vĩ, kết hợp tự sự sử thi và tư tưởng bác ái nhân đạo sâu thẳm.',
    famousQuote:
      '“Trên đời này chỉ có một điều cao cả nhất, đó là yêu thương con người.”',
    gradeConnection: 'Ngữ văn THPT · Chủ nghĩa Nhân đạo Thế giới',
  },
  {
    id: 'toi-yeu-em',
    title: 'Tôi yêu em (Я вас любил)',
    author: 'Aleksandr Sergeyevich Pushkin',
    country: 'Nga',
    era: 'Thế kỷ XIX (1829)',
    genre: 'Thơ trữ tình',
    summary:
      'Lời giã từ tình yêu vừa chân thành, đằm thắm vừa cao thượng của một tâm hồn biết đặt hạnh phúc của người mình yêu lên trên nỗi đau riêng.',
    artisticHighlight:
      'Ngôn từ giản dị mà hàm súc cổ điển, nhịp điệu cảm xúc chuyển biến tinh tế từ day dứt sang vị tha cao cả.',
    famousQuote:
      '“Tôi yêu em âm thầm, không hy vọng / Lúc rụt rè, khi hậm hực lòng ghen / Tôi yêu em, yêu chân thành, đằm thắm / Cầu em được người tình như tôi đã yêu em.”',
    gradeConnection: 'Ngữ văn Lớp 11 · Thơ trữ tình Thế giới',
  },
  {
    id: 'thuoc-lo-tan',
    title: 'Thuốc (Yao)',
    author: 'Lỗ Tấn',
    country: 'Trung Quốc',
    era: 'Đầu thế kỷ XX (1919)',
    genre: 'Truyện ngắn hiện đại',
    summary:
      'Bi kịch chiếc bánh bao tẩm máu người chiến sĩ cách mạng Hạ Du được dùng làm “thuốc” chữa bệnh lao cho bé Thuyên — lời cảnh tỉnh chấn động về căn bệnh mê muội tinh thần.',
    artisticHighlight:
      'Hình tượng chiếc bánh bao tẩm máu và vòng hoa trên mộ Hạ Du; kết cấu sóng đôi giàu sức gợi.',
    famousQuote:
      '“Trên mặt đất vốn làm gì có đường. Người ta đi mãi thì thành đường thôi.”',
    gradeConnection: 'Ngữ văn Lớp 12 · Văn học Hiện đại Châu Á',
  },
];

export const ExploreWorldView: React.FC<{
  initialCategory?: string;
  onSelectWork: (slug: string) => void;
  onSelectAuthor: (id: string) => void;
  onNavigate: (view: string, param?: string) => void;
}> = ({ initialCategory = 'all', onSelectWork, onSelectAuthor, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const [selectedWorldWork, setSelectedWorldWork] = useState<WorldClassic | null>(null);

  const allWorks = Object.values(WORKS);

  const categories = [
    {
      id: 'all',
      title: 'Toàn cảnh Vũ trụ',
      subtitle: 'Tất cả dòng chảy văn học',
      image: CATEGORY_IMAGES.vietnam,
    },
    {
      id: 'vietnam',
      title: 'Văn học Việt Nam',
      subtitle: 'Trung đại, Hiện thực & Kháng chiến',
      image: CATEGORY_IMAGES.vietnam,
    },
    {
      id: 'poetry',
      title: 'Thơ ca Trữ tình',
      subtitle: 'Nhạc điệu tâm hồn & Thi pháp',
      image: CATEGORY_IMAGES.poetry,
    },
    {
      id: 'shortStory',
      title: 'Truyện ngắn & Ký',
      subtitle: 'Số phận con người & Thời đại',
      image: CATEGORY_IMAGES.shortStory,
    },
    {
      id: 'world',
      title: 'Văn học Thế giới',
      subtitle: 'Kiệt tác nhân loại bất hủ',
      image: CATEGORY_IMAGES.world,
    },
  ];

  const filteredVietnameseWorks = useMemo(() => {
    if (activeCategory === 'poetry') {
      return allWorks.filter((w) => w.genre.includes('Thơ') || w.genre.includes('thơ'));
    }
    if (activeCategory === 'shortStory') {
      return allWorks.filter(
        (w) =>
          w.genre.includes('Truyện ngắn') ||
          w.genre.includes('Tùy bút') ||
          w.genre.includes('Kịch')
      );
    }
    return allWorks;
  }, [allWorks, activeCategory]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#b490ff]/30 relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-[#f5d076]">
            <Compass className="w-3.5 h-3.5" /> Khám phá Thế giới Văn học
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Bản đồ Vũ trụ Văn chương
          </h1>
          <p className="text-sm sm:text-base text-[#d4c6f0] leading-relaxed">
            Du hành qua 4 miền lãnh thổ lớn của VĂN HỌCVERSE: Văn học Việt Nam qua các thời kỳ, Thơ ca trữ tình, Truyện ngắn hiện thực – nhân đạo và Tinh hoa Văn học Thế giới.
          </p>
        </div>
      </div>

      {/* Category Cards Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative h-36 rounded-2xl overflow-hidden text-left p-4 flex flex-col justify-end transition-all cursor-pointer border ${
                isActive
                  ? 'border-[#f5d076] ring-2 ring-[#f5d076]/50 scale-[1.02] shadow-[0_0_28px_rgba(245,208,118,0.35)]'
                  : 'border-white/20 hover:border-[#d8b4fe]'
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090416]/95 via-[#090416]/45 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-serif text-base font-bold text-white">{cat.title}</h3>
                <p className="text-[11px] text-[#d4c6f0] line-clamp-1">{cat.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* World Literature Section (Shown when 'all' or 'world' is selected) */}
      {(activeCategory === 'all' || activeCategory === 'world') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-[#f5d076]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Tinh hoa Văn học Thế giới
              </h2>
            </div>
            <span className="text-xs text-[#c7b6e8]">
              {WORLD_CLASSICS.length} Kiệt tác kinh điển nhân loại
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORLD_CLASSICS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedWorldWork(item)}
                className="verse-glass verse-glass-hover rounded-2xl p-6 flex flex-col justify-between space-y-4 cursor-pointer group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-[#f5d076] font-semibold">
                      {item.country} · {item.genre}
                    </span>
                    <span className="text-[11px] text-[#b5a4d9]">{item.era}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#d8b4fe] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#f5d076]">Tác giả: {item.author}</p>
                  <p className="text-xs text-[#d4c6f0] leading-relaxed">{item.summary}</p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <blockquote className="text-xs italic font-serif text-[#ece3ff] line-clamp-2">
                    {item.famousQuote}
                  </blockquote>
                  <div className="flex items-center justify-between text-xs text-[#c084fc] font-semibold pt-1">
                    <span>{item.gradeConnection}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Xem phân tích <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vietnamese Literature Section */}
      {activeCategory !== 'world' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeCategory === 'poetry'
                  ? 'Thế giới Thơ ca Trữ tình Việt Nam'
                  : activeCategory === 'shortStory'
                  ? 'Thế giới Truyện ngắn, Tùy bút & Kịch'
                  : 'Kiệt tác Văn học Việt Nam'}
              </h2>
              <p className="text-xs text-[#c7b6e8] mt-1">
                Nhấn vào bất kỳ tác phẩm nào để mở toàn văn, bản đồ nhân vật và phân tích 3 tầng nhận thức.
              </p>
            </div>
            <button
              onClick={() => onNavigate('study', 'compare')}
              className="px-4 py-2 rounded-full verse-glass text-xs font-semibold text-[#f5d076] hover:text-white flex items-center gap-2"
            >
              <Layers className="w-4 h-4" /> Mở Bàn So sánh Tác phẩm
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVietnameseWorks.map((work) => (
              <div
                key={work.slug}
                onClick={() => onSelectWork(work.slug)}
                className="verse-glass verse-glass-hover rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#12092b]/85 text-[#f5d076] border border-white/15">
                    Lớp {work.grade} · {work.genre}
                  </span>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAuthor(work.authorId);
                      }}
                      className="text-xs font-semibold text-[#d8b4fe] hover:underline"
                    >
                      {work.authorName} ({work.year})
                    </button>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f5d076] transition-colors mt-1">
                      {work.title}
                    </h3>
                    <p className="text-xs text-[#c7b6e8] line-clamp-2 mt-1.5 leading-relaxed">
                      {work.hookIntro}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#f5d076]">
                    <span>Đọc & Giải mã chuyên sâu</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for World Classic Detail */}
      {selectedWorldWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          onClick={() => setSelectedWorldWork(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl verse-glass border border-[#d8b4fe]/40 p-6 sm:p-8 space-y-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#f5d076] uppercase tracking-wider">
                  {selectedWorldWork.country} · {selectedWorldWork.era}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedWorldWork.title}
                </h3>
                <p className="text-sm text-[#d8b4fe] font-medium mt-0.5">
                  Đại văn hào: {selectedWorldWork.author} · Thể loại: {selectedWorldWork.genre}
                </p>
              </div>
              <button
                onClick={() => setSelectedWorldWork(null)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white"
              >
                Đóng
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#ece3ff] leading-relaxed">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5d076] mb-1">
                  Tóm tắt & Tinh thần cốt lõi
                </h4>
                <p>{selectedWorldWork.summary}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c084fc] mb-1">
                  Đặc sắc Nghệ thuật & Thi pháp
                </h4>
                <p>{selectedWorldWork.artisticHighlight}</p>
              </div>
              <blockquote className="p-4 rounded-2xl bg-purple-500/15 border border-purple-400/30 font-serif italic text-base text-[#f5d076]">
                {selectedWorldWork.famousQuote}
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ========================================================================== */
/* 2. TRANG AI PHÂN TÍCH TÁC PHẨM (AI ANALYSIS VIEW)                          */
/* ========================================================================== */

export const AIAnalysisView: React.FC<{
  initialWorkSlug?: string;
  onSelectWork: (slug: string) => void;
}> = ({ initialWorkSlug = 'vo-nhat', onSelectWork }) => {
  const allWorks = Object.values(WORKS);
  const [selectedSlug, setSelectedSlug] = useState<string>(
    WORKS[initialWorkSlug] ? initialWorkSlug : 'vo-nhat'
  );
  const [analysisAngle, setAnalysisAngle] = useState<
    'overview' | 'characters' | 'poetics' | 'essay'
  >('overview');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const work = WORKS[selectedSlug] || allWorks[0];

  const handleGenerateCustomInsight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;
    const q = customPrompt.trim();
    const devicesList = work.artisticFeatures.distinctiveDevices
      .map((d) => `${d.name}: ${d.description}`)
      .slice(0, 3)
      .join('\n- ');
    const synthesis = `✦ GIẢI MÃ CHUYÊN SÂU TỪ VĂN HỌCVERSE AI — TÁC PHẨM "${work.title.toUpperCase()}" (${work.authorName})\n\n• Câu hỏi / Vấn đề nghiên cứu: "${q}"\n\n1. Luận điểm Cốt lõi & Bối cảnh Sáng tác:\n${work.historicContext.historicalBackground}\nTrong mạch tư tưởng chủ đạo (${work.centralTheme}), vấn đề bạn đặt ra chạm đúng vào hạt nhân thông điệp của tác phẩm: "${work.literaryValues.message}".\n\n2. Phân tích Chuyên sâu (Tầng Thi pháp & Tâm lý):\n${work.analysisLevels.detailed}\n\n${work.analysisLevels.advanced}\n\n3. Nghệ thuật Biểu đạt Đặc sắc:\n- ${devicesList}\n\n4. Gợi ý Liên hệ & Mở rộng trong Bài viết Nghị luận:\nKhi bàn về "${q}", người viết nên đối chiếu với giá trị nhân sinh đương đại: ${work.literaryValues.modernRelevance}`;
    setAiResponse(synthesis);
  };

  const handleCopyOutline = () => {
    const devicesList = work.artisticFeatures.distinctiveDevices
      .map((d) => `${d.name}: ${d.description}`)
      .join('\n- ');
    const text = `DÀN Ý NGHỊ LUẬN VĂN HỌC: ${work.title.toUpperCase()} (${work.authorName})\n\nI. MỞ BÀI:\n- Giới thiệu tác giả ${work.authorName} và tác phẩm "${work.title}" (${work.year}).\n- Dẫn dắt tư tưởng cốt lõi: "${work.literaryValues.message}".\n\nII. THÂN BÀI:\n1. Khái quát hoàn cảnh sáng tác:\n${work.historicContext.historicalBackground}\n2. Phân tích các luận điểm trọng tâm:\n${work.mainContentPoints
      .map((pt, i) => `Luận điểm ${i + 1}: ${pt}`)
      .join('\n')}\n3. Phân tích chuyên sâu:\n${work.analysisLevels.detailed}\n4. Đặc sắc nghệ thuật:\n- ${devicesList}\n\nIII. KẾT BÀI:\n- Khẳng định sức sống bất hủ của "${work.title}".\n- Bài học nhân sinh: ${work.literaryValues.modernRelevance}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#c084fc]/35 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-[#d8b4fe]">
            <Brain className="w-3.5 h-3.5 text-[#f5d076]" /> Trợ lý AI Phân tích Văn học Đa chiều
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            AI Giải mã Thi pháp & Lập dàn ý Chuyên sâu
          </h1>
          <p className="text-sm text-[#d4c6f0] leading-relaxed">
            Hệ thống phân tích thông minh bóc tách từng tầng nghĩa của tác phẩm theo 3 cấp độ nhận thức (Cơ bản · Nâng cao · Chuyên sâu), giải mã tâm lý nhân vật và tự động khởi tạo dàn ý nghị luận.
          </p>
        </div>

        {/* Work Selector */}
        <div className="w-full lg:w-80 space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#f5d076]">
            Chọn kiệt tác cần AI phân tích:
          </label>
          <select
            value={selectedSlug}
            onChange={(e) => {
              setSelectedSlug(e.target.value);
              setAiResponse(null);
            }}
            className="w-full px-4 py-3 rounded-2xl bg-[#12092b] border border-[#b490ff]/50 text-sm font-semibold text-white focus:outline-hidden focus:border-[#f5d076]"
          >
            {allWorks.map((w) => (
              <option key={w.slug} value={w.slug}>
                {w.title} — {w.authorName} (Lớp {w.grade})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Interactive Custom AI Question Bar */}
      <form
        onSubmit={handleGenerateCustomInsight}
        className="verse-glass rounded-2xl p-4 sm:p-6 border border-[#b490ff]/30 space-y-3"
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-[#f5d076]">
          <Sparkles className="w-4 h-4" /> Đặt câu hỏi hoặc yêu cầu đề bài nghị luận cho AI về tác phẩm "{work.title}":
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder={`Ví dụ: Phân tích bi kịch tinh thần hoặc giá trị nhân đạo trong ${work.title}...`}
            className="flex-1 px-4 py-3 rounded-xl bg-[#0b051c]/90 border border-white/20 text-sm text-white placeholder-[#9886bd] focus:outline-hidden focus:border-[#c084fc]"
          />
          <button
            type="submit"
            className="verse-btn-primary px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Brain className="w-4 h-4" />
            <span>AI Giải mã ngay</span>
          </button>
        </div>
        {/* Quick Prompt Suggestions */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[11px] text-[#b5a4d9]">Gợi ý nhanh:</span>
          {[
            `Tư tưởng cốt lõi & giá trị nhân đạo trong ${work.title}`,
            `Đặc sắc nghệ thuật và bút pháp của ${work.authorName}`,
            `Liên hệ thực tiễn từ thông điệp của ${work.title}`,
          ].map((suggestion, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCustomPrompt(suggestion);
              }}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] text-[#e2d6ff] transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>

        {aiResponse && (
          <div className="mt-4 p-5 rounded-2xl bg-[#0a041a]/90 border border-[#f5d076]/40 whitespace-pre-line text-xs sm:text-sm text-[#ece3ff] leading-relaxed">
            {aiResponse}
          </div>
        )}
      </form>

      {/* 4 Analysis Mode Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'overview', label: '1. Phân tích 3 Tầng Nhận thức' },
          { id: 'characters', label: '2. Giải mã Nhân vật & Chi tiết Đắt giá' },
          { id: 'poetics', label: '3. Thi pháp & Biểu tượng Nghệ thuật' },
          { id: 'essay', label: '4. Dàn ý Nghị luận Chuẩn Chuyên sâu' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setAnalysisAngle(tab.id as typeof analysisAngle)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              analysisAngle === tab.id
                ? 'bg-gradient-to-r from-[#9b72ff] to-[#6366f1] text-white shadow-[0_0_20px_rgba(155,114,255,0.5)]'
                : 'verse-glass text-[#d4c6f0] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}

        <button
          onClick={() => onSelectWork(work.slug)}
          className="ml-auto px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#f5d076] flex items-center gap-1.5"
        >
          <span>Mở toàn văn tác phẩm</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Tab Content */}
      {analysisAngle === 'overview' && (
        <div className="space-y-6">
          <div className="verse-glass rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5d076]">
              Giải mã 3 Tầng Nhận thức: {work.title}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#93c5fd]">
                  Tầng 1 · Nhận biết Cơ bản
                </span>
                <p className="text-xs sm:text-sm text-[#e2d6ff] leading-relaxed">
                  {work.analysisLevels.basic}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-purple-500/10 border border-purple-400/25 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d8b4fe]">
                  Tầng 2 · Phân tích Chuyên sâu
                </span>
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {work.analysisLevels.detailed}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-amber-500/10 border border-[#f5d076]/30 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#f5d076]">
                  Tầng 3 · Bình luận Học thuật & Thi pháp
                </span>
                <p className="text-xs sm:text-sm text-[#fef3c7] leading-relaxed">
                  {work.analysisLevels.advanced}
                </p>
              </div>
            </div>
          </div>

          <div className="verse-glass rounded-2xl p-6 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Hệ thống Luận điểm Trọng tâm trong Tác phẩm
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {work.mainContentPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-[#ece3ff]"
                >
                  <span className="w-6 h-6 rounded-full bg-purple-500/25 text-[#f5d076] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {analysisAngle === 'characters' && (
        <div className="space-y-6">
          {work.characters && work.characters.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.characters.map((char, idx) => (
                <div key={idx} className="verse-glass rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold text-white">{char.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-[#f5d076] border border-purple-400/30">
                      {char.role}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-[#ece3ff]">
                    <p>
                      <strong className="text-[#d8b4fe]">Ngoại hình & Hoàn cảnh:</strong>{' '}
                      {char.appearance} ({char.situation})
                    </p>
                    <p>
                      <strong className="text-[#d8b4fe]">Thế giới Nội tâm:</strong>{' '}
                      {char.innerPsychology}
                    </p>
                    <p>
                      <strong className="text-[#d8b4fe]">Ngôn ngữ & Hành động:</strong>{' '}
                      {char.speechAndActions}
                    </p>
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-[#f5d076]/30 text-[#fef3c7] mt-2">
                      <strong>Ý nghĩa biểu tượng:</strong> {char.symbolicMeaning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {work.keyArtisticDetails.map((detail) => (
              <div key={detail.id} className="verse-glass rounded-2xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f5d076]">
                  ✦ Chi tiết nghệ thuật đắt giá
                </span>
                <h4 className="font-serif text-xl font-bold text-white">{detail.detailName}</h4>
                <p className="text-xs sm:text-sm text-[#ece3ff] leading-relaxed">
                  <strong className="text-[#d8b4fe]">Ý nghĩa biểu tượng:</strong>{' '}
                  {detail.symbolicMeaning}
                </p>
                <p className="text-xs text-[#c7b6e8] leading-relaxed">
                  <strong>Kết nối chủ đề:</strong> {detail.thematicConnection}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {analysisAngle === 'poetics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="verse-glass rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#f5d076]">
              Thành tựu Nghệ thuật & Bút pháp Độc đáo
            </h3>
            <p className="text-xs sm:text-sm text-[#ece3ff] leading-relaxed">
              {work.artisticFeatures.prominentCraft}
            </p>
            <ul className="space-y-3 text-sm text-[#ece3ff]">
              {work.artisticFeatures.distinctiveDevices.map((dev, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-500/25 border border-purple-400/40 text-xs font-bold text-[#f5d076] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-[#d8b4fe]">{dev.name}:</strong> {dev.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="verse-glass rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#d8b4fe]">
              Giá trị Tư tưởng & Thông điệp Vượt thời gian
            </h3>
            <p className="text-sm text-[#ece3ff] leading-relaxed">
              {work.literaryValues.humanitarianValue ||
                work.literaryValues.ideologicalValue ||
                work.literaryValues.artisticValue}
            </p>
            <div className="p-4 rounded-xl bg-purple-500/15 border border-purple-400/30 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#f5d076]">
                Thông điệp cốt lõi
              </div>
              <p className="font-serif italic text-base text-white">
                “{work.literaryValues.message}”
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#d4c6f0]">
              <strong className="text-white">Giá trị đương đại:</strong>{' '}
              {work.literaryValues.modernRelevance}
            </div>
          </div>
        </div>
      )}

      {analysisAngle === 'essay' && (
        <div className="verse-glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Dàn ý Nghị luận Văn học: {work.title}
              </h3>
              <p className="text-xs text-[#c7b6e8]">
                Cấu trúc 3 phần chuẩn mực dành cho bài thi Học sinh giỏi & Tốt nghiệp THPT
              </p>
            </div>
            <button
              onClick={handleCopyOutline}
              className="verse-btn-primary px-5 py-2.5 rounded-full text-xs font-semibold text-white flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Đã sao chép dàn ý!' : 'Sao chép toàn bộ dàn ý'}</span>
            </button>
          </div>

          <div className="space-y-4 text-sm text-[#ece3ff]">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-serif font-bold text-lg text-[#f5d076]">I. MỞ BÀI</h4>
              <p>• Giới thiệu tác giả {work.authorName} và vị trí của kiệt tác "{work.title}" ({work.year}).</p>
              <p>• Dẫn dắt vào vấn đề nghị luận thông qua chủ đề trung tâm: {work.centralTheme}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="font-serif font-bold text-lg text-[#d8b4fe]">II. THÂN BÀI</h4>
              {work.mainContentPoints.map((pt, idx) => (
                <div key={idx} className="pl-3 border-l-2 border-[#b490ff]">
                  <div className="font-semibold text-white">
                    Luận điểm {idx + 1}: {pt}
                  </div>
                </div>
              ))}
              <div className="pt-2 text-xs sm:text-sm text-[#d4c6f0] leading-relaxed">
                <strong className="text-[#f5d076]">Phân tích nâng cao:</strong>{' '}
                {work.analysisLevels.detailed}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-serif font-bold text-lg text-[#93c5fd]">III. KẾT BÀI</h4>
              <p>• Khẳng định giá trị nghệ thuật và tư tưởng nhân văn của "{work.title}".</p>
              <p>• Liên hệ thực tiễn: {work.literaryValues.modernRelevance}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ========================================================================== */
/* 3. TRANG DÒNG THỜI GIAN VĂN HỌC (TIMELINE VIEW)                            */
/* ========================================================================== */

export const TimelineView: React.FC<{
  onSelectWork: (slug: string) => void;
  onSelectAuthor: (id: string) => void;
}> = ({ onSelectWork, onSelectAuthor }) => {
  const eras = [
    {
      id: 'medieval-early',
      period: 'Thế kỷ X – Thế kỷ XV',
      title: 'Văn học Trung đại Sơ kỳ & Hào khí Đại Việt',
      description:
        'Giai đoạn khẳng định chủ quyền độc lập dân tộc, tư tưởng nhân nghĩa yêu nước gắn liền với hào khí Đông A và hào khí Lam Sơn.',
      highlightWorks: ['binh-ngo-dai-cao'],
      highlightAuthors: ['nguyen-trai'],
      badgeColor: 'from-amber-400 to-orange-500',
    },
    {
      id: 'medieval-late',
      period: 'Thế kỷ XVIII – Nửa đầu Thế kỷ XIX',
      title: 'Đỉnh cao Truyện thơ Nôm & Trào lưu Nhân đạo Chủ nghĩa',
      description:
        'Văn học hướng về tiếng nói đòi quyền sống, quyền hạnh phúc cá nhân và niềm cảm thương sâu sắc trước số phận người phụ nữ tài hoa bạc mệnh.',
      highlightWorks: ['trao-duyen'],
      highlightAuthors: ['nguyen-du'],
      badgeColor: 'from-purple-400 to-pink-500',
    },
    {
      id: 'modern-pre1945',
      period: 'Giai đoạn 1930 – 1945',
      title: 'Phong trào Thơ Mới & Văn học Hiện thực Phê phán',
      description:
        'Cuộc cách mạng hiện đại hóa văn học: sự trỗi dậy mãnh liệt của cái “Tôi” trữ tình lãng mạn cùng những trang văn hiện thực phơi bày bi kịch người nông dân trước Cách mạng.',
      highlightWorks: ['day-thon-vi-da', 'chu-nguoi-tu-tu', 'chi-pheo'],
      highlightAuthors: ['han-mac-tu', 'nguyen-tuan', 'nam-cao'],
      badgeColor: 'from-indigo-400 to-purple-500',
    },
    {
      id: 'resistance-1945-1975',
      period: 'Giai đoạn 1945 – 1975',
      title: 'Văn học Kháng chiến & Cảm hứng Sử thi – Lãng mạn',
      description:
        'Nền văn học gắn liền với vận mệnh Tổ quốc trong hai cuộc kháng chiến, khắc họa vẻ đẹp hào hùng, bi tráng của người lính và nhân dân lao động.',
      highlightWorks: ['tay-tien', 'vo-nhat', 'nguoi-lai-do-song-da', 'song'],
      highlightAuthors: ['quang-dung', 'kim-lan', 'xuan-quynh'],
      badgeColor: 'from-blue-400 to-indigo-500',
    },
    {
      id: 'post-1975',
      period: 'Sau năm 1975 – Thời kỳ Đổi mới',
      title: 'Văn học Thế sự – Triết luận & Khám phá Đa diện Nhân sinh',
      description:
        'Văn học chuyển từ cảm hứng sử thi sang cảm hứng thế sự đời tư, nhìn nhận con người và cuộc sống trong tính đa diện, phức tạp và khát vọng hoàn thiện nhân cách.',
      highlightWorks: ['chiec-thuyen-ngoai-xa', 'hon-truong-ba-da-hang-thit'],
      highlightAuthors: ['nguyen-minh-chau', 'luu-quang-vu'],
      badgeColor: 'from-fuchsia-400 to-violet-600',
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#b490ff]/35 text-center max-w-4xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-[#f5d076]">
          <Clock className="w-3.5 h-3.5" /> Dòng chảy 10 Thế kỷ Văn chương
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Dòng thời gian Lịch sử Văn học
        </h1>
        <p className="text-sm sm:text-base text-[#d4c6f0] max-w-2xl mx-auto leading-relaxed">
          Theo dõi sự vận động của tư tưởng thẩm mỹ, thể loại và hình tượng con người qua 5 thời kỳ lớn của lịch sử văn học dân tộc.
        </p>
      </div>

      {/* Vertical Cosmic Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f5d076] via-[#c084fc] to-[#6366f1]" />

        <div className="space-y-12">
          {eras.map((era, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={era.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Cosmic Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#f5d076] border-4 border-[#12092b] shadow-[0_0_20px_rgba(245,208,118,0.9)] z-10 mt-6" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                  <div className="verse-glass verse-glass-hover rounded-3xl p-6 sm:p-7 space-y-4">
                    <span
                      className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${era.badgeColor}`}
                    >
                      {era.period}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-white">{era.title}</h2>
                    <p className="text-xs sm:text-sm text-[#d4c6f0] leading-relaxed">
                      {era.description}
                    </p>

                    {/* Works in this Era */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#f5d076]">
                        Kiệt tác tiêu biểu trong thời kỳ:
                      </div>
                      <div className="grid grid-cols-1 gap-2.5">
                        {era.highlightWorks.map((slug) => {
                          const w = WORKS[slug];
                          if (!w) return null;
                          return (
                            <div
                              key={slug}
                              onClick={() => onSelectWork(slug)}
                              className="p-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 flex items-center justify-between gap-3 cursor-pointer group"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  src={w.coverImage}
                                  alt={w.title}
                                  className="w-12 h-10 rounded-lg object-cover shrink-0"
                                />
                                <div className="min-w-0">
                                  <div className="font-serif font-bold text-sm text-white group-hover:text-[#f5d076] truncate">
                                    {w.title}
                                  </div>
                                  <div className="text-[11px] text-[#c7b6e8]">
                                    {w.authorName} · {w.year}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#d8b4fe] group-hover:translate-x-1 transition-transform shrink-0" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Authors */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {era.highlightAuthors.map((authorId) => {
                        const a = AUTHORS[authorId];
                        if (!a) return null;
                        return (
                          <button
                            key={authorId}
                            onClick={() => onSelectAuthor(authorId)}
                            className="px-3 py-1 rounded-full bg-purple-500/20 hover:bg-purple-500/35 border border-purple-400/30 text-xs text-[#e9d5ff] flex items-center gap-1.5"
                          >
                            <Feather className="w-3 h-3 text-[#f5d076]" />
                            <span>{a.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ========================================================================== */
/* 4. TRANG CỘNG ĐỒNG YÊU VĂN (COMMUNITY VIEW)                                */
/* ========================================================================== */

interface CommunityPost {
  id: string;
  author: string;
  role: string;
  topic: string;
  workTitle: string;
  title: string;
  content: string;
  likes: number;
  liked?: boolean;
  createdAt: string;
  comments: { id: string; user: string; text: string }[];
}

const INITIAL_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    author: 'Minh Khuê (Chuyên Văn K12)',
    role: 'Thành viên Tinh vân',
    topic: 'Cảm nhận tác phẩm',
    workTitle: 'Vợ nhặt – Kim Lân',
    title: 'Bát chè khoán của bà cụ Tứ và vẻ đẹp của tình mẫu tử trong bóng tối năm Ất Dậu',
    content:
      'Đọc lại “Vợ nhặt”, chi tiết khiến mình xúc động nhất không chỉ là quyết định nhặt vợ của Tràng, mà là nồi chè khoán đắng chát của bà cụ Tứ. Giữa cái đói quay quắt, người mẹ nghèo ấy vẫn cố tạo ra một bữa tiệc đón dâu bằng tất cả lòng nhân hậu và niềm tin vào tương lai...',
    likes: 48,
    createdAt: '2 giờ trước',
    comments: [
      {
        id: 'c1',
        user: 'Hoàng Nam',
        text: 'Phân tích rất sâu sắc! Đó chính là chất thơ nảy nở từ hiện thực tăm tối của Kim Lân.',
      },
    ],
  },
  {
    id: 'post-2',
    author: 'Thanh Trúc',
    role: 'Người gác đền Thơ Mới',
    topic: 'Góc thơ & Trích dẫn',
    workTitle: 'Sóng – Xuân Quỳnh',
    title: 'Vì sao Xuân Quỳnh lại chọn hóa thân thành “trăm con sóng nhỏ” giữa biển lớn tình yêu?',
    content:
      'Khổ cuối bài thơ “Sóng” không phải là sự tuyệt vọng trước cái hữu hạn của đời người, mà là khát vọng hòa nhập tình yêu cá nhân vào cái vô cùng của vũ trụ. Một quan niệm tình yêu vừa hiện đại vừa đậm chất nữ tính Việt Nam.',
    likes: 64,
    createdAt: '5 giờ trước',
    comments: [
      {
        id: 'c2',
        user: 'Quốc Bảo',
        text: 'Mình rất thích đối sánh khổ cuối của Sóng với Vội vàng của Xuân Diệu khi viết bài nghị luận!',
      },
    ],
  },
  {
    id: 'post-3',
    author: 'Bùi Trung Kiên (12A03 · THPT Yên Lãng)',
    role: 'Nhóm thực hiện Sản phẩm Học tập Số',
    topic: 'Bàn luận Nghị luận',
    workTitle: 'Chiếc thuyền ngoài xa – Nguyễn Minh Châu',
    title: 'Bí quyết phân tích nghịch lý giữa “Cái Đẹp” và “Sự Thật” qua phát hiện của nghệ sĩ Phùng',
    content:
      'Khi viết về Chiếc thuyền ngoài xa, các bạn đừng chỉ kể lại cốt truyện. Hãy tập trung vào sự chuyển dịch điểm nhìn của Phùng: từ cái nhìn duy mỹ ở cự ly xa đến cái nhìn nhân sinh đau đớn khi chiếc thuyền tiến gần vào bờ.',
    likes: 92,
    createdAt: '1 ngày trước',
    comments: [],
  },
];

export const CommunityView: React.FC<{
  onSelectWork: (slug: string) => void;
}> = () => {
  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    try {
      const saved = localStorage.getItem('vanhocverse_community_posts');
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch {
      return INITIAL_POSTS;
    }
  });

  const [selectedTopic, setSelectedTopic] = useState<string>('Tất cả');
  const [newTitle, setNewTitle] = useState<string>('');
  const [newWorkTitle, setNewWorkTitle] = useState<string>('Vợ nhặt – Kim Lân');
  const [newTopic, setNewTopic] = useState<string>('Cảm nhận tác phẩm');
  const [newContent, setNewContent] = useState<string>('');
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  const savePosts = (next: CommunityPost[]) => {
    setPosts(next);
    try {
      localStorage.setItem('vanhocverse_community_posts', JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    const post: CommunityPost = {
      id: `post-${Date.now()}`,
      author: 'Bạn đọc Văn HọcVerse',
      role: 'Lữ khách Văn chương',
      topic: newTopic,
      workTitle: newWorkTitle,
      title: newTitle.trim(),
      content: newContent.trim(),
      likes: 1,
      liked: true,
      createdAt: 'Vừa xong',
      comments: [],
    };
    savePosts([post, ...posts]);
    setNewTitle('');
    setNewContent('');
  };

  const handleToggleLike = (postId: string) => {
    const next = posts.map((p) => {
      if (p.id !== postId) return p;
      const liked = !p.liked;
      return {
        ...p,
        liked,
        likes: liked ? p.likes + 1 : Math.max(0, p.likes - 1),
      };
    });
    savePosts(next);
  };

  const handleAddComment = (postId: string) => {
    const text = (commentInputs[postId] || '').trim();
    if (!text) return;
    const next = posts.map((p) => {
      if (p.id !== postId) return p;
      return {
        ...p,
        comments: [
          ...p.comments,
          { id: `c-${Date.now()}`, user: 'Bạn đọc Văn HọcVerse', text },
        ],
      };
    });
    savePosts(next);
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
  };

  const filteredPosts =
    selectedTopic === 'Tất cả'
      ? posts
      : posts.filter((p) => p.topic === selectedTopic);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#b490ff]/35 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-[#f5d076]">
            <Users className="w-3.5 h-3.5" /> Cộng đồng Yêu văn · Diễn đàn Học thuật
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Không gian Chia sẻ & Thảo luận Văn chương
          </h1>
          <p className="text-sm text-[#d4c6f0]">
            Nơi những tâm hồn đồng điệu cùng sẻ chia bài cảm nhận, góc nhìn phản biện, trích dẫn tâm đắc và kinh nghiệm làm văn nghị luận.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 4 Cols: Create Post Form */}
        <form
          onSubmit={handleCreatePost}
          className="lg:col-span-4 verse-glass rounded-3xl p-6 space-y-4 sticky top-24"
        >
          <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
            <Feather className="w-5 h-5 text-[#f5d076]" /> Đăng bài cảm nhận mới
          </h3>

          <div className="space-y-1">
            <label className="text-xs text-[#c7b6e8]">Chuyên mục thảo luận</label>
            <select
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#12092b] border border-white/20 text-xs text-white"
            >
              <option value="Cảm nhận tác phẩm">Cảm nhận tác phẩm</option>
              <option value="Góc thơ & Trích dẫn">Góc thơ & Trích dẫn</option>
              <option value="Bàn luận Nghị luận">Bàn luận Nghị luận</option>
              <option value="Văn học Thế giới">Văn học Thế giới</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-[#c7b6e8]">Tác phẩm liên quan</label>
            <select
              value={newWorkTitle}
              onChange={(e) => setNewWorkTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#12092b] border border-white/20 text-xs text-white"
            >
              {Object.values(WORKS).map((w) => (
                <option key={w.slug} value={`${w.title} – ${w.authorName}`}>
                  {w.title} – {w.authorName}
                </option>
              ))}
              <option value="Văn học Thế giới">Tác phẩm Văn học Thế giới</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-[#c7b6e8]">Tiêu đề bài viết</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Nhập tiêu đề góc nhìn của bạn..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b051c] border border-white/20 text-xs text-white placeholder-[#8e7ab5]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-[#c7b6e8]">Nội dung chia sẻ</label>
            <textarea
              rows={4}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Chia sẻ cảm nhận, phân tích hoặc câu trích dẫn bạn yêu thích..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b051c] border border-white/20 text-xs text-white placeholder-[#8e7ab5]"
            />
          </div>

          <button
            type="submit"
            className="w-full verse-btn-primary py-3 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Chia sẻ lên Cộng đồng</span>
          </button>
        </form>

        {/* Right 8 Cols: Posts Feed */}
        <div className="lg:col-span-8 space-y-6">
          {/* Topic Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              'Tất cả',
              'Cảm nhận tác phẩm',
              'Góc thơ & Trích dẫn',
              'Bàn luận Nghị luận',
              'Văn học Thế giới',
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedTopic === topic
                    ? 'bg-gradient-to-r from-[#9b72ff] to-[#6366f1] text-white'
                    : 'verse-glass text-[#d4c6f0] hover:text-white'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Posts List */}
          <div className="space-y-5">
            {filteredPosts.map((post) => (
              <article key={post.id} className="verse-glass rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center text-white font-bold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{post.author}</div>
                      <div className="text-[11px] text-[#b5a4d9]">
                        {post.role} · {post.createdAt}
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-500/20 text-[#f5d076] border border-purple-400/30">
                    {post.workTitle}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white">{post.title}</h3>
                  <p className="text-xs sm:text-sm text-[#ece3ff] leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-6 text-xs">
                  <button
                    onClick={() => handleToggleLike(post.id)}
                    className={`flex items-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                      post.liked ? 'text-pink-400' : 'text-[#c7b6e8] hover:text-pink-400'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                    <span>{post.likes} Yêu thích</span>
                  </button>
                  <span className="flex items-center gap-1.5 text-[#c7b6e8]">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments.length} Thảo luận</span>
                  </span>
                </div>

                {/* Comments */}
                {post.comments.length > 0 && (
                  <div className="space-y-2 pl-4 border-l-2 border-purple-500/40">
                    {post.comments.map((c) => (
                      <div key={c.id} className="text-xs text-[#e2d6ff]">
                        <strong className="text-[#f5d076]">{c.user}:</strong> {c.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Comment */}
                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={commentInputs[post.id] || ''}
                    onChange={(e) =>
                      setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                    }
                    placeholder="Viết bình luận phản hồi..."
                    className="flex-1 px-3.5 py-2 rounded-xl bg-[#0b051c]/80 border border-white/15 text-xs text-white placeholder-[#8e7ab5]"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddComment(post.id)}
                    className="px-4 py-2 rounded-xl bg-purple-600/40 hover:bg-purple-600/70 border border-purple-400/40 text-xs font-semibold text-white"
                  >
                    Gửi
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========================================================================== */
/* 5. TRANG HỒ SƠ CÁ NHÂN (PERSONAL PROFILE VIEW)                             */
/* ========================================================================== */

export const ProfileView: React.FC<{
  bookmarkedSlugs: string[];
  masteredSlugs: string[];
  personalNotes: Record<string, string>;
  onSelectWork: (slug: string) => void;
  onToggleBookmark: (slug: string) => void;
  onSavePersonalNote: (slug: string, note: string) => void;
  onNavigate: (view: string, param?: string) => void;
}> = ({
  bookmarkedSlugs,
  masteredSlugs,
  personalNotes,
  onSelectWork,
  onToggleBookmark,
  onSavePersonalNote,
  onNavigate,
}) => {
  const [userName, setUserName] = useState<string>(() => {
    try {
      return localStorage.getItem('vanhocverse_username') || 'Nhà Du Hành Văn Chương';
    } catch {
      return 'Nhà Du Hành Văn Chương';
    }
  });
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  const handleSaveName = () => {
    setIsEditingName(false);
    try {
      localStorage.setItem('vanhocverse_username', userName);
    } catch {
      // ignore
    }
  };

  const bookmarkedWorks = bookmarkedSlugs
    .map((slug) => WORKS[slug])
    .filter(Boolean);

  const notesEntries = Object.entries(personalNotes).filter(
    ([, text]) => text && text.trim().length > 0
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Astronaut Literary Profile Header */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#b490ff]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#b490ff] via-[#8b5cf6] to-[#4f46e5] flex items-center justify-center text-white shadow-[0_0_30px_rgba(168,139,235,0.6)] border-2 border-white/40 shrink-0">
            <User className="w-10 h-10" />
          </div>
          <div className="space-y-1.5">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-[#f5d076] border border-[#f5d076]/40">
              ✦ Hồ sơ Cá nhân VĂN HỌCVERSE
            </span>
            {isEditingName ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-[#0b051c] border border-[#b490ff] text-base font-bold text-white"
                />
                <button
                  onClick={handleSaveName}
                  className="px-3 py-1.5 rounded-xl bg-[#9b72ff] text-xs font-semibold text-white"
                >
                  Lưu
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                  {userName}
                </h1>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-xs text-[#d8b4fe] hover:underline"
                >
                  Đổi tên
                </button>
              </div>
            )}
            <p className="text-xs sm:text-sm text-[#c7b6e8]">
              Theo dõi tiến độ đọc hiểu, quản lý Tủ sách đã lưu và sổ tay ghi chú học thuật của riêng bạn.
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/15 text-center">
            <div className="text-2xl font-bold text-[#f5d076] tabular-nums">
              {bookmarkedWorks.length}
            </div>
            <div className="text-[11px] text-[#c7b6e8]">Tác phẩm đã lưu</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/15 text-center">
            <div className="text-2xl font-bold text-[#d8b4fe] tabular-nums">
              {masteredSlugs.length}
            </div>
            <div className="text-[11px] text-[#c7b6e8]">Thẻ nhớ đã thuộc</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/15 text-center">
            <div className="text-2xl font-bold text-[#93c5fd] tabular-nums">
              {notesEntries.length}
            </div>
            <div className="text-[11px] text-[#c7b6e8]">Sổ tay ghi chú</div>
          </div>
        </div>
      </div>

      {/* Bookmarked Works Section */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#f5d076]" /> Tủ sách Cá nhân đã lưu ({bookmarkedWorks.length})
          </h2>
          <button
            onClick={() => onNavigate('library')}
            className="text-xs font-semibold text-[#d8b4fe] hover:underline flex items-center gap-1"
          >
            <span>Khám phá thêm tác phẩm</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {bookmarkedWorks.length === 0 ? (
          <div className="verse-glass rounded-2xl p-10 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-[#b490ff] mx-auto" />
            <p className="text-sm text-[#d4c6f0]">
              Bạn chưa lưu tác phẩm nào vào Tủ sách cá nhân.
            </p>
            <button
              onClick={() => onNavigate('library')}
              className="verse-btn-primary px-5 py-2.5 rounded-full text-xs font-semibold text-white"
            >
              Đi tới Thư viện Tác phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedWorks.map((work) => (
              <div
                key={work.slug}
                className="verse-glass verse-glass-hover rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div
                  onClick={() => onSelectWork(work.slug)}
                  className="relative h-44 cursor-pointer"
                >
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-transparent to-transparent" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(work.slug);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#f5d076] text-[#090514]"
                    title="Bỏ lưu"
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-xs text-[#f5d076] font-semibold">
                    {work.authorName} · Lớp {work.grade}
                  </div>
                  <h3
                    onClick={() => onSelectWork(work.slug)}
                    className="font-serif text-xl font-bold text-white hover:text-[#d8b4fe] cursor-pointer"
                  >
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#c7b6e8] line-clamp-2">{work.hookIntro}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Personal Notes Manager */}
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#d8b4fe]" /> Sổ tay Ghi chú Học thuật ({notesEntries.length})
        </h2>
        {notesEntries.length === 0 ? (
          <div className="verse-glass rounded-2xl p-8 text-center text-xs text-[#c7b6e8]">
            Khi đọc bất kỳ tác phẩm nào, bạn có thể viết ghi chú cá nhân ở cuối trang chi tiết tác phẩm — mọi ghi chú sẽ tự động đồng bộ tại đây.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notesEntries.map(([slug, note]) => {
              const w = WORKS[slug];
              return (
                <div key={slug} className="verse-glass rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onSelectWork(slug)}
                      className="font-serif text-lg font-bold text-[#f5d076] hover:underline"
                    >
                      {w ? w.title : slug}
                    </button>
                    <button
                      onClick={() => onSavePersonalNote(slug, '')}
                      className="text-xs text-red-400 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Xóa
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#ece3ff] whitespace-pre-line">{note}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
