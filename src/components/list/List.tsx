import React, { useEffect, useState } from 'react'
import styles from './List.module.css';

// type ModalData = {
//     userId: Number,
//     id: Number,
//     title: String,
//     completed: Boolean
// }

const List = () => {

    const [newData, setNewData] = useState<any>();
    const [newCheck, setNewCheck] = useState<boolean>();
    const [status, setStatus] = useState<string>();
    const [getData, setGetData] = useState<any[]>([])
    const [newDataArray, setNewDataArray] = useState<any>()

    useEffect(()=>{
        const dataFetch = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .catch(error => console.log(error));
            setGetData(data)
        };
        dataFetch();
    },[]);
    
    

    useEffect(()=>{
        switch (newCheck){
            case true: setStatus('Completed'); break;
            case false: setStatus('Processing'); break;
        }
        setNewDataArray({userId: 1, id: 6, title: newData, completed: status})
    },[newData,status,newCheck])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setGetData([...getData,newDataArray])
    }

    const changeState = (e) => {
        setNewData(e.target.value);
        console.log(e.target.value);
    }

    const changeCheck = (e) => {
        setNewCheck(e.target.checked)
    }





    return (
      <>
          <section className={styles.formSection}>
                <h1>Title Form</h1>
                <form onSubmit={handleSubmit}>
                    <input type='checkbox' onChange={changeCheck} />
                    <input type='text' onChange={changeState} />
                    <button type='submit'>Submit</button>
                </form>
            </section>  
            <section className={styles.listSection}>
                <table>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getData.map((item,key)=>(
                                <tr key={key}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? 'Done' : 'Processing'}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>  
            </section>
    </>
  )
}



export default List
