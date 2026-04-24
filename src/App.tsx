import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, Star, Plus,
  MapPin, X, ChevronRight,
  Phone, Mail, ChevronDown
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky Book Now button after scrolling past 80% of the viewport height (roughly the hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDF6F5] text-gray-900 font-sans overflow-x-hidden selection:bg-[#E8C5C8] selection:text-[#060099]">
      {/* Background Gradient Blurs for aesthetic vibe */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#E8C5C8]/30 rounded-full blur-[120px] opacity-80 mix-blend-multiply"></div>
        <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FDF6F5]/60 rounded-full blur-[120px] opacity-60 mix-blend-multiply"></div>
      </div>

      <BookingOverlay isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Sticky Top Bar Components */}
      <AnimatePresence>
        {showStickyButton && (
          <>
            {/* Sticky Logo - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="fixed top-6 left-6 lg:top-8 lg:left-10 z-[50] pointer-events-none"
            >
              <div className="px-2 py-2 flex items-center">
                <span className="font-serif font-bold text-lg lg:text-xl text-[#060099] tracking-tight drop-shadow-sm">Beauti</span>
                <span className="font-sans font-normal text-[9px] lg:text-[10px] uppercase tracking-[0.2em] ml-1.5 text-gray-400 drop-shadow-sm">101</span>
              </div>
            </motion.div>

            {/* Sticky Button - Top Right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              onClick={() => setIsBookingOpen(true)}
              className="fixed top-6 right-6 lg:top-8 lg:right-10 z-[50] bg-[#060099] text-white px-6 py-3 lg:px-8 lg:py-3.5 rounded-full font-sans font-bold text-xs lg:text-sm uppercase tracking-wider shadow-xl shadow-[#060099]/30 hover:bg-[#040073] transition-all flex items-center gap-2 border-2 border-white/20 hover:scale-105"
            >
              Book Now
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="relative z-10 w-full">
        <HeroSection onBookClick={() => setIsBookingOpen(true)} />
        <TechnicalAnalysisSection />
        <PhilosophySection />
        <BeforeAndAfterSection />
        <ExperienceSection />
        <FAQSection />
        <CTASection onBookClick={() => setIsBookingOpen(true)} />
      </main>

      <Footer />
    </div>
  );
}

function TechnicalAnalysisSection() {
  const details = [
    {
      id: 1,
      title: "Facial Mapping",
      description: "Advanced digital grid analysis to identify unique structural proportions and surface irregularities.",
      top: "15%",
      left: "42%"
    },
    {
      id: 2,
      title: "Barrier Integrity",
      description: "Scientific monitoring of the acid mantle and lipid barrier to ensure long-term skin health.",
      top: "28%",
      left: "58%"
    },
    {
      id: 3,
      title: "Precision Targeting",
      description: "Bespoke ingredient cocktails tailored specifically to the analysis metrics gathered during mapping.",
      top: "45%",
      left: "48%"
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Scientific Image with Hotspots */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-3/5 relative group"
          >
            <div className="relative aspect-[2/3] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
              <img 
                src="/images/ChatGPT Image Apr 23, 2026, 09_41_12 PM.png" 
                alt="Digital Skin Analysis Mapping" 
                className="w-full h-full object-cover brightness-105 contrast-[1.02]"
              />
              
              {/* Overlay pulse markers */}
              {details.map((detail) => (
                <div 
                  key={detail.id}
                  className="absolute z-20"
                  style={{ top: detail.top, left: detail.left }}
                >
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-6 bg-[#060099]/30 rounded-full flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-[#060099] rounded-full shadow-[0_0_10px_#060099]"></div>
                  </motion.div>
                </div>
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Float badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-6 -right-6 glass-card p-5 rounded-2xl hidden md:block"
            >
              <div className="text-[10px] font-bold text-[#060099] uppercase tracking-widest mb-1">Status</div>
              <div className="text-gray-900 font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Analysis Engaged
              </div>
            </motion.div>
          </motion.div>

          {/* Details Content */}
          <div className="w-full lg:w-2/5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#060099] text-xs font-bold tracking-widest uppercase mb-4 block">The Science</span>
              <h2 className="font-sans font-semibold text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight leading-tight">
                Digital Precision <br/>
                <span className="font-serif italic font-light text-[#060099]">Meets Artistry</span>
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                We utilize non-invasive mapping technologies to see beyond the surface, creating a molecular blueprint of your skin's unique requirements.
              </p>
            </motion.div>

            <div className="space-y-10">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#060099]/5 flex items-center justify-center shrink-0 border border-[#060099]/10 group-hover:bg-[#060099] group-hover:text-white transition-all duration-500">
                    <span className="text-sm font-bold">{detail.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#060099] transition-colors">{detail.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{detail.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BookingOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-[#FDF6F5]/90 backdrop-blur-xl flex flex-col justify-center items-center p-6"
        >
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 lg:right-12 p-4 bg-white/80 rounded-full hover:bg-white transition-all shadow-sm border border-gray-100"
          >
            <X className="w-6 h-6 text-[#060099]" />
          </button>

          <motion.div 
             initial={{ scale: 0.95, opacity: 0 }} 
             animate={{ scale: 1, opacity: 1 }} 
             transition={{ delay: 0.1, duration: 0.3 }}
             className="bg-white max-w-md w-full p-10 md:p-14 rounded-[3rem] text-center shadow-2xl shadow-[#060099]/10 border border-white"
          >
            <h2 className="font-sans font-semibold text-4xl text-gray-900 mb-10 tracking-tight">
              Book <span className="font-serif italic font-light text-[#060099]">Now</span>
            </h2>
            
            <div className="flex flex-col gap-8 text-left mb-4">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#060099]/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#060099]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#060099] mb-1">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-800 font-semibold text-base hover:text-[#E58C8A] transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8C5C8]/50 to-transparent"></div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#060099]/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#060099]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#060099] mb-1">Email</p>
                  <a href="mailto:hello@beauti101.com" className="text-gray-800 font-semibold text-base hover:text-[#E58C8A] transition-colors">hello@beauti101.com</a>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8C5C8]/50 to-transparent"></div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#060099]/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#060099]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#060099] mb-1">Location</p>
                  <p className="text-gray-800 font-semibold text-base">South Pasadena, CA</p>
                  <p className="text-gray-400 text-xs mt-1">Strictly by appointment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeroSection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      </div>

      {/* Book Now Pill Button */}
      <div className="absolute bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 w-[90%] lg:w-full max-w-lg px-0">
        <button 
           onClick={onBookClick}
           className="w-full bg-[#060099] text-white rounded-full h-16 lg:h-[84px] flex items-center justify-between px-2 lg:px-3 pl-8 lg:pl-10 shadow-[0_20px_50px_-10px_rgba(6,0,153,0.3)] group hover:bg-[#040073] hover:scale-[1.02] transition-all duration-300"
        >
          <span className="text-lg lg:text-2xl font-serif tracking-wide font-medium">Book Now</span>
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner">
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#060099] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl glass-card rounded-[3rem] p-10 lg:p-24 shadow-sm z-10 relative overflow-hidden">
        
        {/* Decorative blur inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8C5C8]/40 rounded-full blur-3xl -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <span className="text-[#060099] text-xs font-bold tracking-widest uppercase mb-4 block">The Philosophy</span>
          <h2 className="font-sans font-semibold text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight">
            A New Era <span className="font-serif italic font-light text-[#060099]">of</span> Skin
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 text-gray-600 leading-relaxed text-pretty text-lg font-medium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="mb-6">
              At Beauti 101, we believe your skin is a living canvas. We transcend traditional aesthetics by merging clinical precision with intentional, intuitive care. Here, an appointment is not merely a transaction; it is a sacred pause.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              We embrace the ethos of "Modern Meets Timeless," leveraging the modern frontier of skincare ingredients while honoring the timeless practices of holistic facial massage and lymphatic support. We invite your skin back to its innate state of health.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeforeAndAfterSection() {
  const images = [
    { title: "Acne Clearing", url: "/images/348s (1).jpg" },
    { title: "Pigmentation & Glow", url: "/images/348s (2).jpg" },
    { title: "Texture Refinement", url: "/images/348s (3).jpg" },
    { title: "Age Reversal", url: "/images/348s (4).jpg" },
    { title: "Pore Minimization", url: "/images/348s (5).jpg" },
    { title: "Overall Radiance", url: "/images/348s.jpg" }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const firstChild = container.children[0] as HTMLElement;
        if (!firstChild) return;
        
        // Calculate the exact width of one item plus the flex gap (gap-8 = 32px)
        const itemWidth = firstChild.offsetWidth + 32;

        // Auto wrap back to start if we reach the end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-16 md:flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#060099] text-xs font-bold tracking-widest uppercase mb-4 block">Proven Outcomes</span>
            <h2 className="font-sans font-semibold text-5xl md:text-6xl tracking-tight text-gray-900">
              Real <span className="font-serif italic font-light text-[#060099]">Results</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 bg-white/50 px-4 py-2 rounded-full border border-gray-100 shadow-sm"
          >
            Swipe transformations <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Horizontal scroll container with strict snapping */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto gap-8 no-scrollbar pb-12 pt-4 snap-x snap-mandatory scroll-smooth"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex-none w-[80vw] md:w-[400px] aspect-[4/5] relative rounded-[2.5rem] overflow-hidden snap-center group cursor-grab active:cursor-grabbing shadow-xl shadow-[#060099]/10 bg-white border border-gray-100"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060099]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0 duration-500"></div>
              
              <div className="absolute bottom-6 left-6 right-6 z-10 glass-card p-4 opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{img.title}</h3>
                  <p className="text-[10px] text-[#060099] font-bold uppercase tracking-wider">Before & After</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#060099] text-white flex items-center justify-center shadow-md">
                   <Plus className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] relative shadow-2xl shadow-[#060099]/10 border border-white/50">
              <iframe
                src="https://maps.google.com/maps?q=South%20Pasadena,%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover grayscale-[20%]"
              ></iframe>
              <div className="absolute top-8 left-8 right-8 glass-card p-5 rounded-2xl flex items-center justify-between shadow-sm pointer-events-none">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] mb-1 font-bold text-[#060099]">The Studio Space</div>
                  <div className="text-gray-900 font-semibold text-lg">South Pasadena</div>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-gray-900" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 bg-[#060099]/10 text-[#060099] w-fit px-3 py-1.5 rounded-full mb-8 font-semibold text-xs uppercase tracking-widest">
              <Star className="w-3 h-3 fill-currentColor" /> 5-Star rated sanctuary
            </div>
            <h2 className="font-sans font-semibold text-4xl md:text-5xl mb-8 tracking-tight text-gray-900 leading-tight">
              The Beauti 101 <br/><span className="font-serif italic font-light text-[#060099]">Experience</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md text-pretty text-lg font-medium">
              Step into an enclave of quiet luxury. Located in the charming heart of South Pasadena, our studio was designed with your profound comfort in mind.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed max-w-md text-pretty font-medium">
              Banish the sterile, rushed atmosphere of a standard clinic. Here, the lighting is soft, the acoustics are hushed, and the attention is unequivocally devoted to you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Do you accept walk-ins?", a: "To ensure each client receives our undivided attention in a serene environment, we operate strictly by appointment only." },
    { q: "How should I prepare for my first facial?", a: "Please arrive with a bare face if possible, and bring a list of your current skincare products. Avoid using retinol or strong exfoliating acids 48 hours prior." },
    { q: "What is your cancellation policy?", a: "We require a minimum of 48 hours notice for cancellations or rescheduling to avoid a cancellation fee. This allows us to offer the time to another client." },
    { q: "Are your treatments safe for sensitive skin?", a: "Absolutely. Every treatment is bespoke and tailored meticulously to your skin's unique barrier health, tolerances, and sensitivity levels." }
  ];

  return (
    <section id="faq" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl glass-card rounded-[3rem] p-10 lg:p-16 shadow-sm z-10 relative">
        <h2 className="font-sans font-semibold text-4xl md:text-5xl text-gray-900 mb-12 tracking-tight text-center">
          Frequently <span className="font-serif italic font-light text-[#060099]">Asked</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#E8C5C8]/50 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group py-4"
      >
        <span className="font-sans font-semibold text-gray-900 text-lg group-hover:text-[#060099] transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#060099] text-white' : 'bg-[#E8C5C8]/20 text-[#060099]'}`}>
           <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pt-2 text-gray-600 font-medium leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CTASection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#E8C5C8]/40 rounded-full blur-[100px] -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-sans font-semibold text-5xl md:text-7xl text-gray-900 mb-6 tracking-tight">
          Ready for <span className="font-serif italic font-light text-[#060099]">Radiance?</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg font-medium max-w-md mx-auto">
          Take the first step towards transforming your skin's health today.
        </p>
        
        <button 
           onClick={onBookClick}
           className="bg-[#060099] text-white rounded-full h-16 lg:h-20 flex items-center justify-between px-3 pl-8 lg:pl-10 shadow-[0_20px_50px_-10px_rgba(6,0,153,0.3)] group hover:bg-[#040073] hover:scale-[1.02] transition-all duration-300 mx-auto w-[90%] max-w-md"
        >
          <span className="text-lg lg:text-2xl font-serif tracking-wide font-medium">Book Now</span>
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner">
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#060099] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </div>
        </button>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 lg:px-12 border-t border-[#E8C5C8]/50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="font-serif font-bold text-2xl text-[#060099] tracking-tight">
          Beauti<span className="font-sans font-normal text-xs uppercase tracking-[0.2em] ml-2 text-gray-400">101</span>
        </div>
        
        <p className="text-xs text-gray-500 font-medium">
          © {new Date().getFullYear()} Beauti 101. South Pasadena, CA. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
          <a href="#" className="hover:text-[#060099] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#060099] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
