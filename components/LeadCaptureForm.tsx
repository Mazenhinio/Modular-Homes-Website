interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  segment?: string;
  submitText?: string;
  fields?: any[];
}

export function LeadCaptureForm({ title = "Get Started", description = "Contact us for more information", segment, submitText = "Submit", fields }: LeadCaptureFormProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <form className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-[#2D2D2D] font-bold py-3 px-6 rounded-lg hover:bg-[#C4A027] transition-colors"
          >
{submitText}
          </button>
        </form>
      </div>
    </section>
  );
} 