import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const subCat = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });
      return subCat[0] === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex" id="main">
      <section className="flex left-section">
        <button
          className={currentActive === "all" ? "activeB" : null}
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
        >
          all projects
        </button>
        <button
          className={currentActive === "css" ? "activeB" : null}
          onClick={() => {
            handleClick("css");
          }}
        >
          HTML & CSS
        </button>
        <button
          className={currentActive === "js" ? "activeB" : null}
          onClick={() => {
            handleClick("js");
          }}
        >
          Javascript
        </button>
        <button
          className={currentActive === "react" ? "activeB" : null}
          onClick={() => {
            handleClick("react");
          }}
        >
          React
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imagePath} alt="" />
                <div className="box" style={{ width: "266px" }}>
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    {item.desc.substring(0,150)} ...
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.link} target="_blank"><div className="icon-link"></div></a>
                      <a href={item.github} target="_blank"><div className="icon-github"></div></a>
                    </div>
                    <a href="#" className="link flex">
                      more
                      <span
                        style={{ alignSelf: "center" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
