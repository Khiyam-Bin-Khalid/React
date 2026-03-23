import React from "react";
import appwriteService from"../Appwrite/conf";
import { Link } from "react-router-dom";
//using variable name with  dollar sign is syntax in appwrite
function PostCard({$id,title, featuredImage}){
    return(
        <link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-44">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className="rounded-xl"/>
                </div>
                <h2 className="text-xl font-bolds">{title}</h2>
            </div>
        </link>
    )
}
export default PostCard;