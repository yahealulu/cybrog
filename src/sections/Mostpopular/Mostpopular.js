import './Mostpopular.css';
import {Card,SectionHeader ,SectionWrapper } from '../../Components/index';
import Data from '../../storage/data';
const Mostpopular = () => {
 const cards=Data.map(datayeh=>
{return(
    
    <Card key={datayeh.key} image ={datayeh.image}  title={datayeh.title} category={datayeh.category} rate={datayeh.rate} dawnload={datayeh.dawnload}/>
)

})
    return (
        <SectionWrapper>
              <SectionHeader>
        Mostpopular right now
        </SectionHeader>
         <div className='mostpopularitems'>
            {cards}
            </div>
        </SectionWrapper>
        
 )
}

export default Mostpopular