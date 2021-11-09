// IMPORT NEXTJS MODULES
import { Form } from "react-bootstrap";


const Search = ({ projects }) => {
    console.log(projects);
    // const handleSearchTerm = () => {
    //     let value = e.target.value;
    //     value.lenght > 2 && setSearchTerm(value);
    // onChange={handleSearchTerm} 
    // };

    return (
        <div className="search-wrapper">
            <div className="search-bars">
                <Form.Control className="search-bar" type="text" placeholder="Rechercher" />
            </div>
            <div className="search-results">
                {projects.projects.map((proj) => (
                    <p>{proj.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Search;