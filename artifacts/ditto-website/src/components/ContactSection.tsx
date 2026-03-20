import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 justify-center md:justify-start"
        >
          <span className="text-primary text-3xl">✦</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">👤</span> Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your name" 
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">✉</span> Email
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="your.email@example.com" 
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">💬</span> Message
                  </label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Your message..." 
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'idle' && (
                    <>Send Message <Send className="w-4 h-4 ml-1" /></>
                  )}
                  {formState === 'submitting' && "Sending..."}
                  {formState === 'success' && "Message Sent! ✓"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Github, name: "GitHub" },
                  { icon: Linkedin, name: "LinkedIn" },
                  { icon: Instagram, name: "Instagram" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <social.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 flex-1 flex flex-col justify-center">
              <h4 className="font-heading text-xl font-bold text-primary mb-4">Let's Work Together</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
