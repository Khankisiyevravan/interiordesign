import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../Components/Product";
import { connect } from "react-redux";
function FilterCategories(props) {
    const { category_name } = useParams();
    const [category, setCategory] = useState({});
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let categories = await fetch("http://localhost:7700/categories").then(
                a => a.json()
            );
            let subcategories = await fetch(
                "http://localhost:7700/subcategories"
            ).then(a => a.json());
            let category = categories.find((a) => a.name === category_name);
            let subcategory = subcategories.filter((a) =>
                category.subcategories.includes(a.id)
            );
            setCategory(category);
            setSubCategories(subcategory);
        };
        getData();
    }, [category_name]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getInfo = async () => {
            let info = await fetch("http://localhost:7700/products").then((a) =>
                a.json()
            );
            info = info.filter((a) => a.category === category.id);
            setProducts(info);
        };
        getInfo();
    }, [category]);
    const [newInput, setNewInput] = useState({
        name: "",
        subcategory: 0,
    });
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if (searchResults) {
            setSearchResults([...products])
        }
    }, [products])
    const searching = (e) => {
        setSearchInput(e.target.value);
        setSearchResults(
            products.filter((p) =>
                p.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };
    const [filters, setFilters] = useState([]);
    const check = (e) => {
        if (e.target.checked) {
            setFilters([...filters, e.target.value])
        }
        else {
            setFilters([...filters.filter(a => a !== e.target.value)])
        }
    }
    const [demoProducts, setDemoProducts] = useState(searchResults)
    useEffect(() => {
        if (filters.length) {
            let d = searchResults.filter(a => filters.includes(a.subcategory.toString()));
            setDemoProducts([...d]);
        }
        else {
            setDemoProducts(searchResults)
        }
    }, [filters, searchResults])
    return (
        <section>
            <div className="search">
                <div className="searching">
                    <input
                        className="input"
                        type="text"
                        placeholder="Məhsulu axtar"
                        value={searchInput}
                        onChange={searching}
                    />
                    <div className="icon2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <img src={products.image}></img>
                <h1>{products.name}</h1>
            </div>
            <div className="checkbox">
                <div className="check">
                    {subCategories.map((a) => (
                        <div key={a.id} className="checked">
                            <input
                                type="checkbox"
                                onClick={check}
                                value={a.id}
                                id={a.id}
                                name="name"
                                subcategory="subcategory"
                            />
                            <label>{a.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="products">
                {demoProducts.map((a) => (
                    <Product
                        category_name={category_name}
                        product={a}
                        key={a.id}
                        id={a.id}
                        image={a.image}
                    />
                ))}
            </div>
        </section>
    );
}
let t = (a) => a;
export default connect(t)(FilterCategories);