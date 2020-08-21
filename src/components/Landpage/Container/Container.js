import styles from './style.module.css';
import { useState, useEffect } from 'react';

import MainText from '../Main Text/Main Text';

const Images = [
  { class: 'first-image', copyright: 'Gerald Rhemann', href: "http://www.astrostudio.at/aboutme.php", text: "Find out Amazing things"},
  { class: 'second-image', copyright: 'Nasa Gallery', href: "https://www.nasa.gov", text: "Learn About the Space"},
  { class: 'third-image', copyright: 'Hirofumi Okubo', href: "https://www.flickr.com/people/bluemoonlife/", text: "Explore the Cosmos" },
]

function Container({ children }) {

  const [currentImage, setCurrentImage] = useState(0);
  //const [animation, setAnimation] = useState('fade-in');
  //Number to reference the element

  useEffect(() => {
    const changer = setTimeout(() => {
      if(currentImage == 2){
        setCurrentImage(0);
      }else{
        setCurrentImage(currentImage + 1);
      }
    }, 6000);

    /*const fadeOut = setTimeout(()=>{
      console.log("Faded out")
      setAnimation('fade-out');
    }, 5600);

    const fadeIn = setTimeout(()=>{
      console.log("Faded In")
      setAnimation('fade-in');
    }, 6100);*/

    return (()=> {
      clearTimeout(changer);
      //clearTimeout(fadeOut);
      //clearTimeout(fadeIn);
    });
  });

  return (
    <main className={`${styles.container} ${styles[Images[currentImage].class]}` /*${styles[animation]}*/}>
      <div className={styles.copyright}>
        Copyright <br />
        <a className={styles.a} href={Images[currentImage].href} target="_blank">
          {Images[currentImage].copyright}
          </a>
      </div>
      <section className={`container ${styles.section}`}>
        <MainText text={Images[currentImage].text}/>
        {children}
      </section>
    </main>
  )
}

export default Container;