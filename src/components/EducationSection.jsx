import { EDUCATION } from '../constants';

const EducationSection = () => {
  return (
    <section
      className="py-8 border-b border-neutral-900 lg:mb-35"
      id="education"
    >
      <h2 className="mb-4 text-center text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent">
        Education
      </h2>
      {EDUCATION.map((edu, index) => (
        <div key={index} className="mb-6 p-10">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-lg">{edu.institution}</p>
          <p className="text-sm text-stone-300">{edu.duration}</p>
          <p className="mt-2">{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
