
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
  // TO Add css in out next app yhere are various ways
  // 1. globals.css = This provide css which is applied to all pages of our project 
  // 2. Css Modules = give css in folloeing way to apply
  // 3. style jsx = when you want to heavily localized the components see about this in our about page works use client only 
  <div className={styles.red}>
    Hii How are you?
  </div>
  );
}
