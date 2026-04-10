import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function VenueSection() {
  const address = "Воронежская область, Поворинский район, с. Рождественское, ул. Кирова, 24"
  const mapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Место торжества
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
              с. Рождественское
            </h2>
            <p className="text-muted-foreground mt-3 text-lg font-serif italic">
              Поворинский район, Воронежская область
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Адрес</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Дата</p>
                  <p className="text-muted-foreground text-sm mt-0.5">26 июля 2026 года</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Начало</p>
                  <p className="text-muted-foreground text-sm mt-0.5">В 12:00</p>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Icon name="Navigation" size={16} />
              Построить маршрут
            </a>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%9F%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C+%D1%81.+%D0%A0%D0%BE%D0%B6%D0%B4%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B5%2C+%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%2C+24&z=14&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта места проведения"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
