import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const API_URL = "https://functions.poehali.dev/2a3e6f08-78dc-4d59-8e0e-3744265404ae"

export function RsvpSection() {
  const [attending, setAttending] = useState<boolean | null>(null)
  const [name, setName] = useState("")
  const [guests, setGuests] = useState(1)
  const [menu, setMenu] = useState("standard")
  const [wishes, setWishes] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || attending === null) return
    setLoading(true)
    setError("")
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attending, guests_count: guests, menu, wishes }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError("Что-то пошло не так. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Подтверждение
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Вы придёте?
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Пожалуйста, подтвердите своё присутствие до <strong>1 июля 2026</strong>
        </motion.p>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-5xl mb-4">💌</div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Спасибо!</h3>
              <p className="text-muted-foreground">Ваш ответ получен. Ждём вас на нашем празднике!</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Имя */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Ваше имя *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  required
                  className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Придёте? */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Вы придёте? *</label>
                <div className="flex gap-3">
                  {[{ val: true, label: "Да, приду! 🎉" }, { val: false, label: "Не смогу 😔" }].map(({ val, label }) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setAttending(val)}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all border-2 ${
                        attending === val
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-secondary text-foreground hover:border-primary/40"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {attending && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Кол-во гостей */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Сколько вас будет?</label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <Icon name="Minus" size={16} />
                        </button>
                        <span className="font-serif text-2xl text-foreground w-8 text-center">{guests}</span>
                        <button
                          type="button"
                          onClick={() => setGuests(Math.min(10, guests + 1))}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <Icon name="Plus" size={16} />
                        </button>
                        <span className="text-muted-foreground text-sm">чел.</span>
                      </div>
                    </div>

                    {/* Алкоголь */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Предпочтения по алкоголю</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { val: "all", label: "Всё подряд", icon: "🥂" },
                          { val: "strong", label: "Крепкие", icon: "🥃" },
                          { val: "medium", label: "Средней крепости", icon: "🍷" },
                          { val: "none", label: "Не пью", icon: "🧃" },
                        ].map(({ val, label, icon }) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setMenu(val)}
                            className={`py-3 px-2 rounded-xl text-sm font-medium transition-all border-2 flex flex-col items-center gap-1 ${
                              menu === val
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-border bg-secondary text-muted-foreground hover:border-primary/40"
                            }`}
                          >
                            <span className="text-xl">{icon}</span>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Пожелания */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Пожелания молодожёнам</label>
                <textarea
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  placeholder="Напишите тёплые слова..."
                  rows={3}
                  className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading || !name.trim() || attending === null}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Icon name="Loader2" size={20} className="animate-spin" />
                ) : (
                  <>
                    <Icon name="Heart" size={18} />
                    Отправить ответ
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}