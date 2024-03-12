const NavBar = () => {
  return (
    <>
      <div className=" flex justify-evenly border border-black bg-blue-800 p-4 font-semibold text-md items-center ">
        <div className="">
          <h1 className="text-2xl font-bold">iTask</h1>
        </div>
        <div className="flex ">
          <ul className="flex gap-3 font-bold cursor-pointer">
            <li>Home</li>
            <li>Your Tasks</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
