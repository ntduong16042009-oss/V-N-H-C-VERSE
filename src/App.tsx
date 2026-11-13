/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProgressBar } from './components/ProgressBar';
import { SearchModal } from './components/SearchModal';
import { AuthorModal } from './components/AuthorModal';
import { HomeView } from './views/HomeView';
import { WORKS } from './data/works';
import { AUTHORS } from './data/authors';
import { Author } from './types/literature';

// Lazy-loaded views for optimal Code Splitting & Core Web Vitals on Vercel
const LibraryView = lazy(() =>
  import('./views/LibraryView').then((m) => ({ default: m.LibraryView }))
);
const AuthorsView = lazy(() =>
  import('./views/AuthorsView').then((m) => ({ default: m.AuthorsView }))
);
const WorkDetailView = lazy(() =>
  import('./views/WorkDetailView').then((m) => ({ default: m.WorkDetailView }))
);
const StudyAndCompareView = lazy(() =>
  import('./views/StudyAndCompareView').then((m) => ({
    default: m.StudyAndCompareView,
  }))
);
const ExploreWorldView = lazy(() =>
  import('./views/UniversePagesView').then((m) => ({
    default: m.ExploreWorldView,
  }))
);
const AIAnalysisView = lazy(() =>
  import('./views/UniversePagesView').then((m) => ({
    default: m.AIAnalysisView,
  }))
);
const TimelineView = lazy(() =>
  import('./views/UniversePagesView').then((m) => ({
    default: m.TimelineView,
  }))
);
const CommunityView = lazy(() =>
  import('./views/UniversePagesView').then((m) => ({
    default: m.CommunityView,
  }))
);
const ProfileView = lazy(() =>
  import('./views/UniversePagesView').then((m) => ({
    default: m.ProfileView,
  }))
);

