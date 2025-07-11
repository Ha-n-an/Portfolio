export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-deepPurple/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display section-title">Resume</h2>
          <p className="text-stardust max-w-2xl mx-auto mt-4">
            Here's my resume embedded below. You can also download or view it in a new tab.
          </p>
        </div>

        {/* Resume iframe */}
        <div className="w-full h-[700px] border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-8">
          <iframe
            src="/HananSaeed.pdf"
            title="Hanan Saeed Resume"
            className="w-full h-full"
            frameBorder="0"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/HananSaeed.pdf"
            download="HananSaeed_Resume.pdf"
            className="btn-gradient px-6 py-3 rounded-full font-medium flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume</span>
          </a>

          <a
            href="/HananSaeed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 rounded-full font-medium flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>View Online</span>
          </a>
        </div>
      </div>
    </section>
  );
}
