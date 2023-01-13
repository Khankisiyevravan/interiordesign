import React from 'react'
import { useState, useEffect } from 'react'
// import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if'
function QuizRoom() {
    const [furnitureData, setFurnitureData] = useState([]);
    const [ids, setIds] = useState([1,3]);
    useEffect(() => {
        const getFurnitureData = async () => {
            let data = await fetch("http://localhost:7732/furniture").then(a => a.json());
            setFurnitureData(data);
        }
        getFurnitureData()
    }, []);
    // console.log(typequiz);
    return (
        <>
            <section>
                <div className="quiz">

                </div>
                <div className="room-container">
                    {
                        furnitureData.length && ids.map(id => {
                            let f = furnitureData.find(t => t.type == id);
                            console.log(f);
                            return <div key={f.id} className="room">
                                <img width={200} src={f.image} alt="" />
                            </div>
                        })
                    }

                    {/* <div className="room">
                        <img src="" alt="" />
                    </div>
                    <div className="room">
                        <img src="" alt="" />
                    </div>
                    <div className="room">
                        <img src="" alt="" />
                    </div>
                    <div className="room">
                        <img src="" alt="" />
                    </div>
                    <div className="room">
                        <img src="" alt="" />
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default QuizRoom