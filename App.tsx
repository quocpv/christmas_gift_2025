
import React, { useState } from 'react';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  const [activeMission, setActiveMission] = useState<1 | 2>(1);
  const [guess, setGuess] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [currentFailMsg, setCurrentFailMsg] = useState('');
  const [isFinalVictory, setIsFinalVictory] = useState(false);

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
    
    if (activeMission === 1) {
      if (cleanGuess === '766640924433') {
        setShowSuccess(true);
        setShowFailure(false);
      } else {
        triggerFailure();
      }
    } else {
      if (cleanGuess === '136254802618') {
        setIsFinalVictory(true);
        setShowFailure(false);
      } else {
        triggerFailure();
      }
    }
  };

  const triggerFailure = () => {
    const randomMsg = FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)];
    setCurrentFailMsg(randomMsg);
    setShowFailure(true);
  };

  const startHiddenMission = () => {
    setActiveMission(2);
    setGuess('');
    setShowSuccess(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-white selection:bg-red-500 selection:text-white pb-6 overflow-x-hidden flex flex-col items-center bg-[#0c1425]">
      <Snowfall />

      {/* Decorative Background Glows */}
      <div className="fixed top-0 left-0 w-48 h-48 bg-red-800/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-green-800/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-lg px-4 pt-12 flex-1 flex flex-col items-center">
        {/* Header - Fixed to one line */}
        <header className="text-center mb-12 w-full px-2">
          <h1 className="font-festive text-[8.5vw] sm:text-7xl lg:text-8xl text-red-500 drop-shadow-[0_4px_12px_rgba(239,68,68,0.4)] leading-none whitespace-nowrap overflow-visible">
            Giáng Sinh Đắc Lộc
          </h1>
        </header>

        {activeMission === 1 ? (
          /* MISSION 1 UI */
          <div className="w-full flex flex-col items-center animate-in fade-in duration-700">
            <div className="w-full text-center mb-6 px-2">
              <h2 className="font-classic text-lg md:text-xl text-yellow-500 italic leading-snug">
                "Muốn đắc lộc Mobi, phải thấu rõ chân kinh"
              </h2>
              <div className="mt-4 flex justify-center gap-1 opacity-40">
                <span className="w-8 h-[1px] bg-yellow-600"></span>
                <span className="text-[10px]">✨</span>
                <span className="w-8 h-[1px] bg-yellow-600"></span>
              </div>
            </div>

            <section className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none">
                <span className="text-3xl">🎄</span>
              </div>
              <div className="space-y-8 text-[1.05rem] md:text-xl leading-relaxed font-light text-center italic text-white/90">
                <p className="border-b border-white/5 pb-6">"Thất thế sa cơ, lục căn ba lần tịnh."</p>
                <p className="border-b border-white/5 pb-6">"Tứ diện hư không, cửu trùng đài vắng bóng nhị vương."</p>
                <p className="pb-2">"Tứ cố vô thân, tứ phương độc đạo, tam sinh thạch khắc nguyện tam thế."</p>
              </div>
            </section>
          </div>
        ) : (
          /* MISSION 2 UI (HIDDEN) */
          <div className="w-full flex flex-col items-center animate-in slide-in-from-right fade-in duration-700">
            <div className="w-full text-center mb-8 px-2">
              <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1 mb-4">
                <span className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold">Nhiệm Vụ Ẩn</span>
              </div>
              <h2 className="font-classic text-lg md:text-xl text-yellow-400 italic leading-relaxed px-4">
                "Cơ duyên đã đến, nay ta truyền cho ngươi bí kíp <span className="text-white font-bold">'Nhất Bách Kim'</span> của Mobi Phái."
              </h2>
            </div>

            <section className="w-full bg-black/40 backdrop-blur-2xl border border-yellow-500/20 rounded-[2rem] p-6 md:p-8 mb-10 shadow-[0_0_60px_rgba(234,179,8,0.1)] relative overflow-hidden">
              <div className="space-y-8 text-[0.95rem] md:text-lg leading-relaxed font-light text-left text-white/90">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
                    <span>🧧</span> Tầng thứ nhất: Di Ma Tuyệt Số
                  </p>
                  <p className="italic text-white/70 text-sm">"Một gậy dựng đứng, Ba vòng uốn quanh."</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
                    <span>🧧</span> Tầng thứ hai: Tam Tài Hợp Nhất
                  </p>
                  <p className="italic text-white/70 text-sm">"Lục lâm thảo khấu tụ hội, kết giao cùng đôi uyên ương thiên nga, mượn thêm sức mạnh của ngũ hành tương sinh."</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
                    <span>🧧</span> Tầng thứ ba: Lưỡng Nghi Phân Tranh
                  </p>
                  <p className="italic text-white/70 text-sm">"Một kẻ dùng đao chém ngang đồ hình Bát Quái, chia đôi trời đất. Một kẻ giữ nguyên bản tâm. Cuối cùng quy về hư vô."</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
                    <span>🧧</span> Tầng thứ tư: Thanh Xuân Vĩnh Cửu
                  </p>
                  <p className="italic text-white/70 text-sm">"Phải mượn sức mạnh của hai mươi sáu vị tinh tú, kết hợp nhị cửu luân xa."</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Input Section - Same for both missions */}
        <div className="w-full space-y-6">
          <section className="bg-gradient-to-b from-red-900/30 to-black/60 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-red-500/20 shadow-2xl">
            <h3 className="font-classic text-base md:text-lg mb-6 text-red-100 flex items-center justify-center gap-3">
              <span className="text-2xl animate-pulse">🔑</span> Giải Mã Khẩu Quyết
            </h3>
            
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  inputMode="numeric"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Nhập dãy số..."
                  onKeyDown={(e) => e.key === 'Enter' && checkSolution()}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-5 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-xl md:text-3xl tracking-[0.2em] text-center font-mono font-bold text-red-400 placeholder:tracking-normal placeholder:text-white/10 shadow-inner appearance-none"
                />
              </div>
              
              <button 
                onClick={checkSolution}
                className={`w-full bg-gradient-to-r ${activeMission === 1 ? 'from-red-600 to-red-700' : 'from-yellow-600 to-yellow-700'} active:scale-95 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-lg transition-all uppercase tracking-widest border border-white/10`}
              >
                {activeMission === 1 ? "Nhận Lộc Ngay" : "Khai Thông Kinh Mạch"}
              </button>
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

      {/* Success Modal (Mission 1) */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-stone-900 to-black border-2 border-yellow-500/30 p-8 md:p-10 rounded-[2.5rem] max-w-sm w-full text-center shadow-[0_0_100px_rgba(234,179,8,0.2)] transform animate-in zoom-in duration-300 relative overflow-hidden">
            <div className="text-7xl mb-6 animate-bounce">🧧</div>
            <h2 className="font-festive text-5xl text-yellow-400 mb-4 drop-shadow-md">Tuyệt Vời!</h2>
            <p className="text-sm md:text-base mb-8 leading-relaxed text-yellow-100/70 font-light">
              Bạn đã phá giải thành công bí mật chân kinh! <br/>
              <span className="font-mono text-xl md:text-2xl text-green-400 font-black tracking-widest mt-4 block py-4 bg-white/5 rounded-2xl">
                7666 4092 4433
              </span>
            </p>

            <div className="bg-yellow-500/5 rounded-2xl p-5 mb-8 border border-yellow-500/10">
              <p className="text-yellow-400 font-bold text-sm mb-3">Nhiệm vụ đặc biệt:</p>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "Bạn có muốn tiếp tục tham gia nhiệm vụ ẩn với giá trị gấp nhiều lần không?"
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={startHiddenMission}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-stone-950 font-black py-4 rounded-xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm"
              >
                Đồng ý tham gia
              </button>
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full bg-white/5 hover:bg-white/10 text-white/50 font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-widest"
              >
                Không, tôi xin dừng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Victory Modal (Mission 2) */}
      {isFinalVictory && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/98 backdrop-blur-3xl animate-in fade-in duration-500">
          <div className="bg-gradient-to-b from-yellow-950 to-black border-2 border-yellow-500/50 p-10 rounded-[3rem] max-w-md w-full text-center shadow-[0_0_150px_rgba(234,179,8,0.3)] transform animate-in zoom-in duration-500">
            <div className="text-8xl mb-8 animate-pulse">👑</div>
            <h2 className="font-festive text-6xl text-yellow-400 mb-6">Độc Chiếm Kinh Thành</h2>
            <p className="text-yellow-100/80 mb-8 leading-relaxed italic">
              "Chúc mừng ngươi đã lĩnh ngộ hoàn toàn bí kíp 'Nhất Bách Kim'. Toàn bộ lộc xuân của Mobi Phái nay đã thuộc về ngươi!"
            </p>
            <div className="font-mono text-3xl text-yellow-400 font-black tracking-[0.2em] mb-10 py-6 bg-yellow-500/10 rounded-3xl border border-yellow-500/20">
              1362 5480 2618
            </div>
            <button 
              onClick={() => setIsFinalVictory(false)}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-stone-950 font-black py-5 rounded-2xl shadow-2xl active:scale-95 uppercase tracking-widest"
            >
              Lĩnh Thưởng Ngay
            </button>
          </div>
        </div>
      )}

      {/* Unsuccessful Modal */}
      {showFailure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-gradient-to-b from-red-950 to-stone-950 border-2 border-red-500/20 p-8 rounded-[2rem] max-w-sm w-full text-center shadow-2xl transform animate-in zoom-in duration-300">
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
