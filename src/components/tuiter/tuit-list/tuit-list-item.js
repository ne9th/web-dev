import { useDispatch } from "react-redux";
import TuitStats from "../TuitStats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    let attachment = "";
    if (tuit.hasOwnProperty("attachments")) {
        if (tuit.attachments.hasOwnProperty("image")) {
            attachment=tuit.attachments.image;
        }
        else if (tuit.attachments.hasOwnProperty("video")) {
            attachment=tuit.attachments.video;
        }
    }

    return (
        <>
        
        <div className="list-group-item">
            <li className="row d-flex ">
                <div className="col-1 justify-content-center pe-1">
                    <img src={tuit['avatar-image']} className="rounded-circle" width="48px" height="48px"/>
                </div>
                <div className="col-11 ps-4">
                    <div className="row">
                        <div className="col-11">
                            <a>{tuit.postedBy.username}<span className="wd-handle ps-1">@{tuit.postedBy.username} - {tuit.time}</span></a>
                        </div>
                        <div className="col-1 align-right">
                            <a><i onClick={() => deleteTuit(tuit)} className="fas fa-remove a-pull-right"></i></a>
                        </div>
                    </div>
                    <p>{tuit.tuit}</p>
                    <div className="card border-1 bg-transparent">
                        <img className="rounded" src={attachment}/>
                    </div>
                    <div className="row pt-3">
                        <div className="col-3">
                            <a ><i className="wd-icon fa-regular fa-comment"></i>{tuit.stats.comments}</a>
                        </div>
                        <div className="col-3">
                            <a ><i className="wd-icon fa-solid fa-retweet"></i><span class="wd-action-num">{tuit.stats.retuits}</span></a>
                        </div>
                        <div className="col-3">
                            <a ><TuitStats tuit={tuit}/></a>
                        </div>
                        <div className="col-3">
                            <a ><i className="wd-icon fa-solid fa-arrow-up-from-bracket"></i></a>
                        </div>
                        
                    </div>
                </div>
            </li>
        </div>
        </>
    )



}
export default TuitListItem;