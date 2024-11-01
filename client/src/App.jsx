import ChatInput from "./components/ChatInput";
import Menu from "./components/Menu";
import WebsiteURL from "./components/WebsiteURL";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <main className="max-w-[1000px] mx-auto p-12 h-screen flex flex-col justify-between">
        <div>
          <div className="w-full flex justify-between items-end">
            <WebsiteURL />
            <Menu />
          </div>
          <div className="w-full flex flex-col items-center mt-20 gap-4">
            <img
              src={logo}
              alt="Skrape logo"
              loading="lazy"
              className="w-12 h-12"
            />
            <h1 className="text-3xl text-center text-text2 font-medium tracking-tight">
              Ask <span className="text-text">Skrape</span> <br /> about your
              website
            </h1>
          </div>
        </div>
        <ChatInput />
      </main>
      <div className="z-[-1] blur-[1000px] w-[800px] h-[600px] bg-text rounded-full absolute top-[-500px] right-[-200px] opacity-60" />
    </>
  );
}

export default App;
