export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`section-title font-black uppercase tracking-tighter ${className}`}>
      {children}
    </h2>
  )
}
