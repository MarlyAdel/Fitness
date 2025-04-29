
export default function Contact() {
  return (
    <section className="contact-page bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase border-b-4 border-red-600 inline-block pb-2">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            We'd love to hear from you! Whether you're curious about membership,
            classes, or anything else.
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-red-500">
                📍 Address
              </h2>
              <p className="text-gray-300">
                123 Fitness St., Gym City, Fitland
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-red-500">
                📞 Phone
              </h2>
              <p className="text-gray-300">+123 456 7890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-red-500">
                ✉️ Email
              </h2>
              <p className="text-gray-300">contact@fitclub.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-red-500">
                🕒 Hours
              </h2>
              <p className="text-gray-300">Mon - Sat: 6am – 10pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-6 rounded-lg space-y-5 shadow-lg">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2 uppercase font-semibold rounded cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
