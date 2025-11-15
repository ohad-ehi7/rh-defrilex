// src/app/blog/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The ultimate guide to creating a Wix website",
      date: "07 Jan, 2025",
      image: "/blog1.png",
      excerpt: "Learn how to create a professional website using Wix with our comprehensive step-by-step guide.",
      category: "Web Design"
    },
    {
      id: 2,
      title: "The Art of Self-Promotion: Marketing Strategies for...",
      date: "18 Nov, 2024",
      image: "/blog2.png",
      excerpt: "Discover effective marketing strategies to promote your freelance services and grow your business.",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Do professional logo design, unlimited revisions, faxicon a...",
      date: "07 Jan, 2025",
      image: "/blog3.png",
      excerpt: "Everything you need to know about professional logo design services and revision policies.",
      category: "Design"
    },
    {
      id: 4,
      title: "Staying Inspired: Cultivating Creativity in Freelance Work",
      date: "18 Nov, 2024",
      image: "/blog4.png",
      excerpt: "Tips and techniques to maintain creativity and inspiration in your freelance career.",
      category: "Productivity"
    },
    {
      id: 5,
      title: "Unlocking Your Full Potential: Strategies to Boost Freelance...",
      date: "18 Nov, 2024",
      image: "/blog5.png",
      excerpt: "Learn powerful strategies to maximize your freelance productivity and earnings.",
      category: "Business"
    },
    {
      id: 6,
      title: "Exploring the Cryptocurrency Landscape: A Comprehensive...",
      date: "24 Mar, 2024",
      image: "/blog6.png",
      excerpt: "A deep dive into the world of cryptocurrency and its impact on freelance payments.",
      category: "Finance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-[#001454] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex justify-center items-center space-x-2 text-white/80 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/60">›</span>
              <span className="text-white font-semibold">Blogs</span>
            </div>
            
            
           
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0027A8] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0027A8] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#0027A8] font-semibold hover:text-[#001454] transition-colors group/readmore"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover/readmore:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#0027A8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#001454] transition-colors duration-200 shadow-sm">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}