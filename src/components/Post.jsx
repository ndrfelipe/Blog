import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({author, publishedAt, content}) {


    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>

            {content.map( line => {
                if (line.type == 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type == 'link') {
                    return <p><a href="#">{line.content}</a></p>;
                }
            })}
            
        </div>

        <form className={ styles.commentForm} action="">
            <strong>
                Deixe seu feedback
                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
                
            </strong>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>


       </article>
    )
}