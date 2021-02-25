import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activechallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);  
    const { resetCountDown } = useContext(CountDownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activechallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activechallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activechallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activechallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSuccededButton}
                            onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
                <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}