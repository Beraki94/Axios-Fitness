import {trainers} from "../../data"
import "./TrainersList.css"

const Trainer= ({ picture, name, position }) => {
    return (
      <div className="trainer">
        <img src={picture} alt={name} className="trainer-picture" />
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-position">{position}</p>
      </div>
    );
  };

  import React from 'react'
  
  const TrainersList = () => {
    return (
      <div className="trainers-section">
        
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <Trainer
              key={trainer.id}
              picture={trainer.picture}
              name={trainer.name}
              position={trainer.position}
            />
          ))}
        </div>
      </div>
    );
  };

  export default TrainersList