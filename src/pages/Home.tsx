const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-center space-y-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-full">
          Tailwind CSS v4 Activo
        </span>
        
        <h1 className="text-3xl font-bold text-white tracking-tight">
          EventHub AI
        </h1>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          Si ves esta tarjeta centrada, con fondo oscuro, bordes redondeados y texto formateado,{' '}
          <strong className="text-slate-200 font-semibold">
            ¡Tailwind CSS está configurado y funcionando perfectamente!
          </strong>
        </p>
      </div>
     
    </div>
  );
};

export default Home;