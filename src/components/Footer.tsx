import React from 'react';
import { Sparkles, BookOpen, Brain, Gamepad2, Clock, Users } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (view: string, param?: string) => {
    onNavigate(view, param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070312]/90 backdrop-blur-xl text-[#b5a4d9] text-xs pt-14 pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Vision */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-bold tracking-wider">
                <span className="text-white">VĂN HỌC</span>
                <span className="bg-gradient-to-r from-[#d8b4fe] via-[#b490ff] to-[#818cf8] bg-clip-text text-transparent">
                  VERSE
                </span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 border border-purple-400/30 text-[#e9d5ff] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#f5d076]" /> Vũ trụ Văn học Số
              </span>
            </div>
            <p className="text-sm text-[#c7b6e8] max-w-md leading-relaxed">
              Bước vào vũ trụ văn học, khám phá những câu chuyện bất tận. Nền tảng kết hợp nghệ thuật văn chương cổ điển và công nghệ tương lai: Tác phẩm tương tác, AI phân tích chuyên sâu, Đấu trí văn học, Dòng thời gian và Cộng đồng yêu văn.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#f5d076] font-medium">
              <span>✦ Khám phá – Học hỏi – Trải nghiệm</span>
              <span aria-hidden="true">·</span>
              <span>Chương trình GDPT 2018 & Văn học Thế giới</span>
            </div>
          </div>

          {/* Col 2: Thế giới Văn học */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Thế giới Văn học
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => go('library')}
                  className="hover:text-[#f5d076] transition-colors text-left flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#c084fc]" /> Thư viện Tác phẩm Tương tác
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('library', '10')}
                  className="hover:text-[#f5d076] transition-colors text-left"
                >
                  Ngữ văn Lớp 10 (Trung đại & Dân gian)
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('library', '11')}
                  className="hover:text-[#f5d076] transition-colors text-left"
                >
                  Ngữ văn Lớp 11 (Thơ Mới & Hiện thực)
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('library', '12')}
                  className="hover:text-[#f5d076] transition-colors text-left"
                >
                  Ngữ văn Lớp 12 (Kháng chiến & Đổi mới)
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('authors')}
                  className="hover:text-[#f5d076] transition-colors text-left"
                >
                  Chân dung Đại thi hào & Tác gia
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tính năng Vũ trụ */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Không gian Trải nghiệm
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => go('ai-analysis')}
                  className="hover:text-[#f5d076] transition-colors text-left flex items-center gap-2"
                >
                  <Brain className="w-3.5 h-3.5 text-[#c084fc]" /> AI Phân tích & Lập dàn ý
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('quiz')}
                  className="hover:text-[#f5d076] transition-colors text-left flex items-center gap-2"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-[#818cf8]" /> Đấu trí Văn học & Thẻ nhớ 60s
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('timeline')}
                  className="hover:text-[#f5d076] transition-colors text-left flex items-center gap-2"
                >
                  <Clock className="w-3.5 h-3.5 text-[#38bdf8]" /> Dòng thời gian Lịch sử Văn học
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('community')}
                  className="hover:text-[#f5d076] transition-colors text-left flex items-center gap-2"
                >
                  <Users className="w-3.5 h-3.5 text-[#f472b6]" /> Cộng đồng Yêu văn
                </button>
              </li>
              <li>
                <button
                  onClick={() => go('profile')}
                  className="hover:text-[#f5d076] transition-colors text-left"
                >
                  Hồ sơ Cá nhân & Tủ sách
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic Product & Contact Info Section */}
        <div className="py-7 border-b border-white/10">
          <div className="verse-glass rounded-2xl p-5 sm:p-6 border border-[#b490ff]/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-[11px] font-bold uppercase tracking-wider text-[#f5d076]">
                <Sparkles className="w-3.5 h-3.5" /> Sản phẩm Học tập Số · Môn Ngữ văn
              </div>
              <div className="text-sm sm:text-base text-white font-semibold">
                Giáo viên: <strong className="text-[#f5d076]">Võ Thị Mỹ Ngà</strong>
              </div>
            </div>

            <div className="space-y-2 lg:text-right">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#d8b4fe]">
                Thông tin liên hệ
              </div>
              <div className="flex flex-wrap lg:justify-end items-center gap-2.5 text-sm font-semibold text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15">
                  Bùi Trung Kiên
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15">
                  Đỗ Ngọc Long
                </span>
              </div>
              <div className="text-xs text-[#ece3ff] space-y-1 pt-0.5">
                <p>
                  Học sinh lớp: <strong className="text-[#f5d076]">12A03</strong> · Khóa:{' '}
                  <strong className="text-white">2024–2027</strong> ·{' '}
                  <strong className="text-white">Trường THPT Yên Lãng</strong>
                </p>
                <p className="text-[#c7b6e8]">
                  Năm học: <strong className="text-white">2026–2027</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9886bd]">
          <p>
            © {new Date().getFullYear()} VĂN HỌCVERSE — Sản phẩm Học tập Số Môn Ngữ văn · Lớp 12A03 (2024–2027) · Trường THPT Yên Lãng.
          </p>
          <p className="italic font-serif text-[#d8b4fe]">
            “Văn học là tấm gương phản chiếu cuộc sống, là nhịp cầu nối những tâm hồn qua thời gian.” — Nguyễn Đình Thi
          </p>
        </div>
      </div>
    </footer>
  );
};
