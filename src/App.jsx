import Estrelas from "../images/bg-stars.svg";
import Montanha from "../images/pattern-hills.svg";
import Clock from "./components/Clock";

const App = () => {
  return (
    <main className="h-screen w-screen font-text">
      <section className="bg-very-dark-blue text-white h-full w-full flex flex-col justify-center items-center">
        <div
          className="absolute h-full bg-cover w-full z-10"
          style={{ backgroundImage: `url(${Estrelas})` }}
        />
        <div
          className="absolute w-full h-40 bottom-0 bg-cover z-10"
          style={{ backgroundImage: `url(${Montanha})` }}
        />
        <div className="w-full flex flex-col items-center px-5">
          <h1 className="font-semibold tracking-wide">WE</h1>
          <Clock />
        </div>
      </section>
    </main>
  );
};

export default App;
