//
// "use client";
// import { useState } from "react";
//
// const GlobalButton = () => {
//   const [selected, setSelected] = useState("Global");
//   const [selectedFlag, setSelectedFlag] = useState("/icons/global.svg");
//   const [viewOption, setViewOption] = useState(false);
//
//   const data = [
//     { flag: "https://flagcdn.com/w320/us.png", country: "USA" },
//     { flag: "https://flagcdn.com/w320/ca.png", country: "Canada" },
//     { flag: "https://flagcdn.com/w320/gb.png", country: "UK" },
//     { flag: "https://flagcdn.com/w320/de.png", country: "Germany" },
//     { flag: "https://flagcdn.com/w320/fr.png", country: "France" },
//     { flag: "https://flagcdn.com/w320/jp.png", country: "Japan" },
//     { flag: "https://flagcdn.com/w320/cn.png", country: "China" },
//     { flag: "https://flagcdn.com/w320/in.png", country: "India" },
//     { flag: "https://flagcdn.com/w320/br.png", country: "Brazil" },
//     { flag: "https://flagcdn.com/w320/au.png", country: "Australia" },
//   ];
//
//   const handleSelection = (country, flag) => {
//     setSelected(country);
//     setSelectedFlag(flag);
//     setViewOption(false);
//   };
//
//   return (
//     <>
//       <div className="flex items-center justify-center text-dark-blue font-[700] hover:bg-blue-50 hover:cursor-pointer text-[14px] rounded-2xl pt-[9px] pb-[8px] border pr-[18px] pl-[18px]">
//         <div className="relative" onClick={() => setViewOption(!viewOption)}>
//           <img className="mr-2 w-5 h-5" src={selectedFlag} alt={selected} />
//         </div>
//         <div onClick={() => setViewOption(!viewOption)}>
//           <span>{selected}</span>
//         </div>
//         <div className={`${viewOption ? "absolute" : "hidden"} top-[70px] h-64 w-48 overflow-y-scroll bg-white border rounded-md shadow-lg`}>
//           {data.map((item, index) => (
//             <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelection(item.country, item.flag)}>
//               <img className="mr-2 w-5 h-5" src={item.flag} alt={item.country} />
//               <span>{item.country}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default GlobalButton;

"use client";
import { useState } from "react";

const GlobalButton = () => {
  const [selected, setSelected] = useState("Global");
  const [selectedFlag, setSelectedFlag] = useState("/icons/global.svg");
  const [viewOption, setViewOption] = useState(false);

  const data = [
    { flag: "https://flagcdn.com/w320/us.png", country: "USA" },
    { flag: "https://flagcdn.com/w320/ca.png", country: "Canada" },
    { flag: "https://flagcdn.com/w320/gb.png", country: "UK" },
    { flag: "https://flagcdn.com/w320/de.png", country: "Germany" },
    { flag: "https://flagcdn.com/w320/fr.png", country: "France" },
    { flag: "https://flagcdn.com/w320/jp.png", country: "Japan" },
    { flag: "https://flagcdn.com/w320/cn.png", country: "China" },
    { flag: "https://flagcdn.com/w320/in.png", country: "India" },
    { flag: "https://flagcdn.com/w320/br.png", country: "Brazil" },
    { flag: "https://flagcdn.com/w320/au.png", country: "Australia" },
  ];

  const handleSelection = (country, flag) => {
    setSelected(country);
    setSelectedFlag(flag);
    setViewOption(false);
  };

  return (
    <>
      <div
        className="flex items-center justify-center text-dark-blue font-[700] hover:bg-blue-50 hover:cursor-pointer text-[14px] rounded-2xl pt-[9px] pb-[8px] border pr-[18px] pl-[18px]"
        onClick={() => setViewOption(!viewOption)}
      >
        <div className="relative">
          <img className="mr-2 w-5 h-5" src={selectedFlag} alt={selected} />
        </div>
        <div>
          <span>{selected}</span>
        </div>
        <div
          className={`${viewOption ? "absolute" : "hidden"} top-[70px] h-64 sm:w-64 md:64 overflow-y-scroll bg-white border rounded-md shadow-lg`}
          onClick={(e) => e.stopPropagation()}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelection(item.country, item.flag)}
            >
              <img className="mr-2 w-5 h-5" src={item.flag} alt={item.country} />
              <span>{item.country}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default GlobalButton;
