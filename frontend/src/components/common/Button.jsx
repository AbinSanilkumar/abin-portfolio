export default function Button({ children, variant = 'white', className = '', ...props }) {
  const variants = {
    lime: 'bg-brutal-lime',
    white: 'bg-white',
    purple: 'bg-brutal-purple text-white',
  }

  return (
    <button
      className={`brutal-btn ${variants[variant]} shadow-brutal ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
