import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // ⚠️ IMPORTANT: Yahan apne EmailJS ke Keys replace karna (Niche steps diye hain)
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // Example: service_xyz
        "YOUR_TEMPLATE_ID",   // Example: template_abc
        form.current,
        "YOUR_PUBLIC_KEY"     // Example: user_12345
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          form.current.reset(); // Form clear kar do
          setTimeout(() => setSuccess(null), 5000); // 5 sec baad success msg hata do
        },
        (error) => {
          setLoading(false);
          setSuccess(false);
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-32 pb-16 px-4">
      
      {/* --- HEADER --- */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
          Let's Chat! <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Tell me about your project
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Whether you have a question, a project proposal, or just want to say hi, I’ll try my best to get back to you!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* --- LEFT SIDE: CONTACT INFO --- */}
        <div className="space-y-8">
            {/* Info Cards */}
            <ContactCard 
                icon={<FaEnvelope />} 
                title="Email Me" 
                value="rnistherock06@gmail.com" 
                link="mailto:contact@rani.dev"
            />
            <ContactCard 
                icon={<FaPhoneAlt />} 
                title="Call Me" 
                value="+91 6206173716" 
                link="tel:+7672810643"
            />
            <ContactCard 
                icon={<FaMapMarkerAlt />} 
                title="Location" 
                value="Rajkot, Gujarat, India" 
                link="#"
            />

            {/* Social Links */}
            <div className="pt-8">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                    <SocialBtn icon={<FaGithub />} link="https://github.com/rani-kumari" />
                    <SocialBtn icon={<FaLinkedin />} link="https://linkedin.com/in/rani-kumari" />
                    <SocialBtn icon={<FaTwitter />} link="https://twitter.com" />
                </div>
            </div>
        </div>

        {/* --- RIGHT SIDE: EMAIL FORM --- */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            
            {/* Orange Blob Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                
                {/* Name Input */}
                <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input 
                        type="text" 
                        name="user_name" // EmailJS needs this name
                        required 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                    <input 
                        type="email" 
                        name="user_email" // EmailJS needs this name
                        required 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />
                </div>

                {/* Message Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                        name="message" // EmailJS needs this name
                        required 
                        rows="5"
                        placeholder="Hi Rani, I have a project regarding..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <span>Sending...</span>
                    ) : (
                        <>
                            Send Message <FaPaperPlane />
                        </>
                    )}
                </button>

                {/* Status Messages */}
                {success === true && (
                    <p className="text-green-600 bg-green-100 p-3 rounded-lg text-center font-medium animate-fade-in-up">
                        ✅ Message sent successfully! I'll reply soon.
                    </p>
                )}
                {success === false && (
                    <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center font-medium animate-fade-in-up">
                        ❌ Something went wrong. Please try again later.
                    </p>
                )}

            </form>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const ContactCard = ({ icon, title, value, link }) => (
    <a href={link} className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-orange-500 hover:shadow-md transition-all group">
        <div className="text-2xl text-orange-600 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div>
            <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</h4>
            <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{value}</p>
        </div>
    </a>
);

const SocialBtn = ({ icon, link }) => (
    <a href={link} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-white hover:bg-orange-600 hover:text-white transition-all text-xl shadow-sm">
        {icon}
    </a>
);

export default Contact;