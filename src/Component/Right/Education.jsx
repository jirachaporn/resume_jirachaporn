import { BsMortarboardFill } from "react-icons/bs";

function Education() {
    return (

        <div className="mt-6">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-[#163853] rounded-full flex items-center justify-center">
                    <BsMortarboardFill className="text-white" size={22} />
                </div>
                <h2 className="text-2xl font-bold text-[#2c559d] ml-3">EDUCATION</h2>
            </div>

            <div className=" list-disc border-b-4 border-[#163853]  mt-1"></div>
            <div>
                <ul className="list-disc ml-6 text-[#2c559d]">
                    <li>
                        <div className="mt-3 flex justify-between">
                            <span className="font-bold text-[#2c559d]">KASETSART UNIVERSITY</span>
                            <p className="text-gray-600 ">2022 - 2026</p>
                        </div>
                        <p className="text-gray-600">Faculty of Liberal Arts and Science,</p>
                        <p className="text-gray-600">Major of Computer Science</p>
                    </li>
                </ul>
            </div>
        </div>

    )

};

export default Education;