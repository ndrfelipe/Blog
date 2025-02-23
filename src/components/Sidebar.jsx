import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover} src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <img className={ styles.avatar} src="https://github.com/ndrfelipe.png" alt="" />
                <strong>André Braga</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}