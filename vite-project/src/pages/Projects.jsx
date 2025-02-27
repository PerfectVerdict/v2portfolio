import NPC from '../assets/npc1.jpg'
import itIsWritten from '../assets/image.png'
import sb from '../assets/sb.png'
import workday from '../assets/workdaypng.PNG'
import kyreproject from '../assets/converted_image.png'
import cbs from '../assets/cbs.PNG'
export default function Projects() {
  return (
    <>
      <style>
        {`
          .containerForProjects {
            
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 6px;
            margin-top: 8px;
            align-items: flex-start;
          }

/* Media query to switch to a row layout after 972px */
@media (max-width: 972px) {
  .containerForProjects {
    flex-direction: row;  /* This keeps the items in a row at 972px and below */
    flex-wrap: wrap; /* Enable wrapping for items */
  }
}


          /* Media query to switch to a row layout after 600px */
          @media (max-width: 600px) {
            .containerForProjects {
              flex-direction: column;
              justifyContent: "center", 
              alignItms: "flex-start";
              justify-content: center;
           
           
              max-height: 100%;                                                                                                                       
              

            }

          }
        `}
      </style>




      <div className="containerForProjects justify-center gap-6 mt-8" style={{ display: "flex", justifyContent: "center", alignItms: "center" }}>
        {/* <div className="flex justify-center gap-3 project-wrapper border border-white"> */}

        <div className="card bg-black text-white border">

          <img src={itIsWritten} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">It is written</h1>
            <p className="card-text">Click on "It is written" to discover a life changing quote from Jesus</p>
            <a href="https://itiswritten.onrender.com/" className="btn btn-primary">It Is Written</a>
          </div>
        </div>

        <div className="card bg-black text-white border" >
          <img src={kyreproject} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">Chef Portfolio</h1>
            <p className="card-text">Muli-page freeance site for a professional chef with some awesome animations!</p>
            <a href="https://cookingkyre.onrender.com/" className="btn btn-primary">Chef Portfolio</a>
          </div>
        </div>




        <div className="flex gap-3 card bg-black text-white border">
          <img src={sb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">Spellbinder</h1>
            <p className="card-text">
              Track your Magic the Gathering Card collection! <br />

              Account creation ✅ <br />
              Full up to date search functionality ✅ <br />
              search eg. "frog"</p>
            <a href="https://spellbindertcg-a6e0edcf3480.herokuapp.com/" className="btn btn-primary">Spellbinder</a>
          </div >
        </div >





        <div className="card bg-black text-white border" >
          <img src={workday} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">Workday Scheduler</h1>
            <p className="card-text">Simple app for scheduling a nine to five. Built using local storage.</p>
            <a href="https://workday-schedular.onrender.com/
" className="btn btn-primary">Workday Scheduler</a>
          </div>
        </div>


        <div className="flex gap-3 card bg-black text-white border">
          <img src={cbs} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">Clear blues skies</h1>
            <p className="card-text">
              Check the wind, humidity, and temperature for your area. The weather data is available for 10 AM and 1 PM only, as this project was built as a learning exercise in vanilla JavaScript. <br />
              540 lines of vanilla js ✅ <br />
              Accurate wheather data ✅ <br />
            </p>
            <a href="https://clearblueskies.onrender.com/" className="btn btn-primary">Clear Blue Skies</a>
          </div >
        </div >

      </div >
      {/* </div > */}
    </>
  );
}
