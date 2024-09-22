import './GamingLibrary.css'  
import { SectionWrapper,SectionHeader,GamingLibraryCard } from '../../Components/index'  
import GamingLibraryData from'../../storage/GamingLibraryData'
const GamingLibrary = () => {
    const GamingLibraryCards =GamingLibraryData.map(ofd=>{
        return <GamingLibraryCard image={ofd.image}
        title={ofd.title}
        Category={ ofd.Category}
        date_added={ofd.date_added}
        hours_played= {ofd.hours_played}
        dawnloaded={ofd.dawnloaded}
             />
    })
    return (
        <SectionWrapper>
              <SectionHeader>
       GamingLibrary
        </SectionHeader>
         <div className='gaming-library-cards'>
{                  GamingLibraryCards      
}                </div>
        </SectionWrapper>
        
 )
}

export default GamingLibrary