import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/9f8cdf7e-97b0-47cb-8847-a48be632f073.jpg",
  "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/94d4d692-e212-4861-ad32-d6982df79d85.jpg",
  "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/1a6f0e9c-e5bd-4715-ac14-936b76e2fbde.jpg",
]

const captions = [
  "Незабываемый закат",
  "Палитра вашего дня",
  "Приглашение с душой",
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Вдохновение
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <div className="h-[400px] md:h-[500px]">
                <motion.img
                  src={src}
                  alt={captions[i]}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-serif text-lg">{captions[i]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
