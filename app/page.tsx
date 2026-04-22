'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
] as const

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${isScrolled ? 'glass-nav--elevated py-3' : 'py-4'}`}
        aria-label="Primary"
      >
        <div className="container mx-auto px-4 flex justify-between items-center min-h-[3.25rem]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-full border-2 border-riverside-green/40 flex items-center justify-center bg-riverside-dark-green text-white shadow-sm">
              <span className="font-bold text-lg font-display">R</span>
            </div>
            <div>
              <p className="text-riverside-dark-green font-bold text-lg leading-tight tracking-tight font-display">Riverside</p>
              <p className="text-riverside-accent text-[10px] font-semibold uppercase tracking-widest">Agropro Limited</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-stone-700 hover:text-riverside-dark-green transition-colors relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-riverside-green after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </motion.div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg text-riverside-dark-green hover:bg-stone-100 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={`block h-0.5 w-6 bg-current transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-stone-200/80 bg-white/98 ${
            mobileOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="py-3 px-3 rounded-lg text-stone-800 font-medium hover:bg-riverside-dark-green/5 hover:text-riverside-dark-green transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/images/farm-image-1.jpeg" 
            alt="Riverside Agropro Farm" 
            fill
            className="object-cover brightness-110"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-riverside-dark-green/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl p-10 md:p-14 max-w-3xl mx-auto bg-black/45 backdrop-blur-md border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            >
              <motion.p
                className="text-riverside-light-green/95 text-sm font-semibold uppercase tracking-[0.2em] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                Sango-Ota · Fresh from our farm
              </motion.p>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-4 tracking-tight"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Riverside Agropro
              </motion.h1>
              <motion.p 
                className="text-amber-400/95 text-lg md:text-xl font-semibold mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Limited
              </motion.p>
              <motion.p 
                className="text-stone-100 text-lg md:text-xl mb-9 max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Premium fish and poultry — raised with care, ready for your table or your business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a 
                  href="https://wa.me/2349128815164" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-hero inline-block text-center"
                >
                  Contact Us on WhatsApp
                </a>
                <a 
                  href="#products" 
                  className="glass-button-hero-secondary inline-block text-center"
                >
                  View Products
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome / What We Do — Shalomba style */}
      <section id="about" className="py-20 px-4 section-light">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-semibold text-riverside-dark-green text-center mb-4"
          >
            Welcome to our Farm!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-riverside-dark-green text-lg text-center mb-2"
          >
            What We Do
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-24 h-0.5 bg-riverside-accent mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-riverside-dark-green text-lg text-center max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Riverside Agropro Limited is a leading agricultural enterprise dedicated to providing 
            premium quality fish, poultry, and agricultural products. We combine modern farming 
            techniques with sustainable practices to deliver the best to our customers. Director: <span className="text-riverside-accent font-semibold">Fadeyibi Kayode</span>.
          </motion.p>

          <motion.h3
            id="products"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-semibold text-riverside-dark-green text-center mb-10"
          >
            Our products
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image src="/images/farm-image-2.jpeg" alt="Fish" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-riverside-dark-green mb-2">Fish</h3>
              <p className="text-riverside-dark-green text-sm leading-relaxed">
                Premium quality fish, fresh from our farm. Various species suitable for both commercial and personal use.
              </p>
              <p className="text-riverside-accent font-semibold mt-2 text-sm">Available Now</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image src="/images/farm-image-3.jpeg" alt="Poultry" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-riverside-dark-green mb-2">Fowls & Poultry</h3>
              <p className="text-riverside-dark-green text-sm leading-relaxed">
                High-quality poultry including live birds, eggs, and processed products. Raised with care and attention to quality.
              </p>
              <p className="text-riverside-accent font-semibold mt-2 text-sm">Available Now</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-riverside-light-green/20 flex items-center justify-center">
                <span className="text-5xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-riverside-dark-green mb-2">More Coming Soon</h3>
              <p className="text-riverside-dark-green text-sm leading-relaxed">
                We're continuously expanding our product range. Stay tuned for more agricultural products and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Riverside in Numbers — Shalomba style */}
      <section className="py-20 px-4 section-soft">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-semibold text-riverside-dark-green text-center mb-4"
          >
            Riverside Agropro in Numbers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-24 h-0.5 bg-riverside-accent mx-auto mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '2+', label: 'product categories' },
              { num: '24/7', label: 'fresh & available' },
              { num: '100+', label: 'happy customers' },
              { num: '1', label: 'mission: quality' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="stats-number">{stat.num}</p>
                <p className="text-riverside-dark-green text-sm font-medium mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 px-4 section-soft" aria-labelledby="testimonials-heading">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold text-riverside-dark-green text-center mb-3"
          >
            What our customers say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-stone-600 max-w-2xl mx-auto mb-12 text-sm md:text-base"
          >
            Real feedback from people who buy our fish and poultry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { stars: 5, quote: 'Best fish we have ever bought. Fresh and always delivered on time.', tag: 'Quality & delivery' },
              { stars: 5, quote: 'Their eggs are consistently fresh. My family won\'t buy from anywhere else.', tag: 'Loyal customer' },
              { stars: 5, quote: 'Professional service and premium products. Highly recommend Riverside Agropro.', tag: 'Repeat buyer' },
            ].map((t, i) => (
              <motion.div
                key={t.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-7 rounded-2xl border border-stone-200/80 shadow-[0_4px_24px_rgba(26,93,46,0.06)] hover:shadow-[0_8px_32px_rgba(26,93,46,0.1)] transition-shadow"
              >
                <p className="text-amber-500 text-sm mb-3 tracking-wide">{'★'.repeat(t.stars)}</p>
                <p className="text-riverside-dark-green font-medium mb-3 leading-relaxed">&quot;{t.quote}&quot;</p>
                <p className="text-stone-500 text-sm font-medium">{t.tag}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 section-light">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-semibold text-riverside-dark-green text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Farm Gallery
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white overflow-hidden aspect-square cursor-pointer group relative rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <Image 
                  src={`/images/farm-image-${num}.jpeg`}
                  alt={`Farm Image ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to find us — Shalomba style */}
      <section id="contact" className="py-20 px-4 section-soft">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold text-riverside-dark-green text-center mb-8"
          >
            Where to find us?
          </motion.h2>
          
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-riverside-dark-green"
          >
            <li className="flex gap-3">
              <span className="text-riverside-accent font-bold">•</span>
              <span><strong>Farm:</strong> Riverside Plot 1 Adesola Street, Arobieye Sango/Ota</span>
            </li>
            <li className="flex gap-3">
              <span className="text-riverside-accent font-bold">•</span>
              <span><strong>WhatsApp:</strong> Order and inquire via <a href="https://wa.me/2349128815164" target="_blank" rel="noopener noreferrer" className="text-riverside-green hover:underline font-semibold">09128815164</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-riverside-accent font-bold">•</span>
              <span><strong>Email:</strong> <a href="mailto:riversidagroprolmt@outlook.com" className="text-riverside-green hover:underline">riversidagroprolmt@outlook.com</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-riverside-accent font-bold">•</span>
              <span><strong>Phone:</strong> <a href="tel:+2349128815164" className="text-riverside-green hover:underline">09128815164</a></span>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a 
              href="https://wa.me/2349128815164" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-block"
            >
              Connect with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer — Shalomba style with mission */}
      <footer className="py-12 px-4 bg-riverside-dark-green text-white">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <p className="text-white/90 text-sm leading-relaxed">
            <strong>Mission:</strong> To provide premium fish, poultry, and agricultural products through sustainable farming practices. We aim to nourish our community with quality produce while building a resilient and modern farm enterprise.
          </p>
          <p className="text-white/90 text-sm">
            <strong>Contact:</strong> Riverside Plot 1 Adesola Street, Arobieye Sango/Ota — riversidagroprolmt@outlook.com — 09128815164
          </p>
          <div className="pt-4 border-t border-white/20">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Riverside Agropro Limited. Director: Fadeyibi Kayode.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

