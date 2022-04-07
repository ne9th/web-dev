import React, { useEffect, useState} from "react";
import TuitListItem
       from "./tuit-list-item";
import './tuits.css';
import { useDispatch, useSelector } from "react-redux";
import {createTuit, deleteTuit, findAllTuits} from "../../../actions/tuits-actions";


const TuitList = () => {
  const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), []);
  return (
    <>
    {/* <button onClick={() => createTuit(dispatch, newTuit)}
    className="btn btn-primary float-end">
  Tuit
</button>
<textarea className="form-control w-75" 
  onChange={(e) =>
    setNewTuit({...newTuit,
    tuit: e.target.value})}></textarea> */}
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit => {
            <div className="row">
              <div className="col-11">
                <TuitListItem key={tuit._id} tuit={tuit}/>
              </div>
              <div className="col-1">
              <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}></i>
              </div>
              
            </div>
            
    })
        }
      </ul>
    </>
  );
}

export default TuitList;