import CardA from '../components/CardA';
import CardB from '../components/CardB';
import useFetch from "../hooks/useFetch";
import { SectionOne } from "../styles/HomeStyle"
import CardT from '../components/CardT';
type Props = {}

const Home = (props: Props) => {
  
  const url: string = "https://stormy-shelf-93141.herokuapp.com/";
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
      
      <CardT pos="rigth" data={data[2]} />

      <SectionOne>
        <CardB data={data[3]} />
        <CardB data={data[4]} />
      </SectionOne>

      <CardT pos="left" data={data[5]} />
    </>
  )
}

export default Home;