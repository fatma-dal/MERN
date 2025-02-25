import React from "react";
import { Link } from "react-router";

const NavBar = ({ BookCatalog, title, addBook }) => {
return (
    <div className=' mt-4 d-flex justify-content-between '>
       
            
            
                <div>
                    <Link
                        className="btn btn-dark"
                        to={"/"}
                        
                    >
                        Catalog
                    </Link>
                    <Link
                        className="btn btn-success"
                        to={"/books/create"}
                        
                    >
                        Add Book
                    </Link>
                </div>
                <div >
                    <h1>{BookCatalog}</h1>
                    <h1 >{title}</h1>
                    <h1 >{addBook}</h1>
                </div>
            
        
    </div>
);
};

export default NavBar;          