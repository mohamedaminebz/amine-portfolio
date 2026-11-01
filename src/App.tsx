import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { About } from "./components/v3/About";
import { Arsenal } from "./components/v3/Arsenal";
import { CaseStudy } from "./components/v3/CaseStudy";
import { Contact } from "./components/v3/Contact";
import { Footer } from "./components/v3/Footer";
import { Header } from "./components/v3/Header";
import { Hero } from "./components/v3/Hero";
import { Journey } from "./components/v3/Journey";
import { NoteReader } from "./components/v3/NoteReader";
import { Notes } from "./components/v3/Notes";
import { ScrollProgress } from "./components/v3/ScrollProgress";
import { Work } from "./components/v3/Work";
import { getNote, getNotes } from "./data/notes";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { useHashRoute, useInitialHashScroll } from "./hooks/useHashRoute";
import { usePortfolioData } from "./hooks/usePortfolioData";

const App = () => {
  const { t, i18n } = useTranslation();
  const data = usePortfolioData();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const notes = getNotes(language);
  const { caseId, noteSlug, openCase, openNote, close } = useHashRoute();

  const closeCase = useCallback(() => close("work"), [close]);
  const closeNote = useCallback(() => close("notes"), [close]);

  const project = caseId
    ? data.projects.find((item) => item.id === caseId)
    : undefined;
  const note = noteSlug ? getNote(noteSlug, language) : undefined;
  const noteProject = note?.projectId
    ? data.projects.find((item) => item.id === note.projectId)
    : undefined;

  const titleOverride = project
    ? `${project.title} — ${data.personalInfo.name}`
    : note
      ? `${note.title} — ${data.personalInfo.name}`
      : undefined;
  const descriptionOverride = project?.subtitle ?? note?.dek;

  useDocumentMeta(titleOverride, descriptionOverride);
  useInitialHashScroll();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-medium focus:text-brand-ink"
      >
        {t("a11y.skipToContent")}
      </a>

      <ScrollProgress />
      <Header />

      <main id="main-content">
        <Hero />
        <Work projects={data.projects} onOpenCase={openCase} />
        <About data={data} onOpenCase={openCase} />
        <Journey data={data} />
        <Notes notes={notes} onOpenNote={openNote} />
        <Arsenal data={data} />
        <Contact />
      </main>

      <Footer />

      {project ? (
        <CaseStudy
          project={project}
          projects={data.projects}
          onClose={closeCase}
          onNavigate={openCase}
        />
      ) : null}

      {note ? (
        <NoteReader
          note={note}
          notes={notes}
          project={noteProject}
          onClose={closeNote}
          onNavigate={openNote}
          onOpenCase={openCase}
        />
      ) : null}
    </div>
  );
};

export default App;
