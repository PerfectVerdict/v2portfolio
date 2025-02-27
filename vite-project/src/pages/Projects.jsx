import NPC from '../assets/npc1.jpg'
import itIsWritten from '../assets/image.png'
import sb from '../assets/sb.png'

export default function Projects() {
  return (
    <>

      <div className="card" style={{ width: "18rem" }}>
        <img src={sb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Spellbinder</h5>
          <p className="card-text">
            Track your Magic the Gathering Card collection! Complet with..<br />

            Account creation ✅ <br />
            Search the latest Magic the Gatering cards ✅ </p>
          <a href="https://spellbindertcg-a6e0edcf3480.herokuapp.com/" className="btn btn-primary">Spellbinder</a>
        </div >
      </div >

      <div className="card" style={{ width: "18rem" }}>
        <img src={itIsWritten} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">It is written</h5>
          <p className="card-text">Click on "It is written" to discover a life changing quote from Jesus</p>
          <a href="https://itiswritten.onrender.com/" className="btn btn-primary">It Is Written</a>
        </div>
      </div>

    </>
  );
}
