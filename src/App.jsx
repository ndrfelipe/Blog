import { Header } from "./components/Header";
import { Post }  from "./components/Post";

import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

// author: { avatar_url: "", name = "", office = ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avaraUrl: 'https://github.com/ndrfelipe.png',
      name: 'André Felipe',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'ndrfelipe/doctorcare'}
    ],
    publishedAt: new Date('2025-02-27 15:31:00'),
  },
  {
    id: 2,
    author: {
      avaraUrl: 'https://github.com/aanaclv.png',
      name: 'Ana Clara',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'ndrfelipe/doctorcare'}
    ],
    publishedAt: new Date('2025-02-25 15:31:00'),
  },


];


export function App() {
  return (
    <>
        <Header />

        <div className= {styles.wrapper}>
          
          <aside>
            <Sidebar />
          </aside>
        
          <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
          
        </div>
        
    </>
   
  )
}

