import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  ChevronRight,
  BookOpen,
  Brain,
  Gamepad2,
  Clock,
  Users,
  Sparkles,
  Bookmark,
  X,
  Feather,
  Compass,
} from 'lucide-react';
import { WORKS } from '../data/works';
import { AUTHORS } from '../data/authors';
import { HERO_BOOK_IMAGE, CATEGORY_IMAGES } from '../assets/workImages';

interface HomeViewProps {
  onSelectWork: (slug: string) => void;
  onSelectGrade: (grade?: string) => void;
  onSelectAuthor: (id: string) => void;
  onOpenSearch: () => void;
  onNavigate: (view: string, param?: string) => void;
  bookmarkedSlugs: string[];
  onToggleBookmark: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectWork,
  onSelectAuthor,
  onNavigate,
  bookmarkedSlugs,
  onToggleBookmark,
}) => {
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<string>('all');
  const [isIntroModalOpen, setIsIntroModalOpen] = useState<boolean>(false);
  const [activeBookPage, setActiveBookPage] = useState<number>(0);

  const allWorks = Object.values(WORKS);
  const displayedWorks =
    selectedGradeFilter === 'all'
      ? allWorks
      : selectedGradeFilter === 'bookmarks'
      ? allWorks.filter((w) => bookmarkedSlugs.includes(w.slug))
      : allWorks.filter((w) => w.grade.toString() === selectedGradeFilter);

  const featureCards = [
    {
      id: 'interactive-works',
      title: 'Tác phẩm tương tác',
      subtitle: 'Đọc, nghe, xem đa phương tiện',
      icon: BookOpen,
      iconGradient: 'from-[#a855f7] to-[#6366f1]',
      onClick: () => onNavigate('library'),
    },
    {
      id: 'ai-analysis',
      title: 'AI phân tích',
      subtitle: 'Hiểu sâu hơn, học dễ hơn',
      icon: Brain,
      iconGradient: 'from-[#c084fc] to-[#7c3aed]',
      onClick: () => onNavigate('ai-analysis'),
    },
    {
      id: 'literary-quiz',
      title: 'Đấu trí văn học',
      subtitle: 'Thử thách bản thân',
      icon: Gamepad2,
      iconGradient: 'from-[#818cf8] to-[#4f46e5]',
      onClick: () => onNavigate('quiz'),
    },
    {
      id: 'timeline',
      title: 'Dòng thời gian',
      subtitle: 'Khám phá lịch sử văn học',
      icon: Clock,
      iconGradient: 'from-[#a78bfa] to-[#5b21b6]',
      onClick: () => onNavigate('timeline'),
    },
    {
      id: 'community',
      title: 'Cộng đồng yêu văn',
      subtitle: 'Chia sẻ, thảo luận, kết nối',
      icon: Users,
      iconGradient: 'from-[#d8b4fe] to-[#6d28d9]',
      onClick: () => onNavigate('community'),
    },
  ];

  const worldCategories = [
    {
      id: 'vietnam',
      title: 'Văn học\nViệt Nam',
      subtitle: 'Từ hào khí Đông A đến văn học Đổi mới',
      image: CATEGORY_IMAGES.vietnam,
      onClick: () => onNavigate('explore', 'vietnam'),
    },
    {
      id: 'poetry',
      title: 'Thơ ca',
      subtitle: 'Nhịp điệu tâm hồn & thi pháp trữ tình',
      image: CATEGORY_IMAGES.poetry,
      onClick: () => onNavigate('explore', 'poetry'),
    },
    {
      id: 'shortStory',
      title: 'Truyện ngắn',
      subtitle: 'Lát cắt hiện thực & số phận con người',
      image: CATEGORY_IMAGES.shortStory,
      onClick: () => onNavigate('explore', 'shortStory'),
    },
    {
      id: 'world',
      title: 'Văn học\nThế giới',
      subtitle: 'Tinh hoa nhân loại vượt thời gian',
      image: CATEGORY_IMAGES.world,
      onClick: () => onNavigate('explore', 'world'),
    },
  ];

  const introBookPages = [
    {
      chapter: 'Chương I · Khởi nguyên Vũ trụ',
      title: 'Chào mừng đến với VĂN HỌCVERSE',
      content:
        'VĂN HỌCVERSE là vũ trụ văn học số kết hợp giữa vẻ đẹp nghệ thuật cổ điển và công nghệ tương lai. Tại đây, mỗi trang sách mở ra một thế giới sống động, nơi bạn không chỉ đọc mà còn cảm nhận, tương tác và đối thoại cùng những kiệt tác văn chương.',
      highlight: '11+ Kiệt tác phân tích chuyên sâu · 12 Đại thi hào & Tác gia · 4 Thế giới văn chương',
      actionLabel: 'Khám phá Kho Tác phẩm',
      actionView: 'library',
    },
    {
      chapter: 'Chương II · Trí tuệ & Đấu trí',
      title: 'AI Phân tích Đa chiều & Đấu trường Văn học',
      content:
        'Trải nghiệm hệ thống AI Phân tích 3 tầng nhận thức (Cơ bản – Nâng cao – Chuyên sâu), tự động lập dàn ý nghị luận văn học và thử sức tại Đấu trường Trắc nghiệm & Thẻ nhớ 60 giây.',
      highlight: 'Giải mã thi pháp học · Lập dàn ý tự động · Chinh phục chuỗi thắng (Streak)',
      actionLabel: 'Trải nghiệm AI Phân tích',
      actionView: 'ai-analysis',
    },
    {
      chapter: 'Chương III · Dòng chảy & Kết nối',
      title: 'Dòng thời gian Lịch sử & Cộng đồng Yêu văn',
      content:
        'Du hành xuyên suốt 10 thế kỷ văn học qua Dòng thời gian tương tác và sẻ chia cảm nhận, trích dẫn tâm đắc cùng Cộng đồng người yêu văn chương khắp mọi miền.',
      highlight: 'Dòng thời gian từ thế kỷ X đến Đổi mới · Diễn đàn thảo luận & Tủ sách cá nhân',
      actionLabel: 'Tham gia Cộng đồng',
      actionView: 'community',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Ambient Cosmic Glow Blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 right-10 w-[620px] h-[520px] rounded-full bg-indigo-600/20 blur-[150px]" />

      {/* ========================================================= */}
      {/* 1. HERO SECTION + 5 FEATURE CARDS + 4 WORLD CARDS         */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 space-y-8">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Badge, VĂN HỌCVERSE with Orbital Ring, Slogan, Buttons */}
          <div className="lg:col-span-5 space-y-6 relative z-10 pt-2">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(180,144,255,0.2)]">
              <svg className="w-4 h-4 text-[#f5d076] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-[#ede4ff] tracking-wide">
                Khám phá – Học hỏi – Trải nghiệm
              </span>
            </div>

            {/* Giant Title VĂN HỌCVERSE with Orbital Swoosh around VERSE */}
            <div className="relative inline-block py-2">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-[64px] font-bold tracking-wider leading-none flex items-center flex-wrap">
                <span className="text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.3)]">
                  VĂN HỌC
                </span>
                <span className="relative inline-block ml-1">
                  <span className="bg-gradient-to-r from-[#d8b4fe] via-[#b490ff] to-[#93c5fd] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(180,144,255,0.65)]">
                    VERSE
                  </span>
                  {/* Cosmic Orbital Ring + 4-Point Star matching reference image */}
                  <svg
                    viewBox="0 0 320 130"
                    className="pointer-events-none absolute -inset-x-6 -inset-y-5 w-[124%] h-[145%] overflow-visible"
                    fill="none"
                  >
                    <path
                      d="M 25 88 C 65 128, 255 102, 295 42 C 312 16, 235 -4, 130 22"
                      stroke="url(#orbitRingGrad)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_10px_rgba(192,132,252,0.9)]"
                    />
                    {/* 4-Point Star on top-right of orbital swoosh */}
                    <path
                      d="M286 10 L290 22 L302 26 L290 30 L286 42 L282 30 L270 26 L282 22 Z"
                      fill="#e9d5ff"
                      className="drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                    />
                    <defs>
                      <linearGradient id="orbitRingGrad" x1="25" y1="88" x2="300" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
                        <stop offset="45%" stopColor="#c084fc" />
                        <stop offset="85%" stopColor="#e9d5ff" />
                        <stop offset="100%" stopColor="#93c5fd" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </div>

            {/* Slogan in Italic Serif */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#ece3ff] leading-relaxed max-w-lg drop-shadow">
              Bước vào vũ trụ văn học,
              <br />
              khám phá những câu chuyện bất tận...
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('library')}
                className="verse-btn-primary px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base flex items-center gap-3 cursor-pointer"
              >
                <span>Bắt đầu khám phá</span>
                <span className="w-6 h-6 rounded-full bg-[#3b2170]/70 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              <button
                onClick={() => setIsIntroModalOpen(true)}
                className="group flex items-center gap-3 px-3 py-2 rounded-full text-sm sm:text-base font-medium text-[#e2d6ff] hover:text-white transition-all cursor-pointer"
              >
                <span className="w-12 h-12 rounded-full bg-white/[0.08] group-hover:bg-purple-500/30 border border-[#b490ff]/50 group-hover:border-[#e9d5ff] flex items-center justify-center shadow-[0_0_20px_rgba(168,139,235,0.35)] group-hover:scale-105 transition-all">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </span>
                <span>Xem giới thiệu</span>
              </button>
            </div>
          </div>

          {/* Right Column: Colossal Open Book Floating in Cosmic Space */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden animate-float-slow">
              {/* Soft vignette blend so book integrates seamlessly with galaxy background */}
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={HERO_BOOK_IMAGE}
                  alt="VĂN HỌCVERSE – Cuốn sách vũ trụ văn học"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover rounded-3xl shadow-[0_0_70px_rgba(139,92,246,0.4)] border border-white/15"
                />
                {/* Radial edge blending overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 bg-gradient-to-tr from-[#090514]/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090514] to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. FIVE FEATURE CARDS ROW (EXACT REFERENCE DESIGN)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 relative z-20">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={card.onClick}
                className="verse-glass verse-glass-hover rounded-2xl p-4 flex items-center justify-between gap-3 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.iconGradient} flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(168,139,235,0.45)] border border-white/25 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white drop-shadow" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-white group-hover:text-[#f5d076] transition-colors truncate">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-[#c7b6e8] line-clamp-2 leading-snug mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#b5a4d9] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. KHÁM PHÁ THẾ GIỚI VĂN HỌC + PARCHMENT QUOTE CARD       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4">
          {/* Left 8 Columns: Section Title + 4 Illustrated World Cards */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* 4-point Golden/Purple Star Icon */}
                <svg className="w-7 h-7 text-[#f5d076] drop-shadow-[0_0_10px_rgba(245,208,118,0.8)] shrink-0" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2L19.2 12.8L30 16L19.2 19.2L16 30L12.8 19.2L2 16L12.8 12.8L16 2Z"
                    fill="url(#sectionStar)"
                  />
                  <defs>
                    <linearGradient id="sectionStar" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fde68a" />
                      <stop offset="0.6" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Khám phá thế giới{' '}
                  <span className="italic font-serif bg-gradient-to-r from-[#d8b4fe] to-[#a78bfa] bg-clip-text text-transparent">
                    văn học
                  </span>
                </h2>
              </div>

              <button
                onClick={() => onNavigate('explore')}
                className="text-xs sm:text-sm font-medium text-[#d8b4fe] hover:text-white flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
              >
                <span>Xem tất cả</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Large Illustrated Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {worldCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={cat.onClick}
                  className="group relative h-52 sm:h-56 rounded-2xl overflow-hidden border border-white/20 hover:border-[#d8b4fe] shadow-[0_12px_30px_rgba(5,2,15,0.75)] cursor-pointer transition-all hover:-translate-y-1.5"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090416]/90 via-[#090416]/30 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white whitespace-pre-line leading-tight drop-shadow">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-black/45 group-hover:bg-[#9b72ff] border border-white/40 flex items-center justify-center text-white transition-all shrink-0">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 4 Columns: Torn Parchment Quote Card with Fountain Pen & Cosmos Flowers */}
          <div className="lg:col-span-4 relative pt-2 lg:pt-0">
            <div
              onClick={() => onNavigate('authors')}
              title="Khám phá tư tưởng & quan niệm văn chương của các Đại thi hào"
              className="parchment-quote-card relative rounded-2xl p-6 sm:p-7 -rotate-1 hover:rotate-0 transition-all duration-300 cursor-pointer border border-[#c9ab81]"
            >
              {/* Decorative torn paper edge top/bottom illusion */}
              <div className="text-4xl font-serif font-bold text-[#7c5c38]/60 leading-none select-none">
                “
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-[#2c1e14] leading-relaxed -mt-2 pr-6">
                Văn học là tấm gương phản chiếu cuộc sống, là nhịp cầu nối những tâm hồn qua thời gian.
              </blockquote>
              <div className="mt-3 text-right font-serif italic text-xs sm:text-sm font-semibold text-[#5a3e28] pr-8">
                — Nguyễn Đình Thi
              </div>

              {/* Golden Fountain Pen Nib SVG on the right matching reference image */}
              <svg
                viewBox="0 0 80 80"
                className="w-14 h-14 absolute -bottom-2 -right-2 drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] pointer-events-none"
                fill="none"
              >
                <path
                  d="M12 68L28 32L48 52L12 68Z"
                  fill="url(#goldNib)"
                  stroke="#5c3d15"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 68L28 48"
                  stroke="#5c3d15"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="29" cy="47" r="2.5" fill="#3b250b" />
                <path
                  d="M28 32L58 4L76 22L48 52L28 32Z"
                  fill="#1a1228"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient id="goldNib" x1="12" y1="68" x2="48" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fef08a" />
                    <stop offset="0.5" stopColor="#eab308" />
                    <stop offset="1" stopColor="#a16207" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Decorative Purple Cosmos Blossom SVG on bottom-left */}
              <svg
                viewBox="0 0 64 64"
                className="w-12 h-12 absolute -bottom-4 -left-4 drop-shadow-[0_4px_12px_rgba(139,92,246,0.6)] pointer-events-none"
                fill="none"
              >
                <circle cx="32" cy="20" r="9" fill="#c084fc" opacity="0.9" />
                <circle cx="44" cy="28" r="9" fill="#a855f7" opacity="0.9" />
                <circle cx="40" cy="42" r="9" fill="#9333ea" opacity="0.9" />
                <circle cx="24" cy="42" r="9" fill="#a855f7" opacity="0.9" />
                <circle cx="20" cy="28" r="9" fill="#d8b4fe" opacity="0.9" />
                <circle cx="32" cy="32" r="5" fill="#fbbf24" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. MASTERPIECE ARCHIVE IN VĂN HỌCVERSE (ALL 11 WORKS)     */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-white/10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f5d076]">
              <Sparkles className="w-3.5 h-3.5" /> Tinh hoa Kiệt tác Văn chương
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Thư viện Kiệt tác Tương tác (Lớp 10 · 11 · 12)
            </h2>
            <p className="text-sm text-[#c7b6e8] max-w-2xl">
              Mỗi tác phẩm được minh họa bằng tranh nghệ thuật độc bản, đi kèm giải mã thi pháp 3 tầng nhận thức, sơ đồ nhân vật, điểm chạm thơ và trợ lý lập dàn ý nghị luận.
            </p>
          </div>

          {/* Grade Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `Tất cả (${allWorks.length})` },
              { id: '10', label: 'Lớp 10' },
              { id: '11', label: 'Lớp 11' },
              { id: '12', label: 'Lớp 12' },
              { id: 'bookmarks', label: `Tủ sách (${bookmarkedSlugs.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGradeFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedGradeFilter === tab.id
                    ? 'bg-gradient-to-r from-[#9b72ff] to-[#6366f1] text-white shadow-[0_0_18px_rgba(155,114,255,0.5)]'
                    : 'verse-glass text-[#d4c6f0] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedWorks.map((work) => {
            const isBookmarked = bookmarkedSlugs.includes(work.slug);
            return (
              <article
                key={work.slug}
                className="verse-glass verse-glass-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div
                  onClick={() => onSelectWork(work.slug)}
                  className="relative h-48 overflow-hidden cursor-pointer"
                >
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b061a] via-[#0b061a]/25 to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#12092b]/80 backdrop-blur-md text-[#e9d5ff] border border-white/15">
                    Lớp {work.grade} · {work.genre}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(work.slug);
                    }}
                    title={isBookmarked ? 'Bỏ lưu khỏi Tủ sách' : 'Lưu vào Tủ sách'}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all ${
                      isBookmarked
                        ? 'bg-[#f5d076] text-[#090514] border-[#f5d076] shadow-[0_0_12px_rgba(245,208,118,0.7)]'
                        : 'bg-black/50 text-white border-white/20 hover:border-[#f5d076]'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#c7b6e8]">
                      <button
                        onClick={() => onSelectAuthor(work.authorId)}
                        className="text-[#f5d076] hover:underline font-medium"
                      >
                        {work.authorName}
                      </button>
                      <span className="tabular-nums text-[11px] opacity-80">{work.year}</span>
                    </div>

                    <h3
                      onClick={() => onSelectWork(work.slug)}
                      className="font-serif text-xl font-bold text-white group-hover:text-[#d8b4fe] transition-colors cursor-pointer"
                    >
                      {work.title}
                    </h3>

                    <p className="text-xs text-[#b5a4d9] line-clamp-2 leading-relaxed">
                      {work.hookIntro}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('ai-analysis', work.slug)}
                      className="text-xs text-[#d8b4fe] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Brain className="w-3.5 h-3.5" /> AI Phân tích
                    </button>
                    <button
                      onClick={() => onSelectWork(work.slug)}
                      className="text-xs font-semibold text-[#f5d076] hover:underline flex items-center gap-1"
                    >
                      Khám phá <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CHÂN DUNG ĐẠI THI HÀO & TÁC GIA TIÊU BIỂU               */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#d8b4fe]">
              Những vì sao sáng trên bầu trời văn học
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Đại thi hào & Tác gia Văn học Việt Nam
            </h2>
          </div>
          <button
            onClick={() => onNavigate('authors')}
            className="text-xs sm:text-sm font-medium text-[#f5d076] hover:underline flex items-center gap-1.5"
          >
            <span>Xem toàn bộ 12 Tác gia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(AUTHORS)
            .slice(0, 4)
            .map((author) => (
              <div
                key={author.id}
                onClick={() => onSelectAuthor(author.id)}
                className="verse-glass verse-glass-hover rounded-2xl p-5 space-y-3 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-[#d8b4fe] border border-purple-400/30">
                    {author.era}
                  </span>
                  <Feather className="w-4 h-4 text-[#f5d076]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f5d076] transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-[11px] text-[#b5a4d9] tabular-nums">{author.birthDeath}</p>
                </div>
                <p className="text-xs text-[#d4c6f0] line-clamp-2 italic font-serif">
                  “{author.quote}”
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. THÔNG TIN SẢN PHẨM HỌC TẬP SỐ – MÔN NGỮ VĂN           */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="verse-glass rounded-3xl p-6 sm:p-8 border border-[#f5d076]/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-[#f5d076]/40 text-xs font-bold uppercase tracking-wider text-[#f5d076]">
              <Sparkles className="w-3.5 h-3.5" /> Sản phẩm Học tập Số · Môn Ngữ văn
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Môn Ngữ văn · VĂN HỌCVERSE
            </h3>
            <p className="text-xs sm:text-sm text-[#d4c6f0]">
              Giáo viên: <strong className="text-[#f5d076]">Võ Thị Mỹ Ngà</strong>
            </p>
          </div>

          <div className="flex flex-col lg:items-end gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]">
              Thông tin liên hệ
            </span>
            <div className="flex flex-wrap lg:justify-end items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-xs sm:text-sm font-semibold text-white">
                Bùi Trung Kiên
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-xs sm:text-sm font-semibold text-white">
                Đỗ Ngọc Long
              </span>
            </div>
            <div className="text-xs sm:text-sm text-[#ece3ff] lg:text-right space-y-1 pt-0.5">
              <p>
                Học sinh lớp: <strong className="text-[#f5d076]">12A03</strong> · Khóa:{' '}
                <strong className="text-white">2024–2027</strong> ·{' '}
                <strong className="text-white">Trường THPT Yên Lãng</strong>
              </p>
              <p className="text-xs text-[#c7b6e8]">
                Năm học: <strong className="text-white">2026–2027</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE OPENING BOOK MODAL ("XEM GIỚI THIỆU")         */}
      {/* ========================================================= */}
      {isIntroModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setIsIntroModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl verse-glass border border-[#d8b4fe]/40 p-6 sm:p-10 shadow-[0_0_80px_rgba(139,92,246,0.5)] space-y-6"
          >
            <button
              onClick={() => setIsIntroModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Đóng giới thiệu"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center shadow">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#f5d076]">
                  {introBookPages[activeBookPage].chapter}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {introBookPages[activeBookPage].title}
                </h3>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b051c]/80 border border-white/15 space-y-4">
              <p className="text-sm sm:text-base text-[#ece3ff] leading-relaxed">
                {introBookPages[activeBookPage].content}
              </p>
              <div className="p-3.5 rounded-xl bg-purple-500/15 border border-purple-400/30 text-xs sm:text-sm text-[#f5d076] font-medium flex items-center gap-2">
                <Compass className="w-4 h-4 shrink-0" />
                <span>{introBookPages[activeBookPage].highlight}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                {introBookPages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBookPage(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeBookPage === idx
                        ? 'bg-[#b490ff] text-[#090514]'
                        : 'bg-white/10 text-[#d4c6f0] hover:bg-white/20'
                    }`}
                  >
                    Trang {idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  const target = introBookPages[activeBookPage].actionView;
                  setIsIntroModalOpen(false);
                  onNavigate(target);
                }}
                className="verse-btn-primary px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white flex items-center gap-2"
              >
                <span>{introBookPages[activeBookPage].actionLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
