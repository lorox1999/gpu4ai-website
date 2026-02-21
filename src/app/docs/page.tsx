import Link from "next/link";

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400">GPU4AI</Link>
        <Link href="/" className="text-gray-400 hover:text-cyan-400 transition">
          ← Back to Home
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

        {/* Table of Contents */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#getting-started" className="text-cyan-400 hover:underline">Getting Started</a></li>
            <li><a href="#authentication" className="text-cyan-400 hover:underline">Authentication</a></li>
            <li><a href="#pricing" className="text-cyan-400 hover:underline">Pricing</a></li>
            <li><a href="#faq" className="text-cyan-400 hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Getting Started */}
        <section id="getting-started" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <p className="text-gray-300">
              GPU4AI provides a simple REST API compatible with OpenAI's API format. 
              You can easily migrate from other GPU cloud providers by just changing the endpoint URL.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Base URL</h3>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-cyan-400">https://api.gpu4ai.vip/v1</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6 mb-3">Quick Example</h3>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">{`curl https://api.gpu4ai.vip/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-6 mb-3">Available Models</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>gpt-4o</li>
              <li>gpt-4o-mini</li>
              <li>gpt-4-turbo</li>
              <li>gpt-3.5-turbo</li>
              <li>claude-3-opus</li>
              <li>claude-3-sonnet</li>
              <li>llama-3.1-70b</li>
              <li>llama-3.1-405b</li>
              <li>mixtral-8x22b</li>
            </ul>
          </div>
        </section>

        {/* Authentication */}
        <section id="authentication" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Authentication</h2>
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <p className="text-gray-300">
              All API requests require an API key. You can get your API key by contacting us at{' '}
              <a href="mailto:hello@gpu4ai.vip" className="text-cyan-400 hover:underline">hello@gpu4ai.vip</a>
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Using Your API Key</h3>
            <p className="text-gray-300">Include your API key in the Authorization header:</p>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-4">
              <code className="text-gray-300">{`Authorization: Bearer YOUR_API_KEY`}</code>
            </pre>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-gray-300 mb-6">
              We offer competitive pay-as-you-go pricing. No upfront costs, no commitments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">RTX 4090</h3>
                <div className="text-3xl font-bold text-cyan-400">$1.20</div>
                <div className="text-gray-400">/ hour</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 text-center border-2 border-cyan-500">
                <div className="text-cyan-400 text-sm font-semibold mb-2">POPULAR</div>
                <h3 className="text-xl font-semibold mb-2">A100 40GB</h3>
                <div className="text-3xl font-bold text-cyan-400">$2.50</div>
                <div className="text-gray-400">/ hour</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">H100 80GB</h3>
                <div className="text-3xl font-bold text-cyan-400">$4.50</div>
                <div className="text-gray-400">/ hour</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-cyan-900/30 rounded-lg">
              <p className="text-cyan-300">
                💡 <strong>Tip:</strong> Contact us for volume discounts and enterprise pricing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="bg-gray-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I get started?</h3>
              <p className="text-gray-300">
                Simply email us at <a href="mailto:hello@gpu4ai.vip" className="text-cyan-400 hover:underline">hello@gpu4ai.vip</a> 
                to request an API key. We'll get you set up within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept Stripe and PayPal. No Chinese payment methods required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Can I scale up or down anytime?</h3>
              <p className="text-gray-300">
                Yes! There's no commitment. Scale your GPU usage up or down based on your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What if I need help?</h3>
              <p className="text-gray-300">
                We're here to help! Reach out to us at{' '}
                <a href="mailto:hello@gpu4ai.vip" className="text-cyan-400 hover:underline">hello@gpu4ai.vip</a>{' '}
                and we'll respond within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-300">
                Yes. We use industry-standard encryption and don't store your data longer than necessary 
                to provide the service. Your models and data remain yours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer dedicated instances?</h3>
              <p className="text-gray-300">
                Yes, for enterprise customers we offer dedicated GPU instances. 
                Contact us at <a href="mailto:hello@gpu4ai.vip" className="text-cyan-400 hover:underline">hello@gpu4ai.vip</a> for details.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-cyan-900 to-gray-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? We're happy to help!
            </p>
            <a 
              href="mailto:hello@gpu4ai.vip" 
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 GPU4AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
