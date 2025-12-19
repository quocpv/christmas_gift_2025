
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
    <div className="min-h-screen relative text-white selection:bg-red-500 selection:text-white pb-20 overflow-x-hidden">
      <Snowfall />

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-red-800/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-green-800/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="font-festive text-6xl md:text-8xl text-red-500 drop-shadow-[0_5px_15px_rgba(239,68,68,0.3)] mb-4">
            Giáng Sinh Đắc Lộc
          </h1>
          <p className="text-green-400 font-semibold tracking-[0.3em] uppercase text-xs md:text-sm">
            MobiFone x Christmas 2024
          </p>
        </header>

        {/* Riddle Card */}
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-14 mb-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-6xl">🎄</span>
          </div>
          <div className="absolute bottom-0 left-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-6xl">🎁</span>
          </div>
          
          <h2 className="font-classic text-3xl md:text-4xl text-yellow-500 mb-10 italic text-center leading-tight">
            "Muốn đắc lộc Mobi, phải thấu rõ chân kinh"
          </h2>
          
          <div className="space-y-8 text-xl md:text-2xl leading-relaxed font-light text-center px-4 max-w-3xl mx-auto italic">
            <p className="border-b border-white/10 pb-6">"Thất thế sa cơ, lục căn ba lần tịnh."</p>
            <p className="border-b border-white/10 pb-6">"Tứ diện hư không, cửu trùng đài vắng bóng nhị vương."</p>
            <p className="pb-4">"Tứ cố vô thân, tứ phương độc đạo, tam sinh thạch khắc nguyện tam thế."</p>
          </div>
        </section>

        {/* Solution Input Section - Centered */}
        <div className="max-w-xl mx-auto">
          <section className="bg-gradient-to-b from-red-900/40 to-black/40 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-red-500/30 shadow-[0_0_40px_rgba(220,38,38,0.1)]">
            <h3 className="font-classic text-2xl mb-8 text-red-200 flex items-center justify-center gap-3">
              <span className="text-3xl">🔑</span> Giải Mã Chân Kinh
            </h3>
            <div className="flex flex-col gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Nhập dãy số bí ẩn..."
                  onKeyDown={(e) => e.key === 'Enter' && checkSolution()}
                  className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-6 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-2xl md:text-3xl tracking-[0.25em] text-center font-mono font-bold text-red-400 placeholder:tracking-normal placeholder:text-white/10 shadow-inner"
                />
                <div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
              </div>
              
              <button 
                onClick={checkSolution}
                className="group relative bg-red-600 hover:bg-red-500 py-5 rounded-2xl font-black text-xl shadow-[0_10px_25px_rgba(220,38,38,0.3)] transform active:scale-95 transition-all uppercase tracking-[0.2em] border border-white/10 overflow-hidden"
              >
                <span className="relative z-10">Nhận Lộc Ngay</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
              </button>
              
              <p className="text-center text-white/30 text-sm italic font-light">
                Chân kinh đã hiện, hãy nhập đúng dãy số để mở rương vàng!
              </p>
            </div>
          </section>
        </div>

        {/* Footer info */}
        <footer className="mt-24 text-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6"></div>
          <p className="opacity-30 text-[10px] tracking-[0.4em] uppercase font-bold">
            © 2024 MobiFone Christmas Challenge
          </p>
        </footer>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-gradient-to-b from-stone-900 to-black border-2 border-yellow-500/50 p-12 rounded-[3rem] max-w-md w-full text-center shadow-[0_0_100px_rgba(234,179,8,0.2)] transform animate-in zoom-in duration-500 relative overflow-hidden">
            <div className="absolute top-8 left-8 text-yellow-500/20 text-2xl animate-pulse">⭐</div>
            <div className="absolute bottom-8 right-8 text-yellow-500/20 text-2xl animate-pulse delay-300">⭐</div>

            <div className="text-8xl mb-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-bounce">🧧</div>
            <h2 className="font-festive text-7xl text-yellow-400 mb-4 drop-shadow-md">Tuyệt Vời!</h2>
            <p className="text-lg mb-10 leading-relaxed text-yellow-100/60 font-light">
              Bạn đã phá giải thành công bí mật chân kinh! <br/>
              <span className="font-mono text-3xl text-green-400 font-black tracking-widest mt-6 block py-4 bg-white/5 rounded-2xl border border-white/5">
                7666 4092 4433
              </span>
            </p>
            
            <p className="text-white/40 italic text-sm mb-10 px-6">
              Mã lộc đã được kích hoạt. Hãy dùng nó để kết nối yêu thương và nhận ưu đãi từ MobiFone.
            </p>
            
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 text-stone-950 font-black py-5 rounded-2xl transition-all shadow-2xl active:scale-95 uppercase tracking-widest"
            >
              Hoàn Thành
            </button>
          </div>
        </div>
      )}

      {/* Unsuccessful Modal */}
      {showFailure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-lg animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-red-950 to-stone-900 border-2 border-red-500/40 p-10 rounded-[2.5rem] max-w-md w-full text-center shadow-[0_0_60px_rgba(220,38,38,0.2)] transform animate-in zoom-in duration-300">
            <div className="text-7xl mb-6">❄️</div>
            <h2 className="font-festive text-5xl text-red-400 mb-6 drop-shadow-md">Úi Chà...</h2>
            
            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/5 min-h-[100px] flex items-center justify-center">
              <p className="text-lg text-white/80 italic font-light leading-relaxed">
                "{currentFailMsg}"
              </p>
            </div>

            <button 
              onClick={() => setShowFailure(false)}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all border border-white/10 active:scale-95 uppercase tracking-widest"
            >
              Thử Lại Xem Sao
            </button>
            
            <p className="text-xs text-white/20 mt-6 uppercase tracking-widest">
              Đọc kỹ chân kinh - Vận may sẽ tới
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
