import { useEffect, useState } from "react";
import customPrints from "../assets/images/custom-prints.jpg";
import schoolFabrics from "../assets/images/school-fabrics.png";
import brandDesigns from "../assets/images/brand-designs.png";

const Landing = () => {
  const [founder, setFounder] = useState({
    name: "Naomi Ansah",
    role: "Founder, Emerge Textiles",
    image: "/founder.JPG",
    bio: "I started Emerge Textiles to help schools, churches, brands, and communities turn their identity into beautiful custom fabrics. My work blends creativity, storytelling, and practical production to create textiles people are proud to wear.",
    portfolioUrl: "https://naomiansah.blog",
  });
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(
      "https://emerge-founder-data-naomi.s3.us-east-1.amazonaws.com/founder.json",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Founder data not found");
        }
        return response.json();
      })
      .then((data) => {
        setFounder(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, []);
  return (
    <main className="min-h-screen bg-[#071414] text-white">
      {/* Navigation */}
      <header className="absolute left-0 right-0 top-0 z-30 bg-white/95 text-[#111] shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black tracking-tight">Emerge</span>
            <span className="font-serif text-2xl italic text-[#c69c62]">
              Textiles
            </span>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium text-neutral-700 md:flex">
            <a href="#home" className="transition hover:text-[#c69c62]">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#c69c62]">
              Services
            </a>
            <a href="#story" className="transition hover:text-[#c69c62]">
              Our Story
            </a>
            <a href="#founder" className="transition hover:text-[#c69c62]">
              Founder
            </a>
            <a href="#gallery" className="transition hover:text-[#c69c62]">
              Gallery
            </a>
            <a href="#contact" className="transition hover:text-[#c69c62]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden bg-[#c69c62] px-8 py-6 text-sm font-bold text-white transition hover:bg-[#a9824f] md:block"
          >
            Order Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[720px] overflow-hidden pt-24"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-x-10 top-24 bottom-24 h-[620px] w-[calc(100%-5rem)] object-cover brightness-75"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-x-10 top-24 bottom-24 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-8 lg:px-14">
          <div className="max-w-2xl">
            <p className="mb-5 font-serif text-xl italic text-[#c69c62]">
              Custom African Prints • Fashion • Branding
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Discover true <br />
              <span className="text-[#c69c62]">textile identity.</span>
            </h1>

            <div className="mt-8 flex items-center gap-5">
              {/* <span className="h-px w-16 bg-[#c69c62]" /> */}
              <p className="font-serif text-2xl italic text-[#c69c62]">
                Made to Reflect Your Story
              </p>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-200">
              Emerge Textiles creates unique fabrics for schools, churches,
              brands, groups, and individuals who want designs that feel
              personal, memorable, and proudly African.
            </p>
            <p className="mt-4 text-lg font-semibold text-[#c69c62]">
              Low minimum order — perfect for small groups, startups, and
              personal brands.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#gallery"
                className="bg-[#c69c62] px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-[#a9824f]"
              >
                View Designs
              </a>
              <a
                href="#contact"
                className="border border-white/40 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#071414]"
              >
                Start an Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 pt-8 md:grid-cols-3 lg:px-10"
      >
        {[
          [
            "School & Group Fabrics",
            "Custom prints for schools, churches, associations, and special events.",
          ],
          [
            "Fashion Production",
            "Beautiful fabrics designed for dresses, shirts, uniforms, and everyday wear.",
          ],
          [
            "Brand Textiles",
            "Fabric patterns that carry your logo, colors, story, and community identity.",
          ],
        ].map(([title, text]) => (
          <article
            key={title}
            className="bg-white p-8 text-[#111] shadow-xl transition duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-black">{title}</h3>
            <p className="mt-4 leading-7 text-neutral-600">{text}</p>
          </article>
        ))}
      </section>

      {/* Story Section */}
      <section id="story" className="bg-white px-6 py-20 text-[#111] lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-xl italic text-[#c69c62]">
              Our Story
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Fabrics made with meaning, culture, and identity.
            </h2>
          </div>
          <p className="text-lg leading-8 text-neutral-600">
            At Emerge Textiles, every design begins with a story. We help
            organizations, schools, churches, and individuals turn their
            identity into beautiful custom fabrics that can be worn, shared, and
            remembered.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section
        id="founder"
        className="bg-[#071414] px-6 py-20 text-white lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* LEFT: Founder Image */}
          <div className="mx-auto">
            <div className="relative inline-block">
              <div className="absolute inset-0 -translate-x-6 -translate-y-6 border border-[#c69c62]" />

              <img
                src={founder.image}
                alt={founder.name}
                className="relative z-10 h-[520px] w-auto shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT: Founder Text */}
          {status === "success" && (
            <p className="mt-4 text-sm text-gray-400">
              Source: {founder.source} • Last updated: {founder.lastUpdated}
            </p>
          )}

          {status === "loading" && (
            <p className="text-[#c69c62]">
              ⏳ Loading founder data from Amazon S3...
            </p>
          )}

          {status === "success" && (
            <p className="text-green-400">
              ✅ Live founder data fetched from Amazon S3
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400">
              ❌ Failed to load founder data from S3
            </p>
          )}

          <div>
            <p className="font-serif text-xl italic text-[#c69c62]">
              About the Founder
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Meet {founder.name}
            </h2>

            <p className="mt-3 text-lg font-semibold text-[#c69c62]">
              {founder.role}
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              {founder.bio}
            </p>
            {status === "success" && (
              <p className="mt-4 text-sm text-gray-400">
                Source: {founder.source} • Last updated: {founder.lastUpdated}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={founder.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#c69c62] px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:scale-105 hover:bg-[#a9824f]"
              >
                View Founder Portfolio
              </a>

              <a
                href="#contact"
                className="border border-white/40 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#071414]"
              >
                Work With Emerge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-serif text-xl italic text-[#c69c62]">
                Gallery
              </p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Featured textile work
              </h2>
            </div>
          </div>

          {/* GRID (this is what you were missing) */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Custom Prints", img: customPrints },
              { title: "School Fabrics", img: schoolFabrics },
              { title: "Brand Designs", img: brandDesigns },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative h-64 overflow-hidden rounded-md shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-[#e0b97a]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="bg-[#c69c62] px-6 py-20 text-center text-white"
      >
        <h2 className="text-4xl font-black md:text-5xl">
          Ready to create your fabric?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
          Let’s design something beautiful for your school, church, brand,
          group, or personal fashion project.
        </p>
        <a
          href="mailto:hello@emergetextiles.com"
          className="mt-8 inline-block bg-white px-10 py-4 text-sm font-bold uppercase tracking-wide text-[#071414] transition hover:scale-105"
        >
          Contact Emerge
        </a>
      </section>
    </main>
  );
};

export default Landing;
