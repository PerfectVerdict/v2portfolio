import NPC from '../assets/npc1.jpg'
import itIsWritten from '../assets/image.png'
import sb from '../assets/sb.png'
import workday from '../assets/workdaypng.PNG'
import kyreproject from '../assets/converted_image.png'
export default function Projects() {
  return (
    <>
      <style>
        {`
          .containerForProjects {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
            margin-top: 8px;
          }

          /* Media query to switch to a row layout after 600px */
          @media (min-width: 600px) {
            .containerForProjects {
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
            }

            .card {
              margin: 10px;
              flex: 1 1 calc(33.333% - 20px); /* Makes cards take up 1/3 of the row */
            }
          }
        `}
      </style>




      <div className="containerForProjects justify-center gap-6 mt-8" style={{ maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItms: "center" }}>
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
            <a href="https://cookingkyre.onrender.com/" className="btn btn-primary">Portfolio</a>
          </div>
        </div>




        <div className="flex gap-3 card bg-black text-white border">
          <img src={sb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">Spellbinder</h1>
            <p className="card-text">
              Track your Magic the Gathering Card collection! Complete with..<br />
              ss
              Account creation ✅ <br />
              Full up to date search functionality ✅ <br />
              eg. "frog"</p>
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

      </div >
      {/* </div > */}
    </>
  );
}
