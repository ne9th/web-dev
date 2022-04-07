import {useDispatch} from "react-redux";
import { updateTuit } from "../../../services/tuits-service";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  // const likeTuit = () => {
  //   dispatch({type: 'like-tuit', tuit});
  // };
  
  return (
    <span>
      <i onClick={() => updateTuit(dispatch, {
          ...tuit,
          likes: tuit.likes + 1
      })} className="far fa-thumbs-up ms-2 me-1"></i>
      {tuit.likes}

      <i onClick={() => updateTuit(dispatch, {
          ...tuit,
          dislikes: tuit.dislikes + 1
      })} className="far fa-thumbs-down ms-2 me-1"></i>
      {tuit.dislikes}
    </span>
);
}
export default TuitStats;