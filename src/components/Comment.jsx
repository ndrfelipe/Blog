import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1;
        });
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    
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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}