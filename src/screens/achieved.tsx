import React from "react";
import { useNavigate } from "react-router-dom";

const Achieved = () => {
    const navigate = useNavigate();
    return (
        <main className="w-screen h-screen bg-green relative flex">
                <button onClick={() => navigate('/')}>button</button>
        </main>
    );
};

export default Achieved;