// import React, { useState } from "react";

// export function Tabs({ children }) {
//   function findActiveTab(a) {
//     return a.reduce((accumulator, currentValue, i) => {
//       if (currentValue.props.active) {
//         return i;
//       }

//       return accumulator;
//     }, 0);
//   }

//   function tabValidator(tab) {
//     return tab.type.displayName === "Tab" ? true : false;
//   }

//   const [activeTab, setActiveTab] = useState(findActiveTab(children));
//   return (
//     <>
//       <div className="flex gap-2 justify-center bg-pink-500 p-2">
//         {children.map((item, i) => {
//           return (
//             <>
//               {tabValidator(item) && (
//                 <Tab
//                   key={`tab-{i}`}
//                   currentTab={i}
//                   activeTab={activeTab}
//                   setActiveTab={setActiveTab}
//                 >
//                   {item.props.children}
//                 </Tab>
//               )}
//             </>
//           );
//         })}
//       </div>
//       <div className="p-5">
//         {children.map((item, i) => {
//           return (
//             <div className={` ${i === activeTab ? "visible" : "hidden"}`}>
//               {item.props.component}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export function Tab({ children, activeTab, currentTab, setActiveTab }) {
//   return (
//     <>
//       <div
//         className={`px-5 py-3 rounded cursor-pointer
//       ${activeTab === currentTab ? "bg-white" : "bg-pink-400 text-white"}`}
//         onClick={() => setActiveTab(currentTab)}
//       >
//         {children}
//       </div>
//     </>
//   );
// }

// Tab.displayName = "Tab";


// import React, { useState, ReactNode } from "react";

// interface TabProps {
//   children: ReactNode;
//   activeTab: number;
//   currentTab: number;
//   setActiveTab: (tab: number) => void;
// }

// interface TabsProps {
//   children: ReactNode[];
// }

// export function Tabs({ children }: TabsProps) {
//   function findActiveTab(a: ReactNode[]) {
//     return a.reduce((accumulator: number, currentValue: ReactNode, i: number) => {
//       if (React.isValidElement(currentValue) && currentValue.props.active) {
//         return i;
//       }

//       return accumulator;
//     }, 0);
//   }

//   function tabValidator(tab: ReactNode) {
//     return React.isValidElement(tab) && tab.type.displayName === "Tab";
//   }

//   const [activeTab, setActiveTab] = useState(findActiveTab(children));
//   return (
//     <>
//       <div className="flex gap-2 justify-center bg-pink-500 p-2">
//         {children.map((item, i) => {
//           return (
//             <React.Fragment key={`tab-${i}`}>
//               {tabValidator(item) && (
//                 <Tab
//                   key={`tab-${i}`}
//                   currentTab={i}
//                   activeTab={activeTab}
//                   setActiveTab={setActiveTab}
//                 >
//                   {item.props.children}
//                 </Tab>
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>
//       <div className="p-5">
//         {children.map((item, i) => {
//           return (
//             <div className={` ${i === activeTab ? "visible" : "hidden"}`} key={`content-${i}`}>
//               {item.props.component}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export function Tab({ children, activeTab, currentTab, setActiveTab }: TabProps) {
//   return (
//     <>
//       <div
//         className={`px-5 py-3 rounded cursor-pointer
//       ${activeTab === currentTab ? "bg-white" : "bg-pink-400 text-white"}`}
//         onClick={() => setActiveTab(currentTab)}
//       >
//         {children}
//       </div>
//     </>
//   );
// }

// Tab.displayName = "Tab";


// import React, { useState, ReactNode } from 'react';

// interface TabProps {
//     label: string;
//     children: ReactNode;
// }

// interface TabsProps {
//     children: ReactNode[];
// }

// const Tabs: React.FC<TabsProps> = ({ children }) => {
//     const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

//     const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
//         e.preventDefault();
//         setActiveTab(newActiveTab);
//     };

//     return (
//         <div className="max-w-md mx-auto">
//             <div className="flex border-b border-gray-300">
//                 {children.map((child: React.ReactElement<TabProps>) => (      <button
//                         key={child.props.label}
//                         className={`${
//                             activeTab === child.props.label ? 'border-b-2 border-purple-500' : ''
//                         } flex-1 text-gray-700 font-medium py-2`}
//                         onClick={e => handleClick(e, child.props.label)}
//                     >
//                         {child.props.label}
//                     </button>
//                 ))}
//             </div>
//             <div className="py-4">
//                 {children.map((child: React.ReactElement<TabProps>) => {
//                     if (child.props.label === activeTab) {
//                         return <div key={child.props.label}>{child.props.children}</div>;
//                     }
//                     return null;
//                 })}
//             </div>
//         </div>
//     );
// };

// const Tab: React.FC<TabProps> = ({ label, children }) => {
//     return (
//         <div label={label} className="hidden">
//             {children}
//         </div>
//     );
// };

// export { Tabs, Tab };

