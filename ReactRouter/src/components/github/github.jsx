import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
    // const [data, setData] = React.useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Khiyam-Bin-Khalid/followers")
    //         .then((response) => response.json())
    //         .then((followers) => {
    //             console.log(followers);
    //             setData(followers);
    //         })
    //         .catch((err) => console.error("GitHub fetch error:", err));
    // }, []);

    return (
        <div className="text-center m-4 bg-gray-400 text-black p-4">
            <div className="text-3xl mb-3">Github Followers ({data.length})</div>
            <ul className="list-none p-0 m-0">
                {data.map((user) => (
                    <li key={user.id} className="mb-2 flex items-center justify-center gap-2">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="text-xl">
                            {user.login}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Github;
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Khiyam-Bin-Khalid/followers")
    return response.json()
}