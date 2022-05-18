import React from 'react'
import styles from './Footer.module.css'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import camara from '../../img/camara.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'
import youtube from '../../img/youtube.png'


export default function Footer() {
    return (
        <>
            <div id={styles.footer}>
                <div id={styles.listasFooter}>
                    <li>Legal Warning</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Quality Policy</li>
                </div>
                <div id={styles.logoContainer}>
                    <p id={styles.logo}>
                        AuraFlow
                    </p>
                    <div>
                        <img className={styles.imgIcon} src={camara} alt="" />
                        <img className={styles.imgIcon} src={facebook} alt="" />
                        <img className={styles.imgIcon} src={youtube} alt="" />
                        <img className={styles.imgIcon} src={whatsapp} alt="" />
                    </div>
                </div>
                <div id={styles.listasFooter}>
                    <li>Auraflow</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                    <li>Shipping</li>
                </div>

            </div>
            <div id={styles.copyright}>
                <p id={styles.copyrightText}>Developed by <a id={styles.copyrightTextA} href='https://www.linkedin.com/in/fraanguevara/'>Franco guevara</a> © </p>
                <a href="https://www.linkedin.com/in/fraanguevara/"><img className={styles.imgIconPersonal} src={linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/FraanGuevara"><img className={styles.imgIconPersonal} src={github} alt="github" /></a>
                <a href="https://www.instagram.com/fraan.guevara/"><img className={styles.imgIconPersonal} src={instagram} alt="instagram" /></a>
            </div>
        </>
    )
}
