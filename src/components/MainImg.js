import { useContext } from "react";
import img from '../assets/images/main.svg';
import ClayCard from '@clayui/card';
import ClayLink from '@clayui/link';
import { FaCircle } from "react-icons/fa";
import { data } from '../util/data';
import { StatContext } from '../util/Context';

const MainImg = () => {
  
  const { setId } = useContext(StatContext);
  
  const handleClick = (id) => {
    setId(id)
  }
 
  var flags = [], output = [], l = data.length, i;
  for( i=0; i<l; i++) {
      if( flags[data[i].id]) continue;
      flags[data[i].id] = true;
      output.push([data[i].id, data[i].titlu]);
  }

  return (
    <ClayCard horizontal="true" className='main '>
      <ClayCard.Row>
        <div className="autofit-col d-none d-md-flex">
          <img
            alt="statistici"
            className="card-item-first"
            src={img}
            style={{ width: "300px" }}
          />
        </div>
        <div className="autofit-col autofit-col-expand autofit-col-gutters">
          <section className="autofit-section">
            <ClayCard.Description displayType="title">
              {"Statistici disponibile"}
            </ClayCard.Description>
            
            <ClayCard.Description truncate={false} displayType="text">
              
                {
                  
                  output.map((item)=>{
                      return(
                          <span className="mb-2" key={item[0]}>
                          
                            <ClayLink displayType="secondary" onClick={()=>handleClick(item[0])}>
                               <FaCircle className="small text-primary mr-2" />{item[1]}
                            </ClayLink>
                          </span>
                      )
                })}
              
            </ClayCard.Description>
          </section>
        </div>
      </ClayCard.Row>
    </ClayCard>
  )
}

export default MainImg