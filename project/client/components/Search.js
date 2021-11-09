

// IMPORT NEXTJS MODULES
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => setDatas(json))
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api'
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleSearchTerm = () => {
        let value = e.target.value;
        value.lenght > 2 && setSearchTerm(value);
    };

    return (
        <div className="search-wrapper">
            <div className="search-bars">
                <Form.Control className="search-bar" type="text" placeholder="Rechercher" onChange={handleSearchTerm} />
            </div>
            <div className="search-results">
                {datas
                .filter((val) => {
                    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .map((val) => {
                    return (
                    <div className="search-result" key={val.id}> {val.title} </div>
                    );
                })}
            </div>
        </div>
    )
  }