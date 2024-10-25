import React from 'react'

const mainPage = () => {
  return (
    <div>
        <div className="mx-2 sm:mx-8 h-16  flex-wrap hidden ">
        <div className="flex justify-between mx-2 items-center [h-100%]">
          <div className=" flex gap-8 text-black font-semibold  ">
            <div className=" h-4 w-4">
              <img src="https://static-00.iconduck.com/assets.00/figma-icon-1366x2048-tdlpz5c4.png" alt="" />
            </div>
            <div className="gap-8 hidden lg:flex">
            <span className=" hover:text-yellow-300 hover:cursor-pointer ">Products</span>
            <span className=" hover:text-yellow-300 hover:cursor-pointer ">Solution</span>
            <span className=" hover:text-yellow-300 hover:cursor-pointer ">Community</span>
            <span className=" hover:text-yellow-300 hover:cursor-pointer ">Resources</span>
            <span className=" hover:text-yellow-300 hover:cursor-pointer ">Pricing</span>
            </div>
          </div>
          <div className="flex gap-8 text-black items-center">
            <div>
              <span className="hidden md:flex hover:border-b-2 hover:cursor-pointer ">Contact Sales</span>
            </div>
            <div className="hidden md:flex items-center p-4 border border-current hover:cursor-pointer rounded-lg hover:rounded-none  h-10">
              <span className="font-semibold text-xl">
                Log in
              </span>
            </div>
            <div className=" flex items-center p-4 bg-black text-white hover:cursor-pointer rounded-lg hover:rounded-none  h-10">
              <span className="font-semibold text-xl">
                Get Started
              </span>
            </div>
            <div className=" flex items-center p-4 border border-current hover:cursor-pointer rounded-lg lg:hidden  h-10">
              <span className="font-semibold text-xl">
                =
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b hidden"></div>
    </div>
  )
}

export default mainPage