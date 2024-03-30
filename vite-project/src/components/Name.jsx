import Card from './Card'
import AboutMe from './AboutMe'
export default function Name() {
return(
<>

<div className="background">
    
  <div className="hero-overlay bg-opacity-60"></div><div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-content text-center text-neutral-content">
  <div className="workandabout">
        < AboutMe />
        < Card/>
        </div>
        {/* insert glass abaout me*/}
    </div>
    <div className="max-w-md">
    <div className="name">
    {/* <div className= "divider divider-primary" style={{color: 'black', fontSize: '30px'}}>Ethan Metz / Full Stack Dev</div> */}
    
      
     
    </div>
  </div>
</div>
</div>

</>
)
}