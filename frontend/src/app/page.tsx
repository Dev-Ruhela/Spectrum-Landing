import Image from "next/image"
import Link from "next/link"
// import { div } from "@/components/ui/div"
import { Download , Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="SPECTRUM Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">
            SPECTRUM
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Demo
          </Link>
          <Link href="#community" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
  
          <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">
            Gallery
          </Link>
        </nav>
        <div  className="md:hidden text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empowering{" "}
            <span className=" bg-gradient-to-r text-white">
              LGBTQ+
            </span>{" "}
            Dreams
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            SPECTRUM (App & Web Solution) is an all-in-one platform empowering the LGBTQ+ community through personalized job listings,
            community forums, expert-led workshops, and AI support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="https://drive.google.com/file/d/13WLd_nN9BE56JxYhej5pbVDOxXB3z0O4/view?usp=sharing" target="_blank" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
            <div  className=" text-pink-500 hover:bg-purple-500/10 flex items-center justify-center p-4 rounded-lg text-xl border border-pink-500 font-light">
              <Download className="mr-2 h-6 w-6" /> Download App
            </div>
            </Link>
            <Link href="https://spectrum-olive-ten.vercel.app/" target="_blank" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
            <div  className=" text-pink-500 hover:bg-purple-500/10 flex items-center justify-center p-4 rounded-lg text-xl border border-pink-500 font-light">
              <Globe className="mr-2 h-6 w-6" /> View Website
            </div>
            </Link>
        
          </div>
        </div>
        <div className="flex-1 relative">
            <div className="flex justify-center gap-8">
            <div className="relative w-full max-w-xs">
              <Image
              src="/images/main-screen.png"
              alt="SPECTRUM App Main Screen"
              width={200}
              height={500}
              className="object-contain rounded-xl border border-pink-500"
              />
            </div>
            <div className="relative w-full max-w-md">
              <Image
              src="/images/7.jpeg"
              alt="SPECTRUM Website Mockup"
              width={1200}
              height={1200}
              className="object-contain rounded-xl border border-purple-500"
              />
            </div>
            </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-teal-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See SPECTRUM in Action</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Watch how SPECTRUM helps connect, empower, and support the LGBTQ+ community.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden aspect-video bg-gray-900 border border-gray-800 shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/uPFUWq5NvKU"
            title="SPECTRUM App Demo Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-16 md:py-24" id="community">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how SPECTRUM supports and empowers the LGBTQ+ community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Connect</h3>
              <p className="text-gray-300">
                Find and connect with LGBTQ+ friendly organizations, support groups, and resources near you.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-300">
                Access personalized job listings, career advice, and professional development opportunities.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-500"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Workshops</h3>
              <p className="text-gray-300">
                Participate in expert-led workshops and learning sessions designed for the community.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Support</h3>
              <p className="text-gray-300">
                Get personalized support and answers to your questions with our AI assistant.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Space</h3>
              <p className="text-gray-300">
                Connect in a secure, moderated environment designed to be inclusive and supportive.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-500"
                >
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                  <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                  <line x1="12" y1="22" x2="12" y2="13"></line>
                  <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pride Connect</h3>
              <p className="text-gray-300">
                Shop for LGBTQ+ merchandise and support community businesses and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Gallery Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="gallery">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore the SPECTRUM app interface and features.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-101 hover:border-purple-500 duration-300">
        <Image src="/images/1.jpeg" alt="SPECTRUM App Screen - Chat Bot" fill className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-101 hover:border-pink-500">
        <Image src="/images/2.jpeg" alt="SPECTRUM App Screen - Community" fill className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-101 hover:border-teal-500">
        <Image src="/images/3.jpeg" alt="SPECTRUM App Screen - Map View" fill className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-101 hover:border-purple-500">
        <Image src="/images/4.jpeg" alt="SPECTRUM App Screen - Workshops" fill className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-101 hover:border-pink-500 md:block hidden">
        <Image src="/images/5.jpeg" alt="SPECTRUM App Screen - Social Feed" fill className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-101 hover:border-teal-500 md:block hidden">
        <Image src="/images/6.jpeg" alt="SPECTRUM App Screen - Pride Shop" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Community?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Download SPECTRUM today and connect with a supportive community that celebrates diversity and inclusion.
          </p>
          <div className="flex justify-center gap-4">
        <Link
          href="https://drive.google.com/file/d/13WLd_nN9BE56JxYhej5pbVDOxXB3z0O4/view?usp=sharing"
          target="_blank"
          className="border-pink-500 text-pink-500 hover:bg-pink-500/10 flex items-center justify-center p-4 rounded-lg text-lg border font-light"
        >
          <Download className="mr-2 h-5 w-5" /> Download App
        </Link>
        <Link
          href="https://spectrum-olive-ten.vercel.app/"
          target="_blank"
          className="border-pink-500 text-pink-500 hover:bg-pink-500/10 flex items-center justify-center p-4 rounded-lg text-lg border font-light"
        >
          <Globe className="mr-2 h-5 w-5" /> View Website
        </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="SPECTRUM Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold ">
                SPECTRUM
              </h3>
            </div>
            
            <div className="flex gap-6">
              <Link
              href="mailto:lgbtq.spectrum1@gmail.com"
              >
              <div className="hover:translate-y-0.5 duration-300">
                <img src="/images/gmail.png" alt="Gmail" className="h-8 w-8" />
              </div>
              </Link>

              <Link
              href="https://www.instagram.com/spectrum.pride/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className="hover:translate-y-0.5 duration-300">
                <img src="/images/instagram.png" alt="Instagram" className="h-8 w-8" />
              </div>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} SPECTRUM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

