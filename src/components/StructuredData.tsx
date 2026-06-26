const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://maryam-portfolio-uawd.vercel.app/#person",
      "name": "Maryam Afzal",
      "jobTitle": "Online Biology & Chemistry Tutor",
      "url": "https://maryam-portfolio-uawd.vercel.app",
      "email": "mailto:mmaryamafzal490@gmail.com",
      "telephone": "+923177390123",
      "description": "Maryam Afzal is a dedicated online tutor helping students worldwide master Biology and Chemistry with clear, concept-based teaching.",
      "sameAs": [
        "https://www.instagram.com/_mariamafzal",
        "https://www.facebook.com/share/1CbeT2etDz/",
        "https://www.linkedin.com/in/maryam-afzal-maryam-afzal-6b9193341"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "University of Veterinary and Animal Sciences"
      },
      "knowsAbout": [
        "Biology",
        "Chemistry",
        "Biotechnology",
        "Online Tutoring",
        "IGCSE",
        "GCSE",
        "O-Level",
        "A-Level"
      ],
      "areaServed": "Worldwide"
    },
    {
      "@type": "WebSite",
      "@id": "https://maryam-portfolio-uawd.vercel.app/#website",
      "url": "https://maryam-portfolio-uawd.vercel.app",
      "name": "Maryam Afzal Portfolio",
      "description": "Personal portfolio website for Maryam Afzal, featuring tutoring services, success stories, and contact information.",
      "publisher": {
        "@id": "https://maryam-portfolio-uawd.vercel.app/#person"
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
