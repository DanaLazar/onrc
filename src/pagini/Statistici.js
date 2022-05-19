import { useState } from "react";
import MainImg from "../components/MainImg";
import Statistics from "../components/Statistics";
import { StatContext } from '../util/Context'

const Statistici = () => {
  const [ctxid, setId] = useState(239);
  const value = { ctxid, setId };
  return (
    <div className="page">
      <StatContext.Provider value={value}>
          <MainImg />
          <Statistics />
      </StatContext.Provider>
    </div>
  )
}

export default Statistici