import { useState } from 'react';
import styles from './ModalAuth.module.scss';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

export default function ModalAuth({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    }

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                <div className={styles.tabs}>
                    <button
                        className={styles.activeTab === 'login' ? 'active' : ''}
                        onClick={() => handleTabSwitch(login)}>
                        Log in
                    </button>
                    <button
                        className={styles.activeTab === 'register' ? 'active' : ''}
                        onClick={() => handleTabSwitch(register)}
                    >
                        Registration
                    </button>
                </div>
                <div className={styles.tabsContent}>
                    {activeTab === 'login' ? <Login /> : <Registration />}
                </div>
            </div>
        </div>
    )
}