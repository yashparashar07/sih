import React from 'react'

function About() {
  return (
    <div class="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
  <div class="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
    <div class="max-w-xl mb-6">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          About
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        About US
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
      Our mission is to revolutionize surveillance through cutting-edge AI technology. We empower businesses with smart, real-time insights for enhanced security, safety, and operational efficiency. Discover the future of surveillance with us
      </p>
    </div>
    <div class="flex items-center">
      <a
        href="/"
        class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Get started
      </a>
      <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
    </div>
  </div>
  <div>
    <img src="https://kitwind.io/assets/kometa/two-thirds-phone.png" class="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm" alt="" />
  </div>
</div>
  )
}

export default About