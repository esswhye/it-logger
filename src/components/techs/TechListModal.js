import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    const res = await fetch("/techs");
    const data = await res.json();
    setTechs(data);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-context">
        <h4>Technician List</h4>
        <ul className="collection">
          {techs.map((tech) => (
            <TechItem key={tech.id} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
