import React from "react";

const ReposList: React.FC = () => {
    return (
        <div id="page-repo-list" className="w-screen h-screen bg-green-400">
            <h1>repolist</h1>

            <a href="#page-login">
                <button>Logout</button>
            </a>
        </div>
    );
};

export default ReposList;