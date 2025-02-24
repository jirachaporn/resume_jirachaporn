import { MdOutlineWork } from "react-icons/md";

function Experience() {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <MdOutlineWork  className="text-white bg-[#163853] rounded-full p-1" size={30}/>
        <h2 className="text-2xl font-bold text-[#2c559d] ml-3">EXPERIENCES & PROJECT</h2>
      </div>
      <div className="border-b-4 border-[#163853]  mt-1"></div>

      <ul className="list-disc ml-6 mt-3 text-gray-800">
        <li>
          <span className="font-bold text-[#2c559d]">Database System</span>
          <p className="font-bold text-gray-600">Admission Selection Database System of Kasetsart University, Kamphaeng Saen Campus</p>
          <p className="text-gray-600">
            A database system supporting the admission process at Kasetsart University, Kamphaeng Saen Campus.
            It manages student data, academic records, and program details while streamlining applicant evaluation, 
            interview scheduling, and result announcements.
          </p>
        </li>

        <li className="mt-4">
          <span className="font-bold text-[#2c559d]">System Analysis and Design</span>
          <p className="font-bold text-gray-600">Knife Sharpening Service Information System</p>
          <p className="text-gray-600">
            A system analysis, design, and software construction project for an online knife sharpening service 
            information system. The system manages employee data, customer membership registration, 
            appointment scheduling, price assessment, task assignment, and work progress tracking.
          </p>
        </li>

        <li className="mt-4">
          <span className="font-bold text-[#2c559d]">Data Science</span>
          <p className="text-gray-600">
            The project aims to predict if a person has gastritis using survey responses. 
            A dataset will be collected from 130 university students, each answering 8 questions. 
            The data will be processed, cleaned, and analyzed using Weka for predictive modeling.
          </p>
        </li>

        <li className="mt-4">
          <span className="font-bold text-[#2c559d]">Frontend Web Design</span>
          <p className="font-bold text-gray-600">Genetic Disease Risk Calculator</p>
          <p className="text-gray-600">
            Design and develop a website that predicts the likelihood of genetic diseases 
            based on simple inheritance patterns. The site will analyze four types of genetic inheritance: 
            Autosomal Dominant, Autosomal Recessive, Sex-linked Dominant, and Sex-linked Recessive.
          </p>
        </li>

        <li className="mt-4">
          <span className="font-bold text-[#2c559d]">Train a model to detect stickers</span>
          <p className="text-gray-600">
            Study object detection, YOLO, and gather a dataset to train a model using the Roboflow framework 
            and Roboflow 3.0 for training, enabling it to detect the desired stickers.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
