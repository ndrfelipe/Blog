import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}) {
    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/ndrfelipe.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={ styles.authorAndTime}>
                            <strong>André Braga</strong>
                            <time title='23 de Fevereiro às 00:25h' dateTime='2025-02-23 00:25:01'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}