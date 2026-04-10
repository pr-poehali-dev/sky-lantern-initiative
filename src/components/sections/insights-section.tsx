import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const tips = [
  {
    title: "Как выбрать цветовую палитру для свадьбы",
    category: "Стиль",
    image: "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/94d4d692-e212-4861-ad32-d6982df79d85.jpg",
  },
  {
    title: "Дресс-код для гостей: советы и примеры",
    category: "Советы",
    image: "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/977a7945-e94c-4702-a0a7-60535874784f.jpg",
  },
  {
    title: "Как организовать выездную церемонию",
    category: "Организация",
    image: "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/9f8cdf7e-97b0-47cb-8847-a48be632f073.jpg",
  },
  {
    title: "Флористика и декор: создаём атмосферу",
    category: "Декор",
    image: "https://cdn.poehali.dev/projects/6d427057-5792-4136-a44c-fde27b6f85ce/files/0087bc1e-f259-452f-8484-118f9a18ae59.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Полезное
        </motion.p>

        <div className="divide-y divide-border">
          {tips.map((tip, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{tip.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {tip.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={tips[hoveredIndex].image}
                alt={tips[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
