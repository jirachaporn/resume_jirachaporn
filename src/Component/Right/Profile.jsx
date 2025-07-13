import { FaUserCircle } from "react-icons/fa";

function Profile() {
    return (
        <>
            <div className="flex flex-row ">
                <FaUserCircle className="text-[#163853]" size={32} />
                <h2 className="text-2xl font-bold text-[#2c559d]  ml-3">PROFILE</h2>
            </div>
            <div className="border-b-4 border-[#163853]  mt-1"></div>

            <p className="text-gray-600 mt-2">
                I am a third-year Computer Science student interested in Frontend
                Development. I am currently studying Backend Development to enhance my
                expertise and develop skills for Full Stack Development in the future. I am
                committed to continuously learning and improving my programming skills.
                I work well with others and flexible in team settings, and open minded to get
                feedback to improve myself better.

            </p>
        </>
    )

};

export default Profile;