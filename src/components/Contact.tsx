import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return;
    }

    const mailtoLink = `mailto:thiruvilan444@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in working together? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card relative z-20 p-7 space-y-5">
              <h3 className="font-display font-semibold text-lg">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href="mailto:thiruvilan444@gmail.com"
                      className="font-medium text-sm hover:underline cursor-pointer"
                    >
                      thiruvilan444@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-sm">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  Connect with me
                </p>

                <div className="flex gap-2 relative z-30 pointer-events-auto">
                  <motion.a
                    href="https://github.com/Thiruvilan"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/thiruvilan-m-4a7004301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card relative z-20 p-7 space-y-4"
            >
              <h3 className="font-display font-semibold text-lg mb-1">
                Send a Message
              </h3>

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground border-none outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground border-none outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground border-none outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground border-none outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none text-sm"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full gradient-bg py-3 rounded-xl font-medium text-primary-foreground flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
