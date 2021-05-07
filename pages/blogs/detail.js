import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

export default function Detail() {
  const router = useRouter();
  let { id } = router.query;

  const [data, setData] = useState({});
  const [myBlog, setMyBlog] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  //  const isEdit = useRef(false);

  function handleClick() {
    setIsEdit(false);
  }

  function handleValueChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    
    setMyBlog({
      ...myBlog,
      [key]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // data lưu dưới local store
    let id = myBlog.url; 
    let obj =  data.findIndex((elm) => elm.url === id);
    data[obj] = myBlog;
    localStorage.setItem("blogs", JSON.stringify(data));
    setIsEdit(true);

    router.push('/blogs');
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("blogs"));
    if (data) {
        setData(data);
        let item = data.find((item) => item.url === router.query.id);
        if (item) setMyBlog(item);
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>
      <div className={styles.edit}>
        {/* {console.log(
                    "LOG -> file: detail.js -> line 16 -> useEffect -> setMyBlog",
                    myBlog
                )} */}
        <h2 className={styles.title} style={{ marginTop: "50px" }}>
          Blogs Detail
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="text-right">
            { isEdit && 
                <button type="button" onClick={handleClick} className='btn btn-warning'>Chỉnh sửa</button>
            }
            { !isEdit && 
                <button type="submit" className='btn btn-success'>Cập nhật</button>
            }
          </div>
          {myBlog && (
            <div>
              <div className="form-group">
                <label htmlFor="pwd">Title:</label>
                {/* <h2>{myBlog.title}</h2> */}
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={myBlog.title}
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Images:</label>
                <div>
                  <img
                    src={myBlog.urlToImage}
                    className={styles.img_thum}
                  ></img>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Title:</label>
                {/* <p>{myBlog.content}</p> */}
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  value={myBlog.content}
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Description:</label>
                {/* <p>{myBlog.content}</p> */}
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={myBlog.description}
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Date Create:</label>
                {/* <p>{myBlog.content}</p> */}
                <input
                  type="text"
                  className="form-control"
                  id="Date"
                  value=""
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
