import styles from './Post.module.css'

export function Post() {
    return(
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/ndrfelipe.png" />
                <div className={styles.authorInfo}>
                    <strong>André Felipe</strong>
                    <span>Software Engineer</span>
                </div>
            </div>

            <time title='23 de Fevereiro às 00:25h' dateTime='2025-02-23 00:25:01'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>

            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="">👉 ndrfelipe/doctorcare</a></p>
            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            
        </div>
       </article>
    )
}