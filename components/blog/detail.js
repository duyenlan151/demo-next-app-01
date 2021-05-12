import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "Yup";

const schema = yup.object().shape({
    // firstName: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    title: yup.string().required(),
  });

function Detail(props){
    const { id } = props.params;
    const [data, setData] = useState({});
    const [myBlog, setMyBlog] = useState({});
    const [isEdit, setIsEdit] = useState(true);
    const formOptions = { resolver: yupResolver(schema) };
    // const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
     

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    

    useEffect(() => {   
        // let dataLocal = JSON.parse(localStorage.getItem('blogs'));
        // setMyBlog(dataLocal.find((elm) => elm.url === id));
        // console.log('register: ', validationSchema);   
        let dataLocal = JSON.parse(localStorage.getItem('blogs'));
        let blog = dataLocal.find((elm) => elm.url === id);
        const { password, confirmPassword, ...defaultValues } = blog;
        formOptions.defaultValues = defaultValues;
        console.log(formOptions);
        console.log(register);
    }, [myBlog])

    // Submit lưu data
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setIsEdit(true);
        // let id = myBlog[`${url}`]; 
        // let index =  data.findIndex((elm) => elm.url === id);
        // data[index] = myBlog;
        // localStorage.setItem("blogs", JSON.stringify(data));
        // router.push('/blogs');
    }

    const handleClick = () => {
        setIsEdit(false);
    }

    const handleValueChange = (e) => {
        console.log('value change');
        let key = e.target.id;
        let value = e.target.value;
    
        setMyBlog({
          ...myBlog,
          [key]: value
        });
    }

    return(
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("firstName")} />
    //   <p>{errors.firstName?.message}</p>
        
    //   <input {...register("age")} />
    //   <p>{errors.age?.message}</p>
      
    //   <input type="submit" />
    // </form>
        <form onSubmit={handleSubmitForm} style={{ marginTop: "25px" }}>
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
                  {...register("title")} 
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Images:</label>
                <div>
                  <img
                    src={myBlog.urlToImage}
                    // className={styles.img_thum}
                    style={{maxWidth: '100%'}}
                  ></img>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Content:</label>
                {/* <p>{myBlog.content}</p> */}
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  {...register("content")} 
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
                  {...register("description")} 
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Date Create:</label>
                {/* <p>{myBlog.content}</p> */}
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  {...register("publishedAt")} 
                  disabled={isEdit}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          )}
        </form>
    )
}


export default Detail;