type StudyTab = 'compare' | 'flashcards' | 'quiz' | 'outliner';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeGradeParam, setActiveGradeParam] = useState<string | undefined>(undefined);
  const [exploreCategoryParam, setExploreCategoryParam] = useState<string>('all');
  const [currentWorkSlug, setCurrentWorkSlug] = useState<string>('vo-nhat');
  const [studyTab, setStudyTab] = useState<StudyTab>('compare');
  const [studyWorkSlug, setStudyWorkSlug] = useState<string>('vo-nhat');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedAuthorModal, setSelectedAuthorModal] = useState<Author | null>(null);

  // Persisted Bookmarks (Tủ sách cá nhân)
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('van_khoi_bookmarks');
      return saved ? JSON.parse(saved) : ['vo-nhat', 'song'];
    } catch {
      return ['vo-nhat', 'song'];
    }
  });

  // Persisted Mastered Flashcards
  const [masteredSlugs, setMasteredSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('van_khoi_mastered');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persisted Personal Notes per Work
  const [personalNotes, setPersonalNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('van_khoi_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Ensure dark class is always active for VĂN HỌCVERSE Galaxy aesthetic
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Sync Hash and Path on route change (supports both #hash and Vercel direct sub-paths)
  useEffect(() => {
    const syncRouteFromLocation = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const route = hash || path;

      if (!route || route === '/' || route === 'home') {
        setCurrentView('home');
      } else if (route.startsWith('tac-pham/')) {
        const slug = route.replace('tac-pham/', '');
        if (WORKS[slug]) {
          setCurrentWorkSlug(slug);
          setCurrentView('work');
        } else {
          setCurrentView('library');
        }
      } else if (route.startsWith('lop-')) {
        const grade = route.replace('lop-', '');
        setActiveGradeParam(grade);
        setCurrentView('library');
      } else if (route === 'tu-sach') {
        setActiveGradeParam('bookmarks');
        setCurrentView('library');
      } else if (route === 'thu-vien') {
        setActiveGradeParam(undefined);
        setCurrentView('library');
      } else if (route.startsWith('tac-gia/')) {
        const authorId = route.replace('tac-gia/', '');
        if (AUTHORS[authorId]) {
          setSelectedAuthorModal(AUTHORS[authorId]);
        }
        setCurrentView('authors');
      } else if (route === 'tac-gia') {
        setCurrentView('authors');
      } else if (route.startsWith('kham-pha')) {
        const sub = route.replace('kham-pha/', '').replace('kham-pha', '');
        setExploreCategoryParam(sub || 'all');
        setCurrentView('explore');
      } else if (route.startsWith('ai-phan-tich')) {
        const slug = route.replace('ai-phan-tich/', '').replace('ai-phan-tich', '');
        if (slug && WORKS[slug]) {
          setStudyWorkSlug(slug);
        }
        setCurrentView('ai-analysis');
      } else if (route === 'dau-tri') {
        setStudyTab('quiz');
        setCurrentView('quiz');
      } else if (route === 'dong-thoi-gian') {
        setCurrentView('timeline');
      } else if (route === 'cong-dong') {
        setCurrentView('community');
      } else if (route === 'ho-so') {
        setCurrentView('profile');
      } else if (route.startsWith('on-tap')) {
        const sub = route.replace('on-tap/', '').replace('on-tap', '');
        if (sub === 'compare' || sub === 'flashcards' || sub === 'quiz' || sub === 'outliner') {
          setStudyTab(sub);
        }
        setCurrentView('study');
      } else {
        setCurrentView('home');
      }
    };

    syncRouteFromLocation();
    window.addEventListener('hashchange', syncRouteFromLocation);
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => {
      window.removeEventListener('hashchange', syncRouteFromLocation);
      window.removeEventListener('popstate', syncRouteFromLocation);
    };
  }, []);

  // Update dynamic document title for SEO
  useEffect(() => {
    if (currentView === 'work' && WORKS[currentWorkSlug]) {
      const w = WORKS[currentWorkSlug];
      document.title = `${w.title} (${w.authorName}) – Phân tích Ngữ văn Lớp ${w.grade} | VĂN HỌCVERSE`;
    } else if (currentView === 'library') {
      document.title = activeGradeParam
        ? `Thư viện Tác phẩm Lớp ${activeGradeParam} | VĂN HỌCVERSE`
        : 'Thư viện Kiệt tác Tương tác | VĂN HỌCVERSE – Vũ trụ Văn học Số';
    } else if (currentView === 'authors') {
      document.title = 'Đại thi hào & Tác gia Văn học | VĂN HỌCVERSE';
    } else if (currentView === 'explore') {
      document.title = 'Khám phá Thế giới Văn học | VĂN HỌCVERSE';
    } else if (currentView === 'ai-analysis') {
      document.title = 'AI Phân tích Tác phẩm & Lập Dàn ý | VĂN HỌCVERSE';
    } else if (currentView === 'quiz') {
      document.title = 'Đấu trí Văn học & Thẻ nhớ 60 Giây | VĂN HỌCVERSE';
    } else if (currentView === 'timeline') {
      document.title = 'Dòng thời gian Lịch sử Văn học | VĂN HỌCVERSE';
    } else if (currentView === 'community') {
      document.title = 'Cộng đồng Yêu văn | VĂN HỌCVERSE';
    } else if (currentView === 'profile') {
      document.title = 'Hồ sơ Cá nhân & Tủ sách | VĂN HỌCVERSE';
    } else {
      document.title = 'VĂN HỌCVERSE – Vũ trụ Văn học Số | Khám phá – Học hỏi – Trải nghiệm';
    }
  }, [currentView, currentWorkSlug, activeGradeParam]);

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (view: string, param?: string) => {
    if (view === 'home') {
      window.location.hash = '';
      setCurrentView('home');
    } else if (view === 'library') {
      if (param === 'bookmarks') {
        window.location.hash = 'tu-sach';
        setActiveGradeParam('bookmarks');
      } else if (param) {
        window.location.hash = `lop-${param}`;
        setActiveGradeParam(param);
      } else {
        window.location.hash = 'thu-vien';
        setActiveGradeParam(undefined);
      }
      setCurrentView('library');
    } else if (view === 'authors') {
      window.location.hash = 'tac-gia';
      setCurrentView('authors');
    } else if (view === 'explore') {
      const cat = param || 'all';
      setExploreCategoryParam(cat);
      window.location.hash = cat === 'all' ? 'kham-pha' : `kham-pha/${cat}`;
      setCurrentView('explore');
    } else if (view === 'ai-analysis') {
      if (param && WORKS[param]) {
        setStudyWorkSlug(param);
        window.location.hash = `ai-phan-tich/${param}`;
      } else {
        window.location.hash = 'ai-phan-tich';
      }
      setCurrentView('ai-analysis');
    } else if (view === 'quiz') {
      setStudyTab('quiz');
      window.location.hash = 'dau-tri';
      setCurrentView('quiz');
    } else if (view === 'timeline') {
      window.location.hash = 'dong-thoi-gian';
      setCurrentView('timeline');
    } else if (view === 'community') {
      window.location.hash = 'cong-dong';
      setCurrentView('community');
    } else if (view === 'profile') {
      window.location.hash = 'ho-so';
      setCurrentView('profile');
    } else if (view === 'study') {
      const tab = (param as StudyTab) || 'compare';
      setStudyTab(tab);
      window.location.hash = `on-tap/${tab}`;
      setCurrentView('study');
    } else if (view === 'work' && param) {
      window.location.hash = `tac-pham/${param}`;
      setCurrentWorkSlug(param);
      setCurrentView('work');
    }
  };

  const handleSelectWork = (slug: string) => {
    if (WORKS[slug]) {
      window.location.hash = `tac-pham/${slug}`;
      setCurrentWorkSlug(slug);
      setCurrentView('work');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectAuthor = (authorId: string) => {
    if (AUTHORS[authorId]) {
      setSelectedAuthorModal(AUTHORS[authorId]);
    }
  };

  const handleToggleBookmark = (slug: string) => {
    setBookmarkedSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('van_khoi_bookmarks', JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  const handleToggleMastered = (slug: string) => {
    setMasteredSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('van_khoi_mastered', JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  const handleSavePersonalNote = (slug: string, note: string) => {
    setPersonalNotes((prev) => {
      const next = { ...prev, [slug]: note };
      try {
        localStorage.setItem('van_khoi_notes', JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  const handleOpenOutlinerForWork = (slug: string) => {
    setStudyWorkSlug(slug);
    window.location.hash = `ai-phan-tich/${slug}`;
    setCurrentView('ai-analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCompareForWork = (slug: string) => {
    setStudyWorkSlug(slug);
    setStudyTab('compare');
    window.location.hash = 'on-tap/compare';
    setCurrentView('study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentWork = WORKS[currentWorkSlug] || Object.values(WORKS)[0];

  return (
    <div className="min-h-screen flex flex-col galaxy-bg text-[#f5f0ff] relative">
      {/* Animated Cosmic Starfield Layer */}
      <div className="pointer-events-none fixed inset-0 starfield-layer z-0" />

      {/* Scroll Reading Progress Bar */}
      <ProgressBar />

      {/* Top Bar Header */}
      <Header
        currentView={
          currentView === 'library' && activeGradeParam
            ? `library-${activeGradeParam}`
            : currentView
        }
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        bookmarkedCount={bookmarkedSlugs.length}
      />

      {/* Main View Router with Suspense for Code Splitting */}
      <main className="flex-1 relative z-10">
        <Suspense
          fallback={
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#d8b4fe]/30 border-t-[#f5d076] animate-spin" />
              <p className="text-xs font-medium text-[#d4c6f0] tracking-wider uppercase">
                Đang mở cổng không gian VĂN HỌCVERSE...
              </p>
            </div>
          }
        >
          {currentView === 'home' && (
            <HomeView
              onSelectWork={handleSelectWork}
              onSelectGrade={(grade) => handleNavigate('library', grade)}
              onSelectAuthor={handleSelectAuthor}
              onOpenSearch={() => setIsSearchOpen(true)}
              onNavigate={handleNavigate}
              bookmarkedSlugs={bookmarkedSlugs}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {currentView === 'library' && (
            <LibraryView
              initialGrade={activeGradeParam}
              onSelectWork={handleSelectWork}
              onSelectAuthor={handleSelectAuthor}
              bookmarkedSlugs={bookmarkedSlugs}
              onToggleBookmark={handleToggleBookmark}
              onOpenOutlinerForWork={handleOpenOutlinerForWork}
            />
          )}

          {currentView === 'authors' && (
            <AuthorsView
              onSelectAuthorModal={handleSelectAuthor}
              onSelectWork={handleSelectWork}
            />
          )}

          {currentView === 'explore' && (
            <ExploreWorldView
              key={exploreCategoryParam}
              initialCategory={exploreCategoryParam}
              onSelectWork={handleSelectWork}
              onSelectAuthor={handleSelectAuthor}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'ai-analysis' && (
            <AIAnalysisView
              key={studyWorkSlug}
              initialWorkSlug={studyWorkSlug}
              onSelectWork={handleSelectWork}
            />
          )}

          {currentView === 'quiz' && (
            <StudyAndCompareView
              key="quiz-arena"
              initialTab="quiz"
              initialWorkSlug={studyWorkSlug}
              onSelectWork={handleSelectWork}
              onSelectAuthor={handleSelectAuthor}
              masteredSlugs={masteredSlugs}
              onToggleMastered={handleToggleMastered}
            />
          )}

          {currentView === 'timeline' && (
            <TimelineView
              onSelectWork={handleSelectWork}
              onSelectAuthor={handleSelectAuthor}
            />
          )}

          {currentView === 'community' && (
            <CommunityView onSelectWork={handleSelectWork} />
          )}

          {currentView === 'profile' && (
            <ProfileView
              bookmarkedSlugs={bookmarkedSlugs}
              masteredSlugs={masteredSlugs}
              personalNotes={personalNotes}
              onSelectWork={handleSelectWork}
              onToggleBookmark={handleToggleBookmark}
              onSavePersonalNote={handleSavePersonalNote}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'study' && (
            <StudyAndCompareView
              key={`${studyTab}-${studyWorkSlug}`}
              initialTab={studyTab}
              initialWorkSlug={studyWorkSlug}
              onSelectWork={handleSelectWork}
              onSelectAuthor={handleSelectAuthor}
              masteredSlugs={masteredSlugs}
              onToggleMastered={handleToggleMastered}
            />
          )}

          {currentView === 'work' && (
            <WorkDetailView
              work={currentWork}
              onSelectAuthor={handleSelectAuthor}
              onSelectWork={handleSelectWork}
              onBackToLibrary={() => handleNavigate('library')}
              isBookmarked={bookmarkedSlugs.includes(currentWork.slug)}
              onToggleBookmark={handleToggleBookmark}
              personalNote={personalNotes[currentWork.slug] || ''}
              onSavePersonalNote={handleSavePersonalNote}
              onOpenOutliner={handleOpenOutlinerForWork}
              onOpenCompare={handleOpenCompareForWork}
            />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Search Command Palette Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectWork={handleSelectWork}
        onSelectAuthor={handleSelectAuthor}
      />

      {/* Author Dossier Modal */}
      <AuthorModal
        author={selectedAuthorModal}
        onClose={() => setSelectedAuthorModal(null)}
        onSelectWork={handleSelectWork}
      />
    </div>
  );
}
