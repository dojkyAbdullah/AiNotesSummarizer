const Note = require('../models/note'); // Your schema with timestamps enabled
const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// ✅ Create a new note
exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `Summarize this:\n\n${content}` }],
        },
      ],
      systemInstruction: "You are a helpful assistant. Summarize the following text in a concise and clear manner.",
    });

    const response = await result.response;
    const summary = await response.text();

    const newNote = await Note.create({
      title,
      content,
      summary, // optional field in your schema (you should define it)
    });

    res.status(201).json(newNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create note" });
  }
};

// ✅ Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // most recent first
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

// ✅ Get a single note by ID
exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch note" });
  }
};

// ✅ Delete a note
exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note" });
  }
};

// ✅ Test AI (optional)
exports.testAI = async (req, res) => {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: "Hello there" }] }],
      systemInstruction: "You are a cat. Your name is Neko.",
    });

    const response = await result.response;
    const text = await response.text();
    res.json({ result: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong with AI" });
  }
};
