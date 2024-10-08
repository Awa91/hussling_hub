import React from "react";

export const VerticalTabs = React.memo(() => {
    return (
    <>
    
    <section>
    <div
      className="w-full mx-auto 2xl:max-w-7xl flex flex-col lg:h-svh justify-center py-24 lg:py-96 relative p-8">
      <div className="mx-w-xl mx-auto text-center">
        <div
          className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
          <div>
            <h1>Tabs</h1>
            <p className="text-balance">
              Test the tabs by clicking on the button below.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t pt-12 max-w-xl w-full mx-auto">
        {/* <!-- Starts component --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <ul className="flex flex-col gap-2 h-full items-center">
            <li className="w-full flex">
              <a
                id="tab1"
                href="#tab1"
                className="py-3 px-4 text-sm w-full text-gray-400 rounded-md border border-gray-100">
                Tab 1
              </a>
            </li>
            <li className="w-full flex">
              <a
                id="tab2"
                href="#tab2"
                className="py-3 px-4 text-sm w-full text-gray-400 rounded-md border border-gray-100">
                Tab 2
              </a>
            </li>
            <li className="w-full flex">
              <a
                id="tab3"
                href="#tab3"
                className="py-3 px-4 text-sm w-full text-gray-400 rounded-md border border-gray-100">
                Tab 3
              </a>
            </li>
            <li className="w-full flex">
              <a
                id="tab4"
                href="#tab4"
                className="py-3 px-4 text-sm w-full text-gray-400 rounded-md border border-gray-100">
                Tab 4
              </a>
            </li>
          </ul>
          <div className="overflow-hidden h-full">
            <section
              id="tab1-content"
              className="tab-content p-8 bg-blue-50 h-full rounded-xl">
              <p className="text-sm text-blue-400">Content for tab 1</p>
            </section>
            <section
              id="tab2-content"
              className="tab-content hidden p-8 bg-blue-200 h-full rounded-xl">
              <p className="text-sm text-blue-800">Content for tab 2</p>
            </section>
            <section
              id="tab3-content"
              className="tab-content hidden p-8 bg-blue-400 h-full rounded-xl">
              <p className="text-sm text-white">Content for tab 3</p>
            </section>
            <section
              id="tab4-content"
              className="tab-content hidden p-8 bg-blue-600 h-full rounded-xl">
              <p className="text-sm text-white">Content for tab 4</p>
            </section>
          </div>
        </div>
        {/* <!-- Ends component --> */}
      </div>
      {/* <!-- Starts links to tutorial --> */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2">
        <div
          className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
          <div className="flex w-0 flex-1 items-center p-4">
            <div className="w-full">
              <p className="text-sm font-medium text-neutral-900">Tutorial</p>
              <p className="mt-1 text-sm text-neutral-500">
                How to create vertical tabswith Tailwind CSS and JavaScript
              </p>
              <p className="mt-2 text-xs text-orange-600 underline">
                <a href="https://lexingtonthemes.com">
                  by © Lexington Themes</a
                >
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col divide-y divide-neutral-200">
              <div className="flex h-0 flex-1">
                <a
                  href="https://lexingtonthemes.com/tutorials/how-to-create-vertical-tabs-with-tailwind-css-and-javascript/"
                  type="button"
                  className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >Tutorial</a
                >
              </div>
              <div className="flex h-0 flex-1">
                <a
                  href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/js-vertical-tabs/index.astro"
                  className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >Get the code</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Ends links to tutorial --> */}
    </div>
  </section>

  
    </>);
  
  });






  const HoverableDropdown = React.memo(() => {
    return (<></>);
  
  });






  
{/* <div className="md:flex relative">
    <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
            <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                Profile
            </a>
        </li>
        <li>
            <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
                Dashboard
            </a>
        </li>
        <li>
            <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                </svg>
                Settings
            </a>
        </li>
        <li>
            <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                    <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                </svg>
                Contact
            </a>
        </li>
        <li>
            <a className="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
                <svg className="w-4 h-4 me-2 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            Disabled</a>
        </li>
    </ul>
    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
        <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
    </div>
</div> */}
