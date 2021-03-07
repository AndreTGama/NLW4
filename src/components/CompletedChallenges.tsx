import { useContext } from 'react';
import { ChallengesContext } from '../Context/ChallengesContext';
import styles from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>
                {challengesCompleted}
            </span>
        </div>
    )
}