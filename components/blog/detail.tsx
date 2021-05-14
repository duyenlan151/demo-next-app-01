import React, { useEffect, useState, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import Select from "react-select";

const schema = yup.object().shape({
  author: yup.string().required(),
  title: yup.string().required(),
  content: yup.string().required(),
  description: yup.string().required(),
  publishedAt: yup.date().required(),
});

interface IFormInput{
  author: string,
  title: string,
  content: string,
  description: string,
  publishedAt: Date,
}

function Detail(props){
    const { id } = props.params;
    const [data, setData] = useState({});
    const [myBlog, setMyBlog] = useState({});
    const [isEdit, setIsEdit] = useState(true);

    useEffect(() => {   
        let dataLocal = JSON.parse(localStorage.getItem('blogs'));
        let blog = dataLocal.find((elm) => elm.url = id);
        setMyBlog(blog);
    }, [])

    // Submit lưu data
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setIsEdit(true);
    }

    // handle click butotn edit
    const handleClick = () => {
        setIsEdit(!isEdit);
        reset();
    }

    // Listen myBLog if data change
    useEffect(() => {
      reset(myBlog)
    }, [myBlog]);

    // React hook  form config
    const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormInput>({
      defaultValues: myBlog,
      resolver: yupResolver(schema)
    });
    
    // handle on submit data when edit form
    const onSubmit = (data, e) => {
      e.preventDefault();

      let localData =  JSON.parse(localStorage.getItem("blogs"));
      let index = localData.findIndex((elm) => elm['url'] === id);
      localData[index] = data;
      
      localStorage.setItem("blogs", JSON.stringify(localData));
      setMyBlog(data);
      setIsEdit(true);
      reset();
    };
    // console.log(watch("example")); // watch input value by passing the name of it

    return(
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "25px" }}>
          <div className="text-right">
            { isEdit && 
                <button type="button" onClick={handleClick} className='btn btn-warning'>Chỉnh sửa</button>
            }
            { !isEdit && 
            <div className="d-flex justify-content-end">
              <button type="submit" className='btn btn-success'>Cập nhật</button>
              <button type="button" onClick={handleClick} className='ml-2 btn btn-danger'>Hủy</button>
            </div>
              
            }
          </div>
          {myBlog && (
            <div>
              <div className="form-group">
                <label htmlFor="pwd">Author:</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  {...register("author")} 
                  disabled={isEdit}
                />
                {errors.author?.message && <div className="mt-1 text-danger">{errors.author?.message}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  {...register("title")} 
                  disabled={isEdit}
                />
                {errors.title?.message && <div className="mt-1 text-danger">{errors.title?.message}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Images:</label>
                <div>
                  <img
                    src={myBlog['urlToImage']}
                    style={{maxWidth: '100%'}}
                  ></img>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Content:</label>
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  {...register("content")} 
                  disabled={isEdit}
                />
                {errors.content?.message && <div className="mt-1 text-danger">{errors.content?.message}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  {...register("description")} 
                  disabled={isEdit}
                />
                {errors.description?.message && <div className="mt-1 text-danger">{errors.description?.message}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Date Create:</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  {...register("publishedAt")} 
                  disabled={isEdit}
                />
              </div>
            </div>
          )}
        </form>
    )
}


export default Detail;