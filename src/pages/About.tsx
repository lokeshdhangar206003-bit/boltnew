import { Target, Eye, Heart, BookOpen, Lightbulb, Users2, HandHeart, Award } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { IMAGES } from '@/lib/data';
import type { PageId } from '@/lib/nav';

type Props = { onNavigate: (page: PageId) => void };

const values = [
  { icon: Heart, title: 'Integrity & Character', text: 'We model honesty, respect, and responsibility in everything we do, building students of strong moral fibre.' },
  { icon: Lightbulb, title: 'Curiosity & Inquiry', text: 'Question-driven learning that turns every classroom into a laboratory of ideas and discovery.' },
  { icon: Users2, title: 'Inclusive Community', text: 'A warm, welcoming environment where every child belongs and every voice is valued.' },
  { icon: Award, title: 'Pursuit of Excellence', text: 'High expectations met with high support — we help students reach their personal best.' },
  { icon: HandHeart, title: 'Compassion & Service', text: 'Students learn that true success is measured by the good they do for others.' },
  { icon: BookOpen, title: 'Lifelong Learning', text: 'We equip students with the tools and mindset to keep growing long after they leave our gates.' },
];

const methodology = [
  { title: 'Experiential Learning', text: 'Lessons move beyond textbooks through hands-on projects, field visits, and real-world problem solving.' },
  { title: 'Differentiated Instruction', text: 'Small group and individual attention ensures each child learns at their own pace and style.' },
  { title: 'Technology-Enabled', text: 'Smart classrooms and digital resources make learning visual, interactive, and engaging.' },
  { title: 'Value-Based Education', text: 'Daily assemblies, life-skills sessions, and community service weave character into the curriculum.' },
];

const leaders = [
  { name: 'Dr. (Mrs.) Anjali Verma', role: 'Principal', bio: 'Ph.D. in Education, 25+ years shaping young minds with a vision of holistic excellence.' },
  { name: 'Mr. Rajeev Sharma', role: 'Vice Principal', bio: 'M.Ed., champion of academic rigour and student mentoring across secondary and senior secondary.' },
  { name: 'Mrs. Sunita Gupta', role: 'Head — Primary Wing', bio: 'Early-childhood specialist creating joyful, activity-based foundations for young learners.' },
  { name: 'Mr. Imran Khan', role: 'Director — Sports & Activities', bio: 'National-level coach building school teams that compete and win across the district.' },
  { name: 'Mrs. Pooja Agrawal', role: 'Head — Science & Innovation', bio: 'Leads our robotics and STEM programs, guiding students to regional science fair victories.' },
  { name: 'Mr. Devendra Yadav', role: 'Administrator', role2: 'Operations & Admissions', bio: 'Ensures smooth day-to-day running of the campus, transport, and parent communication.' },
];

export default function About({ onNavigate }: Props) {
  return (
    <div className="animate-fade-in pt-20">
      {/* hero */}
      <section className="relative overflow-hidden bg-royal-900 py-24">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.campusWalk} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-x relative z-10 max-w-3xl">
          <span className="section-label !bg-white/10 !text-gold-300">About Us</span>
          <h1 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">
            Three decades of nurturing Etawah's brightest minds
          </h1>
          <p className="mt-5 text-lg text-white/75">
            GC Genius Public School was founded on a simple belief — that every child deserves an education that ignites curiosity, builds character, and opens doors to a world of possibility.
          </p>
        </div>
      </section>

      {/* history */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-royal-900/10">
            <img src={IMAGES.buildingAlt} alt="School building" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeader
              label="Our Story"
              title="From a small classroom to a landmark of learning"
              subtitle="Founded in 1998, GC Genius Public School began with just 80 students and a handful of passionate teachers. Today, we are proud to serve over 1,200 students across Etawah with a sprawling campus, modern facilities, and a faculty committed to every child's growth."
            />
            <div className="mt-6 space-y-4 text-slate-600">
              <p>
                Over the years, the school has grown alongside the community it serves — adding smart classrooms, fully-equipped laboratories, a digital library, and expansive sports grounds — while staying true to its founding values of care, rigour, and belonging.
              </p>
              <p>
                We are a CBSE-affiliated, co-educational institution welcoming students from Kindergarten through Senior Secondary, and we take pride in being one of Etawah's most trusted names in education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* mission / vision */}
      <section className="bg-slate-50 py-20">
        <div className="container-x grid gap-8 md:grid-cols-3">
          <div className="card border-t-4 border-t-gold-400">
            <Target className="h-9 w-9 text-gold-500" />
            <h3 className="mt-4 font-serif text-xl font-bold text-royal-900">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To provide a stimulating, child-centred learning environment that empowers every student to think critically, act responsibly, and pursue excellence in all endeavours.
            </p>
          </div>
          <div className="card border-t-4 border-t-gold-400">
            <Eye className="h-9 w-9 text-gold-500" />
            <h3 className="mt-4 font-serif text-xl font-bold text-royal-900">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To be Etawah's most respected school — a place where holistic development, academic distinction, and strong values come together to shape confident, compassionate citizens of tomorrow.
            </p>
          </div>
          <div className="card border-t-4 border-t-gold-400">
            <HandHeart className="h-9 w-9 text-gold-500" />
            <h3 className="mt-4 font-serif text-xl font-bold text-royal-900">Our Promise</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To know each child personally, to challenge them kindly, and to celebrate their progress — so that every student leaves our gates ready to lead a life of purpose.
            </p>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader
            center
            label="Core Values"
            title="The principles that guide us"
            subtitle="Six values anchor everything that happens at GC Genius — from the classroom to the playground."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card group">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700 transition-colors group-hover:bg-gold-400 group-hover:text-royal-950">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* methodology */}
      <section className="bg-royal-900 py-20">
        <div className="container-x">
          <SectionHeader
            center
            light
            label="Teaching Methodology"
            title="How we bring learning to life"
            subtitle="Our approach blends proven pedagogy with modern tools to make every lesson meaningful."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m) => (
              <div key={m.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <h3 className="font-serif text-lg font-semibold text-white">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* leadership */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader
            center
            label="Leadership & Management"
            title="Meet the people behind the school"
            subtitle="A dedicated team of educators and administrators who make excellence a daily habit."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <div key={l.name} className="card flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal-700 to-royal-900 font-serif text-lg font-bold text-gold-300">
                  {l.name.split(' ').slice(-1)[0][0]}
                </span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-slate-900">{l.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{l.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="container-x flex flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-2xl font-bold text-royal-900 sm:text-3xl">Want to see it for yourself?</h2>
          <p className="max-w-xl text-slate-600">We welcome parents to visit our campus, meet our faculty, and experience the GC Genius difference in person.</p>
          <button onClick={() => onNavigate('contact')} className="btn-solid">Schedule a Visit</button>
        </div>
      </section>
    </div>
  );
}
