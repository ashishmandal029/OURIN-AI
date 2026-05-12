export default function OurinAI() { const features = [ { title: 'AI Chat Assistant', desc: 'Smart natural AI conversations directly inside WhatsApp.', no: '01', icon: '🤖', }, { title: 'PDF & DOC AI', desc: 'Upload files and instantly get summaries and answers.', no: '02', icon: '📄', }, { title: 'Image AI', desc: 'Analyze screenshots, photos, and visual content.', no: '03', icon: '🖼️', }, { title: 'Media Downloader', desc: 'Download videos, reels, and social content instantly.', no: '04', icon: '⬇️', }, { title: 'Smart Automation', desc: 'Automate workflows, reminders, and daily tasks.', no: '05', icon: '⚡', }, { title: 'Web Search AI', desc: 'Get real-time answers and web information in chat.', no: '06', icon: '🌐', }, ]

const testimonials = [ { name: 'Rahul', text: 'Best WhatsApp AI bot I have used. Super fast and clean UI.', }, { name: 'Aman', text: 'PDF summaries and downloader features are insane.', }, { name: 'Zaid', text: 'Feels like ChatGPT inside WhatsApp. Very smooth.', }, ]

return ( <div className="bg-[#f4f6ff] text-[#0b1330] min-h-screen overflow-hidden font-sans"> {/* NAVBAR */} <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/50"> <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between"> <div> <h1 className="text-3xl font-black text-blue-600">OURIN AI</h1> </div>

<nav className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
        <a href="#features" className="hover:text-blue-600 transition">Features</a>
        <a href="#demo" className="hover:text-blue-600 transition">Demo</a>
        <a href="#download" className="hover:text-blue-600 transition">Download</a>
        <a href="#developer" className="hover:text-blue-600 transition">Developer</a>
      </nav>

      <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-7 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300">
        Try Bot
      </button>
    </div>
  </header>

  {/* HERO SECTION */}
  <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-14 items-center">
    <div className="absolute top-10 left-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/20 blur-3xl rounded-full"></div>

    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 bg-white border border-white/50 shadow-lg rounded-full px-5 py-3 mb-8">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        <span className="font-bold text-blue-600 tracking-wide">
          AI WHATSAPP BOT
        </span>
      </div>

      <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
        OURIN AI —
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          {' '}Smart WhatsApp Automation
        </span>
      </h1>

      <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mb-10">
        Chat smarter, automate tasks, summarize PDFs, analyze images,
        download media, and control everything directly from WhatsApp.
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-9 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300">
          Start Chatting
        </button>

        <button className="bg-white border border-gray-200 px-9 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300">
          Download APK
        </button>

        <button className="bg-white border border-gray-200 px-9 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300">
          Join Telegram
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          ['50K+', 'Users'],
          ['24/7', 'Online'],
          ['99.9%', 'Uptime'],
          ['2M+', 'Messages'],
        ].map((item) => (
          <div
            key={item[1]}
            className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[30px] p-6 shadow-xl text-center"
          >
            <h3 className="text-3xl font-black text-blue-600 mb-2">
              {item[0]}
            </h3>
            <p className="text-gray-500 font-semibold">{item[1]}</p>
          </div>
        ))}
      </div>
    </div>

    {/* PHONE MOCKUP */}
    <div className="relative flex justify-center">
      <div className="absolute w-[420px] h-[420px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative bg-white rounded-[50px] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-white/70 w-[360px] h-[760px]">
        <div className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4f46e5] rounded-[40px] h-full p-7 text-white flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-black text-2xl">OURIN AI</h2>
              <p className="text-sm text-blue-200">WhatsApp AI Bot</p>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Online</span>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <div className="bg-white/10 rounded-3xl p-5 backdrop-blur-xl">
              <p className="text-blue-100 text-sm mb-2">You</p>
              <p>Summarize this PDF in 3 points.</p>
            </div>

            <div className="bg-white rounded-3xl p-5 text-[#0b1330] ml-6 shadow-xl">
              <p className="font-bold mb-2">OURIN AI</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Main concept explained</li>
                <li>• Important formulas extracted</li>
                <li>• Quick revision summary generated</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-3xl p-5 backdrop-blur-xl">
              <h3 className="font-bold mb-4">Premium Tools</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between bg-white/10 rounded-2xl px-4 py-3">
                  <span>AI Chat</span>
                  <span>⚡</span>
                </div>

                <div className="flex justify-between bg-white/10 rounded-2xl px-4 py-3">
                  <span>Image AI</span>
                  <span>🖼️</span>
                </div>

                <div className="flex justify-between bg-white/10 rounded-2xl px-4 py-3">
                  <span>Downloader</span>
                  <span>⬇️</span>
                </div>

                <div className="flex justify-between bg-white/10 rounded-2xl px-4 py-3">
                  <span>Web Search</span>
                  <span>🌐</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-3">
              <div className="w-2/3 h-full bg-white rounded-full"></div>
            </div>

            <p className="text-center text-blue-100 text-sm tracking-[5px]">
              DEVELOPED BY ASHISH
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FEATURES */}
  <section id="features" className="max-w-7xl mx-auto px-6 py-24">
    <div className="text-center mb-20">
      <p className="text-blue-600 tracking-[6px] font-black mb-5">
        FEATURES
      </p>

      <h2 className="text-6xl font-black leading-tight mb-6">
        Everything you need,
        <br />
        just a WhatsApp away.
      </h2>

      <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
        Advanced AI tools, automation, smart utilities, and productivity
        features packed into one futuristic experience.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {features.map((item) => (
        <div
          key={item.no}
          className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[40px] p-8 shadow-xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute top-6 right-6 text-6xl font-black text-blue-100">
            {item.no}
          </div>

          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mb-8">
            {item.icon}
          </div>

          <h3 className="text-3xl font-black mb-4">{item.title}</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* COMMANDS */}
  <section className="max-w-7xl mx-auto px-6 py-24">
    <div className="bg-[#0b1330] rounded-[50px] p-10 md:p-16 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-blue-400 tracking-[5px] font-black mb-5">
            COMMANDS
          </p>

          <h2 className="text-5xl font-black text-white leading-tight mb-6">
            Powerful commands built for productivity.
          </h2>

          <p className="text-blue-100 text-xl leading-relaxed">
            Use intelligent AI commands, download tools, reminders, and
            smart utilities directly inside WhatsApp.
          </p>
        </div>

        <div className="bg-black/40 rounded-[35px] border border-white/10 p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="space-y-4 font-mono text-lg text-green-400">
            <p>/ai explain quantum physics</p>
            <p>/pdf summarize notes.pdf</p>
            <p>/image analyze screenshot</p>
            <p>/download instagram reel</p>
            <p>/translate hello hindi</p>
            <p>/search latest AI news</p>
            <p className="animate-pulse">▋</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* TESTIMONIALS */}
  <section className="max-w-7xl mx-auto px-6 py-24">
    <div className="text-center mb-20">
      <p className="text-blue-600 tracking-[5px] font-black mb-5">
        TESTIMONIALS
      </p>

      <h2 className="text-6xl font-black leading-tight">
        Trusted by thousands
        <br />
        of smart users.
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-[40px] p-8 shadow-xl border border-white/50"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white text-2xl font-black">
              {item.name[0]}
            </div>

            <div>
              <h3 className="text-2xl font-black">{item.name}</h3>
              <p className="text-yellow-500">★★★★★</p>
            </div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* DOWNLOAD */}
  <section id="download" className="max-w-7xl mx-auto px-6 py-24">
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-violet-700 rounded-[60px] p-12 md:p-20 text-white shadow-[0_40px_120px_rgba(79,70,229,0.45)] relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="tracking-[5px] font-black mb-5 text-blue-100">
            DOWNLOAD
          </p>

          <h2 className="text-6xl font-black leading-tight mb-8">
            Install OURIN AI and start automating smarter.
          </h2>

          <p className="text-blue-100 text-xl leading-relaxed mb-10">
            Access premium AI features, media tools, smart automation,
            document AI, and powerful WhatsApp utilities.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-black shadow-xl hover:scale-105 transition-all duration-300">
              Download APK
            </button>

            <button className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full text-lg font-black hover:bg-white/20 transition-all duration-300">
              Web Version
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {[
            'Android v3.0',
            'Windows App',
            'iOS Coming Soon',
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-7 flex items-center justify-between"
            >
              <div>
                <h3 className="text-2xl font-black mb-2">{item}</h3>
                <p className="text-blue-100">Latest stable release</p>
              </div>

              <button className="w-14 h-14 rounded-full bg-white text-blue-700 text-2xl font-black shadow-xl">
                →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* DEVELOPER */}
  <section id="developer" className="max-w-7xl mx-auto px-6 py-24">
    <div className="bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4f46e5] rounded-[50px] p-12 md:p-16 shadow-2xl text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div className="flex items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-7xl shadow-2xl">
            👨‍💻
          </div>

          <div>
            <p className="tracking-[5px] text-blue-200 font-black mb-3">
              DEVELOPER
            </p>

            <h2 className="text-6xl font-black mb-4">Ashish</h2>

            <p className="text-blue-100 text-xl leading-relaxed mb-6 max-w-xl">
              Building futuristic AI products, WhatsApp automation systems,
              and premium user experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              {['React', 'AI APIs', 'Node.js', 'Automation'].map((item) => (
                <span
                  key={item}
                  className="bg-white/10 border border-white/10 px-5 py-2 rounded-full font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8">
          <h3 className="text-3xl font-black mb-8">Connect with me</h3>

          <div className="space-y-5">
            {['Telegram', 'WhatsApp', 'GitHub', 'Email'].map((item) => (
              <button
                key={item}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 flex items-center justify-between hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-lg font-bold">{item}</span>
                <span>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-gray-200 py-12 mt-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-3xl font-black text-blue-600 mb-2">
          OURIN AI
        </h2>
        <p className="text-gray-500">
          © 2026 OURIN AI — Developed by Ashish
        </p>
      </div>

      <div className="flex gap-6 text-gray-500 font-semibold">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Telegram</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  </footer>
</div>

) }
