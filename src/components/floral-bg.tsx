export function FloralBg() {
  const url = "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/bucket/5d22dd80-fb1e-4685-a1fd-402013d067be.jpg"

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {/* Top-right flowers */}
      <div
        className="absolute -top-6 -right-6 w-[320px] h-[320px]"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "200% 200%",
          backgroundPosition: "100% 0%",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
        }}
      />
      {/* Bottom-left flowers */}
      <div
        className="absolute -bottom-6 -left-6 w-[360px] h-[360px]"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 100%",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
        }}
      />
    </div>
  )
}
