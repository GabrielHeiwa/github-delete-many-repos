import React from "react";

interface RepoCardProps {
    reponame: string;
    id: number;
    url: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ id, reponame, url }) => {
    return <div className="flex flex-row p-4 my-2 mx-8 bg-gray-50 cursor-pointer">
        <p className="w-44 truncate">{reponame}</p>
        {/* <p className="">{id}</p> */}
        <a href={url} target={"_blank"}>
            <p>URL</p>
        </a>
    </div>
};

export default RepoCard;