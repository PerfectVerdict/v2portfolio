import npc from '../assets/npc1.jpg'
export default function About() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>

        <br />

      </div>
      <div
        className='overflow-x-hidden'
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // To center content horizontally
          width: "100%", // Ensures content is responsive and fits the screen
          padding: "1em", // Adds padding for better spacing
          boxSizing: "border-box", // Prevents overflow from padding
        }}
      >
        <div
          className="card bg-black text-white"
          style={{
            display: 'flex',
            flexDirection: 'column', // Stack the content vertically
            width: "100%", // Ensure the card takes up available space
            maxWidth: "600px", // Limit max width for larger screens
            marginTop: "10px",
            // padding: ".5em", // Add padding inside the card
            boxSizing: "border-box", // Prevent overflow from padding
          }}
        > <h1 style={{ textAlign: "center" }}>Hello, I am Ethan. A Full Stack Web Developer.</h1>
          <div className="card-body" >
            <ul className="list-group bg-black text-white" style={{ textAlign: "center" }}>
              <br />Thank you for taking the time to checkout my web development portfolio! <br />
              I am just a beginner, so these apps are not spectacular, but I needed a place to hold all my projects, so here we are! <br />

              <h3 style={{ marginTop: "23px" }}>Tech Stack</h3>
              <li className="list-group-item bg-black text-white">
                Typescript/VanillaJS
              </li>
              <li className="list-group-item bg-black text-white">
                CSS/TailwindCSS
              </li>
              <li className="list-group-item bg-black text-white">
                NextJS
              </li>
              <li className="list-group-item bg-black text-white">
                ReactJS
              </li>


              <li className="list-group-item bg-black text-white">
                MongoDB
              </li>
              <li className="list-group-item bg-black text-white">
                SQL
              </li>

            </ul>
          </div>
        </div>



        <div
          className="card bg-black text-white"
          style={{
            display: 'flex',
            flexDirection: 'column', // Stack the content vertically
            width: "100%", // Ensure the card takes up available space
            maxWidth: "600px", // Limit max width for larger screens
            marginTop: "10px",
            padding: "1em", // Add padding inside the card
            boxSizing: "border-box", // Prevent overflow from padding
          }}
        >
          <div className="card-body" >
            <ul className="list-group bg-black text-white" style={{ textAlign: "center" }}>

              <h3>Soft Skills</h3>
              <li className="list-group-item bg-black text-white">
                Faithful
              </li>
              <li className="list-group-item bg-black text-white">
                Available
              </li>
              <li className="list-group-item bg-black text-white">
                Teachable
              </li>
              <li className="list-group-item bg-black text-white">
                Positive
              </li>


            </ul>
          </div>
        </div>
      </div >
    </>
  );
}


