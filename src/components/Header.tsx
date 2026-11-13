import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Menu,
  X,
  Home,
  BookOpen,
  User,
  Compass,
  Users,
  ChevronDown,
  Brain,
  Gamepad2,
  Clock,
  Sparkles,
  Bookmark,
  Layers,
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenSearch: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
  bookmarkedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  bookmarkedCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'works' | 'explore' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (view: string, param?: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(view, param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWorksActive =
    currentView === 'library' ||
    currentView.startsWith('library-') ||
    currentView === 'work';

  const isExploreActive =
    currentView === 'explore' ||
    currentView === 'ai-analysis' ||
    currentView === 'quiz' ||
    currentView === 'timeline' ||
    currentView === 'study';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0518]/80 backdrop-blur-xl transition-all">
      <div
        ref={dropdownRef}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4"
      >
        {/* Left: Glowing Open Book Logo + VĂN HỌCVERSE */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group focus:outline-hidden shrink-0"
        >
          <div className="relative w-11 h-11 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md group-hover:bg-purple-400/50 transition-all" />
            <svg
              viewBox="0 0 64 64"
              className="w-11 h-11 relative z-10 drop-shadow-[0_0_10px_rgba(180,144,255,0.85)]"
              fill="none"
            >
              {/* Four-point star above book */}
              <path
                d="M32 6L34.2 12.8L41 15L34.2 17.2L32 24L29.8 17.2L23 15L29.8 12.8L32 6Z"
                fill="url(#starGrad)"
              />
              {/* Sparkle dots */}
              <circle cx="18" cy="14" r="1.5" fill="#e9d5ff" />
              <circle cx="46" cy="14" r="1.5" fill="#e9d5ff" />
              {/* Open book pages */}
              <path
                d="M10 26C18 26 26 29 32 35C38 29 46 26 54 26V48C46 48 38 50 32 55C26 50 18 48 10 48V26Z"
                stroke="url(#bookGrad)"
                strokeWidth="3"
                fill="rgba(139, 92, 246, 0.18)"
                strokeLinejoin="round"
              />
              <path
                d="M6 52C16 50 25 52 32 57C39 52 48 50 58 52"
                stroke="url(#bookGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M32 35V55"
                stroke="#e9d5ff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="starGrad" x1="23" y1="6" x2="41" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" />
                  <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
                <linearGradient id="bookGrad" x1="6" y1="26" x2="58" y2="57" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e9d5ff" />
                  <stop offset="0.5" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="font-serif text-xl sm:text-2xl font-bold tracking-wider flex items-center">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
              VĂN HỌC
            </span>
            <span className="bg-gradient-to-r from-[#d8b4fe] via-[#b490ff] to-[#818cf8] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(180,144,255,0.55)]">
              VERSE
            </span>
          </div>
        </button>

        {/* Center Navigation matching Reference Image */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-medium">
          {/* 1. Trang chủ */}
          <button
            onClick={() => handleNav('home')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
              currentView === 'home'
                ? 'bg-gradient-to-r from-[#6d3fc0]/80 to-[#4a2b8c]/80 text-white border border-[#b490ff]/60 shadow-[0_0_20px_rgba(168,139,235,0.45)]'
                : 'text-[#dcd0f5] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Home className="w-4 h-4 text-[#d8b4fe]" />
            <span>Trang chủ</span>
          </button>

          {/* 2. Tác phẩm (with dropdown) */}
          <div className="relative">
            <div className="flex items-center">
              <button
                onClick={() => handleNav('library')}
                className={`flex items-center gap-2 pl-4 pr-2 py-2 rounded-l-full transition-all whitespace-nowrap ${
                  isWorksActive
                    ? 'bg-gradient-to-r from-[#6d3fc0]/80 to-[#4a2b8c]/80 text-white border-y border-l border-[#b490ff]/60 shadow-[0_0_20px_rgba(168,139,235,0.45)]'
                    : 'text-[#dcd0f5] hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#d8b4fe]" />
                <span>Tác phẩm</span>
              </button>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'works' ? null : 'works')
                }
                aria-label="Mở danh mục tác phẩm"
                className={`pr-3 pl-1 py-2 rounded-r-full transition-all ${
                  isWorksActive
                    ? 'bg-[#4a2b8c]/80 text-white border-y border-r border-[#b490ff]/60'
                    : 'text-[#dcd0f5] hover:text-white hover:bg-white/5'
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    openDropdown === 'works' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {openDropdown === 'works' && (
              <div className="absolute left-0 mt-2.5 w-64 rounded-2xl verse-glass p-2 shadow-2xl border border-[#b490ff]/35 z-50 space-y-1">
                <button
                  onClick={() => handleNav('library')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-medium text-[#f3eeff] hover:bg-white/10 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#c084fc]" />
                  <div>
                    <div className="font-semibold">Kho Tác phẩm Tương tác</div>
                    <div className="text-[11px] text-[#b5a4d9]">Toàn bộ kiệt tác văn học</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNav('library', '10')}
                  className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-left text-xs text-[#e2d6ff] hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#f5d076]" />
                  <span>Văn học Lớp 10 (Trung đại & Sử thi)</span>
                </button>
                <button
                  onClick={() => handleNav('library', '11')}
                  className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-left text-xs text-[#e2d6ff] hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#c084fc]" />
                  <span>Văn học Lớp 11 (Thơ Mới & Hiện thực)</span>
                </button>
                <button
                  onClick={() => handleNav('library', '12')}
                  className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-left text-xs text-[#e2d6ff] hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
                  <span>Văn học Lớp 12 (Kháng chiến & Đổi mới)</span>
                </button>
                <div className="border-t border-white/10 my-1 pt-1">
                  <button
                    onClick={() => handleNav('library', 'bookmarks')}
                    className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-left text-xs text-[#f5d076] hover:bg-white/10 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                      Tủ sách đã lưu
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-[#f5d076]/20 text-[10px] font-bold">
                      {bookmarkedCount}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. Tác giả */}
          <button
            onClick={() => handleNav('authors')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
              currentView === 'authors'
                ? 'bg-gradient-to-r from-[#6d3fc0]/80 to-[#4a2b8c]/80 text-white border border-[#b490ff]/60 shadow-[0_0_20px_rgba(168,139,235,0.45)]'
                : 'text-[#dcd0f5] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <User className="w-4 h-4 text-[#d8b4fe]" />
            <span>Tác giả</span>
          </button>

          {/* 4. Khám phá (with dropdown) */}
          <div className="relative">
            <div className="flex items-center">
              <button
                onClick={() => handleNav('explore')}
                className={`flex items-center gap-2 pl-4 pr-2 py-2 rounded-l-full transition-all whitespace-nowrap ${
                  isExploreActive
                    ? 'bg-gradient-to-r from-[#6d3fc0]/80 to-[#4a2b8c]/80 text-white border-y border-l border-[#b490ff]/60 shadow-[0_0_20px_rgba(168,139,235,0.45)]'
                    : 'text-[#dcd0f5] hover:text-white hover:bg-white/5'
                }`}
              >
                <Compass className="w-4 h-4 text-[#d8b4fe]" />
                <span>Khám phá</span>
              </button>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'explore' ? null : 'explore')
                }
                aria-label="Mở danh mục khám phá"
                className={`pr-3 pl-1 py-2 rounded-r-full transition-all ${
                  isExploreActive
                    ? 'bg-[#4a2b8c]/80 text-white border-y border-r border-[#b490ff]/60'
                    : 'text-[#dcd0f5] hover:text-white hover:bg-white/5'
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    openDropdown === 'explore' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {openDropdown === 'explore' && (
              <div className="absolute left-0 mt-2.5 w-72 rounded-2xl verse-glass p-2 shadow-2xl border border-[#b490ff]/35 z-50 space-y-1">
                <button
                  onClick={() => handleNav('explore')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs text-[#f3eeff] hover:bg-white/10 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#f5d076]" />
                  <div>
                    <div className="font-semibold">Khám phá Thế giới Văn học</div>
                    <div className="text-[11px] text-[#b5a4d9]">Việt Nam, Thơ ca, Truyện ngắn & Thế giới</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNav('ai-analysis')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs text-[#f3eeff] hover:bg-white/10 transition-colors"
                >
                  <Brain className="w-4 h-4 text-[#c084fc]" />
                  <div>
                    <div className="font-semibold">AI Phân tích Tác phẩm</div>
                    <div className="text-[11px] text-[#b5a4d9]">Giải mã chuyên sâu & Lập dàn ý thông minh</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNav('quiz')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs text-[#f3eeff] hover:bg-white/10 transition-colors"
                >
                  <Gamepad2 className="w-4 h-4 text-[#818cf8]" />
                  <div>
                    <div className="font-semibold">Đấu trí Văn học</div>
                    <div className="text-[11px] text-[#b5a4d9]">Trắc nghiệm kiến thức & Thẻ nhớ 60 giây</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNav('timeline')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs text-[#f3eeff] hover:bg-white/10 transition-colors"
                >
                  <Clock className="w-4 h-4 text-[#38bdf8]" />
                  <div>
                    <div className="font-semibold">Dòng thời gian Văn học</div>
                    <div className="text-[11px] text-[#b5a4d9]">Hành trình lịch sử từ Trung đại đến Hiện đại</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNav('study', 'compare')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs text-[#f3eeff] hover:bg-white/10 transition-colors"
                >
                  <Layers className="w-4 h-4 text-[#f472b6]" />
                  <div>
                    <div className="font-semibold">Bàn So sánh Liên văn bản</div>
                    <div className="text-[11px] text-[#b5a4d9]">Đối sánh 2 kiệt tác song song</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* 5. Cộng đồng */}
          <button
            onClick={() => handleNav('community')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
              currentView === 'community'
                ? 'bg-gradient-to-r from-[#6d3fc0]/80 to-[#4a2b8c]/80 text-white border border-[#b490ff]/60 shadow-[0_0_20px_rgba(168,139,235,0.45)]'
                : 'text-[#dcd0f5] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Users className="w-4 h-4 text-[#d8b4fe]" />
            <span>Cộng đồng</span>
          </button>
        </nav>

        {/* Right: Search Input Bar + Personal Profile Avatar Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Glass Search Bar matching reference image */}
          <button
            onClick={onOpenSearch}
            className="flex items-center justify-between gap-6 w-40 sm:w-56 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.11] border border-white/15 hover:border-[#b490ff]/50 text-xs text-[#c7b6e8] transition-all shadow-inner group"
            title="Tìm kiếm tác phẩm, tác giả hoặc từ khóa (⌘K)"
          >
            <span className="truncate">Tìm kiếm...</span>
            <Search className="w-4 h-4 text-[#d8b4fe] group-hover:scale-110 transition-transform shrink-0" />
          </button>

          {/* Personal Account Avatar Button */}
          <button
            onClick={() => handleNav('profile')}
            title="Tài khoản cá nhân & Hồ sơ Văn HọcVerse"
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all border ${
              currentView === 'profile'
                ? 'bg-gradient-to-br from-[#9b72ff] to-[#6366f1] text-white border-white shadow-[0_0_18px_rgba(168,139,235,0.75)]'
                : 'bg-white/[0.08] hover:bg-white/[0.15] text-[#e9d5ff] border-white/25 hover:border-[#b490ff]'
            }`}
          >
            <User className="w-5 h-5" />
            {bookmarkedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f5d076] text-[#090514] text-[10px] font-bold flex items-center justify-center shadow">
                {bookmarkedCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/[0.08] border border-white/15 text-[#e9d5ff] hover:text-white"
            aria-label="Mở trình đơn điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0d0722]/95 backdrop-blur-2xl px-4 py-4 space-y-1.5">
          {[
            { label: 'Trang chủ', view: 'home', icon: Home },
            { label: 'Thư viện Tác phẩm', view: 'library', icon: BookOpen },
            { label: 'Chân dung Tác giả', view: 'authors', icon: User },
            { label: 'Khám phá Thế giới Văn học', view: 'explore', icon: Compass },
            { label: 'AI Phân tích Tác phẩm', view: 'ai-analysis', icon: Brain },
            { label: 'Đấu trí Văn học (Quiz & Flashcard)', view: 'quiz', icon: Gamepad2 },
            { label: 'Dòng thời gian Văn học', view: 'timeline', icon: Clock },
            { label: 'Cộng đồng Yêu văn', view: 'community', icon: Users },
            { label: `Hồ sơ Cá nhân (${bookmarkedCount} đã lưu)`, view: 'profile', icon: User },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  currentView === item.view
                    ? 'bg-gradient-to-r from-[#6d3fc0]/70 to-[#4a2b8c]/70 text-white border border-[#b490ff]/40'
                    : 'text-[#d4c6f0] hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 text-[#c084fc]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
