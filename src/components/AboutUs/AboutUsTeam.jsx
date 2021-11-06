import React from 'react'
import FacebookIcon from '@/assets/icons/FacebookIcon'
import GithubIcon from '@/assets/icons/GithubIcon'

AboutUsTeam.propTypes = {

}

function AboutUsTeam (props) {
  return (
        <div>
;<>
  <section className="relative py-20 overflow-hidden bg-white">
    <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
      <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
    </span>
    <span className="absolute bottom-0 left-0"> </span>
    <div className="relative px-16 mx-auto max-w-7xl">
      <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-bold leading-tight lg:text-5xl">
        Our team
      </h2>
      <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
            <img
              className="relative z-20 w-full rounded-full"
              // src="https://i.imgur.com/VKd7Duy.jpg"
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/135121865_1592249227645949_2183249827713725508_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QAy9aT5iAjEAX-8hSNJ&tn=fzNmh_cihSsodmn2&_nc_ht=scontent.fsgn2-2.fna&oh=64944ffdc94068ef00e23788871114b8&oe=61AC6201"
            />
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>Nhien Nguyen</h3>
              <p className="text-blue-600">Product Management</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3">
              <a href="#_" className="text-gray-300 hover:text-gray-400">
               <FacebookIcon/>
              </a>
              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <GithubIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
            <img
              className="relative z-20 w-full rounded-full"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/228363066_1560039057690566_9073567168945264057_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=0yA0_X52ZwsAX9UT8p3&_nc_ht=scontent.fsgn2-5.fna&oh=400915874f2f9f1ab35598ef0b2e6c3b&oe=618C4BEB"
            />
          </div>
          <div className="mt-3 space-y-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
              <h3>Khoa Vo</h3>
              <p className="text-blue-600">Frontend Leader</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3">
              <a href="#_" className="text-gray-300 hover:text-gray-400">
               <FacebookIcon/>
              </a>
              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <GithubIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
            <img
              className="relative z-20 w-full rounded-full"
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/134475129_1749506711893480_7264643796702855515_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=kXP1oFCXFuwAX9Aac41&tn=fzNmh_cihSsodmn2&_nc_ht=scontent.fsgn2-4.fna&oh=c8969fab956982434804cdc906694bee&oe=61AD759A"
            />
          </div>
          <div className="mt-3 space-y-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
              <h3>Binh Dinh</h3>
              <p className="text-blue-600">Backend Leader</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3">
              <a href="#_" className="text-gray-300 hover:text-gray-400">
               <FacebookIcon/>
              </a>
              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <GithubIcon/>
              </a>
            </div>
          </div>
        </div>
            </div>
          </div>
  </section>
</>

        </div>
  )
}

export default AboutUsTeam
