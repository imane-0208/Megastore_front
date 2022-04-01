import React from 'react'

export const FooterStore = () => {
  return (
    <div className="p-5 mb-5 border-black mt-4 border-4 border-dashed rounded-md">
        <div className="w-full">
          <h3 className="text-2xl">footer</h3>
          <div className="flex justify-between  items-center p-2 w-[800px] h-fit">
            <div className="container bg-grey-lighter p-8">
              <div className="sm:flex mb-4">
                <div className="sm:w-1/4 h-auto">
                  <div className="text-orange mb-2">Orange</div>
                  <ul className="list-reset leading-normal">
                    <li className="hover:text-orange text-grey-darker">One</li>
                    <li className="hover:text-orange text-grey-darker">Two</li>
                    <li className="hover:text-orange text-grey-darker">
                      Three
                    </li>
                    <li className="hover:text-orange text-grey-darker">Four</li>
                    <li className="hover:text-orange text-grey-darker">Five</li>
                    <li className="hover:text-orange text-grey-darker">Six</li>
                    <li className="hover:text-orange text-grey-darker">
                      Seven
                    </li>
                    <li className="hover:text-orange text-grey-darker">
                      Eight
                    </li>
                  </ul>
                </div>
                <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                  <div className="text-blue mb-2">Blue</div>
                  <ul className="list-reset leading-normal">
                    <li className="hover:text-blue text-grey-darker">One</li>
                    <li className="hover:text-blue text-grey-darker">Two</li>
                    <li className="hover:text-blue text-grey-darker">Three</li>
                  </ul>

                  <div className="text-blue-light mb-2 mt-4">Blue-light</div>
                  <ul className="list-reset leading-normal">
                    <li className="hover:text-blue-light text-grey-darker">
                      One
                    </li>
                    <li className="hover:text-blue-light text-grey-darker">
                      Two
                    </li>
                    <li className="hover:text-blue-light text-grey-darker">
                      Three
                    </li>
                  </ul>
                </div>
                <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                  <div className="text-green-dark mb-2">Green-dark</div>
                  <ul className="list-reset leading-normal">
                    <li className="hover:text-green-dark text-grey-darker">
                      One
                    </li>
                    <li className="hover:text-green-dark text-grey-darker">
                      Two
                    </li>
                    <li className="hover:text-green-dark text-grey-darker">
                      Three
                    </li>
                  </ul>

                  <div className="text-green-light mb-2 mt-4">Green-light</div>
                  <ul className="list-reset leading-normal">
                    <li className="hover:text-green-light text-grey-darker">
                      One
                    </li>
                    <li className="hover:text-green-light text-grey-darker">
                      Two
                    </li>
                    <li className="hover:text-green-light text-grey-darker">
                      Three
                    </li>
                  </ul>
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                  <div className="text-red-light mb-2">Newsletter</div>
                  <p className="text-grey-darker leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi, consectetur.{" "}
                  </p>
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      className="p-2 border border-grey-light round text-grey-dark text-sm h-auto"
                      placeholder="Your email address"
                    />
                    <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
