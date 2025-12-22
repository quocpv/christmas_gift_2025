
import React, { useState } from 'react';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  const [guess, setGuess] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [currentFailMsg, setCurrentFailMsg] = useState('');

  const FAIL_MESSAGES = [
    "Sai bét rồi! Chắc tại mải ngắm tuần lộc quá nên quên 'chân kinh' đúng không? 🦌",
    "Ối giời ơi, dãy số này lạ quá, chắc là số nhà của ông già Noel hả? Thử lại đi nào! 🏠",
    "Hụt rồi! Thử lại đi, vận may đang ở ngay trước mắt mà, đừng bỏ cuộc! ✨",
    "Chưa đúng đâu nha! Hay là bạn đang nhập số dư tài khoản sau khi mua quà Noel? 😂",
    "Sai rồi! Tập trung vào, đừng để mùi gà tây nướng làm xao nhãng tâm trí! 🍗",
    "Vẫn chưa trúng! Một chút nữa thôi, lục lại trí nhớ xem nào sĩ tử! 🧘‍♂️",
    "Ui da, số này 'phong thủy' chưa khớp với lộc Mobi rồi. Thử lại nhé! 🧧",
    "Sai một ly đi một dặm tới Bắc Cực luôn rồi bạn ơi! 🧊"
  ];

  const checkSolution = () => {
    const cleanGuess = guess.replace(/\s/g, '');
    if (cleanGuess === '766640924433') {
      setShowSuccess(true);
      setShowFailure(false);
    } else {
      const randomMsg = FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)];
      setCurrentFailMsg(randomMsg);
      setShowFailure(true);
    }
  };

  return (
    <div className="min-h-screen relative text-white selection:bg-red-500 selection:text-white pb-6 overflow-x-hidden flex flex-col items-center bg-[#0c1425]">
      <Snowfall />

      {/* Decorative Background Glows */}
      <div className="fixed top-0 left-0 w-48 h-48 bg-red-800/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-green-800/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-lg px-4 pt-12 flex-1 flex flex-col items-center">
        {/* Header - Optimized for one line on mobile */}
        <header className="text-center mb-12 w-full px-2">
          <h1 className="font-festive text-[8.5vw] sm:text-7xl lg:text-8xl text-red-500 drop-shadow-[0_4px_12px_rgba(239,68,68,0.4)] leading-none whitespace-nowrap overflow-visible">
            Giáng Sinh Đắc Lộc
          </h1>
        </header>

        {/* Introductory Hint - Separated as requested */}
        <div className="w-full text-center mb-6 px-2 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h2 className="font-classic text-lg md:text-xl text-yellow-500 italic leading-snug">
            "Muốn đắc lộc Mobi, phải thấu rõ chân kinh"
          </h2>
          <div className="mt-4 flex justify-center gap-1 opacity-40">
            <span className="w-8 h-[1px] bg-yellow-600"></span>
            <span className="text-[10px]">✨</span>
            <span className="w-8 h-[1px] bg-yellow-600"></span>
          </div>
        </div>

        {/* Riddle Content Card */}
        <section className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none">
            <span className="text-3xl">🎄</span>
          </div>
          <div className="absolute bottom-0 left-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none">
            <span className="text-3xl">🎁</span>
          </div>
          
          <div className="space-y-8 text-[1.05rem] md:text-xl leading-relaxed font-light text-center italic text-white/90">
            <p className="border-b border-white/5 pb-6">"Thất thế sa cơ, lục căn ba lần tịnh."</p>
            <p className="border-b border-white/5 pb-6">"Tứ diện hư không, cửu trùng đài vắng bóng nhị vương."</p>
            <p className="pb-2">"Tứ cố vô thân, tứ phương độc đạo, tam sinh thạch khắc nguyện tam thế."</p>
          </div>
        </section>

        {/* Input Section */}
        <div className="w-full space-y-6">
          <section className="bg-gradient-to-b from-red-900/30 to-black/60 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-red-500/20 shadow-2xl">
            <h3 className="font-classic text-base md:text-lg mb-6 text-red-100 flex items-center justify-center gap-3">
              <span className="text-2xl animate-pulse">🔑</span> Giải Mã Chân Kinh
            </h3>
            
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  inputMode="numeric"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Nhập dãy số bí ẩn..."
                  onKeyDown={(e) => e.key === 'Enter' && checkSolution()}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-5 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-xl md:text-3xl tracking-[0.2em] text-center font-mono font-bold text-red-400 placeholder:tracking-normal placeholder:text-white/10 shadow-inner appearance-none"
                />
              </div>
              
              <button 
                onClick={checkSolution}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-95 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-[0_10px_20px_rgba(220,38,38,0.2)] transition-all uppercase tracking-widest border border-white/10"
              >
                Nhận Lộc Ngay
              </button>
              
              <p className="text-center text-white/20 text-[10px] md:text-xs italic font-light">
                Chân kinh đã hiện, hãy nhập đúng dãy số để mở lộc xuân!
              </p>
            </div>
          </section>
        </div>

        {/* Footnote */}
        <footer className="mt-auto pt-12 pb-4 text-center">
          <div className="w-12 h-px bg-white/10 mx-auto mb-4"></div>
          <p className="opacity-30 text-[9px] tracking-[0.4em] uppercase font-bold text-white">
            © 2025 Christmas Challenge
          </p>
        </footer>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-stone-900 to-black border-2 border-yellow-500/30 p-8 md:p-10 rounded-[2.5rem] max-w-sm w-full text-center shadow-[0_0_100px_rgba(234,179,8,0.2)] transform animate-in zoom-in duration-300 relative overflow-hidden">
            <div className="text-7xl mb-6 animate-bounce">🧧</div>
            <h2 className="font-festive text-5xl text-yellow-400 mb-4 drop-shadow-md">Tuyệt Vời!</h2>
            <p className="text-sm md:text-base mb-8 leading-relaxed text-yellow-100/70 font-light">
              Bạn đã phá giải thành công bí mật chân kinh! <br/>
              <span className="font-mono text-xl md:text-2xl text-green-400 font-black tracking-widest mt-6 block py-4 md:py-5 bg-white/5 rounded-2xl border border-white/5">
                7666 4092 4433
              </span>
            </p>
            
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-stone-950 font-black py-4 rounded-xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm"
            >
              Hoàn Thành
            </button>
          </div>
        </div>
      )}

      {/* Unsuccessful Modal */}
      {showFailure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-red-950 to-stone-950 border-2 border-red-500/20 p-8 md:p-10 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl transform animate-in zoom-in duration-300">
            <div className="text-6xl mb-4">❄️</div>
            <h2 className="font-festive text-4xl text-red-400 mb-4">Úi Chà...</h2>
            
            <div className="bg-white/5 rounded-2xl p-5 md:p-6 mb-8 border border-white/5 min-h-[100px] flex items-center justify-center shadow-inner">
              <p className="text-sm md:text-base text-white/80 italic font-light leading-relaxed">
                "{currentFailMsg}"
              </p>
            </div>

            <button 
              onClick={() => setShowFailure(false)}
              className="w-full bg-white/10 active:bg-white/20 text-white font-bold py-4 rounded-xl transition-all border border-white/10 active:scale-95 uppercase tracking-widest text-sm"
            >
              Thử Lại Xem Sao
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
