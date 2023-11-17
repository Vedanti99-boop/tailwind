// whenever you want use your custom h,m,p dynamically etc use it as my-[67px]/[3rem] or else you can also use it in tailwindconfig.js : square []
// notation

//using flex it will bring everything in one row and if you want it col wise just use flex flex-col

//using w-fit in button it will get the size of your content then you can apply m p accordingly and using mx-auto it will come to center

//you can also use outline for borders

//make main class relative and its child absolute so that we can arrange accordingly main (parent)

//you can also use hidden and block with md lg to make it more responsoive eg with hamburger

//using absolute pos it will get placed on your content eg hamburger

function App() {
  return (
    <>
      {/* <nav className="bg-white-900 text-black flex justify-between rounded-full"> */}
      <nav className="bg-white-900 text-black flex  ">
        <img src="/images/starb.png" className="h-12 ml-28 pt-3" alt="" />
        {/* instead of space we can also use mx-5 or any num */}
        {/* when you'll try to use space-y/x it will not get apply to 1st element so you can just take empty li 1st */}
        <ul className="flex px-8 py-4 mx-10 space-x-14 ">
          <li></li>
          <li className=" cursor-pointer font-serif ">Home</li>
          <li className=" cursor-pointer font-serif">About</li>
          <li className=" cursor-pointer font-serif">Profile</li>
          <li className=" cursor-pointer font-serif">Contact Us</li>
        </ul>
      </nav>

      <main className="bg-green-900 flex ">
        {/* <div className="bg-green-900 h-96 text-xl text-white flex items-center"> */}
        <div className= "h-96  text-white pl-20 grid content-center">

          <div className="text-3xl mb-4 font-bold"> 
          Diwali Delights: Sparkling Traditions.
          </div>
          <p className="w-5/6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut, ea debitis unde iure accusamus ratione tenetur quae rerum maiores sunt ducimus velit omnis odio pariatur facere ipsam. Illum, perferendis!
          </p>
        </div>

        <div className="flex items-center mr-10">
         <button className="border border-white text-white w-28 px-3 py-3 rounded-full hover:text-green-900 hover:bg-white">
          Know more
         </button>
        </div>
      </main>
      <hr />
{/* ctrl+space :will get all suggestions */}
      {/* <div className="container">
        <h1 className="text-blue-900 my-12">This is blue text</h1>
        <h1 className="text-blue-900 my-16">This is blue text</h1>
        <h1 className="text-blue-900 my-26">This is blue text</h1>
      </div> */}
    </>
  );
}

export default App;
