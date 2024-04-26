import npc from '../assets/npc1.jpg'
export default function About() {
  return (
    <>
      <div className="card" style={{display: 'flex', flexDirection: 'row', marginTop: "10px"}}>
        <img src={npc} className="card-img-top" alt="..." style={{width: '20%'}}/>
        <div className="card-body">

          <ul class="list-group">
<p>When Im not coding, I am.. </p>
  <li class="list-group-item">listening to people much smarter than me on youtube</li>
  <li class="list-group-item">Spending time in introspection</li>
  <li class="list-group-item">Developing myself up to and beyond my current potential</li>
  <li class="list-group-item">Painting in acrylic or looking for insperation</li>
</ul>
        </div>
      </div>
      <span className="badge">Badge</span>
    </>
  );
}