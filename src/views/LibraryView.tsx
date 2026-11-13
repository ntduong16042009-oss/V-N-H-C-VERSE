import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Bookmark,
  Brain,
  Sparkles,
} from 'lucide-react';
import { WORKS } from '../data/works';
import { AUTHORS } from '../data/authors';

interface LibraryViewProps {
  initialGrade?: string;
  onSelectWork: (slug: string) => void;
  onSelectAuthor: (id: string) => void;
  bookmarkedSlugs: string[];
  onToggleBookmark: (slug: string) => void;
  onOpenOutlinerForWork: (slug: string) => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  initialGrade,
  onSelectWork,
  onSelectAuthor,
  bookmarkedSlugs,
  onToggleBookmark,
  onOpenOutlinerForWork,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<string>(initialGrade || 'all');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSelectedGrade(initialGrade || 'all');
  }, [initialGrade]);

  const genres = [
    'all',
    'Truyện ngắn',
    'Thơ',
    'Tùy bút',
    'Kịch',
    'Văn chính luận',
    'Sử thi',
    'Thần thoại',
  ];

  const allWorks = useMemo(() => Object.values(WORKS), []);

  const filteredWorks = useMemo(() => {
    return allWorks.filter((work) => {
      if (selectedGrade === 'bookmarks') {
        if (!bookmarkedSlugs.includes(work.slug)) return false;
      } else if (selectedGrade !== 'all' && work.grade.toString() !== selectedGrade) {
        return false;
      }
      if (selectedGenre !== 'all' && !work.genre.includes(selectedGenre)) {
        return false;
      }
      if (selectedAuthor !== 'all' && work.authorId !== selectedAuthor) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = work.title.toLowerCase().includes(q);
        const matchesAuthor = work.authorName.toLowerCase().includes(q);
        const matchesKeyword = work.keywords.some((k) => k.toLowerCase().includes(q));
        const matchesTopic = work.topic.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAuthor && !matchesKeyword && !matchesTopic) {
          return false;
        }
      }
      return true;
    });
  }, [allWorks, selectedGrade, selectedGenre, selectedAuthor, searchQuery, bookmarkedSlugs]);

  const handleResetFilters = () => {
    setSelectedGrade('all');
    setSelectedGenre('all');
    setSelectedAuthor('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedGrade !== 'all' ||
    selectedGenre !== 'all' ||
    selectedAuthor !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#b490ff]/35 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-[#f5d076]">
          <Sparkles className="w-3.5 h-3.5" /> Thư viện Tác phẩm Tương tác · VĂN HỌCVERSE
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          {selectedGrade === 'bookmarks'
            ? 'Tủ sách Học thuật Cá nhân đã lưu'
            : 'Kho Lưu trữ Kiệt tác Văn học (Lớp 10 · 11 · 12)'}
        </h1>
        <p className="text-sm sm:text-base text-[#d4c6f0] max-w-3xl leading-relaxed">
          Tra cứu, đọc hiểu đa phương tiện và giải mã chuyên sâu các kiệt tác văn học trong chương trình GDPT. Chọn bất kỳ tác phẩm nào để khám phá kết cấu thi pháp 3 tầng hoặc khởi tạo dàn ý bằng AI.
        </p>
      </div>

      {/* Filter and Search Panel */}
      <div className="verse-glass rounded-3xl p-6 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Search box */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d8b4fe]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên tác phẩm, tác giả hoặc từ khóa..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0c061f]/90 border border-white/20 text-sm text-white placeholder-[#9886bd] focus:outline-hidden focus:border-[#c084fc]"
            />
          </div>

          {/* Grade / Bookmarks Selector */}
          <div>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#0c061f]/90 border border-white/20 text-sm text-white focus:outline-hidden focus:border-[#c084fc]"
            >
              <option value="all">Tất cả khối lớp (10, 11, 12)</option>
              <option value="10">Khối Lớp 10 (Trung đại & Sử thi)</option>
              <option value="11">Khối Lớp 11 (Thơ Mới & Hiện thực)</option>
              <option value="12">Khối Lớp 12 (Kháng chiến & Đổi mới)</option>
              <option value="bookmarks">Tủ sách đã lưu ({bookmarkedSlugs.length})</option>
            </select>
          </div>

          {/* Author Selector */}
          <div>
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#0c061f]/90 border border-white/20 text-sm text-white focus:outline-hidden focus:border-[#c084fc]"
            >
              <option value="all">Tất cả tác giả</option>
              {Object.values(AUTHORS).map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Interactive Genre filter bar */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10">
          <span className="text-xs text-[#c7b6e8] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#f5d076]" /> Thể loại:
          </span>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedGenre === genre
                  ? 'bg-gradient-to-r from-[#9b72ff] to-[#6366f1] text-white shadow-[0_0_15px_rgba(155,114,255,0.5)]'
                  : 'bg-white/[0.06] text-[#d4c6f0] hover:text-white border border-white/15'
              }`}
            >
              {genre === 'all' ? 'Tất cả thể loại' : genre}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="ml-auto text-xs font-semibold text-[#f5d076] hover:underline flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Xóa bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Quick Grade Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#c7b6e8] tabular-nums">
        <span>
          Hiển thị <strong className="text-white">{filteredWorks.length}</strong> / {allWorks.length} kiệt tác
        </span>

        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'Tất cả' },
            { id: '10', label: 'Lớp 10' },
            { id: '11', label: 'Lớp 11' },
            { id: '12', label: 'Lớp 12' },
            { id: 'bookmarks', label: `Tủ sách (${bookmarkedSlugs.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedGrade(tab.id)}
              className={`px-3 py-1 rounded-full text-xs transition-all whitespace-nowrap cursor-pointer ${
                selectedGrade === tab.id
                  ? 'bg-purple-500/30 text-[#f5d076] border border-[#f5d076]/40 font-bold'
                  : 'hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Works Grid */}
      {filteredWorks.length === 0 ? (
        <div className="py-20 text-center space-y-4 rounded-3xl verse-glass">
          <BookOpen className="w-10 h-10 text-[#c084fc] mx-auto" />
          <h3 className="font-serif text-xl text-white">
            {selectedGrade === 'bookmarks'
              ? 'Tủ sách cá nhân của bạn chưa có tác phẩm nào'
              : 'Không tìm thấy tác phẩm phù hợp'}
          </h3>
          <p className="text-xs text-[#c7b6e8] max-w-sm mx-auto">
            {selectedGrade === 'bookmarks'
              ? 'Nhấn vào biểu tượng đánh dấu trên bất kỳ thẻ tác phẩm nào để lưu vào Tủ sách cá nhân.'
              : 'Không có tác phẩm nào thỏa mãn các tiêu chí lọc hiện tại. Vui lòng thử từ khóa khác.'}
          </p>
          <button
            onClick={handleResetFilters}
            className="verse-btn-primary px-5 py-2.5 text-xs font-semibold text-white rounded-full"
          >
            Xem toàn bộ tác phẩm
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const isBookmarked = bookmarkedSlugs.includes(work.slug);
            return (
              <article
                key={work.slug}
                className="verse-glass verse-glass-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Thumbnail Image */}
                <div
                  onClick={() => onSelectWork(work.slug)}
                  className="relative h-52 overflow-hidden cursor-pointer"
                >
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/25 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#12092b]/85 backdrop-blur-md text-[#e9d5ff] border border-white/15">
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
                        ? 'bg-[#f5d076] text-[#090514] border-[#f5d076] shadow-[0_0_12px_rgba(245,208,118,0.8)]'
                        : 'bg-black/55 text-white border-white/20 hover:border-[#f5d076]'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#c7b6e8] tabular-nums">
                      <button
                        onClick={() => onSelectAuthor(work.authorId)}
                        className="text-[#f5d076] hover:underline font-semibold"
                      >
                        {work.authorName}
                      </button>
                      <span>{work.year}</span>
                    </div>

                    <h3
                      onClick={() => onSelectWork(work.slug)}
                      className="font-serif text-xl font-bold text-white group-hover:text-[#d8b4fe] transition-colors cursor-pointer"
                    >
                      {work.title}
                    </h3>

                    <p className="text-xs text-[#b5a4d9] line-clamp-3 leading-relaxed">
                      {work.hookIntro}
                    </p>
                    <div className="pt-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-400/25 text-[10px] font-medium text-[#e2d6ff] line-clamp-1">
                        {work.textbook}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenOutlinerForWork(work.slug)}
                      className="text-xs text-[#d8b4fe] hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap"
                    >
                      <Brain className="w-3.5 h-3.5" /> AI Phân tích & Dàn ý
                    </button>
                    <button
                      onClick={() => onSelectWork(work.slug)}
                      className="text-xs font-semibold text-[#f5d076] hover:underline flex items-center gap-1 transition-colors whitespace-nowrap"
                    >
                      Đọc & Giải mã <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
