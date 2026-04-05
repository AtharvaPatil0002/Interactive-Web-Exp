import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_sm5bxx1";
const EMAILJS_TEMPLATE_ID = "template_hsvm0ce";
const EMAILJS_PUBLIC_KEY = "xtnj-whw0xpWIeGwd";

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message, title: `Message from ${form.name}` },
        EMAILJS_PUBLIC_KEY
      );
      setFormState('success');
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setFormState('idle'), 4000);
    } catch (err: unknown) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-16 justify-center md:justify-start">
          <span className="text-primary text-3xl">✦</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">👤</span> Name
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">✉</span> Email
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your.email@example.com" className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">💬</span> Message
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Your message..." className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" />
                </div>
                {formState === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}
                <motion.button type="submit" disabled={formState === 'submitting' || formState === 'success'} whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }} whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }} className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  {formState === 'idle' && <><span>Send Message</span><Send className="w-4 h-4" /></>}
                  {formState === 'submitting' && <span className="flex items-center gap-2"><motion.div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />Sending...</span>}
                  {formState === 'success' && <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" />Message Sent!</span>}
                  {formState === 'error' && <><span>Try Again</span><Send className="w-4 h-4" /></>}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Github, name: "GitHub", href: "https://github.com/AtharvaPatil0002" },
                  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/atharva-patil-335478391" },
                  { icon: Instagram, name: "Instagram", href: "#" },
                ].map((social) => (
                  <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-colors duration-300 group">
                    <social.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-foreground">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 flex-1 flex flex-col justify-center">
              <h4 className="font-heading text-xl font-bold text-primary mb-4">Let's Work Together</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
              <a href="mailto:atharvapatil3612@gmail.com" className="text-primary hover:underline font-medium flex items-center gap-2">
                <Send className="w-4 h-4" />
                atharvapatil3612@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}