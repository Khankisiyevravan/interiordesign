import Head from "../../components/Head";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
// import ItemDetails from "../../components/ItemDetails";
function Basket(props) {
  // console.log(props)
  console.log(props.basket);
  const [allData, setAllData] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketItemsId, setBasketItemsId] = useState([]);
  useEffect(() => {
    props.basket.map((it) => {
      setBasketItemsId((old) => [...old, it.id]);
      console.log("Z");
    });
    const getData = async () => {
      await fetch("http://localhost:7732/furniture")
        .then((a) => a.json())
        .then((a) =>
          setBasketItems(a.filter((d) => basketItemsId.includes(d.id)))
        );
      console.log(basketItems);
      // setAllData(data);
    };
    getData();
  }, []);
  // useEffect(() => {
  //   setBasketItems(
  //     allData.length > 0
  //       ? allData.filter((d) => basketItemsId.includes(d.id))
  //       : []
  //   );
  //   console.log(basketItems, allData);
  // }, [basketItemsId]);
  console.log("salam");
  return (
    <>
      <Head />
      <section
        className="page-header designideas"
        style={{ backgroundImage: `url('./imgs/design-ideas-page-bg.jpg')` }}
      >
        <div className="container">
          <h2>Mənim Səbətim</h2>
        </div>
      </section>
      <section id="basket-items">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Məhsul</th>
                <th>Qiymət</th>
                <th>Say</th>
                <th>Ümumi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.basket?.map((basketItem, index) => (
                <tr>
                  <td>
                    {/* <img src="./imgs/basket-item1.png" alt="" /> */}
                    <img src={basketItem.upload} alt="" />
                  </td>
                  <td>
                    <h6>{basketItem.name}</h6>
                    <p>
                      Aliquam faucibus, odio nec commodo aliquam, neque felis
                      placerat dui, a po
                    </p>
                  </td>
                  <td>{basketItem.price}</td>
                  <td>
                    <div>
                      <button>-</button> {basketItem.count} <button>+</button>
                    </div>
                  </td>
                  <td>{basketItem.price * basketItem.count}</td>
                  <td>X</td>
                </tr>
              ))}
              {/* <tr>
                <td>
                  <img src="./imgs/basket-item1.png" alt="" />
                </td>
                <td>
                  <h6>SKANDİNAV STİLDƏ QONAQ OTAĞI</h6>
                  <p>
                    Aliquam faucibus, odio nec commodo aliquam, neque felis
                    placerat dui, a po
                  </p>
                </td>
                <td>4500$</td>
                <td>
                  <div>
                    <button>-</button> 2 <button>+</button>
                  </div>
                </td>
                <td> 9000$</td>
                <td> X</td>
              </tr>
              <tr>
                <td>
                  <img src="./imgs/basket-item1.png" alt="" />
                </td>
                <td>
                  <h6>SKANDİNAV STİLDƏ QONAQ OTAĞI</h6>
                  <p>
                    Aliquam faucibus, odio nec commodo aliquam, neque felis
                    placerat dui, a po
                  </p>
                </td>
                <td>4500$</td>
                <td>
                  <div>
                    <button>-</button> 2 <button>+</button>
                  </div>
                </td>
                <td> 9000$</td>
                <td> X</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
const b = (c) => c;
export default connect(b)(Basket);
