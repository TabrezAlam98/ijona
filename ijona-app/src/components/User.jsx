import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./User.module.css";
import { nanoid } from "nanoid";

const User = () => {
  const [data, setData] = useState([]);
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [page,setPage]=useState(1)
  const [editingItem, setEditingItem] = useState(null);


  const handleSubmit=(e)=>{
    e.preventDefault()
    const payload={
      name,address,
      id:nanoid()
    }

    setData([...data,payload])
    setName("")
    setAddress("")
  }

  const handleDel = (id) => {
    const deleteTodo = data.filter((e) => e.id !== id);
    setData(deleteTodo);
  };

  const handlePrevPage=()=>{
    setPage(page-1)
  }
  const handleNextPage=()=>{
    setPage(page+1)
  }

  const handleEdit = (el) => {
    setEditingItem(el);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    setData(updatedData);
    setEditingItem(null);
  };



  // useEffect(() => {
  //   axios("https://www.omdbapi.com/?&apikey=722a3818&s=ted").then((res) => {
  //     // console.log(res.data.Search)
  //     setData(res.data.Search);
  //   });
  // }, []);

  console.log(data);
  return (
    <div>
       <h1>Users</h1>
       <div className={style.todo_box}>

      
       <input placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
       <br/>
       <input placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
       <br/>
       <button onClick={handleSubmit} className={style.addBtn}>add</button>
       </div>
          <table>
          
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Address</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>

            {editingItem && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editingItem.name}
            onChange={(e) =>
              setEditingItem({
                ...editingItem,
                name: e.target.value,
              })
            }
          />
          <button className={style.addBtn} type="submit">
            Update
          </button>
        </form>
      )}
            {data.map((el) => {
        return (
          
            <tr>
              {/* <td>{el.id}</td> */}
              <td>{el.name}</td>
              <td>{el.address}</td>
              <td onClick={() => handleDel(el.id)}><i class="fa-solid fa-trash"></i></td>
              <td>
              <button onClick={() => handleEdit(el)} className={style.editBtn}>
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
              </td>
            </tr>
           );
          })}
          </table>
          <div>
            <button><i class="fa-solid fa-arrow-left" disabled={page==1} onClick={handlePrevPage}></i></button>
            {"  "+page+"  "}
            <button><i class="fa-solid fa-arrow-right" onClick={handleNextPage}></i></button>
          </div>
        
    </div>
  );
};

export default User;
