"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Raleway, Inter } from 'next/font/google';

// Configure Raleway font with desired weights
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
});

// Optional: For the Inter_Tight font you're using in one section
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export default function Home() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  // Scroll function to handle navigation clicks
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close the side menu if it's open
      if (sideMenuOpen) {
        setSideMenuOpen(false);
      }
      
      // Set active section for menu highlighting
      setActiveSection(sectionId);
      
      // Add a small delay for menu close animation
      setTimeout(() => {
        const headerOffset = 100; // Account for header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, sideMenuOpen ? 300 : 0);
    }
  };

  return (
    <div className={`min-h-screen bg-white overflow-x-hidden ${raleway.variable} ${inter.variable}`}>
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
        <header className="container mx-auto px-4 py-6 flex md:flex-row justify-between items-center">
          <div className="self-start w-full md:w-auto">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={200}
              height={100}
              className="w-[150px] md:w-[200px] h-auto"
            />
          </div>
          
          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden mr-4 z-50"
            onClick={toggleSideMenu}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${sideMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${sideMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${sideMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-row items-center gap-8">
            <nav className="flex items-center gap-14 mb-0">
              <div className="group">
                <div 
                  className={`text-lg font-bold font-raleway cursor-pointer relative ${activeSection === 'hero' ? 'text-[#ff360d]' : 'text-[#8a8a8a]'} hover:text-[#ff360d] transition-colors duration-300`}
                  onClick={() => scrollToSection('hero')}
                >
                  Home
                  <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#ff360d] transition-all duration-300 ${activeSection === 'hero' ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                </div>
              </div>
              <div className="group">
                <div 
                  className={`text-lg font-bold font-raleway cursor-pointer relative ${activeSection === 'about' ? 'text-[#ff360d]' : 'text-[#8a8a8a]'} hover:text-[#ff360d] transition-colors duration-300`}
                  onClick={() => scrollToSection('about')}
                >
                  About
                  <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#ff360d] transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                </div>
              </div>
              <div className="group">
                <div 
                  className={`text-lg font-bold font-raleway cursor-pointer relative ${activeSection === 'services' ? 'text-[#ff360d]' : 'text-[#8a8a8a]'} hover:text-[#ff360d] transition-colors duration-300`}
                  onClick={() => scrollToSection('services')}
                >
                  Services
                  <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#ff360d] transition-all duration-300 ${activeSection === 'services' ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                </div>
              </div>
            </nav>
          </div>
          <div className="bg-black rounded-[10px] px-10 py-3 justify-center items-center lg:block hidden">
            <div className="text-white text-md font-normal font-raleway">Contact us</div>
          </div>
            
          {/* Side Navigation - Only for Mobile */}
          <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-lg z-40 
                transition-transform duration-300 ease-in-out transform md:hidden
                ${sideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col gap-8">
                <div 
                  className={`font-bold font-raleway cursor-pointer transition-colors duration-200 hover:text-[#ff360d] ${activeSection === 'hero' ? 'text-[#ff360d]' : 'text-[#8a8a8a]'} text-xl`}
                  onClick={() => scrollToSection('hero')}
                >Home</div>
                <div 
                  className={`font-bold font-raleway cursor-pointer transition-colors duration-200 hover:text-[#ff360d] ${activeSection === 'about' ? 'text-[#ff360d]' : 'text-[#8a8a8a]'} text-xl`}
                  onClick={() => scrollToSection('about')}
                >About</div>
                <div 
                  className={`font-bold font-raleway cursor-pointer transition-colors duration-200 hover:text-[#ff360d] ${activeSection === 'services' ? 'text-[#ff360d]' : 'text-[#8a8a8a]'} text-xl`}
                  onClick={() => scrollToSection('services')}
                >Services</div>
              </nav>
              
              <div className="bg-[#ff360d] rounded-[10px] px-6 py-3 inline-flex justify-center items-center mt-8">
                <div className="text-white text-lg font-normal font-raleway">Contact us</div>
              </div>
            </div>
          </div>

          {/* Backdrop overlay for mobile side navigation */}
          <div 
            className={`fixed inset-0 bg-black/50  z-30 md:hidden transition-opacity duration-300 
              ${sideMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={toggleSideMenu}
          ></div>
        </header>
      </div>

      {/* Add padding to push content below fixed header */}
      <div className="pt-[110px] md:pt-[90px]">
        <div className="container mx-auto px-4 lg:block hidden">
          <hr className="border-black my-6" />
        </div>

        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 py-8 md:py-20 ">
          <div className="mb-8 md:mb-16">
            <h1 className="text-3xl md:text-6xl font-bold font-raleway capitalize mb-6 text-black">
              <span className="text-[#ff360d]">Global</span> Freight, Seamlessly <span className="text-[#ff360d]"><br/>Delivered</span>
            </h1>
           
          </div>
          <div className="lg:w-full lg:-mt-20 w-[200%]">
            <Image 
              src="/ship.png" 
              alt="Hero Image"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-[#787878] text-base md:text-lg font-medium font-raleway max-w-4xl mx-auto">
              Your trusted partner in international logistics. From ocean and airfreight to land transportation—delivering efficient, end-to-end freight solutions tailored for your business.
            </p>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-[#0b0b0b] py-16 h-screen">
          <div className="container mx-auto px-4">
            <h2 className="text-7xl font-bold font-raleway text-white mb-6">About us</h2>
          
            <div className="text-justify mt-8">
              <p className="text-white  font-normal font-raleway leading-relaxed ">
                At <span className="text-[#ff360d] font-bold">Five Elements Forwarding</span>, we bring years of expertise to the world of global logistics. Based in the dynamic hub of Dubai, we specialize in the import and export of containerized cargo, offering tailored freight forwarding solutions that move your business forward.
                <br /><br />
                With a deep understanding of international trade and supply chain complexities, we provide end-to-end services that ensure your goods arrive safely, efficiently, and on time. From <span className="font-bold">Full Container Load (FCL)</span> to <span className="font-bold">Less than Container Load (LCL)</span>, as well as <span className="font-bold">reliable Airfreight options</span>, our flexible offerings cater to businesses of all sizes and across industries.
                <br /><br />
                Our team is driven by precision, transparency, and a commitment to customer satisfaction. Whether you&apos;re shipping across continents or managing regional distribution, Five Elements Forwarding is your trusted partner in seamless global logistics.
                <br /><br />
                Let us simplify your supply chain—because when it comes to freight, every element counts.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-7xl font-bold font-raleway text-[#ff360d] mb-12">Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-black mb-8 md:mb-0">
                <p className="text-xl font-extrabold font-raleway mb-6 ">
                  At Five Elements Forwarding, we offer a full range of freight forwarding solutions
                </p>
                <p className="text-base md:text-lg font-medium font-raleway leading-loose text-left">
                  designed to move your cargo safely and efficiently. From container logistics and global trade support to fast airfreight and flexible LCL options—we make shipping simple, reliable, and tailored to your needs.
                </p>
              </div>
              
              {/* Service Cards - All cards in one container */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 - Changed to light gray by default */}
                <div className="bg-[#dedede] rounded-[20px] shadow p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#ff360d] cursor-pointer group">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ff360d] group-hover:stroke-white">
                        <path d="M33.3334 33.3334V13.5209C33.3334 12.4158 32.8944 11.356 32.113 10.5746C31.3316 9.79323 30.2718 9.35425 29.1667 9.35425H8.33335C7.22829 9.35425 6.16848 9.79323 5.38708 10.5746C4.60567 11.356 4.16669 12.4158 4.16669 13.5209V32.2709C4.16669 32.8234 4.38618 33.3534 4.77688 33.7441C5.16758 34.1348 5.69749 34.3542 6.25002 34.3542H7.72919C8.13529 33.427 8.80281 32.6382 9.6501 32.0843C10.4974 31.5304 11.4877 31.2354 12.5 31.2354C13.5123 31.2354 14.5026 31.5304 15.3499 32.0843C16.1972 32.6382 16.8647 33.427 17.2709 34.3542H32.7292C32.882 33.9862 33.0834 33.6459 33.3334 33.3334ZM33.3334 33.3334C33.8748 32.599 34.6003 32.0204 35.4368 31.656C36.2732 31.2915 37.191 31.1542 38.0975 31.2577C39.004 31.3612 39.8672 31.702 40.5999 32.2457C41.3326 32.7894 41.909 33.5167 42.2709 34.3542H45.8334V28.3334C45.8341 26.8216 45.4236 25.3381 44.6459 24.0417L42.0834 19.7709L40.1875 16.6251C40.0031 16.3141 39.741 16.0564 39.4268 15.8774C39.1127 15.6985 38.7574 15.6043 38.3959 15.6042H33.3334V33.3334Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.9167 23.9375H12.5M22.9167 17.6875H12.5M17.7084 36.4375C17.7093 37.2123 17.5373 37.9775 17.205 38.6775C16.8727 39.3774 16.3884 39.9943 15.7874 40.4834C15.1865 40.9724 14.484 41.3212 13.7311 41.5044C12.9783 41.6875 12.1941 41.7004 11.4356 41.542C10.6772 41.3837 9.96362 41.0581 9.34694 40.5891C8.73025 40.12 8.22599 39.5193 7.87089 38.8307C7.51579 38.142 7.31881 37.3828 7.29429 36.6084C7.26978 35.834 7.41835 35.0639 7.72918 34.3542C8.20878 33.2591 9.05048 32.3624 10.113 31.8145C11.1755 31.2666 12.3942 31.1009 13.5644 31.3452C14.7346 31.5895 15.7852 32.229 16.5398 33.1562C17.2943 34.0834 17.7069 35.242 17.7084 36.4375ZM42.7084 36.4375C42.7093 37.2123 42.5373 37.9775 42.205 38.6775C41.8727 39.3774 41.3884 39.9943 40.7874 40.4834C40.1865 40.9724 39.484 41.3212 38.7311 41.5044C37.9783 41.6875 37.1941 41.7004 36.4356 41.542C35.6772 41.3837 34.9636 41.0581 34.3469 40.5891C33.7303 40.12 33.226 39.5193 32.8709 38.8307C32.5158 38.142 32.3188 37.3828 32.2943 36.6084C32.2698 35.834 32.4184 35.0639 32.7292 34.3542C32.882 33.9861 33.0834 33.6458 33.3334 33.3333C33.8748 32.5989 34.6003 32.0203 35.4368 31.6559C36.2732 31.2915 37.191 31.1541 38.0975 31.2576C39.004 31.3612 39.8671 31.702 40.5999 32.2456C41.3326 32.7893 41.909 33.5166 42.2709 34.3542C42.5625 35.0104 42.7125 35.7208 42.7084 36.4375Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-[#ff360d] group-hover:text-white text-base md:text-lg font-bold leading-snug">Logistics in Containers</h3>
                    <p className="text-black group-hover:text-white text-sm md:text-base font-normal leading-snug">
                      Efficient transport of goods using standard containers—by sea, land, or rail.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 - Import & Export */}
                <div className="bg-[#dedede] rounded-[20px] p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#ff360d] cursor-pointer group">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ff360d] group-hover:stroke-white">
                        <path d="M14.5833 27.5833L5.20833 36.9583L14.5833 46.3333M5.20833 36.9667H23.4375M35.4167 19.25L44.7917 28.625L35.4167 38M44.7917 28.6333H26.5625M4.6875 25.5V8.3125H45.3125V16.125" strokeWidth="1.995" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-[#ff360d] group-hover:text-white text-base md:text-lg font-bold leading-snug">Import & Export</h3>
                    <p className="text-black group-hover:text-white text-sm md:text-base font-normal leading-snug">
                      Seamless global trade support, including customs, documentation, and delivery.
                    </p>
                  </div>
                </div>
                
                {/* Card 3 - Airfreight */}
                <div className="bg-[#dedede] rounded-[20px] p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#ff360d] cursor-pointer group">
                  <div className="flex flex-col gap-3">
                    <div className="relative group-hover:text-white">
                      <svg className="group-hover:[&_path]:fill-white" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_50)">
                          <path d="M53.655 12.7399C53.5401 12.0099 53.206 11.3321 52.697 10.7963C52.188 10.2605 51.5282 9.89212 50.805 9.73993L42 7.80493C41.0558 7.59899 40.0783 7.59822 39.1338 7.80266C38.1892 8.0071 37.2996 8.41198 36.525 8.98993L10.5 27.9499L3.21 27.6499C2.62397 27.629 2.04623 27.7932 1.55884 28.1192C1.07145 28.4453 0.699183 28.9166 0.494922 29.4663C0.290661 30.016 0.264788 30.616 0.420978 31.1813C0.577168 31.7465 0.907479 32.2481 1.365 32.6149L8.865 38.5099C9.765 39.6049 10.365 39.3949 25.26 31.2799L26.655 45.4099C26.6782 45.7954 26.8103 46.1663 27.036 46.4797C27.2617 46.793 27.5717 47.0358 27.93 47.1799C28.1874 47.2829 28.4627 47.3339 28.74 47.3299C29.2979 47.3129 29.8307 47.0944 30.24 46.7149L33.825 43.4449C34.182 43.1142 34.4238 42.6779 34.515 42.1999L37.8 24.3499C43.155 21.3499 48.225 18.5299 51.84 16.4749C52.4868 16.1111 53.0071 15.5586 53.3314 14.8912C53.6557 14.2237 53.7686 13.4732 53.655 12.7399ZM50.355 13.8649C46.605 15.9949 41.355 18.9799 35.715 22.0699L35.1 22.4149L31.605 41.4199L29.4 43.4299L27.75 26.4799L25.755 27.4999C15 33.4999 11.415 35.2399 10.185 35.7799L3.735 30.6649L11.355 30.9949L38.355 11.4049C38.7789 11.0868 39.2655 10.8621 39.7826 10.7458C40.2997 10.6294 40.8356 10.624 41.355 10.7299L50.13 12.6199C50.2652 12.6444 50.3891 12.7115 50.4835 12.8113C50.5779 12.9112 50.638 13.0386 50.655 13.1749C50.6859 13.3069 50.6734 13.4453 50.6193 13.5696C50.5653 13.6939 50.4726 13.7975 50.355 13.8649Z" fill="#FF360E"/>
                          <path d="M10.5 19.3099L15.84 20.8099L18.3 19.0249L12.3 17.2849L15 15.6349L23.205 15.3949L26.655 12.8899L15 13.2499C14.6326 13.23 14.2674 13.3187 13.95 13.5049L10.005 15.7999C9.67886 15.9931 9.41721 16.2785 9.25303 16.6202C9.08884 16.9619 9.02948 17.3445 9.08241 17.7199C9.13535 18.0953 9.29822 18.4466 9.55049 18.7295C9.80276 19.0125 10.1332 19.2144 10.5 19.3099Z" fill="#FF360E"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_50">
                            <rect width="54" height="54" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="text-[#ff360d] group-hover:text-white text-base md:text-lg font-bold leading-snug">Airfreight</h3>
                    <p className="text-black group-hover:text-white text-sm md:text-base font-normal leading-snug">
                      Fast, reliable air cargo solutions for time-sensitive shipments worldwide.
                    </p>
                  </div>
                </div>
                
                {/* Card 4 - LCL */}
                <div className="bg-[#dedede] rounded-[20px] p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#ff360d] cursor-pointer group">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <svg className="group-hover:[&_rect]:stroke-white group-hover:[&_rect]:fill-transparent group-hover:[&_rect:nth-child(2)]:fill-white" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1.5" width="19.7105" height="19.7105" rx="2.28947" stroke="#FF360E" strokeWidth="2"/>
                        <rect x="25.7105" y="1.5" width="19.7105" height="19.7105" rx="2.28947" fill="#FF360E" stroke="#FF360E" strokeWidth="2"/>
                        <rect x="1" y="26.2104" width="19.7105" height="19.7105" rx="2.28947" stroke="#FF360E" strokeWidth="2"/>
                        <rect x="25.7105" y="26.2104" width="19.7105" height="19.7105" rx="2.28947" stroke="#FF360E" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3 className="text-[#ff360d] group-hover:text-white text-base md:text-lg font-bold leading-snug">LCL (Less than Container Load)</h3>
                    <p className="text-black group-hover:text-white text-sm md:text-base font-normal leading-snug">
                      Ship smaller volumes cost-effectively by sharing container space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0b0b0b] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <Image 
                  src="/logow.png" 
                  alt="Logo"
                  width={200}
                  height={60}
                  className="w-[150px] md:w-[200px] h-auto"
                />
              </div>
              <div></div> {/* Empty div for spacing */}
              <div className="text-white">
                <p className="font-bold leading-10">
                  Building A1, Dubai Digital Park<br/>
                  Dubai Silicon Oasis, UAE<br/>
                  E-mail: <span className="underline">Sales@5elementsforwarding.com</span><br/>
                  Mob +971 58 520 2046
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
