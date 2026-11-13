import React from 'react';
import { X, BookOpen, Quote, Sparkles, Feather } from 'lucide-react';
import { Author } from '../types/literature';
import { WORKS } from '../data/works';

interface AuthorModalProps {
  author: Author | null;
  onClose: () => void;
  onSelectWork: (slug: string) => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({
  author,
  onClose,
  onSelectWork,
}) => {
  if (!author) return null;

  const authorWorksInLibrary = Object.values(WORKS).filter(
    (w) => w.authorId === author.id
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] verse-glass border border-[#d8b4fe]/40 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.5)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#100826]/95 backdrop-blur-xl p-5 sm:p-6 border-b border-white/15 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#a855f7] to-[#6366f1] border border-white/25 flex items-center justify-center text-white shadow">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {author.name}
              </h3>
              <p className="text-xs text-[#c7b6e8] tabular-nums">
                {author.birthDeath} · {author.birthplace}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {author.quote && (
            <div className="p-5 rounded-2xl bg-purple-500/15 border border-purple-400/30">
              <Quote className="w-5 h-5 text-[#f5d076] mb-1.5" />
              <p className="font-serif italic text-sm sm:text-base text-white leading-relaxed">
                “{author.quote}”
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5d076] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Phong cách nghệ thuật
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#ece3ff]">
                {author.literaryStyle}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d8b4fe] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Quan niệm nghệ thuật
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#ece3ff]">
                {author.aestheticView}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5d076]">
              Dấu mốc sự nghiệp & Đóng góp lớn
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#ece3ff]">
              {author.careerMilestones.map((milestone, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#f5d076] font-bold">✦</span>
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/[0.05] rounded-2xl border border-white/15 text-xs sm:text-sm text-[#d4c6f0]">
              <strong className="text-white">Đóng góp cho nền văn học:</strong>{' '}
              {author.contributions}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c7b6e8]">
              Tác phẩm tiêu biểu trong sự nghiệp
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#f5d076] leading-relaxed">
              {author.majorWorks.join('  ·  ')}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d8b4fe]">
              Tác phẩm có trong VĂN HỌCVERSE ({authorWorksInLibrary.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {authorWorksInLibrary.map((work) => (
                <button
                  key={work.slug}
                  onClick={() => {
                    onSelectWork(work.slug);
                    onClose();
                  }}
                  className="p-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#f5d076] text-left transition-all group flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={work.coverImage}
                      alt={work.title}
                      className="w-12 h-10 rounded-lg object-cover border border-white/20 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <span className="font-serif font-bold text-sm text-white group-hover:text-[#f5d076] block truncate">
                        {work.title}
                      </span>
                      <p className="text-[11px] text-[#c7b6e8]">
                        Lớp {work.grade} · {work.genre}
                      </p>
                    </div>
                  </div>
                  <BookOpen className="w-4 h-4 text-[#d8b4fe] group-hover:text-[#f5d076] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
