import { Steps } from "./components/steps";
import { LanguageSelect } from "./components/language-select";
import { Progress } from "./components/progress";
import { HomeButton } from "./components/buttons/home-button";
import { HeaderTitle } from "./components/header-title";
import { useProgressStore } from "./components/steps/store";
import { Feedback } from "./components/feedback";
import { Footer } from "./components/footer";
import { VerticalSidebarImage } from "./components/vertical-sidebar-image";

function App() {
  const currentStep = useProgressStore((state) => state.currentStep);

  return (
    <div className="flex w-full">
      <div className="sticky left-0 top-0 hidden h-screen w-2/5 bg-blue-950 md:flex xl:max-w-[550px] print:hidden">
        <VerticalSidebarImage />
      </div>

      <div className="font-berlin flex w-full flex-col items-center justify-between">
        <div className="flex h-full w-full flex-col">
          <div className="flex w-full md:hidden print:hidden">
            <Progress id={"mobile-progress-bar"} />
          </div>

          <header className="flex w-full items-center justify-between p-6 print:hidden">
            <HomeButton />
            <LanguageSelect />
          </header>

          <main className="flex h-full justify-center px-6 pb-10 pt-2 print:items-start">
            <div className="flex flex-col items-start">
              <HeaderTitle />
              <Steps />
            </div>
          </main>

          <Feedback />

          <div className="hidden w-full md:flex print:hidden">
            <Progress id={"desktop-progress-bar"} />
          </div>

          <div
            className={`w-full border-b border-b-berlin-black-40 ${
              currentStep === 0 || currentStep === 16
                ? "flex"
                : "hidden md:flex"
            } `}
          ></div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
