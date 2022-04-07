import React, { useEffect, useState} from "react";
import TuitListItem
       from "./tuit-list-item";
import './tuits.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteTuit, findAllTuits} from "../../../actions/tuits-actions";


const TuitList = () => {
  // const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), [dispatch]);
  return (
    <>
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit => {
            <div className="row">
              <div className="col-11">
                <TuitListItem key={tuit._id} tuit={tuit}/>
              </div>
              <div className="col-1">
              <i className="fas fa-remove float-end" 
              onClick={() => deleteTuit(dispatch, tuit)}></i>
              </div>
              
            </div>
            
    })
        }
      </ul>
    </>
  );
}

export default TuitList;