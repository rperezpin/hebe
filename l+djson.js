// script: js/schema.js
const schemaData = {
    "@context": "http://schema.org",
    "@type": "Psychologist",
    "name": "Hebe González",
    "url": "https://www.tusitioweb.com",
    "image": "https://www.tusitioweb.com/img/logo.jpeg",
    "description": "Psicóloga sanitaria en Granada, especializada en Terapia Gestalt, terapia online y presencial.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Ejemplo, 123",
      "addressLocality": "Granada",
      "addressRegion": "GR",
      "postalCode": "18001",
      "addressCountry": "ES"
    },
    "telephone": "+34 123 456 789",
    "sameAs": [
      "https://www.linkedin.com/in/hebegonzalez",
      "https://www.instagram.com/hebegonzalez_psicologa"
    ]
  };
  
  // Crear y añadir el script de JSON-LD al head del HTML
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.innerHTML = JSON.stringify(schemaData);
  
  document.head.appendChild(scriptTag);
  