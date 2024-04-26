import npc from "../assets/npc1.jpg";
export default function Home() {
  return (
    <>
      <div
        className="card"
        style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
      >
        <div className="card-body">
          <h1>Hello, My Name is Ethan Metz.</h1>
          <br />{" "}
          <h2>
            I am A new full-stack developer, leveraging my experiance with
            React.js
            <br />
            and my eye for design
          </h2>
        </div>
      </div>

      <>
        <div
          className="card"
          style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
        >
          <div className="card-body">
            <ul class="list-group">
              <p></p>
              <li class="list-group-item">
                I love to work in teams, but when working alone need minimal
                supervision or care.
              </li>
              <li class="list-group-item">
                I am fully teachable and honor authrity.
              </li>
              <li class="list-group-item">
                I take my professional life seriously.
              </li>
            </ul>
          </div>
        </div>
        <span className="badge">Badge</span>
      </>
    </>
  );
}
