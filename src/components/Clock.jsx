import { useState, useEffect } from "react";
import { CurrentTime } from "../functions/CurrentTime";

const Clock = () => {
  const [time, setTime] = useState(CurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = CurrentTime();
      setTime(currentTime);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <ul className="flex justify-between w-full gap-4">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 shadow-xl rounded-xl font-bold bg-dark-desaturated-blue text-4xl text-soft-red flex items-center justify-center">
            {time.dias}
          </div>
          <li className="tracking-widest">Dia</li>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 shadow-xl rounded-xl font-bold bg-dark-desaturated-blue text-4xl text-soft-red flex items-center justify-center">
            {time.horas}
          </div>
          <li className="tracking-widest">Hora</li>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 shadow-xl rounded-xl font-bold bg-dark-desaturated-blue text-4xl text-soft-red flex items-center justify-center">
            {time.minutos}
          </div>
          <li className="tracking-widest">Minutos</li>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 shadow-xl rounded-xl font-bold bg-dark-desaturated-blue text-4xl text-soft-red flex items-center justify-center">
            {time.segundos}
          </div>
          <li className="tracking-widest">Segundos</li>
        </div>
      </ul>
    </div>
  );
};

export default Clock;
