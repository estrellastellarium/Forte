import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-pink-50 text-amber-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full"></div>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              Forte
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-pink-500 transition-colors font-medium">
              How it Works
            </Link>
            <Link href="/login" className="bg-white/80 hover:bg-white border border-amber-200 px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">
              ✨ For Artists
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/80 rounded-full px-6 py-3 mb-8 border border-amber-200 shadow-sm">
            <span className="text-sm font-medium text-amber-700">🎵 Used by indie artists worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Your
            <span className="bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent"> Cozy Corner </span>
            for Superfans
          </h1>
          
          <p className="text-xl text-amber-700/80 mb-8 leading-relaxed">
            Create special membership passes that feel like a warm hug for your biggest supporters. 
            Share exclusive content, earn forever, and grow together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/artist/signup" 
              className="bg-gradient-to-r from-pink-400 to-amber-400 hover:from-pink-500 hover:to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Your Community</span>
              <span>✨</span>
            </Link>
            <button className="bg-white/80 hover:bg-white border border-amber-200 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-sm hover:shadow-md inline-flex items-center space-x-2">
              <span>☕</span>
              <span>See How It Works</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="text-4xl mb-4">🌻</div>
            <h3 className="text-xl font-bold mb-3 text-amber-800">Your Digital Garden</h3>
            <p className="text-amber-700/80 leading-relaxed">
              Plant seeds of exclusive content—unreleased songs, demo versions, and personal stories that bloom for your special supporters.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="text-4xl mb-4">🫂</div>
            <h3 className="text-xl font-bold mb-3 text-amber-800">Friends with Benefits</h3>
            <p className="text-amber-700/80 leading-relaxed">
              Earn royalties every time your membership passes find new homes. Your fans support you, and the platform makes it sustainable.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="text-4xl mb-4">🎀</div>
            <h3 className="text-xl font-bold mb-3 text-amber-800">Secret Handshakes</h3>
            <p className="text-amber-700/80 leading-relaxed">
              Automatic access to private listening parties, behind-the-scenes chats, and early song previews for your pass holders.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-white/80 rounded-3xl p-12 border border-amber-200 shadow-sm">
          <h2 className="text-4xl font-bold text-center mb-4 text-amber-800">As Simple as Baking Cookies 🍪</h2>
          <p className="text-xl text-amber-700/80 text-center mb-12 max-w-2xl mx-auto">
            Three easy steps to create your own cozy community space
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-amber-200 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-amber-800">Mix Your Ingredients</h3>
                <p className="text-lg text-amber-700/80 leading-relaxed">
                  Upload your artwork, set how many passes you want to create, and choose what special treats your holders will get access to.
                </p>
              </div>
              <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-amber-100 rounded-2xl flex items-center justify-center border border-amber-200">
                <div className="text-center">
                  <div className="text-3xl">🎨</div>
                  <p className="text-sm mt-2 text-amber-600">Design Your Pass</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-amber-200 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-amber-800">Share with Friends</h3>
                <p className="text-lg text-amber-700/80 leading-relaxed">
                  Your fans can collect passes with just a credit card—no complicated crypto stuff. It feels like buying a special edition vinyl, but digital!
                </p>
              </div>
              <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-amber-100 rounded-2xl flex items-center justify-center border border-amber-200">
                <div className="text-center">
                  <div className="text-3xl">💖</div>
                  <p className="text-sm mt-2 text-amber-600">Fans Collect</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-amber-200 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-amber-800">Watch Your Garden Grow</h3>
                <p className="text-lg text-amber-700/80 leading-relaxed">
                  Your supporters automatically get access to all the goodies, and you earn ongoing support as your community shares passes with new fans.
                </p>
              </div>
              <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-amber-100 rounded-2xl flex items-center justify-center border border-amber-200">
                <div className="text-center">
                  <div className="text-3xl">🌱</div>
                  <p className="text-sm mt-2 text-amber-600">Grow Together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-4">💫</div>
          <blockquote className="text-2xl italic text-amber-700/80 leading-relaxed mb-6">
            "Forte helped me build a little family of supporters who truly get my music. It's like having pen pals who also help pay the bills!"
          </blockquote>
          <div className="text-amber-600 font-medium">
            — Maya, indie folk artist
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-pink-400/10 to-amber-400/10 rounded-3xl p-12 border border-amber-200/50">
          <h2 className="text-4xl font-bold mb-6 text-amber-800">Ready to Build Your Cozy Corner?</h2>
          <p className="text-xl text-amber-700/80 mb-8 max-w-2xl mx-auto">
            Join the artists who are creating sustainable careers, one superfan at a time.
          </p>
          <Link 
            href="/artist/signup" 
            className="bg-gradient-to-r from-pink-400 to-amber-400 hover:from-pink-500 hover:to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <span>🚀</span>
          </Link>
          <p className="text-sm text-amber-600/80 mt-4">
            It's free to get started • No technical skills needed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-amber-600/60">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:text-amber-700 transition-colors">About</Link>
          <Link href="/help" className="hover:text-amber-700 transition-colors">Help</Link>
          <Link href="/artists" className="hover:text-amber-700 transition-colors">Featured Artists</Link>
        </div>
        <p>Made with 💖 for artists everywhere</p>
      </footer>
    </div>
  )
}