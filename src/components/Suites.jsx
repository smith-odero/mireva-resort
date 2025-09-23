import React,{ useState } from "react";
import ReusableNavbar from "./ReusableNavbar";
import ReusableFooter from "./ReusableFooter"
const Suite = () => {
    return (
        <div className="bg-white">
            <ReusableNavbar />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis numquam ducimus libero aut quo pariatur reprehenderit velit, ex odit dolorem. Aperiam quas aspernatur fuga error laboriosam provident obcaecati nesciunt?</h2>
            <ReusableFooter />
        </div>
    )

}
export default Suite;