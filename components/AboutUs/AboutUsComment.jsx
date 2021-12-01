import React from 'react'
import PropTypes from 'prop-types'

AboutUsComment.propTypes = {

}

function AboutUsComment(props) {
   return (
      <div>
      ;<>
            {/* Section 1 */}
            <section className="flex items-center justify-center py-12 bg-white min-w-screen">
               <div className="px-16 bg-white">
                  <div className="container flex flex-col items-start mx-auto lg:items-center">
                     <p className="font-josefins relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
                Don't just take our word for it
                     </p>
                     <h2 className="font-josefins relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                           viewBox="0 0 975.036 975.036"
                        >
                           <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                See what others are saying
                     </h2>
                     <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full" />
                     <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                        <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                           <div className="flex items-center justify-center">
                              <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                 <img
                                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.18169-9/12512709_534785683358159_7105796898860586026_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=tjsAbl5cCBUAX_bHnob&_nc_ht=scontent.fsgn2-6.fna&oh=31f7209d206bbfa9ae4fc59b48f7d6ad&oe=61AE3098"
                                    className="object-cover w-full h-full"
                                 />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                 <h4 className="font-josefins font-bold text-gray-800">Luu Ngoc Sang</h4>
                                 <p className="font-josefins text-gray-600">CEO at VNG</p>
                              </div>
                           </div>
                           <blockquote className="font-josefins mt-8 text-lg text-gray-500">
                    "This is a no-brainer if you want to take your business to the
                    next level. If you are looking for the ultimate toolset, this is
                    it!"
                           </blockquote>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                           <div className="flex items-center justify-center">
                              <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                 <img
                                    src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.18172-8/16836447_1854818098098917_5893584736665286545_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=IO9EpbeBbFwAX8aGBW_&_nc_ht=scontent.fsgn2-4.fna&oh=43c1b3358c4aa5bc83e4d3ddbeb588b3&oe=61ABF112"
                                    className="object-cover w-full h-full"
                                 />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                 <h4 className="font-josefins text-konsept font-bold text-gray-800">Tran Thanh Hien</h4>
                                 <p className="font-josefins text-gray-600">CTO at Tiki</p>
                              </div>
                           </div>
                           <blockquote className="font-josefins mt-8 text-lg text-gray-500">
                    "Thanks for creating this service. My life is so much easier.
                    Thanks for making such a great product."
                           </blockquote>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                           <div className="flex items-center justify-center">
                              <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                 <img
                                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/51989147_1274878772669907_7207140248663359488_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=I05cRlz1a4sAX9s8lIy&_nc_ht=scontent.fsgn2-6.fna&oh=5ddab124261a7bbbf9c3d609222048bc&oe=61AD6635"
                                    className="object-cover w-full h-full"
                                 />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                 <h4 className="font-josefins font-bold text-gray-800">Pham Hon Tuyen</h4>
                                 <p className="font-josefins text-gray-600">CEO at HTML</p>
                              </div>
                           </div>
                           <blockquote className="font-josefins mt-8 text-lg text-gray-500">
                    "Packed with awesome content and exactly what I was looking for. I
                    would highly recommend this to anyone."
                           </blockquote>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </>

      </div>
   )
}

export default AboutUsComment
