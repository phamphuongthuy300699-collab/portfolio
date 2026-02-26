"use client";

import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 md:py-32 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Прозрачная смета
                    </h2>
                    <p className="text-lg opacity-70">
                        Без скрытых платежей. Инженерный расчет стоимости.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 font-mono text-sm md:text-base">
                    {/* SaaS Model */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        viewport={{ once: true }}
                        className="border-2 border-[var(--foreground)] border-dashed p-8 rounded-xl bg-white/30 dark:bg-black/20 backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>

                        <div className="uppercase tracking-widest font-bold border-b-2 border-[var(--foreground)] border-dashed pb-4 mb-6">
                            Модель подписки (SaaS)
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex justify-between items-baseline border-b border-black/10 dark:border-white/10 border-dotted pb-2">
                                <span>SETUP_FEE</span>
                                <span className="font-bold">от 25 000 ₽</span>
                            </li>
                            <li className="opacity-60 text-xs">Запуск, брендирование, настройка меню и интеграция с iiko/r_keeper.</li>

                            <li className="flex justify-between items-baseline pt-4 border-b border-black/10 dark:border-white/10 border-dotted pb-2">
                                <span>MONTHLY_FEE</span>
                                <span className="font-bold">от 5 000 ₽ / мес</span>
                            </li>
                            <li className="opacity-60 text-xs">Хостинг, отказоустойчивая БД, техподдержка, обновления.</li>
                        </ul>

                        <a href="#contact" className="block text-center w-full py-3 bg-[var(--foreground)] text-[var(--background)] font-bold hover:opacity-90 transition-opacity">
                            [ ВЫБРАТЬ SAAS ]
                        </a>
                    </motion.div>

                    {/* Lifetime License */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="border-2 border-[var(--foreground)] p-8 rounded-xl bg-[var(--foreground)] text-[var(--background)] shadow-2xl relative"
                    >
                        <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 text-xs font-bold font-sans rotate-12 drop-shadow-md">
                            ENTERPRISE
                        </div>

                        <div className="uppercase tracking-widest font-bold border-b border-[var(--background)] border-dashed pb-4 mb-6 opacity-90">
                            Выкуп лицензии (Lifetime)
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex justify-between items-baseline border-b border-white/20 border-dotted pb-2">
                                <span>ONE_TIME_PAYMENT</span>
                                <span className="font-bold">от 120 000 ₽</span>
                            </li>
                            <li className="opacity-70 text-xs">Полная передача исходного кода, развертывание на серверах клиента. Отсутствие ежемесячных платежей за ПО.</li>

                            <li className="flex justify-between items-baseline pt-4 pb-2 border-b border-white/20 border-dotted">
                                <span>SUPPORT_SLA (Опц.)</span>
                                <span>По договору</span>
                            </li>
                            <li className="opacity-70 text-xs">Развитие фич, доработки уровня Enterprise (по часам).</li>
                        </ul>

                        <a href="#contact" className="block text-center w-full py-3 border-2 border-[var(--background)] font-bold hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors">
                            [ ЗАПРОСИТЬ lifetime ]
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
