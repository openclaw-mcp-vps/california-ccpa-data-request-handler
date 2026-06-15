export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          CCPA Compliance
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Handle CCPA Data Requests<br />
          <span className="text-[#58a6ff]">Without the Legal Headache</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automate California consumer data deletion and access requests. Generate required documentation, track request status, and stay compliant — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $18/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: 'Consumer Portal', desc: 'Branded request form for data access & deletion.' },
          { title: 'Admin Dashboard', desc: 'Review, approve, and track every request.' },
          { title: 'Auto Documents', desc: 'Generate CCPA-compliant response letters instantly.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited data requests',
              'Consumer-facing request portal',
              'Admin review dashboard',
              'Auto-generated response docs',
              'Email notifications',
              '45-day audit log'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who needs to comply with CCPA?',
              a: 'Any for-profit business that collects personal data from California residents and meets one of: $25M+ annual revenue, buys/sells data of 100K+ consumers, or earns 50%+ revenue from selling personal data.'
            },
            {
              q: 'What types of requests does this handle?',
              a: 'Right to Know (data access), Right to Delete, and Right to Opt-Out requests — the three core CCPA consumer rights your business must support.'
            },
            {
              q: 'How long does it take to set up?',
              a: 'Under 15 minutes. Add your business details, embed the consumer portal link on your site, and you are ready to receive and process requests.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} CCPA Data Request Handler. Not legal advice. Consult an attorney for your specific compliance needs.</p>
      </footer>
    </main>
  )
}
