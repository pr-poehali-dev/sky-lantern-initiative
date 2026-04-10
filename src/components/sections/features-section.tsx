import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const colorPalettes = [
  { name: "Нежная роза", colors: ["#f9e4e8", "#f4b8c4", "#e8829a", "#c45674"] },
  { name: "Шалфей и слоновая кость", colors: ["#f5f0e8", "#d4e0c8", "#9ab88a", "#6a9460"] },
  { name: "Лавандовый туман", colors: ["#f0eaf8", "#d8c8f0", "#b09ad8", "#7c68b0"] },
]

function ColorPicker() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % colorPalettes.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.p
        key={active}
        className="text-sm font-medium text-foreground"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {colorPalettes[active].name}
      </motion.p>
      <div className="flex gap-3">
        {colorPalettes[active].colors.map((color, i) => (
          <motion.div
            key={color}
            className="w-10 h-10 rounded-full shadow-md"
            style={{ backgroundColor: color }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </div>
  )
}

function LocationCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="w-full max-w-[160px] bg-background rounded-xl p-3 shadow-sm border border-border">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">📍</div>
          <span className="text-xs font-medium text-foreground">Место проведения</span>
        </div>
        <div className="h-20 rounded-lg bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center text-2xl">
          🏛️
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Адрес и маршрут</p>
      </div>
    </div>
  )
}

function RsvpAnimation() {
  const [checked, setChecked] = useState<number[]>([])

  useEffect(() => {
    const items = [0, 1, 2]
    items.forEach((i) => {
      setTimeout(() => {
        setChecked((prev) => [...prev, i])
      }, 600 + i * 500)
    })
    const reset = setTimeout(() => setChecked([]), 3500)
    return () => clearTimeout(reset)
  }, [])

  const questions = ["Приду ✓", "Приведу гостя", "Вегетарианское меню"]

  return (
    <div className="flex flex-col justify-center h-full gap-3 px-2">
      {questions.map((q, i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div
            className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
            animate={{
              borderColor: checked.includes(i) ? "hsl(var(--primary))" : "hsl(var(--border))",
              backgroundColor: checked.includes(i) ? "hsl(var(--primary))" : "transparent",
            }}
            transition={{ duration: 0.3 }}
          >
            {checked.includes(i) && (
              <motion.span
                className="text-white text-xs"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                ✓
              </motion.span>
            )}
          </motion.div>
          <span className="text-sm text-foreground">{q}</span>
        </div>
      ))}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что включено
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <LocationCard />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Место и время</h3>
              <p className="text-muted-foreground text-sm mt-1">Адрес, карта, дресс-код и программа дня.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ColorPicker />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Цветовая гамма</h3>
              <p className="text-muted-foreground text-sm mt-1">Пожелания к нарядам гостей — в цветах торжества.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <RsvpAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Анкета гостя</h3>
              <p className="text-muted-foreground text-sm mt-1">Подтверждение присутствия и предпочтения по меню.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
