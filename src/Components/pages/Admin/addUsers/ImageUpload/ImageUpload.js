import React from "react";

const ImageUpload = () => {
  return (
    <div className="flex justify-start mt-8 ">
      <div className="max-w-2xl rounded-lg ">
        <div>
          <label className="inline-block mb-2 text-gray-500">
            Upload your image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-borderColor border-dashed hover:bg-secondary cursor-pointer">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Attach a Image
                </p>
              </div>
              <input
                type="file"
                name="image"
                className="opacity-0"
                accept="image/*"
                required
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
