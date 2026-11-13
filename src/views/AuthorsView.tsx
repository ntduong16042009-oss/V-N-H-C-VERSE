import React, { useState } from 'react';
import { BookOpen, Quote, ArrowRight, Sparkles, Feather } from 'lucide-react';
import { AUTHORS } from '../data/authors';
import { WORKS } from '../data/works';

interface AuthorsViewProps {
  onSelectAuthorModal: (id: string) => void;
  onSelectWork: (slug: string) => void;
}

export const AuthorsView: React.FC<AuthorsViewProps> = ({
  onSelectAuthorModal,
  onSelectWork,
}) => {
  const [activeAuthorId, setActiveAuthorId] = useState<string>('kim-lan');

  const authorsList = Object.values(AUTHORS);
  const activeAuthor = AUTHORS[activeAuthorId] || authorsList[0];

  const authorWorksInLibrary = Object.values(WORKS).filter(
    (w) => w.authorId === activeAuthor.id
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="verse-glass rounded-3xl p-6 sm:p-10 border border-[#b490ff]/35 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-[#f5d076]">
          <Feather className="w-3.5 h-3.5" /> Tinh vân Đại thi hào & Tác gia Văn học
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Chân dung Tác giả Văn học Việt Nam
        </h1>
        <p className="text-sm sm:text-base text-[#d4c6f0] max-w-2xl leading-relaxed">
          Khám phá tiểu sử, thời đại sống, phong cách nghệ thuật độc đáo và quan niệm thẩm mỹ của 12 tác gia tiêu biểu trong VĂN HỌCVERSE.
        </p>
      </div>

      {/* 2-Column Split: Author Selection Rail & Deep Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Author Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f5d076] px-1">
            Danh sách Đại thi hào & Tác gia ({authorsList.length})
          </h3>
          <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
            {authorsList.map((author) => {
              const isSelected = author.id === activeAuthorId;
              return (
                <button
                  key={author.id}
                  onClick={() => setActiveAuthorId(author.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#6d3fc0]/80 to-[#3b1d7a]/80 border-[#f5d076] text-white shadow-[0_0_24px_rgba(168,139,235,0.45)]'
                      : 'verse-glass text-[#d4c6f0] hover:text-white'
                  }`}
                >
                  <div>
                    <div className="font-serif font-bold text-base leading-snug text-white">
                      {author.name}
                    </div>
                    <div className="text-[11px] text-[#c7b6e8] tabular-nums mt-0.5">
                      {author.birthDeath} · {author.era}
                    </div>
                  </div>
                  {isSelected && (
                    <ArrowRight className="w-4 h-4 text-[#f5d076] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Author Detailed Dossier */}
        <div className="lg:col-span-8 verse-glass rounded-3xl p-6 sm:p-9 space-y-7">
          {/* Header of Dossier */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-serif text-[#f5d076] tracking-wider uppercase font-semibold">
                {activeAuthor.era}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                {activeAuthor.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#c7b6e8] mt-1 tabular-nums">
                {activeAuthor.birthDeath} · Quê quán: {activeAuthor.birthplace}
              </p>
            </div>

            <button
              onClick={() => onSelectAuthorModal(activeAuthor.id)}
              className="verse-btn-primary px-5 py-2.5 text-xs font-semibold text-white rounded-full shrink-0 whitespace-nowrap cursor-pointer"
            >
              Mở thẻ hồ sơ nhanh
            </button>
          </div>

          {/* Quote Card */}
          {activeAuthor.quote && (
            <div className="p-5 rounded-2xl bg-purple-500/15 border border-purple-400/30">
              <Quote className="w-5 h-5 text-[#f5d076] mb-2" />
              <p className="font-serif italic text-base sm:text-lg text-white leading-relaxed">
                “{activeAuthor.quote}”
              </p>
            </div>
          )}

          {/* Phong cách nghệ thuật & Quan niệm thẩm mỹ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5d076] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Phong cách nghệ thuật
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#ece3ff]">
                {activeAuthor.literaryStyle}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d8b4fe] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> Quan niệm nghệ thuật
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#ece3ff]">
                {activeAuthor.aestheticView}
              </p>
            </div>
          </div>

          {/* Sự nghiệp & Đóng góp */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5d076]">
              Sự nghiệp văn học & Đóng góp lớn
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#ece3ff]">
              {activeAuthor.careerMilestones.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#f5d076] font-bold">✦</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/[0.05] rounded-2xl border border-white/15 text-xs sm:text-sm text-[#d4c6f0]">
              <strong className="text-white">Đóng góp cho nền văn học:</strong>{' '}
              {activeAuthor.contributions}
            </div>
          </div>

          {/* Tác phẩm tiêu biểu */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c7b6e8]">
              Tác phẩm tiêu biểu trong sự nghiệp
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#f5d076] leading-relaxed">
              {activeAuthor.majorWorks.join('  ·  ')}
            </p>
          </div>

          {/* Tác phẩm có trong thư viện VĂN HỌCVERSE */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d8b4fe]">
              Kiệt tác của {activeAuthor.name} trong VĂN HỌCVERSE ({authorWorksInLibrary.length})
            </h4>
            {authorWorksInLibrary.length === 0 ? (
              <p className="text-xs text-[#b5a4d9] italic">
                Các tác phẩm khác của tác giả đang được cập nhật chuyên sâu vào cơ sở dữ liệu.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {authorWorksInLibrary.map((work) => (
                  <div
                    key={work.slug}
                    onClick={() => onSelectWork(work.slug)}
                    className="p-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#f5d076] cursor-pointer transition-all group flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={work.coverImage}
                        alt={work.title}
                        className="w-14 h-12 rounded-xl object-cover border border-white/20 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <span className="text-[11px] font-semibold text-[#f5d076]">
                          Lớp {work.grade} · {work.genre}
                        </span>
                        <h5 className="font-serif font-bold text-base text-white group-hover:text-[#d8b4fe] truncate">
                          {work.title}
                        </h5>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#d8b4fe] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
