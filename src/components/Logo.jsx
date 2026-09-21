// High Hype icon — abstract green mark inspired by the new brand direction.
export default function Logo({ className = '', title = 'High Hype Studio', ...rest }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...rest}
    >
      <title>{title}</title>
      <g fill="#1FCB73">
        <circle cx="74" cy="74" r="42" />
        <circle cx="126" cy="74" r="42" />
        <circle cx="100" cy="144" r="24" />
      </g>
    </svg>
  )
}
