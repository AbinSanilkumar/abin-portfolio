import { certifications } from '../../data/certifications'

export default function CertificationsSection() {
  return (
    <div className="bg-brutal-lime brutal-border border-t-0 border-x-0 p-5 md:p-7 flex flex-col min-h-0 flex-1">
      <h2 className="section-title font-black uppercase tracking-tighter shrink-0">Certifications</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:flex lg:flex-col gap-1 md:gap-2 flex-1 min-h-0 mt-4 md:mt-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-200 brutal-border p-3 md:p-4 flex items-center justify-center shadow-brutal hover:bg-white cursor-pointer group lg:flex-1 min-h-0"
          >
            <span className="text-2xl md:text-3xl font-bold group-hover:scale-110 transition-transform">
              {cert.badge}
            </span>
          </div>
        ))}
      </div>
      <div className="pt-4 md:pt-6 shrink-0">
        <button className="w-full brutal-border bg-white py-2 text-[10px] font-bold uppercase flex items-center justify-center gap-2 hover:bg-gray-100">
          VIEW ALL CERTIFICATIONS <span className="text-sm">→</span>
        </button>
      </div>
    </div>
  )
}
