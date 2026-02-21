import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold text-cyan-400">GPU4AI</div>
          <div className="space-x-6">
            <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Affordable GPU Computing for AI Developers
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Access A100, H100, and RTX 4090 GPUs at 50%+ lower cost. 
            Simple API, pay-as-you-go, no commitment.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/docs" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
            >
              Read Documentation
            </Link>
            <a 
              href="#pricing" 
              className="px-8 py-3 border border-gray-500 hover:border-cyan-400 rounded-lg font-semibold transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* RTX 4090 */}
            <div className="bg-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">RTX 4090</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$1.20</div>
              <div className="text-gray-400 mb-6">/ hour</div>
              <ul className="text-left space-y-2 mb-8">
                <li>✓ 24GB VRAM</li>
                <li>✓ CUDA Support</li>
                <li>✓ Pay-as-you-go</li>
              </ul>
              <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition">
                Get Started
              </button>
            </div>

            {/* A100 */}
            <div className="bg-gray-700 rounded-xl p-8 text-center border-2 border-cyan-500">
              <div className="text-cyan-400 text-sm font-semibold mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">A100 40GB</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$2.50</div>
              <div className="text-gray-400 mb-6">/ hour</div>
              <ul className="text-left space-y-2 mb-8">
                <li>✓ 40GB HBM2</li>
                <li>✓ SXM Power</li>
                <li>✓ Production Ready</li>
              </ul>
              <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition">
                Get Started
              </button>
            </div>

            {/* H100 */}
            <div className="bg-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">H100 80GB</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$4.50</div>
              <div className="text-gray-400 mb-6">/ hour</div>
              <ul className="text-left space-y-2 mb-8">
                <li>✓ 80GB HBM3</li>
                <li>✓ Latest Gen</li>
                <li>✓ Enterprise</li>
              </ul>
              <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why GPU4AI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">50%+ Cheaper</h3>
              <p className="text-gray-400">Significant cost savings compared to AWS, GCP, and Lambda Labs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Simple API</h3>
              <p className="text-gray-400">OpenAI-compatible REST API. Just swap the endpoint.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-gray-400">Pay with Stripe/PayPal. No Chinese payment methods needed.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">No Commitment</h3>
              <p className="text-gray-400">Pay per hour. Scale up or down anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 GPU4AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
