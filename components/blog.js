import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Blog(props) {
  const { posts } = props;
  return (
    <div>
      <div className="container" style={{ marginTop: "25px" }}>
        <div className="row">
          <div className="column">
            <div className="container-fluid">
              <div className="d-flex flex-row flex-wrap justify-content-center">
                  { posts && posts.map((blog, index) => (
                      <Link
                        key={blog.url}
                        href={{
                          pathname: "/blogs/[id]",
                          query: { id: blog.url },
                        }}
                      >
                         <div className="d-flex flex-column" style={{maxWidth: '260px', position:'relative'}}>
                            <img style={{margin: "5px"}} src={blog.urlToImage}/>
                            <div><p><strong>{blog.title}</strong></p>
                            <p>{(blog.publishedAt = new Date().toDateString())}</p></div>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
