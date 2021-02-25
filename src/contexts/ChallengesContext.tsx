import { createContext, useState } from "react";

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: React.ReactNode
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(1);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}
