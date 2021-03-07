import { useContext, useState } from 'react';
import { ChallengesContext } from '../Context/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal} = useContext(ChallengesContext);
    return(
        <div className={styles.overLay}>
            <div className={styles.container}>
                <header>
                    {level}
                </header>
                <strong>
                    Parabéns
                </strong>
                <p>
                    Você Passou de Level
                </p>
                <button type="button" onClick={closeLevelUpModal} >
                    <img src="icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}