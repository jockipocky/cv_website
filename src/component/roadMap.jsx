import React, { useState, useRef, useEffect } from "react";

function LevelNode(props) {
  const active = props.active === props.id;
  return (
    <button
      type="button"
      className={"level" + (active ? " level--active" : "")}
      style={{ left: props.left + "%", top: props.top + "%" }}
      onClick={() => props.onSelect(props.id)}
      aria-pressed={active}
    >
      <span className="levelBadge">{props.index}</span>
      <span className="levelTitle">{props.title}</span>
    </button>
  );
}

export function Roadmap() {
  const [activeId, setActiveId] = useState("lvl1");

var levels = [
{ id:"lvl1", index:1, title:"First Lines of Code", progress:0.05, info:"Started tinkering with small scripts and simple games." },
{ id:"lvl2", index:2, title:"Web Foundations", progress:0.20, info:"HTML/CSS/JS, responsive layouts, accessibility." },
{ id:"lvl3", index:3, title:"Full‑Stack Quest", progress:0.38, info:"React, Node.js, REST APIs, auth, databases." },
{ id:"lvl4", index:4, title:"Collab & Git", progress:0.58, info:"Team projects, code reviews, CI, Git strategies." },
{ id:"lvl5", index:5, title:"Computer Engineering BSc", progress:0.78, info:"Algorithms, data structures, networks, OS." },
{ id:"lvl6", index:6, title:"Today & Beyond", progress:0.93, info:"Shipping projects, learning daily, exploring cloud & DX." }
];

var pathRef = useRef(null);
var [points, setPoints] = useState([]);


useEffect(function(){
if(!pathRef.current) return;
var path = pathRef.current;
var total = path.getTotalLength();
var rect = path.closest('svg').getBoundingClientRect();


var newPts = levels.map(function(lv){
var p = path.getPointAtLength(total * lv.progress);
// Convert svg coords (0..viewBox) to percent in container
var xPct = (p.x / 100) * 100; // since viewBox is 0 0 100 100
var yPct = (p.y / 100) * 100;
return { id: lv.id, x: xPct, y: yPct };
});
setPoints(newPts);
}, [pathRef.current]);


function coordsFor(id){
for(var i=0;i<points.length;i++) if(points[i].id===id) return points[i];
return { x: 0, y: 0 };
}


var enriched = levels.map(function(lv){
var pt = coordsFor(lv.id);
return Object.assign({}, lv, { x: pt.x, y: pt.y });
});


var current = enriched.find(function(l){ return l.id===activeId; }) || enriched[0];

  return (
    <div className="roadmap">
      <div className="mapWrap">
        <svg className="map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <path className="path" d="M5,10 C25,30 40,20 55,30 S85,45 95,25" />
          <path className="path" d="M15,55 C35,35 50,45 65,35 S90,60 95,75" />
        </svg>

        {levels.map((lv) => (
          <LevelNode key={lv.id} {...lv} active={activeId} onSelect={setActiveId} />
        ))}
      </div>

      <div className="infoPanel" role="status" aria-live="polite">
        <div className="infoHeader">
          <span className="chip">Level {current.index}</span>
          <h3 className="infoTitle">{current.title}</h3>
        </div>
        <p className="infoBody">{current.info}</p>
      </div>
    </div>
  );
}
