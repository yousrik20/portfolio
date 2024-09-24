import { useState } from "react";
import "./header.css";
export default function header() {
  const [showModel,setShowModel]=useState(false);
  return (
    <header className="flex">
      <button className="menu flex icon-menu" onClick={()=>setShowModel(true)}></button>
      <div/>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>
      {showModel && (
        <div className="fixed">
            <ul className="model">
              <li>
                <button className="icon-close" onClick={()=>setShowModel(false)}/>
              </li>
              <li><a href="">About</a></li>
              <li><a href="">Articles</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Speaking</a></li>
              <li><a href="">Users</a></li>
            </ul>
        </div>
      )}
    </header>
  );
}
