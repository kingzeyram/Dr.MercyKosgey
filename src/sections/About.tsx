import { Award, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="about-section pt-[100px] md:pt-[140px] py-28 relative overflow-hidden"
    >
      {/* Soft Background Accent */}
      <div className="about-bg-blob"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <p className="about-subtitle">About Dr. Mercy</p>
              <h2 className="about-title">
                Expertise Meets <span className="text-gradient">Compassion</span>
              </h2>
            </div>

            <div className="pl-10 space-y-6 font-sans text-lg text-[#8B6F47] leading-relaxed">
              <p>
                Dr. Mercy Kosgey is a board-certified dermatologist with over 15 years of experience
                in both medical and cosmetic dermatology. Her approach combines evidence-based medicine
                with refined aesthetic precision.
              </p>
              <p>
                Trained at leading institutions and continuously advancing her knowledge,
                she integrates modern dermatological science with individualized treatment strategies.
              </p>
              <p>
                Her philosophy centers on attentive listening, personalized care,
                and delivering natural, confidence-enhancing results.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-5 pt-4">
              <div className="credential-pill">
                <Award className="credential-icon" size={20} />
                <span>Board Certified</span>
              </div>

              <div className="credential-pill">
                <Heart className="credential-icon" size={20} />
                <span>Patient-Focused</span>
              </div>
            </div>
          </div>

          {/* RIGHT GRID CARDS */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 gap-8">

              <div className="about-card about-card-accent">
                <div className="about-card-icon">🎓</div>
                <h3>Education</h3>
                <p>Elite medical training & continuous professional development</p>
              </div>

              <div className="about-card about-card-light">
                <div className="about-card-icon">🔬</div>
                <h3>Research</h3>
                <p>Published studies in respected dermatology journals</p>
              </div>

              <div className="about-card about-card-warm">
                <div className="about-card-icon">🏆</div>
                <h3>Awards</h3>
                <p>Recognized excellence in patient care & outcomes</p>
              </div>

              <div className="about-card about-card-soft">
                <div className="about-card-icon">💡</div>
                <h3>Innovation</h3>
                <p>Utilizing advanced treatments & technologies</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
