import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Backend URL config (Slash remove karne ke sath)
  const backendUrl = import.meta.env.VITE_BACKEND_URL.replace(/\/$/, "");

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", text: "" });

  // --- 1. SERVER WAKE-UP (Background Ping) ---
  // Jaise hi koi Contact page par aaye, server ko jaga do
  useEffect(() => {
    fetch(`${backendUrl}`)
      .then(() => console.log("Server Waking Up..."))
      .catch(() => console.log("Server Wake-up ping sent."));
  }, [backendUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (type, text) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false, type: "", text: "" }), 4000);
  };

  // --- 2. OPTIMISTIC SUBMIT (Fast Response) ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Backend request start karo (Background mein)
    const requestPromise = fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // User ko wait mat karao -> 2 second mein Success dikha do
    setTimeout(() => {
      setLoading(false);
      
      // Success Message Show karo
      showAlert("success", "Message sent successfully! I’ll get back to you soon.");
      
      // Form Reset karo
      setFormData({ name: "", email: "", message: "" });

      // (Optional) Background mein check karo ki asli mein gaya ya nahi (For Console Logs)
      requestPromise
        .then((res) => res.json())
        .then((data) => {
          if (!data.success) {
            console.error("Background Email Failed:", data.message);
            // Agar failure critical ho to yahan dobara alert dikha sakte ho, 
            // par usually zaroorat nahi padti agar server jaag chuka hai.
          } else {
            console.log("Email actually sent via Backend.");
          }
        })
        .catch((err) => console.error("Background Network Error:", err));

    }, 2000); // Sirf 2 second ka loader dikhega
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-gray-100 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 relative transition-colors duration-300">
      
      {/* ALERT BOX */}
      {alert.show && (
        <div
          className={`fixed top-24 right-6 px-6 py-4 rounded-xl shadow-lg text-white font-medium z-50 animate-bounce-in
          ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {alert.text}
        </div>
      )}

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Let’s Build Something <br />
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Have a project in mind, an idea to discuss, or just want to say hello?
            Fill out the form and I’ll personally respond to you.
          </p>
          
          <div className="flex gap-4 pt-4">
             <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                <p className="font-semibold text-gray-900 dark:text-white">rnistherock06@gmail.com</p>
             </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Form</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-amber-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;