import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { About } from "./components/About";
import { CommandPalette } from "./components/chrome/CommandPalette";
import { Navigation } from "./components/chrome/Navigation";
import { ScrollProgress } from "./components/chrome/ScrollProgress";
import { Spotlight } from "./components/chrome/Spotlight";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

const App = () => {
  const { t } = useTranslation();
  const [commandOpen, setCommandOpen] = useState(false);
  useDocumentMeta();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-acid focus:px-5 focus:py-3 focus:font-medium focus:text-acid-ink"
      >
        {t("a11y.skipToContent")}
      </a>

      <ScrollProgress />
      <Spotlight />
      <Navigation onOpenCommand={() => setCommandOpen(true)} />

      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Journey />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </div>
  );
};

export default App;
