import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { AppContext } from "../Store/AppContext";
function Confirmation() {
  const context = useContext(AppContext);
  const { nextStep, prevStep } = context;
  const { firstName, lastName, email, dob, age, country, state } =
    context.details;
  return (
    <div>
      <div class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            First name :
            <span className="text-gray-500 font-normal">{firstName}</span>
          </label>
        </div>
        <br />
        <div class="relative z-1 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            Last name :{" "}
            <span className="text-gray-500 font-normal">{lastName}</span>
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            E-mail : <span className="text-gray-500 font-normal">{email}</span>
          </label>
        </div>
        <br />
        <div class="relative z-0 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            Country :{" "}
            <span className="text-gray-500 font-normal">{country}</span>
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            State : <span className="text-gray-500 font-normal">{state}</span>
          </label>
        </div>
        <br />
        <div class="relative z-0 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            DOB : <span className="text-gray-500 font-normal">{dob}</span>
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-2xl font-semibold">
            Age : <span className="text-gray-500 font-normal">{age}</span>
          </label>
        </div>
        <br></br>
        <div className="mt-9 flex justify-between">
          <CustomButton btnName={"Back"} task={prevStep} />

          <CustomButton btnName={"Next"} task={nextStep} />
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
