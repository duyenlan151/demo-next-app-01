import React from "react";
import Detail from "../../components/blog/detail";

export default Detail;

export async function getServerSideProps({ params }) {
    return {
        props: { params }
    }
}