import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import styles from "../../styles/Home.module.css";
// components
import Blog from "../../components/blog";

export default function Blogs() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      // ... goi api nen dung try catch de tranh loi xay ra
      try {
          let data = JSON.parse(localStorage.getItem("blogs"));
          if(!data){
            axios.get( "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d326a2552a9b4219b1c050c52f18c48b")
            .then((res) => {
                setPostList(res.data.articles);
                localStorage.setItem("blogs", JSON.stringify(res.data.articles));
            });
          }else{
            setPostList(data);
          }
        
      } catch (error) {
        throw error;
      }
    }
    fetchPostList();
  }, []); // empty array chi chay dung 1 lan, khong bi phu thuoc

  return (
    <div className={styles.container} style={{ marginTop: '80px' }}>/
      <h2 className={styles.title}>Blogs List</h2>
      <Blog posts={postList}></Blog>
    </div>
  );
}
