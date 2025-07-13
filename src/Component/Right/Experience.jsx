import { MdOutlineWork } from "react-icons/md";

function Experience() {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-[#163853] rounded-full flex items-center justify-center">
          <MdOutlineWork className="text-white" size={20} />
        </div>
        <h2 className="text-2xl font-bold text-[#2c559d] ml-3">EXPERIENCE</h2>
      </div>


      <div className=" list-disc border-b-4 border-[#163853]  mt-1"></div>
      <div>
        <ul className="list-disc ml-6 text-[#2c559d]">
          <li>
            <div className="mt-3 flex justify-between">
              <span className="font-bold text-[#2c559d]">Botnoi Group Co., Ltd.</span>
              <p className="text-gray-600 ">Apr 1 – Jun 13, 2025</p>
            </div>
            <p className="text-gray-600 font-semibold">Frontend Developer Intern</p>
            <p className="text-gray-600">Developed responsive web interfaces using Angular and TypeScript. Integrated APIs and collaborated cross-functionally with UX/UI, backend, and PM teams. Attended client meetings to gather requirements and deliver updates.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experience;
