import React, { useState } from 'react'
import Card from '../components/Card';
import useFetch from "../hooks/useFetch";
import { SectionOne } from "../styles/HomeStyle"
type Props = {}

const Home = (props: Props) => {
  
  const url: string = "https://stormy-shelf-93141.herokuapp.com/";

  const [first, setfirst] = useState("");
  const { data, isLoading, error } = useFetch(`${url}articles`);
  
  if(isLoading){
    return <p>Carregando...</p>
  }
  if(error){
    return <p>Houve um problema...</p>
  }

  return (
    <SectionOne>
      <Card data={data[0]} />
      <Card data={data[1]} />
    </SectionOne>
  )
}

export default Home;