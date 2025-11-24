export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Huzaifa Ali Khan",
          url: "https://www.huzaifali.tech",
          sameAs: [
            "https://www.linkedin.com/in/huzaifali48/",
            "https://github.com/huzaifalidev",
            "https://x.com/Aleekhan_48"
          ],
          jobTitle: "Software Engineer / Full Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Huzaifa Ali Khan Portfolio"
          }
        }),
      }}
    />
  );
}
