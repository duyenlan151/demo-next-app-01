import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import styles from "../../styles/Home.module.css";
// components
import Blog from "../../components/blog";


function Blogs(res) {
  const [postList, setPostList] = useState([]);
  // console.log(res.data.articles);
  useEffect(() => {
    async function fetchPostList() {
      // ... goi api nen dung try catch de tranh loi xay ra
      try {
          let dataLocal = JSON.parse(localStorage.getItem("blogs"));
          if(!dataLocal){
            // axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d326a2552a9b4219b1c050c52f18c48b")
            // .then((res) => {
            //     setPostList(res.data.articles);
            //     localStorage.setItem("blogs", JSON.stringify(res.data.articles));
            // });
            // const res = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d326a2552a9b4219b1c050c52f18c48b');
            // const json = JSON.parse(res.data.articles);
            // console.log('json: ', res);
            // let temp = this.getStaticPaths();
            setPostList(res.data.articles);
          }else{
            setPostList(dataLocal);
          }
        
      } catch (error) {
        throw error;
      }
    }
    fetchPostList();
  }, []); // empty array chi chay dung 1 lan, khong bi phu thuoc

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Blogs List</h2>
      <Blog posts={postList}></Blog>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  console.log('get server');
  // Fetch data from external API
  const res = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d326a2552a9b4219b1c050c52f18c48b`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Blogs;
