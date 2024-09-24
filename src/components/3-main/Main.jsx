import "./main.css";
export default function Main() {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="activeB">all projects</button>
        <button>HTML & CSS</button>
        <button>Javascript</button>
        <button>React & MUI</button>
      </section>
      <section className="right-section flex">
        {['aa','bb','cc','dd','ff'].map((item)=>{
          return(
            <article key={item} className="card">
              <img width={266} src="./1.png" alt="" />
              <div className="box" style={{width:'266px'}}>
                <h1 className="title">Landing Page 2</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                  voluptatibus assumenda pariatur quos consequatur eos id vitae
                  error necessitatibus 
                </p>
                <div className="flex icons">
                  <div style={{gap:'11px'}} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="#" className="link flex">
                    more
                    <span style={{alignSelf:'center'}} className="icon-arrow-right"></span> 
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  );
}
