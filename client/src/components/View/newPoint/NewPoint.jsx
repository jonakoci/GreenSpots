import React, {  useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './NewPoint.css'

const NewPoint = () => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [available, setAvailable] = useState(true);
  const navigate= useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/new', {
        title,
        description,    
        lng,
        lat,
        available     
    })
    .then((res) => {
        console.log(res);
        navigate("/");
      })
    .catch(err=>(err ))
}
  
  return (
    <div className="new-point">
        <h3>Add a new charging point:</h3>
      <div class="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange = {(e)=>setTitle(e.target.value)}
        />
      </div>
      <div class="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Road
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange = {(e)=>setDescription(e.target.value)}
        />
      </div>

      <p>Position:</p>
      <div className="positionC d-flex justify-content-around">
       <div class="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Lat
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={lat}
          onChange = {(e)=>setLat(e.target.value)}
        />
      </div>

      <div class="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Lng
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={lng}
          onChange = {(e)=>setLng(e.target.value)}
        />
      </div>
      </div>

      <div class="form-group">
              <label>Available</label>
              <input type="checkbox" checked={available} onChange = {(e)=>setAvailable(!available)} />
              <br />
              <button class="btn btn-dark" onClick={onSubmitHandler}>Add</button>
            </div>


    </div>
  );
};


export default NewPoint;