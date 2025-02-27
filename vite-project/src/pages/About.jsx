import npc from '../assets/npc1.jpg'
export default function About() {
  return (
    <>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // To center content horizontally
          width: "100%", // Ensures content is responsive and fits the screen
          padding: "1em", // Adds padding for better spacing
          boxSizing: "border-box", // Prevents overflow from padding
        }}
      >
        <img
          src={npc}
          style={{
            maxWidth: "100%", // Ensures the image scales with the container
            width: "20em", // Image size remains at a reasonable size
            height: "auto", // Maintain aspect ratio
            marginBottom: "1em", // Space between image and content
          }}
          alt=""
        />

        <div
          className="card"
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
          <div className="card-body">
            <ul className="list-group">
              <p>When I'm not coding, I am..</p>
              <li className="list-group-item">
                listening to people much smarter than me on youtube
              </li>
              <li className="list-group-item">
                Spending time in introspection
              </li>
              <li className="list-group-item">
                Developing myself up to and beyond my current potential
              </li>
              <li className="list-group-item">
                Painting in acrylic or looking for inspiration
              </li>
            </ul>
          </div>
        </div>

        <span className="badge" style={{ marginTop: "1em" }}>Badge</span>
      </div>
    </>
  );
}


