import NavBar from '../NavBar'
import { useState, useEffect } from 'react'
// import Modal from './Modal';
function AddProduct() {


  const [products, setProducts] = useState({
    name: "",
    price: "",
    image: "",
    overview: "",
    type: "1",
    style: "1",
    upload:"",
    item: [],
  })
  // const [furniture, setFurniture]
  const [type, setType] = useState([]);
  const [style, setStyle] = useState([]);
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  // const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      let dataTypes = await fetch("http://localhost:7732/type").then(a => a.json());
      setType(dataTypes);
    }
    getTypes();
    const getStyles = async () => {
      let dataStyles = await fetch("http://localhost:7732/style").then(b => b.json());
      setStyle(dataStyles);
    }
    getStyles();
    const getItems = async () => {
      let dataItems = await fetch("http://localhost:7732/item").then(c => c.json());
      setItems(dataItems);
    }
    getItems();

  }, [])
  useEffect(() => {
    if (items) {
      setSearchData([...items])
      // console.log(searchData);
      // console.log(items);
    }
  }, [items])
  // console.log(searchData);

  const searchFunc = (e) => {
    setValue(e.target.value)
    setSearchData(items.filter((d) =>
      d.itemName.toLowerCase().includes(e.target.value.toLowerCase())
      || d.color.toLowerCase().includes(e.target.value.toLowerCase())
      || d.itemPrice.toLowerCase().includes(e.target.value.toLowerCase())
      || d.country.toLowerCase().includes(e.target.value.toLowerCase())
    ))
    // console.log(searchData);

  }
  // console.log(type);
  // const [modal,setModal] = useState(false);
  const handleInput = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };
  const handleUpload = (e) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      setProducts({ ...products, [e.target.name]: reader.result });
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const inputChecked = (e) => {
    if (e.target.checked) {
      // products
      console.log('checked', e.target.name);
      products.item.push(e.target.name)
    } else {
      setProducts({ ...products, item: products.item.filter(p => p !== e.target.name) })
    }
    console.log(products.item);
  }
  const submitButton = (e) => {
    e.preventDefault();
    console.log(products);
    fetch(" http://localhost:7732/furniture", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
  }

  return (
    <>
      <NavBar />

      <div className='navss'>
        <label>
          <p>
            Adı:
          </p>
          <input
            onChange={handleInput}
            id='name'
            type='text'
            name='name'
          />
        </label>
        <br />
        <label >
          <p>
            Dəyəri:
          </p>
          <input
            onChange={handleInput}
            id='price'
            type='number'
            name='price'
          />
        </label>
        <br />
        <label>
          <p>
            Şəkil linki :
          </p>
          <input
            onChange={handleInput}
            id='image'
            type='text'
            name='image'
          />
        </label>
        <label>
          <p>
            Şəkil linki secim:
          </p>
          <input
            onChange={handleUpload}
            id='image'
            type='file'
            name='upload'
          />
        </label>
        <br />
        <label>
          <p>
            Haqqinda :
          </p>
          <textarea
            onChange={handleInput}
            id='overview'
            type='text'
            name='overview'
          >
          </textarea>
        </label>
        <br />
        <select defaultValue="1" onChange={handleInput} name='type'>
          {
            type.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))
          }
        </select>
        <select defaultValue="1" onChange={handleInput} name='style'>
          {
            style.map((style) => (
              <option key={style.id} value={style.id}>
                {style.name}
              </option>
            ))
          }
        </select>
        <br />
        <br />
        <br />

        <div id="additem">

          <table className='items'>
            <thead>
              <tr>
                <th>
                  <label htmlFor="search-input">
                    Seacrh :
                  </label>
                  <input
                    id='search-input'
                    type="text"
                    onChange={searchFunc}
                    value={inputValue}
                  />
                </th>

              </tr>
              <tr>
                <th>

                </th>
                <th>
                  Name
                </th>
                <th>
                  Price
                </th>
                <th>
                  Color
                </th>
                <th>
                  country
                </th>
                <th>
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              {
                searchData.map((item) => (
                  <tr className="item" key={item.id}>
                    <td>
                      <input type="checkbox"
                        // dat={item.id} bu atribitu niye log da gostermir
                        name={item.id}
                        name2='name'
                        onChange={inputChecked} />
                    </td>
                    <td>{item.itemName}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.color}</td>
                    <td>{item.country}</td>
                    <td>
                      <img src={item.itemUpload} alt="" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <br />
        <button
          className='btn1'
          onClick={submitButton}
        >
          Yadda saxla
        </button>
      </div>
    </>
  )
}

export default AddProduct