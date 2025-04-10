
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SNM Collections transformed our revenue cycle. Their professional approach has helped us recover outstanding balances while maintaining positive patient relationships.",
    author: "Dr. Sarah Johnson",
    position: "Medical Director, Northside Family Practice"
  },
  {
    quote: "The specialized knowledge of healthcare regulations that SNM brings to the table is invaluable. They've increased our collections by 35% in just six months.",
    author: "Mark Rodriguez",
    position: "CFO, Westlake Medical Center"
  },
  {
    quote: "I was hesitant about using a collection agency, but SNM's patient-centered approach changed my mind. They're respectful, effective, and truly understand healthcare.",
    author: "Dr. Michael Chen",
    position: "Owner, Chen Pediatric Associates"
  },
  {
    quote: "Our practice struggled with aged receivables until we partnered with SNM. Their team's expertise in medical billing and insurance resolution is outstanding.",
    author: "Patricia Williams",
    position: "Practice Manager, Oceanview Medical Group"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Hear from healthcare providers who have experienced the SNM difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden bg-white rounded-2xl">
            <CardContent className="p-10 relative">
              <Quote className="absolute top-4 left-4 h-24 w-24 text-gray-100 opacity-50" />
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-center text-gray-700 italic mb-8 relative z-10">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-lg">{testimonials[activeIndex].author}</p>
                <p className="text-gray-500">{testimonials[activeIndex].position}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-gray-300 h-12 w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-10 bg-gradient-to-r from-snmblue-500 to-snmteal-500" : "w-3 bg-gray-300"
                  }`}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-gray-300 h-12 w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
