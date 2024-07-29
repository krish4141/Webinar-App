import React from 'react';
import Krishna from "../assests/Krishna.jpg";
import Dummy from "../assests/Dummy.jpg"
import './CardComponent.css';

const CardComponent = ({ webinar, onEdit, onDelete }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '400px', maxHeight: '500px' }}>
      <div className="card-header text-white" style={{ backgroundColor: webinar.backgroundColor }}>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <h5 className="mb-0">{webinar.instructorName}</h5>
            <p className="mb-0">{webinar.instructorRole}</p>
          </div>
          <img
            src={Krishna || Dummy}
            alt="Profile"
            style={{marginLeft:"80px", width: '100px', height: '100px', borderRadius: '20px' }}
          />
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-title text-danger">{webinar.topics}</h6>
        <p className="card-text" style={{ fontSize: '20px', color: '#000000' }}>{webinar.webinarTitle}</p>
        <p className="card-text text-muted">{`${webinar.startDate} • ${webinar.startTime} - ${webinar.endTime}`}</p>
        <div className="d-flex">
          <button className="btn btn-outline-danger" style={{ borderRadius: '20px', backgroundColor: '#FFCDD2', color: '#B71C1C', width: '80px', height: '40px', marginRight: '20px' }} onClick={onDelete}>Delete</button>
          <button className="btn" style={{ color: 'blue' }} onClick={() => onEdit(webinar)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
