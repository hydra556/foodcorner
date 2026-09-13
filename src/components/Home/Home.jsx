import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chamcham from '../../assets/Chamcham.jpg'
import Dhokla from '../../assets/Dhokla.jpg'
import gulabjamun from '../../assets/gulabjamun.jpg'
import Kachori from '../../assets/Kachori.jpg'
import Kajukatli from '../../assets/Kajukatli.jpg'
import PaniPuri from '../../assets/PaniPuri.jpg'
import Puranpoli from '../../assets/Puranpoli.jpg'
import Rasgulla from '../../assets/Rasgulla.jpg'
import Rasmalai from '../../assets/Rasmalai.jpg'
import Samosa from '../../assets/Samosa.jpg'
import Vadapav from '../../assets/Vadapav.jpg'
import Ladoo from '../../assets/Ladoo.jpg'
import Shira from '../../assets/Shira.jpg'
import Mysorepak from '../../assets/Mysorepak.jpg'
import Peda from '../../assets/Peda.jpg'
import Aamras from '../../assets/Aamras.jpg'
import Shrikhand from '../../assets/Shrikhand.jpg'
import Idali from '../../assets/Idali.jpg'
import Soanpapdi from '../../assets/Soanpapdi.jpg'
import Jalebi from '../../assets/Jalebi.jpg'
import Menduvada from '../../assets/Menduvada.jpg'
import Pakora from '../../assets/Pakora.jpg'
import Bhajiya from '../../assets/Bhajiya.jpg'
import Misalpav from '../../assets/Misalpav.jpg'
import Pavbhaji from '../../assets/Pavbhaji.jpg'
import Kesaribath from '../../assets/Kesaribath.jpg'
import Card from '../Card/Card'
import './Home.css'
import { IoSearch } from "react-icons/io5";
const Home = ({cart,setCart}) => {

  let [search,setSearch] = useState("")


  let cardData = [
    {
      id:1,
      name:"Chamcham",
      image : Chamcham,
      price :300
    },
    {
      id:2,
      name:"Dhokla",
      image : Dhokla,
      price :250
    },
    {
      id:3,
      name:"Gulabjamun",
      image : gulabjamun,
      price :150
    },
    {
      id:4,
      name:"Kachori",
      image : Kachori,
      price :300
    },
    {
      id:5,
      name:"Kajukatli",
      image : Kajukatli,
      price :250
    },
    {
      id:6,
      name:"PaniPuri",
      image : PaniPuri,
      price :200
    },
    {
      id:7,
      name:"Puranpoli",
      image : Puranpoli,
      price :150
    },
    {
      id:8,
      name:"Rasgulla",
      image : Rasgulla,
      price :100
    },
    {
      id:9,
      name:"Rasmalai",
      image : Rasmalai,
      price :120
    },
    {
      id:10,
      name:"Samosa",
      image : Samosa,
      price :50
    },
    {
      id:11,
      name:"Vadapav",
      image : Vadapav,
      price :40
    },
    {
      id:12,
      name:"Ladoo",
      image : Ladoo,
      price :100
    },
    {
      id:13,
      name:"Shira",
      image : Shira,
      price :120
    },
    {
      id:14,
      name:"Mysorepak",
      image : Mysorepak,
      price :150
    },
    {
      id:15,
      name:"Peda",
      image : Peda,
      price :100
    },
    {
      id:16,
      name:"Aamras",
      image : Aamras,
      price :120
    },
    {
      id:17,
      name:"Shrikhand",
      image : Shrikhand,
      price :120
    },
    {
      id:18,
      name:"Idali",
      image : Idali,
      price :100
    },
    {
      id:19,
      name:"Soanpapdi",
      image : Soanpapdi,
      price :150
    },
    {
      id:20,
      name:"Jalebi",
      image : Jalebi,
      price :80
    },
    {
      id:21,
      name:"MenduVada",
      image : Menduvada,
      price :80
    },
    {
      id:22,
      name:"Pakora",
      image : Pakora,
      price :60
    },
    {
      id:23,
      name:"Bhajiya",
      image : Bhajiya,
      price :50
    },
    {
      id:24,
      name:"Misalpav",
      image : Misalpav,
      price :120
    },
    {
      id:25,
      name:"Pavbhaji",
      image : Pavbhaji,
      price :120
    },
    {
      id:26,
      name:"Kesaribath",
      image : Kesaribath,
      price :60
    }

  ]

  let filterData = cardData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div>
    <div className='search'>
      <div className='searchbar'> 
          <Link to={""}><IoSearch /></Link>
        <input
          type="text"
          placeholder="Search Food Items"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          ></input>
        
      </div>

    </div>
    <Card cardData={filterData} cart={cart} setCart={setCart}/>
    </div>
  )

}

export default Home