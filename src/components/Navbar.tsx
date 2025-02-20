import React from "react";
interface NavbarProps {
  title: string;
}

const data = [
  { title: "About Me" },
  { title: "Expertise" },
  { title: "Portfolio" },
  { title: "Experience" },
  { title: "Testimonials" },
];

const Navbar = () => {
  return (
    <div >
      <div className="container flex mx-auto justify-between items-center py-4">
        <div className="items-center font-mono flex text-xl justify-center">
          <span className="text-teal-600 font-bold text-3xl mr-2">&lt;/&gt;</span>
          <p className="hover:underline-offset-2 hover:underline cursor-pointer">{" "}Hibban Faruq</p>
        </div>
        <div className="flex justify-between gap-4">
          {data.map((item, index) => (
            <button
              className="rounded-lg hover:bg-teal-600 hover:text-black p-3 border-[2px] border-teal-700 hover:border-teal-600 "
              key={index}
            >
              {item.title}
            </button>
          ))}
        </div>
        <button className="rounded-lg hover:bg-teal-600 hover:text-black p-3 border-teal-700 border-[2px] hover:border-teal-600">
          Reach Out!
        </button>
      </div>
    </div>
  );
};

export default Navbar;
