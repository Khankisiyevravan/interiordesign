import React from 'react'
import { useState } from 'react';
// import {useState} from 'react'
function Search() {
    const data = [
        {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
        },
        {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
        },
        {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
        },
        {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
        },
        {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162'
        },
        {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372'
        },
        {
            name: 'Haley Kennedy',
            position: 'Senior Marketing Designer',
            office: 'London',
            age: '43',
            date: '2012/12/18',
            salary: '$313'
        },
        {
            name: 'Paul Byrd',
            position: 'Chief Financial Officer (CFO)',
            office: 'New York',
            age: '64',
            date: '2010/06/09',
            salary: '$725'
        }
    ]
    const [inputValue, setValue] = useState('')
    const [searchData, setSearchData] = useState([...data]);
    // console.log(data);
    const searchFunc = (e) => {
        setValue(e.target.value)
        // console.log(inputValue);
        setSearchData(data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase())))

    }
    // console.log(inputValue);
    // console.log(searchData);
    return (
        <div>
            <input type='text'
                value={inputValue}
                onChange={searchFunc} />
            {
                searchData.map((sd, index) => (
                    <p key={index}>
                        {sd.name}
                    </p>


                ))

            }
        </div>
    )
}

export default Search