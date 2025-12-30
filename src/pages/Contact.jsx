import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (type, text) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false, type: "", text: "" }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showAlert("success", "Message sent successfully. I’ll get back to you soon!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showAlert("error", data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      showAlert("error", "Server error. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-gray-100 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 relative">
      
      {/* ALERT */}
      {alert.show && (
        <div
          className={`fixed top-6 right-6 px-6 py-4 rounded-xl shadow-lg text-white font-medium z-50 animate-slide-in
          ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {alert.text}
        </div>
      )}

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Let’s Build Something <br />
            <span className="text-orange-600">Great Together</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind, an idea to discuss, or just want to say hello?
            Fill out the form and I’ll personally respond to you.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project or idea..."
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
