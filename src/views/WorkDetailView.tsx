import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  ChevronRight,
  Bookmark,
  Share2,
  Check,
  Zap,
  Sparkles,
  Eye,
  ArrowRight,
  FileText,
  Scale,
  PenTool,
  Type,
} from 'lucide-react';
import { Work, AnalysisLevel } from '../types/literature';
import { AUTHORS } from '../data/authors';
import { WORKS } from '../data/works';

interface WorkDetailViewProps {
  work: Work;
  onSelectAuthor: (id: string) => void;
  onSelectWork: (slug: string) => void;
  onBackToLibrary: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
  personalNote: string;
  onSavePersonalNote: (slug: string, note: string) => void;
  onOpenOutliner: (slug: string) => void;
  onOpenCompare: (slug: string) => void;
}

export const WorkDetailView: React.FC<WorkDetailViewProps> = ({
  work,
  onSelectAuthor,
  onSelectWork,
  onBackToLibrary,
  isBookmarked,
  onToggleBookmark,
  personalNote,
  onSavePersonalNote,
  onOpenOutliner,
  onOpenCompare,
}) => {
  const [analysisLevel, setAnalysisLevel] = useState<AnalysisLevel>('detailed');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [activeSection, setActiveSection] = useState<string>('sec-intro');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<{
    phrase: string;
    note: string;
    technique: string;
  } | null>(null);
  const [expandedDetailId, setExpandedDetailId] = useState<string | null>(
    work.keyArtisticDetails[0]?.id || null
  );
  const [isArtworkOpen, setIsArtworkOpen] = useState<boolean>(false);

  useEffect(() => {
    setExpandedDetailId(work.keyArtisticDetails[0]?.id || null);
  }, [work.slug, work.keyArtisticDetails]);

  const author = AUTHORS[work.authorId];

  const tocSections = [
    { id: 'sec-intro', label: '01. Giới thiệu & Xuất xứ' },
    { id: 'sec-author', label: '02. Tác giả & Quan niệm' },
    { id: 'sec-context', label: '03. Hoàn cảnh sáng tác' },
    { id: 'sec-layout', label: '04. Bố cục & Mạch tác phẩm' },
    { id: 'sec-main-idea', label: '05. Nội dung tư tưởng' },
    { id: 'sec-analysis', label: '06. Phân tích (3 Mức độ)' },
    work.genre === 'Thơ'
      ? { id: 'sec-genre-specific', label: '07. Phân tích từng khổ thơ' }
      : work.genre === 'Kịch'
      ? { id: 'sec-genre-specific', label: '07. Xung đột kịch & Cảnh diễn' }
      : work.genre === 'Văn chính luận'
      ? { id: 'sec-genre-specific', label: '07. Hệ thống Luận điểm' }
      : { id: 'sec-genre-specific', label: '07. Hệ thống nhân vật' },
    { id: 'sec-art', label: '08. Đặc sắc nghệ thuật' },
    { id: 'sec-details', label: '09. Chi tiết nghệ thuật đắt giá' },
    { id: 'sec-values', label: '10. Giá trị tác phẩm' },
    { id: 'sec-60s', label: '11. Tác phẩm trong 60 giây' },
    { id: 'sec-notes', label: '12. Sổ tay ghi chú cá nhân' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = tocSections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(tocSections[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -84;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyQuick60s = () => {
    const text = [
      `TỔNG KẾT 60 GIÂY: ${work.title.toUpperCase()} (${work.authorName})`,
      `- Thể loại: ${work.quick60s.genre} (Lớp ${work.grade})`,
      `- Hoàn cảnh: ${work.quick60s.context}`,
      `- Chủ đề: ${work.quick60s.theme}`,
      `- Hình tượng trung tâm: ${work.quick60s.coreFigureOrCharacter}`,
      `- Tư tưởng cốt lõi: ${work.quick60s.mainIdea}`,
      `- Đặc sắc nghệ thuật: ${work.quick60s.keyArt}`,
      `- Từ khóa vàng: ${work.quick60s.goldenKeywords.join(', ')}`,
      `- Thông điệp: "${work.quick60s.takeaway}"`,
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const relatedWorks = Object.values(WORKS).filter(
    (w) => w.slug !== work.slug && (w.grade === work.grade || w.genre === work.genre)
  );

  const proseSizeClass =
    fontSize === 'large'
      ? 'text-base sm:text-lg leading-relaxed'
      : fontSize === 'xlarge'
      ? 'text-lg sm:text-xl leading-loose'
      : 'text-sm sm:text-base leading-relaxed';

  return (
    <div className="pb-24">
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[450px] lg:min-h-[500px] flex items-end border-b border-stone-200 dark:border-[#24212e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={work.bannerImage || work.coverImage}
            alt={work.title}
            className="w-full h-full object-cover object-center filter brightness-45 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/90 via-[#0c0c0e]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-5">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#a9a49c]">
            <button onClick={onBackToLibrary} className="hover:text-[#c5a059] transition-colors">
              Thư viện
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#635f58]" />
            <span className="text-[#a9a49c]">Khối Lớp {work.grade}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#635f58]" />
            <span className="text-[#d8b26e] font-medium">{work.title}</span>
          </nav>

          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 text-xs tabular-nums">
              <span className="font-serif font-bold text-[#c5a059] tracking-wider uppercase">
                {work.genre} · Lớp {work.grade}
              </span>
              <span aria-hidden="true" className="text-[#78746c]">
                ·
              </span>
              <span className="text-[#b5afa4]">{work.year}</span>
              <span aria-hidden="true" className="text-[#78746c]">
                ·
              </span>
              <span className="text-[#b5afa4]">{work.textbook}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4efe6] leading-tight text-balance">
              {work.title}
            </h1>

            <div className="flex items-center gap-2 text-sm sm:text-base text-[#d5cbba]">
              <span>Tác giả:</span>
              <button
                onClick={() => onSelectAuthor(work.authorId)}
                className="font-serif font-bold text-[#c5a059] hover:underline hover:text-[#e5c278] transition-colors"
              >
                {work.authorName}
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#d5cbba] leading-relaxed italic pt-1">
              "{work.hookIntro}"
            </p>
          </div>

          {/* Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => scrollToSection('sec-analysis')}
              className="px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d8b26e] text-[#0c0c0e] font-semibold text-xs tracking-wide transition-all shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4" /> Đọc phân tích chuyên sâu
            </button>
            <button
              onClick={() => onOpenOutliner(work.slug)}
              className="px-4 py-2.5 rounded-lg bg-[#191724] hover:bg-[#221f30] border border-[#342f44] text-[#e8decb] text-xs font-medium transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4 text-[#c5a059]" /> Lập dàn ý nghị luận
            </button>
            <button
              onClick={() => setIsArtworkOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-[#191724] hover:bg-[#221f30] border border-[#342f44] text-[#d5cbba] text-xs font-medium transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Eye className="w-4 h-4 text-[#c5a059]" /> Ngắm tranh AI
            </button>
            <button
              onClick={() => onToggleBookmark(work.slug)}
              className={`px-4 py-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
                isBookmarked
                  ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#f4efe6]'
                  : 'bg-[#191724] hover:bg-[#221f30] border-[#342f44] text-[#d5cbba]'
              }`}
            >
              <Bookmark className="w-4 h-4 text-[#c5a059] fill-current" />
              {isBookmarked ? 'Đã lưu Tủ sách' : 'Lưu vào Tủ sách'}
            </button>
            <button
              onClick={handleCopyLink}
              className="p-2.5 rounded-lg bg-[#191724] hover:bg-[#221f30] border border-[#342f44] text-[#a9a49c] hover:text-[#f4efe6] transition-colors shrink-0"
              title="Sao chép liên kết bài học"
            >
              {copiedLink ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN WORKSPACE LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: STICKY TABLE OF CONTENTS & READER CONTROLS */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-20 space-y-5">
            <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-[#1f1d28] text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-[#9f9a91]">
                <span>Mục lục bài học</span>
                <span className="text-[10px] text-[#8a6421] dark:text-[#c5a059]">12 Phần</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left py-1.5 px-2.5 rounded-md transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-amber-50 dark:bg-[#1e1b29] text-[#8a6421] dark:text-[#d8b26e] font-semibold'
                          : 'text-stone-600 dark:text-[#9c978e] hover:text-stone-950 dark:hover:text-[#f4efe6] hover:bg-stone-100 dark:hover:bg-[#181621]'
                      }`}
                    >
                      <span className="truncate">{sec.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Reading Depth Switcher */}
            <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-2.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-[#9f9a91]">
                Cấp độ phân tích
              </div>
              <div className="grid grid-cols-3 gap-1 p-1 bg-stone-100 dark:bg-[#181622] rounded-lg border border-stone-200 dark:border-[#2a2637]">
                {(['basic', 'detailed', 'advanced'] as AnalysisLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setAnalysisLevel(lvl)}
                    className={`py-1 text-[11px] font-medium rounded-md transition-all text-center whitespace-nowrap ${
                      analysisLevel === lvl
                        ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-bold shadow-xs'
                        : 'text-stone-600 dark:text-[#9c978e] hover:text-stone-950 dark:hover:text-[#f4efe6]'
                    }`}
                  >
                    {lvl === 'basic' ? 'Cơ bản' : lvl === 'detailed' ? 'Chi tiết' : 'Nâng cao'}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size Control */}
            <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-2.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-[#9f9a91] flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-[#8a6421] dark:text-[#c5a059]" /> Cỡ chữ đọc bài
              </div>
              <div className="grid grid-cols-3 gap-1 p-1 bg-stone-100 dark:bg-[#181622] rounded-lg border border-stone-200 dark:border-[#2a2637]">
                {[
                  { id: 'normal', label: 'Vừa' },
                  { id: 'large', label: 'Lớn' },
                  { id: 'xlarge', label: 'Rất lớn' },
                ].map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setFontSize(sz.id as 'normal' | 'large' | 'xlarge')}
                    className={`py-1 text-[11px] font-medium rounded-md transition-all text-center whitespace-nowrap ${
                      fontSize === sz.id
                        ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-bold shadow-xs'
                        : 'text-stone-600 dark:text-[#9c978e] hover:text-stone-950 dark:hover:text-[#f4efe6]'
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* CENTER COLUMN: ESSAY ANALYSIS NARRATIVE */}
          <main className="lg:col-span-6 space-y-14">
            {/* Mobile TOC Drawer Trigger */}
            <div className="lg:hidden p-3 bg-[#fdfbf7] dark:bg-[#14121b] border border-stone-200 dark:border-[#262232] rounded-lg flex items-center justify-between text-xs text-stone-600 dark:text-[#a9a49c]">
              <span>Mục lục bài học:</span>
              <select
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="bg-stone-100 dark:bg-[#1b1924] border border-stone-300 dark:border-[#2e2a3c] text-xs text-stone-900 dark:text-[#f4efe6] rounded px-2 py-1"
              >
                {tocSections.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* SECTION 01: GIỚI THIỆU & XUẤT XỨ */}
            <section id="sec-intro" className="space-y-4 pt-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                01. Tổng quan & Xuất xứ
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Giới thiệu & Xuất xứ Tác phẩm
              </h2>
              <div className={`text-stone-700 dark:text-[#cfc8ba] space-y-4 ${proseSizeClass}`}>
                <p className="drop-cap">{work.centralTheme}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#14121a] border border-stone-200 dark:border-[#23202d] text-xs">
                  <div>
                    <span className="text-stone-500 dark:text-[#8e8a84] block">
                      Xuất xứ văn bản:
                    </span>
                    <strong className="text-stone-900 dark:text-[#e8decb] font-medium">
                      {work.origin}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-500 dark:text-[#8e8a84] block">
                      Đề tài cốt lõi:
                    </span>
                    <strong className="text-stone-900 dark:text-[#e8decb] font-medium">
                      {work.topic}
                    </strong>
                  </div>
                </div>

                {/* Cinematic AI Artwork Showcase Frame */}
                <figure
                  onClick={() => setIsArtworkOpen(true)}
                  className="group relative rounded-xl overflow-hidden border border-stone-200 dark:border-[#2c2738] bg-stone-900 shadow-lg cursor-pointer my-5"
                >
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={work.coverImage}
                      alt={`Tranh minh họa nghệ thuật tác phẩm ${work.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/65 backdrop-blur-md border border-white/10 text-[11px] text-[#d8b26e] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#c5a059]" />
                      <span>Minh họa AI · Nhấn để phóng to</span>
                    </div>
                  </div>
                  <figcaption className="p-3.5 bg-[#fdfbf7] dark:bg-[#131119] border-t border-stone-200 dark:border-[#23202d] flex items-center justify-between gap-3 text-xs">
                    <span className="text-stone-600 dark:text-[#b8b1a4] italic font-serif">
                      Fig. 01 — Tranh minh họa cảm hứng chủ đạo tác phẩm "{work.title}" ({work.authorName})
                    </span>
                    <span className="text-[#8a6421] dark:text-[#c5a059] font-semibold shrink-0 group-hover:underline">
                      Xem toàn cảnh
                    </span>
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* SECTION 02: TÁC GIẢ & QUAN NIỆM SÁNG TÁC */}
            <section
              id="sec-author"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                02. Chân dung tác giả
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                {work.authorName} & Tư tưởng Thẩm mỹ
              </h2>
              <div className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#24212e] space-y-4 text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-[#c8c2b5]">
                {author ? (
                  <>
                    <div>
                      <strong className="text-stone-900 dark:text-[#f4efe6] font-serif text-sm block mb-1">
                        Phong cách sáng tác:
                      </strong>
                      <p>{author.literaryStyle}</p>
                    </div>
                    <div>
                      <strong className="text-stone-900 dark:text-[#f4efe6] font-serif text-sm block mb-1">
                        Quan niệm nghệ thuật:
                      </strong>
                      <p>{author.aestheticView}</p>
                    </div>
                    <button
                      onClick={() => onSelectAuthor(author.id)}
                      className="text-xs text-[#8a6421] dark:text-[#d8b26e] hover:underline font-semibold inline-flex items-center gap-1 pt-1"
                    >
                      Xem toàn bộ hồ sơ tác giả {author.name}{' '}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </>
                ) : (
                  <p>Thông tin tác giả đang được cập nhật.</p>
                )}
              </div>
            </section>

            {/* SECTION 03: HOÀN CẢNH SÁNG TÁC */}
            <section
              id="sec-context"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                03. Bối cảnh lịch sử
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Hoàn cảnh Sáng tác & Tác động Tư tưởng
              </h2>
              <div className={`space-y-4 text-stone-700 dark:text-[#cfc8ba] ${proseSizeClass}`}>
                <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#23202d] space-y-2">
                  <div className="text-xs font-serif font-bold text-[#8a6421] dark:text-[#c5a059]">
                    Thời điểm: {work.historicContext.timeframe}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-[#b8b1a4]">
                    {work.historicContext.historicalBackground}
                  </p>
                </div>
                <p>
                  <strong className="text-stone-900 dark:text-[#f4efe6]">
                    Hoàn cảnh cá nhân:
                  </strong>{' '}
                  {work.historicContext.personalCircumstance}
                </p>
                <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-[#16141f] border border-amber-300/60 dark:border-[#2d283e] text-xs sm:text-sm text-stone-800 dark:text-[#d5cbba] leading-relaxed">
                  <strong className="text-[#8a6421] dark:text-[#d8b26e] block mb-1">
                    Ảnh hưởng tới tư tưởng & thi pháp tác phẩm:
                  </strong>
                  {work.historicContext.impactOnWork}
                </div>
              </div>
            </section>

            {/* SECTION 04: BỐ CỤC & MẠCH TÁC PHẨM */}
            <section
              id="sec-layout"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                04. Kết cấu tác phẩm
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Bố cục & Mạch vận động Tác phẩm
              </h2>

              <div className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#14121a] border border-stone-200 dark:border-[#23202e] space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e]">
                  {work.genre === 'Thơ' ? 'Mạch cảm xúc toàn bài' : 'Tóm tắt cốt truyện'}
                </h4>
                <p className={`text-stone-700 dark:text-[#cfc8ba] ${proseSizeClass}`}>
                  {work.structureAndSummary.shortSummary}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-[#9f9a91]">
                  Phân chia bố cục học tập
                </h4>
                <div className="divide-y divide-stone-200 dark:divide-[#1e1c27] border border-stone-200 dark:border-[#221f2d] rounded-xl overflow-hidden bg-[#fdfbf7] dark:bg-[#111016]">
                  {work.structureAndSummary.layout.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex items-start gap-3 text-xs sm:text-sm">
                      <span className="font-serif font-bold text-[#8a6421] dark:text-[#c5a059] shrink-0 mt-0.5">
                        {item.part}
                      </span>
                      <span className="text-stone-700 dark:text-[#b5afa4] leading-relaxed">
                        {item.content}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 05: NỘI DUNG TƯ TƯỞNG TRỌNG TÂM */}
            <section
              id="sec-main-idea"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                05. Hệ thống tư tưởng
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Nội dung Tư tưởng Cốt lõi
              </h2>
              <div className="space-y-3">
                {work.mainContentPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#24202e] flex items-start gap-3.5 text-xs sm:text-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-stone-100 dark:bg-[#1e1b28] border border-stone-300 dark:border-[#373245] flex items-center justify-center text-[#8a6421] dark:text-[#c5a059] font-serif font-bold text-xs shrink-0 mt-0.5 tabular-nums">
                      {idx + 1}
                    </span>
                    <span className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 06: PHÂN TÍCH CHUYÊN SÂU THEO 3 MỨC ĐỘ */}
            <section
              id="sec-analysis"
              className="space-y-5 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  06. Phân tích chi tiết
                </div>
                <div className="flex items-center gap-1 p-1 bg-stone-200/80 dark:bg-[#15131e] rounded-lg border border-stone-300 dark:border-[#282335]">
                  {(['basic', 'detailed', 'advanced'] as AnalysisLevel[]).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setAnalysisLevel(lvl)}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                        analysisLevel === lvl
                          ? 'bg-[#8a6421] dark:bg-[#c5a059] text-white dark:text-[#0c0c0e] font-bold shadow-xs'
                          : 'text-stone-600 dark:text-[#9f9a91] hover:text-stone-950 dark:hover:text-[#f4efe6]'
                      }`}
                    >
                      {lvl === 'basic' ? 'Cơ bản' : lvl === 'detailed' ? 'Chi tiết' : 'Nâng cao'}
                    </button>
                  ))}
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Luận giải Chuyên sâu: Góc nhìn{' '}
                {analysisLevel === 'basic'
                  ? 'Cơ bản'
                  : analysisLevel === 'detailed'
                  ? 'Toàn diện'
                  : 'Học thuật & Thi pháp'}
              </h2>

              <div className="p-6 rounded-2xl bg-[#fdfbf7] dark:bg-[#14121d] border border-stone-200 dark:border-[#2a2638] space-y-4">
                <div className="flex items-center justify-between text-xs text-[#8a6421] dark:text-[#d8b26e] pb-2 border-b border-stone-200 dark:border-[#242031]">
                  <span className="font-serif font-bold uppercase tracking-wider">
                    {analysisLevel === 'basic' && 'Nắm nhanh luận điểm nền tảng'}
                    {analysisLevel === 'detailed' && 'Phân tích hoàn chỉnh, đa chiều'}
                    {analysisLevel === 'advanced' && 'Góc nhìn thi pháp học & triết mỹ'}
                  </span>
                  <span className="text-stone-500 dark:text-[#78746c]">Chuẩn học thuật THPT</span>
                </div>
                <p
                  className={`text-stone-800 dark:text-[#e5decb] font-serif ${proseSizeClass}`}
                >
                  {work.analysisLevels[analysisLevel]}
                </p>
              </div>
            </section>

            {/* SECTION 07: ADAPTIVE GENRE MODULE */}
            {work.poetryAnalysis && work.poetryAnalysis.length > 0 && (
              <section
                id="sec-genre-specific"
                className="space-y-6 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  07. Thi pháp Thơ ca
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                  Phân tích Từng khổ thơ & Hình tượng
                </h2>

                <div className="space-y-6">
                  {work.poetryAnalysis.map((stanza) => (
                    <div
                      key={stanza.id}
                      className="p-6 rounded-2xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#252131] space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-stone-200 dark:border-[#1f1d28] pb-3">
                        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-[#f4efe6]">
                          {stanza.title}
                        </h3>
                        <span className="text-[11px] text-[#8a6421] dark:text-[#c5a059] font-medium tabular-nums">
                          Phần {stanza.stanzaNumber}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-100/80 dark:bg-[#0f0e14] border border-stone-200 dark:border-[#201d2a] font-serif text-sm sm:text-base text-stone-900 dark:text-[#e8decb] leading-relaxed whitespace-pre-line">
                        {stanza.excerpt}

                        {stanza.interactiveHotspots && stanza.interactiveHotspots.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-stone-200 dark:border-[#1f1d2a] flex flex-wrap gap-2 text-xs font-sans">
                            <span className="text-stone-500 dark:text-[#8e8a84] text-[11px] flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#8a6421] dark:text-[#c5a059]" />{' '}
                              Điểm nhấn tu từ:
                            </span>
                            {stanza.interactiveHotspots.map((hotspot, hIdx) => (
                              <button
                                key={hIdx}
                                onClick={() => setSelectedHotspot(hotspot)}
                                className="px-2.5 py-1 rounded bg-[#fdfbf7] dark:bg-[#1c1926] hover:border-[#8a6421] dark:hover:border-[#c5a059] border border-stone-300 dark:border-[#342f44] text-[#8a6421] dark:text-[#d8b26e] text-xs transition-colors"
                              >
                                "{hotspot.phrase}"
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                        <strong className="text-stone-900 dark:text-[#f4efe6] block mb-1">
                          Nội dung khổ thơ:
                        </strong>
                        {stanza.contentSummary}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="p-3.5 rounded-lg bg-stone-50 dark:bg-[#161420] border border-stone-200 dark:border-[#242031] space-y-1.5">
                          <strong className="text-[#8a6421] dark:text-[#d8b26e] block uppercase tracking-wider text-[11px]">
                            Hình ảnh & Biểu tượng
                          </strong>
                          {stanza.poeticImages.map((img, i) => (
                            <div key={i} className="text-stone-600 dark:text-[#b5afa4]">
                              <span className="text-stone-900 dark:text-[#e2dacd] font-medium">
                                {img.image}:
                              </span>{' '}
                              {img.meaning}
                            </div>
                          ))}
                        </div>

                        <div className="p-3.5 rounded-lg bg-stone-50 dark:bg-[#161420] border border-stone-200 dark:border-[#242031] space-y-1.5">
                          <strong className="text-[#8a6421] dark:text-[#d8b26e] block uppercase tracking-wider text-[11px]">
                            Biện pháp tu từ & Tác dụng
                          </strong>
                          {stanza.rhetoricalDevices.map((dev, d) => (
                            <div key={d} className="text-stone-600 dark:text-[#b5afa4]">
                              <span className="text-stone-900 dark:text-[#e2dacd] font-medium">
                                {dev.device}:
                              </span>{' '}
                              {dev.effect}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-stone-100/70 dark:bg-[#171521] border border-stone-200 dark:border-[#242030] text-xs text-stone-600 dark:text-[#a9a49c]">
                        <strong className="text-[#8a6421] dark:text-[#d8b26e]">
                          Vai trò trong toàn bài:
                        </strong>{' '}
                        {stanza.roleInWork}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {work.characters && work.characters.length > 0 && (
              <section
                id="sec-genre-specific"
                className="space-y-6 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  07. Nhân vật học
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                  Hệ thống Nhân vật Điển hình
                </h2>

                <div className="space-y-6">
                  {work.characters.map((char) => (
                    <div
                      key={char.id}
                      className="p-6 rounded-2xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#252131] space-y-4"
                    >
                      <div className="pb-3 border-b border-stone-200 dark:border-[#201d2a]">
                        <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-[#f4efe6]">
                          {char.name}
                        </h3>
                        <span className="text-xs text-[#8a6421] dark:text-[#c5a059]">
                          {char.role}
                        </span>
                      </div>

                      {char.quote && (
                        <div className="p-3.5 rounded-lg bg-stone-100/80 dark:bg-[#181622] border border-stone-200 dark:border-[#2b2737] font-serif italic text-xs sm:text-sm text-stone-800 dark:text-[#e8decb]">
                          "{char.quote}"
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="space-y-1">
                          <span className="text-stone-500 dark:text-[#8e8a84] font-semibold block uppercase text-[10px]">
                            Ngoại hình & Hoàn cảnh:
                          </span>
                          <p className="text-stone-700 dark:text-[#cfc8ba]">{char.appearance}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-stone-500 dark:text-[#8e8a84] font-semibold block uppercase text-[10px]">
                            Lời nói & Hành động:
                          </span>
                          <p className="text-stone-700 dark:text-[#cfc8ba]">
                            {char.speechAndActions}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-50 dark:bg-[#161420] border border-stone-200 dark:border-[#252133] space-y-2 text-xs sm:text-sm">
                        <span className="text-[#8a6421] dark:text-[#d8b26e] font-semibold block uppercase text-[10px]">
                          Diễn biến tâm lý & Ý nghĩa biểu tượng:
                        </span>
                        <p className="text-stone-700 dark:text-[#d5cbba] leading-relaxed">
                          {char.innerPsychology}
                        </p>
                        <p className="text-stone-600 dark:text-[#b5afa4] pt-1">
                          <strong className="text-stone-900 dark:text-[#f4efe6]">
                            Ý nghĩa nhân vật:
                          </strong>{' '}
                          {char.symbolicMeaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {work.characterRelationships && work.characterRelationships.length > 0 && (
                  <div className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#14121b] border border-stone-200 dark:border-[#262233] space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e]">
                      Sơ đồ quan hệ & Tác động qua lại giữa các nhân vật
                    </h4>
                    <div className="space-y-2 text-xs text-stone-700 dark:text-[#cfc8ba]">
                      {work.characterRelationships.map((rel, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-3 rounded-lg bg-stone-100/70 dark:bg-[#191724] border border-stone-200 dark:border-[#292437] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <span className="font-serif font-bold text-stone-900 dark:text-[#f4efe6]">
                            {rel.from}
                          </span>
                          <span className="text-[11px] text-[#8a6421] dark:text-[#c5a059] px-2 text-center">
                            {rel.relation}
                          </span>
                          <span className="font-serif font-bold text-stone-900 dark:text-[#f4efe6]">
                            {rel.to}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {work.dramaScenes && work.dramaScenes.length > 0 && (
              <section
                id="sec-genre-specific"
                className="space-y-6 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  07. Xung đột kịch
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                  Hệ thống Cảnh kịch & Xung đột Triết học
                </h2>
                <div className="space-y-4">
                  {work.dramaScenes.map((scene) => (
                    <div
                      key={scene.id}
                      className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#252131] space-y-3 text-xs sm:text-sm"
                    >
                      <div className="flex items-center justify-between border-b border-stone-200 dark:border-[#201d2a] pb-2">
                        <h3 className="font-serif text-base font-bold text-stone-900 dark:text-[#f4efe6]">
                          {scene.act}
                        </h3>
                        <span className="text-xs text-[#8a6421] dark:text-[#c5a059]">
                          {scene.charactersInvolved.join(' · ')}
                        </span>
                      </div>
                      <p className="text-stone-800 dark:text-[#d5cbba]">
                        <strong>Xung đột:</strong> {scene.conflict}
                      </p>
                      <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                        {scene.analysis}
                      </p>
                      <div className="p-3 bg-stone-100/70 dark:bg-[#171522] rounded border border-stone-200 dark:border-[#282436] text-[#8a6421] dark:text-[#c5a059]">
                        <strong>Chiều sâu triết lý:</strong> {scene.philosophicalDepth}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {work.argumentativePoints && work.argumentativePoints.length > 0 && (
              <section
                id="sec-genre-specific"
                className="space-y-6 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  07. Nghệ thuật lập luận
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                  Hệ thống Luận điểm – Lý lẽ – Dẫn chứng
                </h2>
                <div className="space-y-4">
                  {work.argumentativePoints.map((pt) => (
                    <div
                      key={pt.pointNumber}
                      className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#252131] space-y-3 text-xs sm:text-sm"
                    >
                      <div className="font-serif font-bold text-sm sm:text-base text-[#8a6421] dark:text-[#d8b26e]">
                        Luận điểm {pt.pointNumber}: {pt.claim}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-stone-50 dark:bg-[#171522] rounded border border-stone-200 dark:border-[#272335]">
                          <strong className="text-stone-900 dark:text-[#f4efe6] block mb-1">
                            Hệ thống Lý lẽ:
                          </strong>
                          <span className="text-stone-600 dark:text-[#b5afa4]">
                            {pt.reasoning}
                          </span>
                        </div>
                        <div className="p-3 bg-stone-50 dark:bg-[#171522] rounded border border-stone-200 dark:border-[#272335]">
                          <strong className="text-stone-900 dark:text-[#f4efe6] block mb-1">
                            Dẫn chứng lịch sử:
                          </strong>
                          <span className="text-stone-600 dark:text-[#b5afa4]">
                            {pt.evidence}
                          </span>
                        </div>
                      </div>
                      <p className="text-[#8a6421] dark:text-[#c5a059] pt-1">
                        <strong>Nghệ thuật lập luận:</strong> {pt.rhetoricalArt}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 08: ĐẶC SẮC NGHỆ THUẬT */}
            <section
              id="sec-art"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                08. Thi pháp & Nghệ thuật
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Đặc sắc Nghệ thuật Độc đáo
              </h2>

              <div className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#14121b] border border-stone-200 dark:border-[#252132] space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e]">
                  Nghệ thuật nổi bật nhất
                </h4>
                <p className="text-sm sm:text-base font-serif text-stone-800 dark:text-[#e5decb] leading-relaxed">
                  {work.artisticFeatures.prominentCraft}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#24202f] space-y-1.5">
                  <span className="text-stone-500 dark:text-[#8e8a84] uppercase font-semibold text-[10px]">
                    Ngôn ngữ:
                  </span>
                  <p className="text-stone-700 dark:text-[#cfc8ba]">
                    {work.artisticFeatures.language}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#24202f] space-y-1.5">
                  <span className="text-stone-500 dark:text-[#8e8a84] uppercase font-semibold text-[10px]">
                    Giọng điệu:
                  </span>
                  <p className="text-stone-700 dark:text-[#cfc8ba]">
                    {work.artisticFeatures.tone}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#24202f] space-y-1.5">
                  <span className="text-stone-500 dark:text-[#8e8a84] uppercase font-semibold text-[10px]">
                    Kết cấu / Điểm nhìn:
                  </span>
                  <p className="text-stone-700 dark:text-[#cfc8ba]">
                    {work.artisticFeatures.structureOrPointOfView}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#24202f] space-y-1.5">
                  <span className="text-stone-500 dark:text-[#8e8a84] uppercase font-semibold text-[10px]">
                    Hình ảnh / Biểu tượng:
                  </span>
                  <p className="text-stone-700 dark:text-[#cfc8ba]">
                    {work.artisticFeatures.imageryOrRhetoric}
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 09: CHI TIẾT NGHỆ THUẬT ĐẮT GIÁ */}
            <section
              id="sec-details"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                09. Hạt ngọc nghệ thuật
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Chi tiết Nghệ thuật Đắt giá
              </h2>
              <p className="text-xs text-stone-500 dark:text-[#a9a49c]">
                Mô hình giải mã 3 bước: Ý nghĩa trực tiếp → Ý nghĩa biểu tượng → Liên hệ chủ đề.
              </p>

              <div className="space-y-3">
                {work.keyArtisticDetails.map((detail) => {
                  const isExpanded = expandedDetailId === detail.id;
                  return (
                    <div
                      key={detail.id}
                      className="rounded-xl border border-stone-200 dark:border-[#262233] bg-[#fdfbf7] dark:bg-[#121117] overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setExpandedDetailId(isExpanded ? null : detail.id)}
                        className="w-full text-left p-4 flex items-center justify-between hover:bg-stone-100 dark:hover:bg-[#181622] transition-colors"
                      >
                        <span className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-[#f4efe6]">
                          {detail.detailName}
                        </span>
                        <span className="text-xs text-[#8a6421] dark:text-[#c5a059] font-medium shrink-0 ml-2">
                          {isExpanded ? 'Thu gọn' : 'Giải mã chi tiết'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="p-5 pt-3 space-y-3.5 border-t border-stone-200 dark:border-[#201d2a] bg-stone-50/70 dark:bg-[#15131e] text-xs sm:text-sm">
                          <div className="p-3 bg-[#fdfbf7] dark:bg-[#0f0e14] rounded-lg border border-stone-200 dark:border-[#221f2d] font-serif italic text-stone-800 dark:text-[#d8b26e]">
                            "{detail.excerptOrContext}"
                          </div>

                          <div className="space-y-2.5 pt-1">
                            <div>
                              <strong className="text-[#8a6421] dark:text-[#d8b26e]">
                                Bước 1 · Ý nghĩa trực tiếp:
                              </strong>{' '}
                              <span className="text-stone-700 dark:text-[#cfc8ba]">
                                {detail.directMeaning}
                              </span>
                            </div>
                            <div>
                              <strong className="text-[#8a6421] dark:text-[#d8b26e]">
                                Bước 2 · Ý nghĩa biểu tượng:
                              </strong>{' '}
                              <span className="text-stone-700 dark:text-[#cfc8ba]">
                                {detail.symbolicMeaning}
                              </span>
                            </div>
                            <div>
                              <strong className="text-[#8a6421] dark:text-[#d8b26e]">
                                Bước 3 · Liên hệ chủ đề:
                              </strong>{' '}
                              <span className="text-stone-700 dark:text-[#cfc8ba]">
                                {detail.thematicConnection}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 10: GIÁ TRỊ TÁC PHẨM */}
            <section
              id="sec-values"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                10. Giá trị nhân văn
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Giá trị Hiện thực, Nhân đạo & Thời đại
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                {work.literaryValues.realisticValue && (
                  <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#23202e] space-y-1">
                    <strong className="text-[#8a6421] dark:text-[#d8b26e] font-serif text-sm block">
                      Giá trị hiện thực:
                    </strong>
                    <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                      {work.literaryValues.realisticValue}
                    </p>
                  </div>
                )}

                {work.literaryValues.humanitarianValue && (
                  <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#23202e] space-y-1">
                    <strong className="text-[#8a6421] dark:text-[#d8b26e] font-serif text-sm block">
                      Giá trị nhân đạo:
                    </strong>
                    <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                      {work.literaryValues.humanitarianValue}
                    </p>
                  </div>
                )}

                {work.literaryValues.ideologicalValue && (
                  <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#23202e] space-y-1">
                    <strong className="text-[#8a6421] dark:text-[#d8b26e] font-serif text-sm block">
                      Giá trị tư tưởng:
                    </strong>
                    <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                      {work.literaryValues.ideologicalValue}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#131119] border border-stone-200 dark:border-[#23202e] space-y-1">
                  <strong className="text-[#8a6421] dark:text-[#d8b26e] font-serif text-sm block">
                    Giá trị nghệ thuật:
                  </strong>
                  <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                    {work.literaryValues.artisticValue}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-[#161421] border border-amber-300/60 dark:border-[#282337] space-y-2">
                  <strong className="text-stone-900 dark:text-[#f4efe6] font-serif text-sm block">
                    Thông điệp cốt lõi:
                  </strong>
                  <p className="text-stone-800 dark:text-[#d5cbba] leading-relaxed">
                    {work.literaryValues.message}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-[#a9a49c] pt-2 border-t border-amber-200/80 dark:border-[#221e2f]">
                    <strong className="text-[#8a6421] dark:text-[#d8b26e]">
                      Ý nghĩa với người đọc hiện đại:
                    </strong>{' '}
                    {work.literaryValues.modernRelevance}
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: TÁC PHẨM TRONG 60 GIÂY */}
            <section
              id="sec-60s"
              className="space-y-5 pt-6 border-t-2 border-[#8a6421]/40 dark:border-[#c5a059]/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  <Zap className="w-4 h-4" />
                  <span>11. Ôn tập tốc hành</span>
                </div>
                <button
                  onClick={handleCopyQuick60s}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-[#191724] hover:bg-stone-200 dark:hover:bg-[#232032] border border-stone-300 dark:border-[#342f44] text-xs font-medium text-stone-800 dark:text-[#d8b26e] transition-colors flex items-center gap-1.5"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Đã sao chép bảng ôn tập
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" /> Sao chép tóm tắt 60s
                    </>
                  )}
                </button>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Tác phẩm trong 60 Giây (Bảng Tổng kết Vàng)
              </h2>

              <div className="p-6 rounded-2xl bg-[#fdfbf7] dark:bg-[#14121d] border border-stone-300 dark:border-[#383248] space-y-5 shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-stone-500 dark:text-[#8e8a84] block">Tác giả:</span>
                    <strong className="text-stone-900 dark:text-[#f4efe6] font-serif text-base">
                      {work.quick60s.author}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-500 dark:text-[#8e8a84] block">Thể loại:</span>
                    <strong className="text-stone-900 dark:text-[#f4efe6]">
                      {work.quick60s.genre}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-500 dark:text-[#8e8a84] block">Chủ đề:</span>
                    <span className="text-stone-700 dark:text-[#cfc8ba]">
                      {work.quick60s.theme}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-500 dark:text-[#8e8a84] block">
                      Hình tượng cốt lõi:
                    </span>
                    <span className="text-[#8a6421] dark:text-[#d8b26e] font-semibold">
                      {work.quick60s.coreFigureOrCharacter}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-stone-100/70 dark:bg-[#1b1826] rounded-xl border border-stone-200 dark:border-[#2c283b] space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-stone-900 dark:text-[#f4efe6] block font-serif">
                    Nội dung cốt tử:
                  </strong>
                  <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                    {work.quick60s.mainIdea}
                  </p>
                </div>

                <div className="p-4 bg-stone-100/70 dark:bg-[#1b1826] rounded-xl border border-stone-200 dark:border-[#2c283b] space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-stone-900 dark:text-[#f4efe6] block font-serif">
                    Nghệ thuật đỉnh cao:
                  </strong>
                  <p className="text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
                    {work.quick60s.keyArt}
                  </p>
                </div>

                {/* Unboxed Golden Keywords with Middle Dot Separators */}
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e] block">
                    Từ khóa vàng cần nhớ trong bài làm:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-[#f4efe6] leading-relaxed">
                    {work.quick60s.goldenKeywords.join('  ·  ')}
                  </p>
                </div>

                <div className="pt-3 text-xs sm:text-sm font-serif italic text-stone-700 dark:text-[#d5cbba] text-center border-t border-stone-200 dark:border-[#252132]">
                  "{work.quick60s.takeaway}"
                </div>
              </div>
            </section>

            {/* SECTION 12: SỔ TAY GHI CHÚ HỌC THUẬT CÁ NHÂN */}
            <section
              id="sec-notes"
              className="space-y-4 pt-6 border-t border-stone-200 dark:border-[#1f1d28]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8a6421] dark:text-[#c5a059]">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>12. Sổ tay cá nhân</span>
                </div>
                <span className="text-[11px] text-stone-500 dark:text-[#8e8a84]">
                  Tự động lưu trên trình duyệt
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-[#f4efe6]">
                Ghi chú & Dẫn chứng Mở rộng của Bạn cho "{work.title}"
              </h2>
              <textarea
                rows={4}
                value={personalNote}
                onChange={(e) => onSavePersonalNote(work.slug, e.target.value)}
                placeholder={`Ghi lại nhận định lý luận văn học, câu thơ liên hệ hoặc lưu ý của thầy cô về tác phẩm "${work.title}"...`}
                className="w-full p-4 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-300 dark:border-[#2a2638] text-xs sm:text-sm text-stone-900 dark:text-[#f4efe6] placeholder-stone-400 dark:placeholder-[#6e6a62] focus:outline-hidden focus:border-[#8a6421] dark:focus:border-[#c5a059] leading-relaxed"
              />
            </section>
          </main>

          {/* RIGHT COLUMN: ACCESSION METADATA & ACADEMIC TOOLS */}
          <aside className="lg:col-span-3 sticky top-20 space-y-6">
            {/* Museum Accession Metadata Card */}
            <div className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e] pb-2 border-b border-stone-200 dark:border-[#1f1d28]">
                Hồ sơ Lưu trữ Tác phẩm
              </h3>

              <dl className="space-y-3 text-xs divide-y divide-stone-200/70 dark:divide-[#1f1d28]">
                <div className="pt-1">
                  <dt className="text-stone-500 dark:text-[#8e8a84] text-[11px]">Tác giả</dt>
                  <dd>
                    <button
                      onClick={() => onSelectAuthor(work.authorId)}
                      className="font-serif font-bold text-sm text-stone-900 dark:text-[#f4efe6] hover:text-[#8a6421] dark:hover:text-[#c5a059] transition-colors"
                    >
                      {work.authorName}
                    </button>
                  </dd>
                </div>

                <div className="pt-2.5">
                  <dt className="text-stone-500 dark:text-[#8e8a84] text-[11px]">
                    Khối lớp & Thể loại
                  </dt>
                  <dd className="text-stone-800 dark:text-[#e2dacd] font-medium tabular-nums">
                    Lớp {work.grade} · {work.genre}
                  </dd>
                </div>

                <div className="pt-2.5">
                  <dt className="text-stone-500 dark:text-[#8e8a84] text-[11px]">
                    Năm sáng tác / Công bố
                  </dt>
                  <dd className="text-stone-800 dark:text-[#e2dacd] tabular-nums">{work.year}</dd>
                </div>

                <div className="pt-2.5">
                  <dt className="text-stone-500 dark:text-[#8e8a84] text-[11px]">Bộ SGK</dt>
                  <dd className="text-stone-800 dark:text-[#e2dacd]">{work.textbook}</dd>
                </div>

                <div className="pt-2.5">
                  <dt className="text-stone-500 dark:text-[#8e8a84] text-[11px]">
                    Từ khóa trọng tâm
                  </dt>
                  <dd className="text-stone-700 dark:text-[#b5afa4] leading-relaxed pt-0.5">
                    {work.keywords.join(' · ')}
                  </dd>
                </div>
              </dl>

              <div className="pt-3 border-t border-stone-200 dark:border-[#1f1d28] space-y-2">
                <button
                  onClick={() => onOpenOutliner(work.slug)}
                  className="w-full py-2 px-3 rounded-lg bg-[#8a6421] dark:bg-[#c5a059] hover:bg-[#6e4e16] dark:hover:bg-[#d8b26e] text-white dark:text-[#0c0c0e] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> Lập dàn ý tác phẩm này
                </button>
                <button
                  onClick={() => onOpenCompare(work.slug)}
                  className="w-full py-2 px-3 rounded-lg bg-stone-100 dark:bg-[#1a1824] hover:bg-stone-200 dark:hover:bg-[#221f2f] border border-stone-300 dark:border-[#2b2738] text-xs font-medium text-stone-800 dark:text-[#d8b26e] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Scale className="w-3.5 h-3.5" /> Đối sánh với tác phẩm khác
                </button>
              </div>
            </div>

            {/* Related Works in Library */}
            <div className="p-5 rounded-xl bg-[#fdfbf7] dark:bg-[#121117] border border-stone-200 dark:border-[#23202c] space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#d8b26e] pb-2 border-b border-stone-200 dark:border-[#1f1d28]">
                Tác phẩm cùng khối / thể loại
              </h3>
              <div className="space-y-2.5">
                {relatedWorks.slice(0, 4).map((rw) => (
                  <button
                    key={rw.slug}
                    onClick={() => {
                      onSelectWork(rw.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-stone-50 dark:bg-[#171520] hover:bg-stone-100 dark:hover:bg-[#201d2d] border border-stone-200 dark:border-[#24212f] hover:border-[#8a6421] dark:hover:border-[#c5a059] transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={rw.coverImage}
                        alt={rw.title}
                        className="w-12 h-9 rounded object-cover border border-stone-300 dark:border-[#2e2a3b] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="truncate">
                        <span className="font-serif font-bold text-xs text-stone-900 dark:text-[#f4efe6] group-hover:text-[#8a6421] dark:group-hover:text-[#d8b26e] block truncate">
                          {rw.title}
                        </span>
                        <p className="text-[10px] text-stone-500 dark:text-[#8e8a84] truncate">
                          {rw.authorName} · Lớp {rw.grade}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 dark:text-[#4a4755] group-hover:text-[#8a6421] dark:group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Hotspot Popover Modal for Poetry */}
      {selectedHotspot && (
        <div
          onClick={() => setSelectedHotspot(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full p-6 rounded-xl bg-[#fdfbf7] dark:bg-[#16141e] border border-stone-300 dark:border-[#2f2a3d] shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-[#252131] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8a6421] dark:text-[#c5a059]">
                Giải mã thi pháp
              </span>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="text-xs text-stone-500 dark:text-[#8e8a84] hover:text-stone-900 dark:hover:text-[#f4efe6]"
              >
                Đóng
              </button>
            </div>
            <div className="font-serif text-lg font-bold text-stone-900 dark:text-[#f4efe6]">
              "{selectedHotspot.phrase}"
            </div>
            <div className="p-3 bg-stone-100 dark:bg-[#110f17] rounded-lg border border-stone-200 dark:border-[#221f2d] text-xs text-[#8a6421] dark:text-[#d8b26e]">
              <strong>Biện pháp nghệ thuật:</strong> {selectedHotspot.technique}
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-[#cfc8ba] leading-relaxed">
              {selectedHotspot.note}
            </p>
            <button
              onClick={() => setSelectedHotspot(null)}
              className="w-full py-2 bg-[#8a6421] dark:bg-[#201d2b] hover:opacity-90 text-xs font-medium text-white dark:text-[#d8b26e] rounded-md transition-colors"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen AI Illustration Lightbox Modal */}
      {isArtworkOpen && (
        <div
          onClick={() => setIsArtworkOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full rounded-2xl bg-[#131119] border border-[#2f2a3e] overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#23202e]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                <span className="font-serif font-bold text-sm sm:text-base text-[#f4efe6]">
                  Tranh minh họa AI: {work.title} — {work.authorName}
                </span>
              </div>
              <button
                onClick={() => setIsArtworkOpen(false)}
                className="px-3 py-1 rounded bg-[#1f1c29] hover:bg-[#2b2738] text-xs text-[#d8b26e] font-medium transition-colors"
              >
                Đóng
              </button>
            </div>
            <div className="bg-[#09080c] max-h-[75vh] overflow-hidden flex items-center justify-center">
              <img
                src={work.coverImage}
                alt={work.title}
                className="w-full h-auto max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 sm:px-6 bg-[#131119] border-t border-[#23202e] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#b8b1a4]">
              <p className="italic font-serif">"{work.hookIntro}"</p>
              <span className="text-[11px] text-[#c5a059] shrink-0">
                Phong cách Sơn dầu Cổ điển · Dark Academia
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
