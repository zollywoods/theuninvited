import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function thefilm() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Uninvited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.homePage}>
            <div className={styles.title}>
              <a className={styles.menuItemLink} href="/">
                the uninvited
              </a>
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
            <li className={styles.menuItem} id={styles.menuItemSeven}> 
              the film workbook
              </li>

          </ul>
          
          {/* <div className={styles.splashFlex}>
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
          </div> */}
            <div className={styles.innerPageTitle}> 
              the film 
             </div>


          <img src="/imgs/sammy.png" alt="poster" className={styles.splashImage} />
          <div className={styles.textBoxInnerPage}>
            <div className={styles.textBoxInnerPageHeader}>
              the synopsis
            </div>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Semper interdum odio nunc auctor blandit. Tempor velit inceptos a ad augue praesent maximus orci. Lacus phasellus suscipit quis; sodales orci sagittis. In egestas arcu viverra dictumst suscipit vitae lobortis. Dolor tellus elit eu quis tempus eu diam a. Facilisis diam pulvinar augue cursus primis donec consectetur. Finibus primis in finibus nullam ornare massa egestas molestie ipsum. Porta nulla fames est morbi aliquet. Pharetra nostra auctor ullamcorper phasellus in semper dapibus torquent.

Cras amet consectetur proin turpis sociosqu felis pharetra habitant sodales. In tempor ante tempus donec dictumst amet quis. Elit proin blandit maecenas venenatis malesuada quis tincidunt tristique nisl. Fermentum sodales vestibulum ante; eleifend est curae. Curae id urna consectetur commodo at consequat finibus. Sodales fusce mi morbi; lectus aenean id duis quis. Semper interdum sem condimentum eu eu luctus hac mi primis. Vulputate nascetur eros curae; fames eget quis. Elementum mauris elementum sagittis enim mollis aliquet curabitur.

Anetus suscipit nibh molestie curae.   <br/><br/> Tempor ac aliquet proin ex quisque neque gravida. Iaculis vestibulum montes dapibus primis posuere arcu felis. Facilisis leo lacus diam eu magnis pulvinar torquent. Urna duis accumsan condimentum feugiat vivamus. Sem semper dis vivamus potenti posuere hac. Sit rhoncus facilisi eros ornare ut per at vitae. In nulla lorem sit, eget natoque conubia fringilla. Congue malesuada ultrices vehicula rhoncus massa.

Diam parturient quis placerat proin phasellus. <br/><br/>Felis  ligula aliquam per arcu vestibulum tortor tellus. Vulputate mattis quisque laoreet placerat, porttitor euismod. Nibh convallis sit morbi malesuada lacinia netus. Tristique augue nisi ullamcorper ultricies nibh finibus. Malesuada varius parturient viverra et ut non erat parturient. Mollis quam tempor conubia elementum sociosqu commodo. Laoreet hendrerit senectus leo massa tortor elementum.


          </div>
        </div>
      </main>
    </div>
  );
}
