export function Robot() {
  return (
    <div className="relative animate-float w-64 h-80 flex flex-col items-center justify-center">
      {/* Robot Head */}
      <div className="w-32 h-24 bg-gradient-to-br from-primary to-yellow-600 rounded-2xl relative shadow-lg z-10 border-b-4 border-yellow-700 animate-glow">
        {/* Eyes */}
        <div className="absolute top-8 left-6 w-5 h-5 bg-background rounded-full border-2 border-yellow-300 flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow-200 rounded-full animate-ping" />
        </div>
        <div className="absolute top-8 right-6 w-5 h-5 bg-background rounded-full border-2 border-yellow-300 flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow-200 rounded-full animate-ping" />
        </div>
        {/* Mouth/Antenna */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-primary">
          <div className="absolute -top-2 -left-1.5 w-4 h-4 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* Neck */}
      <div className="w-8 h-4 bg-yellow-800" />

      {/* Robot Body */}
      <div className="w-40 h-32 bg-gradient-to-b from-primary to-yellow-600 rounded-xl relative shadow-xl border-b-4 border-yellow-700 overflow-hidden">
        {/* Screen/Chest detail */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-16 bg-background rounded-lg border-2 border-yellow-400 p-2 flex flex-col gap-2 justify-center items-center">
          <div className="w-full h-1 bg-primary/50 rounded-full overflow-hidden">
             <div className="w-1/2 h-full bg-primary animate-[bounce_2s_infinite]" />
          </div>
          <div className="w-full flex gap-1 justify-center">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             <div className="w-2 h-2 rounded-full bg-yellow-500" />
             <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      {/* Wheels */}
      <div className="flex gap-12 -mt-4 z-20">
        <div className="w-10 h-10 bg-background border-4 border-primary rounded-full relative flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)]">
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
        <div className="w-10 h-10 bg-background border-4 border-primary rounded-full relative flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)]">
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
}
