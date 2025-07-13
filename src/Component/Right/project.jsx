import { FaFolder } from "react-icons/fa";

function Project() {
    return (
        <div className="mt-6">
            <div className="flex items-center">
                <FaFolder className="text-white bg-[#163853] rounded-full p-1" size={30} />
                <h2 className="text-2xl font-bold text-[#2c559d] ml-3">PROJECT</h2>
            </div>
            <div className="border-b-4 border-[#163853]  mt-1"></div>

            <ul className="list-disc ml-6 mt-3 text-gray-800">

                <li className="mt-4">
                    <span className="font-semibold text-[#2c559d]">Frontend Web Design</span>
                    <p className="font-semibold text-gray-600">Genetic Disease Risk Calculator</p>
                    <p className="text-gray-600">
                        Designed and developed a web application that predicts
                        the likelihood of genetic diseases based on four simple inheritance
                        patterns. Built with React and Vite
                    </p>

                    <div className=" mt-3">
                        <p className="font-semibold text-gray-600">Event Music Selector</p>
                        <p className="text-gray-600">
                            Developed a web application that recommends music playlists based on event themes such as weddings or ceremonies.
                            Built with React, Tailwind CSS, and Vite, integrated with the YouTube API,
                            and used CSV files to manage and filter song data.
                        </p>

                    </div>
                </li>


                <li className="mt-4">
                    <span className="font-semibold text-[#2c559d]">Database System</span>
                    <p className="font-semibold text-gray-600">Admission Selection Database System of Kasetsart University, Kamphaeng Saen Campus</p>
                    <p className="text-gray-600">
                        Analyzed and designed a database system to support the student admission process,
                        covering student records, program details, applicant evaluation, and interview scheduling.
                        Created data models using MySQL and designed workflows to simulate real operations.
                    </p>
                </li>

                <li className="mt-4">
                    <span className="font-semibold text-[#2c559d]">System Analysis and Design</span>
                    <p className="font-semibold text-gray-600">Knife Sharpening Service Information System</p>
                    <p className="text-gray-600">
                        Conducted system analysis and design for an online knife sharpening service.
                        Created user workflows, entity-relationship diagrams,
                        and UX/UI wireframes to manage appointments, pricing, and task tracking.
                        Tools used include Figma, draw.io, and MySQL for data modeling.
                    </p>
                </li>

                {/* <li className="mt-4">
          <span className="font-semibold text-[#2c559d]">Data Science</span>
          <p className="text-gray-600">
            The project aims to predict if a person has gastritis using survey responses. 
            A dataset will be collected from 130 university students, each answering 8 questions. 
            The data will be processed, cleaned, and analyzed using Weka for predictive modeling.
          </p>
        </li>

        <li className="mt-4">
          <span className="font-semibold text-[#2c559d]">Train a model to detect stickers</span>
          <p className="text-gray-600">
            Study object detection, YOLO, and gather a dataset to train a model using the Roboflow framework 
            and Roboflow 3.0 for training, enabling it to detect the desired stickers.
          </p>
        </li> */}
            </ul>
        </div>
    );
}

export default Project;
