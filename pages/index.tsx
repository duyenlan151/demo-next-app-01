import Head from "next/head";
import Image from "next/image";
import axios from 'axios';
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { useRouter } from "next/router"

export default function Home() {
  const [myBanner, setMyBanner] = useState([]);
  // const trans = useTrans();
  const router = useRouter()

  useEffect(() => {
    async function fetchPostList() {
      // ... goi api nen dung try catch de tranh loi xay ra
      try {
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d326a2552a9b4219b1c050c52f18c48b').then(res => {
          setMyBanner(res.data.articles.splice(0, 5));
          localStorage.setItem("blogs", JSON.stringify(res.data.articles));
        });
      } catch (error) {
        throw error;
      }
    }
    fetchPostList();
    console.log(myBanner);
  }, []);// empty array chi chay dung 1 lan, khong bi phu thuoc 


  return (
    <div className={styles.container}>
      <main>
        <div id="band" className="container text-center">
          <h3>THE BAND</h3>
          <p>
            <em>We love music!</em>
          </p><br/>
          <p>
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
            <br/><br/>
        </div>
      </main>

      <footer className="text-center">
        <a
          className="up-arrow"
          href="#myPage"
          data-toggle="tooltip"
          title="TO TOP"
        >
          <span className="glyphicon glyphicon-chevron-up"></span>
        </a>
        <p>
          Bootstrap Theme Made By{" "}
          <a
            href="https://www.w3schools.com"
            data-toggle="tooltip"
            title="Visit w3schools"
          >
            www.w3schools.com
          </a>
        </p>
      </footer>
    </div>
  );
}
