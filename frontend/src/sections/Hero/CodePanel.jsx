export default function CodePanel() {
  return (
    <div className="absolute bottom-10 right-4 md:-right-4 w-72 bg-brutal-purple brutal-border p-4 shadow-brutal-lg transform rotate-2 fluid-code-box">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black" />
      </div>
      <div className="text-[10px] font-mono text-white leading-relaxed">
        <span className="text-brutal-lime">&gt; const developer = {'{'}</span>
        <br />
        <span className="pl-4">code: 'TypeScript',</span>
        <br />
        <span className="pl-4">build: 'React',</span>
        <br />
        <span className="pl-4">deploy: 'Vercel',</span>
        <br />
        <span className="pl-4">passion: 'Solving problems'</span>
        <br />
        <span className="text-brutal-lime">{'}'}</span>
      </div>
    </div>
  )
}
