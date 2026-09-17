import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoMatrix = {
  '/': {
    title: 'Bluegrid Utilities | UK Utility Infrastructure Delivery',
    description: 'Bluegrid Utilities supports smart water metering, utility civils, reinstatement and associated field delivery through structured mobilisation, supervision and project support.',
  },
  '/about': {
    title: 'About Bluegrid Utilities | UK Utility Infrastructure Delivery',
    description: 'Bluegrid Technology Ltd, trading as Bluegrid Utilities, is an England and Wales registered company working in the UK utilities and infrastructure sector.',
  },
  '/services': {
    title: 'Utility Infrastructure Services | Bluegrid Utilities',
    description: 'Explore Bluegrid Utilities capabilities across smart water metering, water infrastructure support, civils, reinstatement and project delivery.',
  },
  '/services/smart-water-metering': {
    title: 'Smart Water Meter Installation Support | Bluegrid Utilities',
    description: 'Bluegrid Utilities supports authorised smart water-meter programmes with field mobilisation, installation activity, supervision and completion reporting.',
  },
  '/services/utility-civils': {
    title: 'Utility Civils & Access Works | Bluegrid Utilities',
    description: 'Bluegrid Utilities supports excavation, chamber and access works and associated utility civils where these activities are included within an approved project scope.',
  },
  '/services/reinstatement': {
    title: 'Utility Reinstatement Support | Bluegrid Utilities',
    description: 'Bluegrid Utilities supports reinstatement following authorised utility works, with delivery aligned to the applicable project specification and street-works requirements.',
  },
  '/services/project-delivery': {
    title: 'Utility Project Delivery & Field Support | Bluegrid Utilities',
    description: 'Bluegrid Utilities provides operational project support around field delivery, from mobilisation and workforce planning through to supervision, reporting and issue escalation.',
  },
  '/safety-quality': {
    title: 'Safety, Quality & Responsible Delivery | Bluegrid Utilities',
    description: 'Safety, legal requirements, approved methods of work and client instructions take priority over productivity, cost and programme.',
  },
  '/health-safety': {
    title: 'Safety, Quality & Responsible Delivery | Bluegrid Utilities',
    description: 'Safety, legal requirements, approved methods of work and client instructions take priority over productivity, cost and programme.',
  },
  '/careers': {
    title: 'Careers at Bluegrid Utilities | Utility Jobs',
    description: 'Bluegrid Utilities recruits field, supervisory, project-support and business-support roles as genuine project requirements arise. View our employer proposition and working standards.',
  },
  '/careers/jobs': {
    title: 'Current Vacancies | Bluegrid Utilities',
    description: 'All vacancies currently approved for recruitment with Bluegrid Utilities. View live roles, closing dates and verified requirements.',
  },
  '/news': {
    title: 'News & Operational Updates | Bluegrid Utilities',
    description: 'Company announcements, recruitment updates and approved operational news from Bluegrid Utilities.',
  },
  '/contact': {
    title: 'Contact Bluegrid Utilities | Project & Careers Enquiries',
    description: 'For project, business or recruitment enquiries, contact Bluegrid Utilities. Operations office in Hemel Hempstead and registered office in Peterborough.',
  },
  '/policies': {
    title: 'Policies & Company Information | Bluegrid Utilities',
    description: 'Public-facing policies, notices and company information for Bluegrid Technology Ltd, trading as Bluegrid Utilities.',
  },
};

const PageSEO = ({ customTitle, customDescription }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    let activeSEO = seoMatrix[pathname];

    if (!activeSEO) {
      // Check query parameter mappings (e.g., /services?select=...)
      if (pathname === '/services') {
        activeSEO = seoMatrix['/services'];
      } else if (pathname.startsWith('/about/')) {
        activeSEO = seoMatrix['/about'];
      } else if (pathname.startsWith('/careers/jobs/')) {
        activeSEO = {
          title: customTitle || 'Vacancy Details | Bluegrid Utilities Careers',
          description: customDescription || 'View approved vacancy details, working details and application route with Bluegrid Utilities.',
        };
      } else {
        activeSEO = {
          title: customTitle || 'Bluegrid Utilities | UK Utility Infrastructure Delivery',
          description: customDescription || 'Supporting UK utility infrastructure delivery through structured mobilisation, supervision and project support.',
        };
      }
    }

    const title = customTitle || activeSEO.title;
    const description = customDescription || activeSEO.description;
    const canonicalUrl = `https://www.bluegridutilities.com${pathname}`;

    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'Bluegrid Utilities' },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach(({ property, content }) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    });
  }, [pathname, customTitle, customDescription]);

  return null;
};

export default PageSEO;
