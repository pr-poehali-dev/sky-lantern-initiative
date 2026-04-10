import { motion } from "framer-motion"

const colors = [
  { name: "Молочный", hex: "#FAF7F0", text: "#8a7f72" },
  { name: "Светло-розовый", hex: "#F9D8DC", text: "#b87a82" },
  { name: "Небесно-синий", hex: "#C2D9F0", text: "#5a86b0" },
  { name: "Светло-голубой", hex: "#D6EEF8", text: "#5a9ab5" },
]

export function PaletteSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Цветовая гамма
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Дресс-код для гостей
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Мы будем рады, если ваши наряды будут в гармонии с атмосферой праздника. Выбирайте оттенки из нашей палитры.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color, i) => (
            <motion.div
              key={color.name}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <div
                className="h-48 md:h-64 w-full"
                style={{ backgroundColor: color.hex }}
              />
              <div className="bg-secondary px-4 py-3 flex items-center justify-between">
                <span className="font-serif text-foreground text-sm">{color.name}</span>
                <span className="text-xs font-mono text-muted-foreground">{color.hex}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-10 font-serif italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Просим воздержаться от белого и чёрного цвета
        </motion.p>
      </div>
    </section>
  )
}
