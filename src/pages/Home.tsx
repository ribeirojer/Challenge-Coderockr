import CardA from '../components/CardA';
import CardB from '../components/CardB';
import useFetch from "../hooks/useFetch";
import { SectionOne } from "../styles/HomeStyle"
import CardT from '../components/CardT';
import Loader from '../components/Loader';
import {  useState } from 'react';
type Props = {}

const Home = (props: Props) => {
  
  const [items, setItems] = useState<number[]>([1])
  const url: string = "https://stormy-shelf-93141.herokuapp.com/";
  const { data, isLoading, error } = useFetch(`${url}articles`);
  var raiz = document.getElementById('root');

  if(isLoading){
    return <Loader />
  }
  if(error){
    return <p>Houve um problema...</p>
  }

  function onScroll (): void {//a cada scroll verifica se a altura do scroll alcança o fim da página
    if((window.pageYOffset + window.innerHeight) > (raiz?.scrollHeight-10)){
      setItems([...items, (items.length+1)]);
    }
    if(items.length > 93) setItems([0])//infinite scroll reinicia quando exibe 93 items
  }
  window.addEventListener("scroll", onScroll);

  return (
    <>
      {items.map((e:any)=>{
        return (
          <div key={e}>
            <SectionOne>
              <CardA data={data[e+0]} />
              <CardA data={data[e+1]} />
            </SectionOne>
            
            <CardT pos="rigth" data={data[e+2]} />

            <SectionOne>
              <CardB data={data[e+3]} />
              <CardB data={data[e+4]} />
            </SectionOne>

            <CardT pos="left" data={data[e+5]} />
        </div>)
      })}
    </>
  )
}

export default Home;