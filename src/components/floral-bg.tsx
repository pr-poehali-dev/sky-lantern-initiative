function Flower({ color1, color2, size = 120 }: { color1: string; color2: string; size?: number }) {
  const cx = size / 2
  const r = size * 0.13
  const petalR = size * 0.22
  const petalDist = size * 0.28
  const angles = [0, 60, 120, 180, 240, 300]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {angles.map((angle) => {
        const rad = (angle * Math.PI) / 180
        const px = cx + petalDist * Math.cos(rad)
        const py = cx + petalDist * Math.sin(rad)
        return (
          <ellipse
            key={angle}
            cx={px}
            cy={py}
            rx={petalR * 0.55}
            ry={petalR}
            transform={`rotate(${angle} ${px} ${py})`}
            fill={color1}
            opacity="0.8"
          />
        )
      })}
      <circle cx={cx} cy={cx} r={r} fill={color2} opacity="0.95" />
    </svg>
  )
}

function SmallFlower({ color1, color2, size = 70 }: { color1: string; color2: string; size?: number }) {
  const cx = size / 2
  const r = size * 0.14
  const petalR = size * 0.24
  const petalDist = size * 0.3
  const angles = [0, 72, 144, 216, 288]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {angles.map((angle) => {
        const rad = (angle * Math.PI) / 180
        const px = cx + petalDist * Math.cos(rad)
        const py = cx + petalDist * Math.sin(rad)
        return (
          <ellipse
            key={angle}
            cx={px}
            cy={py}
            rx={petalR * 0.5}
            ry={petalR}
            transform={`rotate(${angle} ${px} ${py})`}
            fill={color1}
            opacity="0.75"
          />
        )
      })}
      <circle cx={cx} cy={cx} r={r} fill={color2} opacity="0.95" />
    </svg>
  )
}

function Leaf({ size = 60, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
      <ellipse cx="30" cy="30" rx="10" ry="28" fill="#a8c8a0" opacity="0.55" />
    </svg>
  )
}

export function FloralBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {/* Top-left */}
      <div className="absolute -top-4 -left-4">
        <div className="relative w-[220px] h-[220px]">
          <div className="absolute top-0 left-0"><Flower color1="#F9D8DC" color2="#fff5f7" size={150} /></div>
          <div className="absolute top-2 left-[100px]"><SmallFlower color1="#C2D9F0" color2="#f0f8ff" size={85} /></div>
          <div className="absolute top-[100px] left-4"><SmallFlower color1="#D6EEF8" color2="#f0f8ff" size={65} /></div>
          <div className="absolute top-[80px] left-[130px]"><Leaf size={52} rotate={-35} /></div>
          <div className="absolute top-0 left-[150px]"><Leaf size={48} rotate={15} /></div>
        </div>
      </div>

      {/* Top-right */}
      <div className="absolute -top-4 -right-4">
        <div className="relative w-[220px] h-[220px]">
          <div className="absolute top-0 right-0"><Flower color1="#C2D9F0" color2="#f0f8ff" size={150} /></div>
          <div className="absolute top-2 right-[100px]"><SmallFlower color1="#F9D8DC" color2="#fff5f7" size={85} /></div>
          <div className="absolute top-[100px] right-4"><SmallFlower color1="#F9D8DC" color2="#fff5f7" size={65} /></div>
          <div className="absolute top-[80px] right-[130px]"><Leaf size={52} rotate={215} /></div>
          <div className="absolute top-0 right-[150px]"><Leaf size={48} rotate={165} /></div>
        </div>
      </div>

      {/* Bottom-left */}
      <div className="absolute -bottom-4 -left-4">
        <div className="relative w-[200px] h-[200px]">
          <div className="absolute bottom-0 left-0"><Flower color1="#D6EEF8" color2="#f0f8ff" size={140} /></div>
          <div className="absolute bottom-2 left-[95px]"><SmallFlower color1="#F9D8DC" color2="#fff5f7" size={75} /></div>
          <div className="absolute bottom-[85px] left-2"><Leaf size={48} rotate={40} /></div>
          <div className="absolute bottom-[60px] left-[120px]"><Leaf size={44} rotate={-10} /></div>
        </div>
      </div>

      {/* Bottom-right */}
      <div className="absolute -bottom-4 -right-4">
        <div className="relative w-[200px] h-[200px]">
          <div className="absolute bottom-0 right-0"><Flower color1="#F9D8DC" color2="#fff5f7" size={140} /></div>
          <div className="absolute bottom-2 right-[95px]"><SmallFlower color1="#C2D9F0" color2="#f0f8ff" size={75} /></div>
          <div className="absolute bottom-[85px] right-2"><Leaf size={48} rotate={-140} /></div>
          <div className="absolute bottom-[60px] right-[120px]"><Leaf size={44} rotate={190} /></div>
        </div>
      </div>
    </div>
  )
}
