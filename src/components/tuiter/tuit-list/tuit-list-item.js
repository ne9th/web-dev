import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "../TuitStats";
import { deleteTuit } from "../../../actions/tuits-actions";

const TuitListItem = (
    {
        tuit = {
            _id: '123',
            topic: 'Web Development',
            postedBy: {
                "username": "ReactJS"
            },
            liked: true,
            verified: false,
            handle: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            attachments: {
                video: "unKvMC3Y1kI"
            },
            logo_image: "../../../images/react-blue.png",
            avatar_image: "../../../images/react-blue.png",
            stats: {
                comments: 123,
                retuits: 234,
                likes: 345
            }
        }

}) => {
    
    
    const dispatch = useDispatch();

    // const deleteTuit = (tuit) => {
    //     dispatch({type: 'delete-tuit', tuit})
    // };

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
                            <a><i onClick={() => deleteTuit(dispatch, tuit)} className="fas fa-remove a-pull-right"></i></a>
                        </div>
                    </div>
                    <p>{tuit.tuit}</p>
                    <div className="card border-1 bg-transparent">
                        <img className="rounded" src={attachment}/>
                    </div>
                    <div className="pt-1">
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </li>
        </div>
        </>
        
    )



}
export default TuitListItem;
