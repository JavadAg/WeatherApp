import React from "react"

const WeatherCard = () => {
  return (
    <div className="flex flex-col justify-between items-center backdrop-blur-2xl bg-gradient-to-tr from-indigo-800/30 to-pink-800/30 space-y-10 p-5 w-2/4 rounded-2xl text-white shadow-sm shadow-purple-600/20">
      <div className="flex justify-between items-center bg-red-400 w-full">
        <div className="flex justify-center items-center flex-col">
          <span>1</span>
          <span>2</span>
        </div>
        <div>
          <i>3</i>
        </div>
      </div>
      <div className="flex justify-between items-center bg-blue-400 w-full">
        <span>4</span>
        <div className="flex justify-center items-center flex-col">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
