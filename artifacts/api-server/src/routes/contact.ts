import { Router, type IRouter } from "express";

const router: IRouter = Router();

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const messages: ContactMessage[] = [];
let nextId = 1;

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  const contact: ContactMessage = {
    id: nextId++,
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(contact);

  req.log.info({ contactId: contact.id, email: contact.email }, "New contact message received");

  res.status(201).json({ success: true, message: "Message received! We'll get back to you soon." });
});

router.get("/contact", (_req, res) => {
  res.json({ messages, total: messages.length });
});

export default router;
