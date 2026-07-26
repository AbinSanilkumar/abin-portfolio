import { useEffect, useState } from 'react'

function formatDate(dateStr) {
  if (!dateStr) return null
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' })
  } catch {
    return dateStr
  }
}

import { getCertifications } from '../../services/api'

export default function CertificationsSection() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    let mounted = true
    getCertifications()
      .then((data) => {
        if (mounted) setCerts(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  return (
    <div className="bg-brutal-lime brutal-border border-t-0 border-x-0 p-5 md:p-7 flex flex-col min-h-0 flex-1">
      <h2 className="section-title font-black uppercase tracking-tighter shrink-0">Certifications</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:flex lg:flex-col gap-1 md:gap-2 flex-1 min-h-0 mt-4 md:mt-6">

        {loading && (
          <>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-gray-200 brutal-border p-3 md:p-4 flex flex-col items-center justify-center gap-1 lg:flex-1 min-h-0 animate-pulse"
              >
                <div className="w-16 h-4 bg-gray-300 brutal-border" />
                <div className="w-12 h-3 bg-gray-300 brutal-border" />
              </div>
            ))}
          </>
        )}

        {error && (
          <div className="col-span-3 text-[10px] font-bold text-red-600 bg-red-100 brutal-border px-3 py-2 text-center">
            Failed to load certifications
          </div>
        )}

        {!loading && !error && certs.length === 0 && (
          <div className="col-span-3 text-[10px] font-bold text-gray-400 text-center py-4">
            No certifications yet
          </div>
        )}

        {!loading && !error && certs.map((cert) => {
          const hasCredentialUrl = Boolean(cert.credential_url)
          const hasImage = Boolean(cert.certificate_image)
          const Tag = hasCredentialUrl ? 'a' : 'button'
          const extraProps = hasCredentialUrl
            ? { href: cert.credential_url, target: '_blank', rel: 'noopener noreferrer' }
            : hasImage
              ? { onClick: () => setLightbox(cert.certificate_image) }
              : {}

          return (
            <Tag
              key={cert.id}
              {...extraProps}
              className="bg-gray-200 brutal-border p-3 md:p-4 flex flex-col items-center justify-center gap-1 shadow-brutal hover:bg-white cursor-pointer group lg:flex-1 min-h-0 transition-colors"
            >
              <span className="text-xs md:text-sm font-black uppercase text-center leading-tight group-hover:scale-105 transition-transform">
                {cert.title}
              </span>
              <span className="text-[9px] font-bold text-gray-600 text-center">{cert.issuer}</span>
              {formatDate(cert.issue_date) && (
                <span className="text-[8px] text-gray-500 font-medium">{formatDate(cert.issue_date)}</span>
              )}
            </Tag>
          )
        })}
      </div>
      <div className="pt-4 md:pt-6 shrink-0">
        <button className="w-full brutal-border bg-white py-2 text-[10px] font-bold uppercase flex items-center justify-center gap-2 hover:bg-gray-100">
          VIEW ALL CERTIFICATIONS <span className="text-sm">→</span>
        </button>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white font-bold text-sm hover:underline"
            >
              Close
            </button>
            <img
              src={lightbox}
              alt="Certificate"
              className="w-full h-auto brutal-border shadow-brutal-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
