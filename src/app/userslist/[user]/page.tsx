"use client";

const User =({ params }) =>{
    console.log(params);

    return (
        <div>
            <h1>{params.user}</h1>
            <p></p>
        </div>

    );

};
export default User;
