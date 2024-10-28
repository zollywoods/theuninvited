import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.homePage}>
          <div className={styles.title}>
            the uninvited
          </div>
          <ul className={styles.menu}>
            <li className={styles.menuItem}> 
             the film
            </li>
            <li className={styles.menuItem} id={styles.menuItemTwo}> 
             the filmmakers
            </li>
            <li className={styles.menuItem} id={styles.menuItemThree}> 
             the cast
            </li>
            <li className={styles.menuItem} id={styles.menuItemFour}> 
             press
            </li>
            <li className={styles.menuItem} id={styles.menuItemFive}> 
             audience reaction
            </li>
            <li className={styles.menuItem} id={styles.menuItemSix}> 
             trailer and teasers gallery
            </li>
          </ul>
          <div className={styles.splashFlex}>
            <div className={styles.splashBlurb}>
              "an acting masterclass"
              <br/>
              <i className={styles.source}> Collider </i>
            </div>
            <div className={styles.splashRight}>
            <ul className={styles.menu}>
              <li className={styles.menuItem} id={styles.menuItemSeven}> 
              go deeper : the film workbook
              </li>
            </ul>
            </div>


          </div>
          <img src="/imgs/splash.png" alt="poster" className={styles.splashImage} />
          <div className={styles.names}>
            <div className={styles.name}>
            elizabeth <br/>
            reaser
            </div>
            <div className={styles.name}>
            walton <br/>
            goggins
            </div>
            <div className={styles.name}>
            lois <br/>
            smith
            </div>
            <div className={styles.name}>
            pedro <br/>
            pascal
            </div>
            <div className={styles.name}>
            rufus <br/>
            sewell
            </div>
            <div className={styles.name}>
            eva de <br/>
            dominici
            </div>
          </div>
          <div className={styles.actorImages}>  
            <img src="/imgs/actors/1_actor.png" className={styles.actorImage} alt="elizabeth" />
            <img src="/imgs/actors/2_actor.png" className={styles.actorImage} alt="walton" />
            <img src="/imgs/actors/3_actor.png" className={styles.actorImage} alt="lois" />
            <img src="/imgs/actors/4_actor.png" className={styles.actorImage} alt="pedro" />
            <img src="/imgs/actors/5_actor.png" className={styles.actorImage} alt="rufus" />
            <img src="/imgs/actors/6_actor.png" className={styles.actorImage} alt="eva" />
          </div>
          <div className={styles.textBox}>
            
          </div>
        </div>
      </main>
    </div>
  );
}
