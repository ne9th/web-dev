import {useDispatch} from "react-redux";
import { updateTuit } from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  // const likeTuit = () => {
  //   dispatch({type: 'like-tuit', tuit});
  // };
  
  return (
    <div className="row pt-3">
      <div className="col-2">
          <a ><i className="wd-icon fa-regular fa-comment"></i>{tuit.stats?.comments}</a>
      </div>
      <div className="col-2">
          <a ><i className="wd-icon fa-solid fa-retweet"></i><span className="wd-action-num">{tuit.stats?.retuits}</span></a>
      </div>
      <div className="col-2">
          <a><i onClick={() => updateTuit(dispatch, {
              ...tuit, stats: {
                comments: tuit.stats.comments,
                retuits: tuit.stats.retuits,
                likes: tuit.stats.likes + 1
              }
          })} className="far fa-thumbs-up ms-2 me-1"></i></a>
          {tuit.stats?.likes}
      </div>
      <div className="col-2">
          <a><i onClick={() => updateTuit(dispatch, {
              ...tuit,
              dislikes: tuit.dislikes + 1
          })} className="far fa-thumbs-down ms-2 me-1"></i></a>
          {tuit.dislikes}
      </div>
      <div className="col-2">
          <a ><i className="wd-icon fa-solid fa-arrow-up-from-bracket"></i></a>
      </div>
      
  </div>
   
);
}
export default TuitStats;