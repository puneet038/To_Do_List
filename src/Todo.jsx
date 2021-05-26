import React, {useEffect, useState } from 'react';
import './App.css';
const getLocal=()=>
{
    const lists=localStorage.getItem('list');
    if(lists)
    return JSON.parse(localStorage.getItem('list'));
    else{
        return [];
    }

 }
function Todo()
{
    const [inputData , setInputData]=useState('');
    const [items,setItems]=useState(getLocal());
     const addItem=()=>
     {
         if(!inputData)
         {
             alert('Please fill out this field');
         }
         else{
            setItems([...items,inputData]);
            setInputData('');
         }
        
     }
     useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(items))},
      [items]);
     

     const deleteItem=(id)=>
     {
       const updateItems =items.filter((val,ind)=>
       {
          return(ind!==id);
             
       });
       setItems(updateItems);
     }
     const removeAll=()=>
     {
        setItems([]);
     }
    return(
        <>
        
          <div className="Main-div">
              <div className="child-div"> 
                 <h1 className="heading">Add List Here </h1>
                <div className="addItems">
                     <input type="text"  style={{color: "blue" }}placeholder="Add Item..."
                     value={inputData}
                     onChange={(e) => setInputData(e.target.value)}
                     />
                   <i className="fa fa-plus add-btn" aria-hidden="true" title="Add Items" onClick={addItem}></i>

                 </div>
                 <div className="showItems">
                     {
                         items.map((elem,ind)=>
                         {
                           return( <div className="eachItem" key={ind}>
                         <h3>{elem}</h3>
                         <i className="fas fa-trash-alt add-btn" aria-hidden="true" title="Delete item" onClick={()=>deleteItem(ind)}></i>
                     </div>
                     );
                         }
                         )
                        
                     }
                    
                 </div>
                 <div className="showItems">
                 <a class="css-button" href=" " onClick={removeAll}>
	             <span class="css-button-icon"><svg width="16" height="16" viewBox="2 2 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"/>
                </svg></span>
	            <span class="css-button-text">Clear-All</span>
                </a>
                 </div>
              </div>
          </div>
        
        </>
    );
}
export default Todo;