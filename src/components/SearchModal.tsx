import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, User, ArrowRight, Sparkles } from 'lucide-react';
import { WORKS } from '../data/works';
import { AUTHORS } from '../data/authors';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWork: (slug: string) => void;
  onSelectAuthor: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectWork,
  onSelectAuthor,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingWorks = Object.values(WORKS).filter((work) => {
    if (!normalizedQuery) return true;
    return (
      work.title.toLowerCase().includes(normalizedQuery) ||
      work.authorName.toLowerCase().includes(normalizedQuery) ||
      work.keywords.some((k) => k.toLowerCase().includes(normalizedQuery)) ||
      work.genre.toLowerCase().includes(normalizedQuery) ||
      work.centralTheme.toLowerCase().includes(normalizedQuery)
    );
  });

  const matchingAuthors = Object.values(AUTHORS).filter((author) => {
    if (!normalizedQuery) return true;
    return (
      author.name.toLowerCase().includes(normalizedQuery) ||
      author.literaryStyle.toLowerCase().includes(normalizedQuery) ||
      author.era.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-black/80 backdrop-blur-xl"
    >
      <div
        className="w-full max-w-2xl verse-glass border border-[#d8b4fe]/40 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.45)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="p-4 sm:p-5 border-b border-white/15 flex items-center gap-3 bg-[#100826]/80">
          <Search className="w-5 h-5 text-[#f5d076] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm trong VĂN HỌCVERSE: tên tác phẩm, tác giả, thể loại, từ khóa..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#9886bd] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#c7b6e8] hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs text-[#d8b4fe] hover:text-white rounded-lg border border-white/20"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-6">
          {/* Section: Tác phẩm */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#f5d076] pb-2 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#c084fc]" /> Tác phẩm ({matchingWorks.length})
              </span>
            </div>
            {matchingWorks.length === 0 ? (
              <p className="text-xs text-[#9886bd] py-4 italic">
                Không tìm thấy tác phẩm phù hợp.
              </p>
            ) : (
              <div className="divide-y divide-white/10 mt-1">
                {matchingWorks.slice(0, 8).map((work) => (
                  <button
                    key={work.slug}
                    onClick={() => {
                      onSelectWork(work.slug);
                      onClose();
                    }}
                    className="w-full text-left py-3 px-2.5 flex items-center justify-between group hover:bg-white/[0.08] rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={work.coverImage}
                        alt={work.title}
                        className="w-14 h-10 rounded-lg object-cover border border-white/20 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base font-bold text-white group-hover:text-[#f5d076] transition-colors truncate">
                            {work.title}
                          </span>
                          <span className="text-xs text-[#d8b4fe] shrink-0">
                            · Lớp {work.grade}
                          </span>
                          <span className="text-xs text-[#b5a4d9] hidden sm:inline shrink-0">
                            · {work.genre}
                          </span>
                        </div>
                        <p className="text-xs text-[#c7b6e8] mt-0.5 line-clamp-1">
                          {work.authorName} — {work.hookIntro}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d8b4fe] group-hover:text-[#f5d076] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section: Tác giả */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#f5d076] pb-2 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#c084fc]" /> Đại thi hào & Tác gia ({matchingAuthors.length})
              </span>
            </div>
            {matchingAuthors.length === 0 ? (
              <p className="text-xs text-[#9886bd] py-4 italic">
                Không tìm thấy tác giả phù hợp.
              </p>
            ) : (
              <div className="divide-y divide-white/10 mt-1">
                {matchingAuthors.slice(0, 5).map((author) => (
                  <button
                    key={author.id}
                    onClick={() => {
                      onSelectAuthor(author.id);
                      onClose();
                    }}
                    className="w-full text-left py-3 px-2.5 flex items-center justify-between group hover:bg-white/[0.08] rounded-xl transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base font-bold text-white group-hover:text-[#f5d076] transition-colors">
                          {author.name}
                        </span>
                        <span className="text-xs text-[#c7b6e8]">
                          ({author.birthDeath})
                        </span>
                      </div>
                      <p className="text-xs text-[#b5a4d9] mt-0.5 line-clamp-1">
                        {author.literaryStyle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d8b4fe] group-hover:text-[#f5d076] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-3.5 bg-[#090416]/90 border-t border-white/10 flex items-center justify-between text-[11px] text-[#b5a4d9]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5d076]" /> Gợi ý: Tìm kiếm "Vợ nhặt", "Sóng", "Tây Tiến", "Chí Phèo"...
          </span>
          <span>Nhấn ESC để đóng</span>
        </div>
      </div>
    </div>
  );
};
