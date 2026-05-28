export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal flex items-center justify-center px-6 relative font-sans">
      <div className="max-w-xl w-full">
        <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
          prompt-website
        </h1>
        <p className="mt-3 text-base text-charcoal/70">
          Your project is ready. Here's how to proceed:
        </p>
        <ol className="mt-8 space-y-4 text-base text-charcoal/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gold-600 font-medium">1.</span>
            <span>Open the <span className="font-medium text-charcoal">Agent</span> tab to describe what you want to build.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold-600 font-medium">2.</span>
            <span>
              Edit this page at{' '}
              <code className="font-mono text-sm bg-gold-100 text-charcoal px-1.5 py-0.5 rounded">
                apps/web/src/App.tsx
              </code>{' '}
              — changes hot-reload.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold-600 font-medium">3.</span>
            <span>
              Find project docs in{' '}
              <code className="font-mono text-sm bg-gold-100 text-charcoal px-1.5 py-0.5 rounded">
                .maestru/docs/
              </code>{' '}
              or run{' '}
              <code className="font-mono text-sm bg-gold-100 text-charcoal px-1.5 py-0.5 rounded">
                maestru search &lt;topic&gt;
              </code>
              .
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold-600 font-medium">4.</span>
            <span>
              This template supports{' '}
              <span className="font-medium text-charcoal">MaestruMD</span> for Spec-Driven Development, with the CLI installed. Use the framework and learn more at the docs or by asking the Agent.
            </span>
          </li>
        </ol>
      </div>
      <a
        href="https://maestru.com"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 font-serif text-sm text-charcoal/40 hover:text-charcoal/70 transition-colors"
      >
        maestru
      </a>
    </div>
  );
}
