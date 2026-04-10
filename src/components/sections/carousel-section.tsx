import { motion } from "framer-motion"

const weddingDetails = [
  { emoji: "💐", label: "Букеты невесты" },
  { emoji: "🕊️", label: "Выездная церемония" },
  { emoji: "🥂", label: "Свадебный банкет" },
  { emoji: "💌", label: "Приглашения" },
  { emoji: "🎶", label: "Живая музыка" },
  { emoji: "📸", label: "Фотосессия" },
  { emoji: "🎂", label: "Свадебный торт" },
  { emoji: "🌹", label: "Флористика" },
]

export function CarouselSection() {
  const items = [...weddingDetails, ...weddingDetails]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано с любовью — для вашего дня.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[200px] md:w-[240px] rounded-xl overflow-hidden bg-primary-foreground/10 shadow-xl flex flex-col items-center justify-center py-10 gap-4"
              data-clickable
            >
              <span className="text-5xl">{item.emoji}</span>
              <span className="text-primary-foreground font-serif text-lg text-center px-4">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
