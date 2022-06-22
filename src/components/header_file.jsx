import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc"
import Card from './card';
import './styles.css';


function Header_file() {
  
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);

    const searchBook = async () =>
    {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCWhcWwMp5Ff80kCf_IBGIgkf_dRDyArBU`+`&maxResults=40`);
        const data = await response.json();
        console.log(data);
        setBookData(data.items);
    }
  
    return (
    <>
        <div className='header'>
            
            <div className='rowA'>
                <h1>If you only read the books that everyone else is reading, you can only think what everyone else is thinking.</h1>
            </div>

            <div className="rowB">
                
                <h2 >Search the Book you like to read</h2> 
                <div className="search">
                    <input type='text' placeholder='Enter the name of the Book' onChange={(e)=>setSearch(e.target.value)} value= {search} />
                    <button  onClick={searchBook}> <FcSearch /> </button>
                </div>

                
            
            </div>
        </div>

        <div className="container">
            {
                <Card book = {bookData}/>
            }
            
        </div>
        
   </>
  );
}

export default Header_file;