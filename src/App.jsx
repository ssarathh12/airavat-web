import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Users, Target, Zap, FileText, BarChart3 } from 'lucide-react';
import vinayImg from './assets/Vinay.png';
function App() {
  return (
    <div className="min-h-screen bg-[#F6EDDD] text-[#000000]">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 max-w-7xl mx-auto">
            <div className="text-lg sm:text-xl font-bold text-[#ED5906] truncate">Airavat Strategies</div>
            <nav className="hidden md:flex gap-4 lg:gap-6 text-xs sm:text-sm flex-1 justify-center mx-4">
              <a href="#impact" className="text-gray-700 hover:text-[#ED5906] transition-colors whitespace-nowrap">Impact</a>
              <a href="#services" className="text-gray-700 hover:text-[#ED5906] transition-colors whitespace-nowrap">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#ED5906] transition-colors whitespace-nowrap">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#ED5906] transition-colors whitespace-nowrap">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-0">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              SHAPING TOMORROW'S LEADERS
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700">
              Ground Intelligence • Data-Driven Decisions
            </p>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <Users className="w-10 h-10 text-[#ED5906] mb-2 mx-auto" />
                <h3 className="text-base font-semibold mb-1">Voter Analysis</h3>
                <p className="text-sm">Deep constituency insights for strategic planning</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <Target className="w-10 h-10 text-[#ED5906] mb-2 mx-auto" />
                <h3 className="text-base font-semibold mb-1">Campaign Strategy</h3>
                <p className="text-sm">Comprehensive election management solutions</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <BarChart3 className="w-10 h-10 text-[#ED5906] mb-2 mx-auto" />
                <h3 className="text-base font-semibold mb-1">Data Visualization</h3>
                <p className="text-sm">Clear insights from complex political data</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Founder */}
      <section id="about" className="py-8 sm:py-10 md:py-12 px-0 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-[#ED5906]">Meet Vinay Krishna Polnati</h2>
              <p className="text-sm sm:text-base mb-2 sm:mb-3">
                With over 6 years of experience in political consultancy, Vinay has worked with major parties including BJP, INC, AAP, and Shiv Sena (UBT).
              </p>
              <p className="text-sm sm:text-base mb-2 sm:mb-3">
                His expertise lies in constituency analysis, war room strategy, and delivering data-driven solutions for high-profile leaders.
              </p>
              <p className="text-sm sm:text-base">
                At Airavat Strategies, we combine traditional political wisdom with cutting-edge technology to ensure victory at the ballot box.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-80 h-80">
                <img
                  src={vinayImg}
                  // src="/src/assets/Vinay.png"
                  alt="VKP"
                  className="w-full h-full object-cover object-[50%_20%] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Map */}
      <section id="impact" className="py-8 sm:py-10 md:py-12 px-0 bg-gradient-to-r from-[#F6EDDD] to-gray-100">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
          >
            {/* Left Side - Icon and Branding */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Globe with People Icon */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-[#ED5906]" fill="none" stroke="currentColor" strokeWidth="4">
                    {/* Globe */}
                    <circle cx="100" cy="100" r="70" />
                    <path d="M 30 100 Q 100 40, 170 100" />
                    <path d="M 30 100 Q 100 160, 170 100" />
                    <line x1="100" y1="30" x2="100" y2="170" />
                    
                    {/* People */}
                    <circle cx="70" cy="80" r="8" />
                    <circle cx="100" cy="70" r="8" />
                    <circle cx="130" cy="80" r="8" />
                    <path d="M 70 88 L 65 110 M 70 88 L 75 110 M 100 78 L 95 110 M 100 78 L 105 110 M 130 88 L 125 110 M 130 88 L 135 110" />
                    
                    {/* Hands holding */}
                    <path d="M 50 140 Q 60 120, 70 115" />
                    <path d="M 150 140 Q 140 120, 130 115" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left space-y-2"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#ED5906]">Our Impact</h2>
                <p className="text-sm sm:text-base text-gray-700">Ground intelligence across India's key electoral regions</p>
              </motion.div>
            </div>

            {/* Right Side - Map Grid */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: 'Karnataka AE 2023', id: 'karnataka' },
                  { name: 'West Bengal AE 2021', id: 'westbengal' },
                  { name: 'Maharashtra AE 2024', id: 'maharashtra' },
                  { name: 'Puducherry AE 2021', id: 'puducherry' },
                  { name: 'Tamil Nadu AE 2021', id: 'tamilnadu' },
                  { name: 'Delhi AE 2020', id: 'delhi' }
                ].map((region, index) => (
                  <motion.div
                    key={region.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* Mock Map Visualization */}
                    <div className="bg-gray-50 rounded-md p-4 mb-3 h-32 sm:h-40 flex items-center justify-center border-2 border-gray-200">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-gray-300" fill="none" stroke="currentColor" strokeWidth="0.5">
                        {/* Generic state outline placeholder */}
                        <path d="M 30 20 L 70 15 L 75 40 L 65 55 L 45 60 L 25 50 Z" />
                        <circle cx="45" cy="40" r="3" fill="currentColor" opacity="0.5" />
                      </svg>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800">{region.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
        <section id="services" className="py-8 sm:py-10 md:py-12 px-0 bg-white">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
            <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
            >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ED5906]">Our Services</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Target, title: 'Comprehensive Campaign Strategy', desc: 'End-to-end election management from planning to execution' },
            { icon: Users, title: 'Voter Segmentation & Micro-targeting', desc: 'Precise voter identification and personalized outreach' },
            { icon: Zap, title: 'AI-Integrated Digital Outreach', desc: 'Cutting-edge technology for maximum engagement' },
            { icon: FileText, title: 'Legislative & Parliamentary Support', desc: 'Bill drafting, news briefings, and policy assistance' }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F6EDDD] p-4 rounded-lg shadow-lg"
            >
              <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#ED5906] mb-2 sm:mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
            </div>
          </div>
        </section>
      <section id="contact" className="py-8 sm:py-10 md:py-12 px-0 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#ED5906]">Get in Touch</h2>
            <p className="text-sm sm:text-base mt-1 sm:mt-2">Let's discuss how we can help shape your political success</p>
          </motion.div>
          <div className="bg-[#F6EDDD] p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center">
                <Mail className="w-8 sm:w-10 h-8 sm:h-10 text-[#ED5906] mb-1 sm:mb-2" />
                <h3 className="text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">Email Us</h3>
                <p className="text-gray-700 text-xs sm:text-sm">contact@airavatstrategies.com</p>
                <p className="text-gray-700 text-xs sm:text-sm">vinay@airavatstrategies.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 sm:w-10 h-8 sm:h-10 text-[#ED5906] mb-1 sm:mb-2" />
                <h3 className="text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">Call Us</h3>
                <p className="text-gray-700 text-xs sm:text-sm">+91 98765 43210</p>
                <p className="text-gray-700 text-xs sm:text-sm">+91 87654 32109</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-[#ED5906] mb-1 sm:mb-2" />
                <h3 className="text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">Visit Us</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Hyderabad,Telangana</p>
                <p className="text-gray-700 text-xs sm:text-sm">India</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-sm sm:text-base font-semibold text-[#ED5906] mb-0.5 sm:mb-1">Ready to Transform Your Campaign?</p>
              <p className="text-gray-700 text-xs sm:text-sm">Reach out to us today for a confidential consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-white py-4 sm:py-6 px-0">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm">&copy; 2026 Airavat Strategies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
