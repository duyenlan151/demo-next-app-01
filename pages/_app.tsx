import Head from "next/head";
import Nav from "../shared/components/layouts/Nav";
import '/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="root-app">
      <Head>
        <title>Next.js 10 - CRUD Example with React Hook Form</title>

        {/* bootstrap css */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
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
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossOrigin="anonymous"></script>
      </Head>

      <div className="app-container bg-light">
        <Nav/>
        {/* <Alert /> */}
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>

      {/* credits */}
      <div className="text-center mt-4">
        <p>
          <a
            href="https://jasonwatmore.com/post/2021/04/20/next-js-10-crud-example-with-react-hook-form"
            target="_top"
          >
            Next.js 10 - CRUD Example with React Hook Form
          </a>
        </p>
        <p>
          <a href="https://jasonwatmore.com" target="_top">
            JasonWatmore.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default MyApp;
