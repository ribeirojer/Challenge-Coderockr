import { useState } from 'react'
import CardA from '../components/CardA';
import CardBig from '../components/CardBig';
import CardB from '../components/CardB';
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
    <>
      <SectionOne>
        <CardA data={data[0]} />
        <CardA data={data[1]} />
      </SectionOne>

      <CardBig pos="rigth" data={data[2]} />

      <SectionOne>
        <CardB data={data[3]} />
        <CardB data={data[4]} />
      </SectionOne>

      <CardBig pos="left" data={data[5]} />
    </>
  )
}

export default Home;