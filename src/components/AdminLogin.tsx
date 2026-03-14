import { useState } from 'react';

export const AdminLogin = ({ onLogin, onClose, error }: { onLogin: (pw: string) => void; onClose: () => void; error?: boolean }) => {
  const [pw, setPw] = useState('');
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-bumaye-black/95 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-xs bg-white rounded-2xl p-8 flex flex-col gap-4 items-center">
        <h2 className="font-display text-2xl mb-2">Admin Login</h2>
        <input type="password" placeholder="Wachtwoord" value={pw} onChange={e => setPw(e.target.value)} className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange" />
        {error && <div className="text-red-500 text-xs">Onjuist wachtwoord</div>}
        <button onClick={() => onLogin(pw)} className="w-full bg-bumaye-orange text-white py-3 rounded-xl font-bold hover:bg-bumaye-black transition-all">Login</button>
        <button onClick={onClose} className="text-xs text-bumaye-orange mt-2 hover:underline">Annuleren</button>
      </div>
    </div>
  );
};
