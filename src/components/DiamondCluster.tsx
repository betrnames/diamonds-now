export default function DiamondCluster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" fill="none" className={className}>
      <path
        d="M10 2 L14 0 L18 2 L20 7 L14 12 L8 7 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M14 0 L20 7 L14 12 L8 7 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <path d="M14 0 L14 12 M8 7 L20 7 M10 2 L14 12 M18 2 L14 12" stroke="currentColor" strokeWidth="0.3" opacity="0.25" />

      <path
        d="M2 9 L4.5 7.5 L7 9 L8 12.5 L4.5 16 L1 12.5 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path d="M4.5 7.5 L8 12.5 L4.5 16 L1 12.5 Z" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />

      <path
        d="M21 10.5 L23 9.5 L25 10.5 L25.8 13 L23 15.5 L20.2 13 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path d="M23 9.5 L25.8 13 L23 15.5 L20.2 13 Z" stroke="currentColor" strokeWidth="0.3" opacity="0.25" />
    </svg>
  )
}
