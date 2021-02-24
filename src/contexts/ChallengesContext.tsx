import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleted: number; 
    startNewChallenge: () => void;
    activechallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel:  number;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activechallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeindex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeindex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleted, 
                startNewChallenge,
                activechallenge,
                resetChallenge,
                experienceToNextLevel,
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}