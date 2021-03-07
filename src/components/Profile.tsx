import { useContext } from 'react';
import { ChallengesContext } from '../Context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { ChallengeBox } from './ChallengeBox';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/AndreTGama.png" alt="icon profile" />
            <div>
                <strong>Andre Gama</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}