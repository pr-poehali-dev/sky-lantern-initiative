export function FloralBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {/* Top-left corner */}
      <svg className="absolute -top-8 -left-8 w-[340px] opacity-20" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="38" fill="#F9D8DC" />
        <circle cx="120" cy="50" r="22" fill="#C2D9F0" />
        <circle cx="50" cy="130" r="18" fill="#D6EEF8" />
        <circle cx="155" cy="80" r="14" fill="#F9D8DC" />
        <circle cx="90" cy="155" r="16" fill="#C2D9F0" />
        {/* Petals */}
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={80 + 48 * Math.cos((angle * Math.PI) / 180)}
            cy={80 + 48 * Math.sin((angle * Math.PI) / 180)}
            rx="16" ry="26"
            transform={`rotate(${angle} ${80 + 48 * Math.cos((angle * Math.PI) / 180)} ${80 + 48 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#F9D8DC"
            opacity="0.6"
          />
        ))}
        <circle cx="80" cy="80" r="14" fill="#FAF7F0" />
        {/* Small flower */}
        {[0,72,144,216,288].map((angle, i) => (
          <ellipse
            key={i}
            cx={155 + 24 * Math.cos((angle * Math.PI) / 180)}
            cy={80 + 24 * Math.sin((angle * Math.PI) / 180)}
            rx="8" ry="13"
            transform={`rotate(${angle} ${155 + 24 * Math.cos((angle * Math.PI) / 180)} ${80 + 24 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#C2D9F0"
            opacity="0.7"
          />
        ))}
        <circle cx="155" cy="80" r="7" fill="#FAF7F0" />
        {/* Leaves */}
        <ellipse cx="60" cy="170" rx="10" ry="24" transform="rotate(-30 60 170)" fill="#b8d8b0" opacity="0.4" />
        <ellipse cx="100" cy="185" rx="8" ry="20" transform="rotate(20 100 185)" fill="#b8d8b0" opacity="0.35" />
        <ellipse cx="140" cy="115" rx="7" ry="18" transform="rotate(-50 140 115)" fill="#b8d8b0" opacity="0.35" />
      </svg>

      {/* Top-right corner */}
      <svg className="absolute -top-8 -right-8 w-[320px] opacity-20 scale-x-[-1]" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="38" fill="#D6EEF8" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={80 + 48 * Math.cos((angle * Math.PI) / 180)}
            cy={80 + 48 * Math.sin((angle * Math.PI) / 180)}
            rx="16" ry="26"
            transform={`rotate(${angle} ${80 + 48 * Math.cos((angle * Math.PI) / 180)} ${80 + 48 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#C2D9F0"
            opacity="0.6"
          />
        ))}
        <circle cx="80" cy="80" r="14" fill="#FAF7F0" />
        {[0,72,144,216,288].map((angle, i) => (
          <ellipse
            key={i}
            cx={155 + 24 * Math.cos((angle * Math.PI) / 180)}
            cy={80 + 24 * Math.sin((angle * Math.PI) / 180)}
            rx="8" ry="13"
            transform={`rotate(${angle} ${155 + 24 * Math.cos((angle * Math.PI) / 180)} ${80 + 24 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#F9D8DC"
            opacity="0.7"
          />
        ))}
        <circle cx="155" cy="80" r="7" fill="#FAF7F0" />
        <ellipse cx="60" cy="170" rx="10" ry="24" transform="rotate(-30 60 170)" fill="#b8d8b0" opacity="0.4" />
        <ellipse cx="100" cy="185" rx="8" ry="20" transform="rotate(20 100 185)" fill="#b8d8b0" opacity="0.35" />
      </svg>

      {/* Bottom-left */}
      <svg className="absolute -bottom-8 -left-8 w-[300px] opacity-15 scale-y-[-1]" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="38" fill="#F9D8DC" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={80 + 48 * Math.cos((angle * Math.PI) / 180)}
            cy={80 + 48 * Math.sin((angle * Math.PI) / 180)}
            rx="16" ry="26"
            transform={`rotate(${angle} ${80 + 48 * Math.cos((angle * Math.PI) / 180)} ${80 + 48 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#F9D8DC"
            opacity="0.5"
          />
        ))}
        <circle cx="80" cy="80" r="14" fill="#FAF7F0" />
        <ellipse cx="155" cy="60" rx="7" ry="18" transform="rotate(30 155 60)" fill="#b8d8b0" opacity="0.4" />
        <ellipse cx="180" cy="100" rx="8" ry="20" transform="rotate(-20 180 100)" fill="#b8d8b0" opacity="0.35" />
      </svg>

      {/* Bottom-right */}
      <svg className="absolute -bottom-8 -right-8 w-[280px] opacity-15 scale-[-1]" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="38" fill="#C2D9F0" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={80 + 48 * Math.cos((angle * Math.PI) / 180)}
            cy={80 + 48 * Math.sin((angle * Math.PI) / 180)}
            rx="16" ry="26"
            transform={`rotate(${angle} ${80 + 48 * Math.cos((angle * Math.PI) / 180)} ${80 + 48 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#D6EEF8"
            opacity="0.6"
          />
        ))}
        <circle cx="80" cy="80" r="14" fill="#FAF7F0" />
        <ellipse cx="155" cy="60" rx="7" ry="18" transform="rotate(30 155 60)" fill="#b8d8b0" opacity="0.4" />
      </svg>
    </div>
  )
}
