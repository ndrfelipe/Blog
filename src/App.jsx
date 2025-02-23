import { Header } from "./components/Header";
import { Post }  from "./components/Post";

import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
        <Header />

        <div className= {styles.wrapper}>
          
          <aside>
            <Sidebar />
          </aside>
        
          <main>
            <Post 
              author='André Braga' 
              content='I am a Software Developer!' 
            />
            <Post 
              author='Ana Clara' 
              content='I am a FullStack Developer!' 
            />
            <Post 
              author='João Victor' 
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur, minima pariatur quas perferendis quo enim, soluta hic aperiam ab odit vero aliquam quam obcaecati voluptatibus dolore voluptates aliquid reiciendis.' 
            />
          </main>
          
        </div>
        
    </>
   
  )
}

