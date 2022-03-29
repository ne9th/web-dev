import React, {useState} from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState(''); // create whatsHappening state variable
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit', tuit: whatsHappening });
  }
  return (
    <>
    <div className="row">
        <div className="col-1">
            <img className="rounded-circle" width="48px" height="48px" src="https://cdn.mos.cms.futurecdn.net/2AFSP26rydXuKTuP7qjwbE.jpg"></img>
        </div>
        <div className="col-11 ps-3">
            <textarea className="w-100 bg-black text-white ps-2 pt-2" placeholder="What's happening?" value={whatsHappening}
                    onChange={(event) => setWhatsHappening(event.target.value)}>
            </textarea>
            <div className="row">
                <div className="col-10 text-primary">
                    <i className="fa-solid fa-image p-2"></i>
                    <i className="fa-solid fa-chart-line p-2"></i>
                    <i className="fa-regular fa-face-smile p-2"></i>
                    <i className="fa-regular fa-calendar p-2"></i>
                </div>
                <div className="col-2">
                    <button className="btn w-100 btn-primary btn-sm rounded-pill" onClick={tuitClickHandler}>
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    </div>
    
        <br/>
    </>
  );
}
export default WhatsHappening;