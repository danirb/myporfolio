// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/placeholder.webp';
import tennisPointImage from '@/assets/tennispoint.avif';
import unode50Image from '@/assets/unode50.svg';
import jaenaaprendeImage from '@/assets/jaenaprende.png';
import parfois from '@/assets/parfois.svg';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'unode50',
    slug: 'unode50',
    imageUrl: unode50Image,
    tags: ['SFCC', 'SFRA', 'SCAPI', 'CI/CD', 'Adyen'],
    category: 'SFCC / eCommerce',
    date: '2025-08-01',
    keyFeatures: [
      { id: 'cicdAutomation' },
      { id: 'scapiModernization' },
      { id: 'paymentIntegrations' },
      { id: 'sfraCartridges' },
    ],
    technologiesUsed: [
      { id: 'sfcc', name: 'SFCC' },
      { id: 'sfra', name: 'SFRA' },
      { id: 'scapi', name: 'SCAPI' },
      { id: 'adyen', name: 'Adyen' },
      { id: 'applePay', name: 'Apple Pay' },
      { id: 'avatax', name: 'Avatax' },
      { id: 'gtm', name: 'GTM' },
      { id: 'javascript', name: 'JavaScript ES6+' },
    ],
  },
  {
    id: 'jaenaprende',
    slug: 'jaena-aprende',
    imageUrl: jaenaaprendeImage,
    projectUrl: 'https://www.jaenaprende.es',
    tags: ['Formación IT', 'Astro.js', 'Make', 'Web'],
    category: 'Web / Educación',
    date: '2025-06-01',
    keyFeatures: [
      { id: 'astroCourse' },
      { id: 'makeCourse' },
      { id: 'modernWebDesign' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro.js' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'tennisPoint',
    slug: 'tennis-point',
    imageUrl: tennisPointImage,
    tags: ['SFCC', 'SFRA', 'Multisite', 'CI/CD', 'Testing'],
    category: 'SFCC / eCommerce',
    date: '2024-08-01',
    keyFeatures: [
      { id: 'multisiteArchitecture' },
      { id: 'unitTesting' },
      { id: 'paymentGateways' },
      { id: 'internationalTeam' },
    ],
    technologiesUsed: [
      { id: 'sfcc', name: 'SFCC' },
      { id: 'sfra', name: 'SFRA' },
      { id: 'ocapi', name: 'OCAPI' },
      { id: 'mocha', name: 'Mocha' },
      { id: 'javascript', name: 'JavaScript ES6+' },
      { id: 'sass', name: 'SASS' },
    ],
  },
  {
    id: 'aprendesk',
    slug: 'aprendesk',
    imageUrl: placeholderImage,
    projectUrl: 'https://www.aprendesk.app',
    tags: ['SaaS', 'Gestión', 'TypeScript', 'Web App'],
    category: 'SaaS',
    date: '2024-03-01',
    keyFeatures: [
      { id: 'customManagement' },
      { id: 'saasArchitecture' },
      { id: 'userInterface' },
    ],
    technologiesUsed: [
      { id: 'typescript', name: 'TypeScript' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'react', name: 'React' },
    ],
  },
  {
    id: 'rolloDesarrollo',
    slug: 'rollo-desarrollo',
    imageUrl: placeholderImage,
    projectUrl: 'https://www.rollodesarrollo.com',
    tags: ['Podcast', 'Web', 'JavaScript'],
    category: 'Web / Media',
    date: '2023-06-01',
    keyFeatures: [
      { id: 'podcastWeb' },
      { id: 'contentDelivery' },
    ],
    technologiesUsed: [
      { id: 'javascript', name: 'JavaScript' },
      { id: 'html5', name: 'HTML5' },
      { id: 'css3', name: 'CSS3' },
    ],
  },
  {
    id: 'hostaletacion',
    slug: 'hostaleta-cion-jaen',
    imageUrl: placeholderImage,
    projectUrl: 'https://www.hostaletacionjaen.com',
    tags: ['Hotel', 'Web', 'Integraciones', 'Booking'],
    category: 'Web / Turismo',
    date: '2022-06-01',
    keyFeatures: [
      { id: 'bookingIntegration' },
      { id: 'mobileOptimized' },
      { id: 'seoLocal' },
    ],
    technologiesUsed: [
      { id: 'javascript', name: 'JavaScript' },
      { id: 'html5', name: 'HTML5' },
      { id: 'css3', name: 'CSS3' },
    ],
  },
  {
    id: 'parfois',
    slug: 'parfois',
    imageUrl: parfois,
    tags: ['SFCC', 'SiteGenesis', 'OCAPI', 'Android', 'Kotlin'],
    category: 'SFCC / eCommerce',
    date: '2020-11-01',
    keyFeatures: [
      { id: 'sitegenesisEvolution' },
      { id: 'ocapiHooks' },
      { id: 'headlessIntegrations' },
      { id: 'androidDev' },
    ],
    technologiesUsed: [
      { id: 'sfcc', name: 'SFCC' },
      { id: 'sitegenesis', name: 'SiteGenesis' },
      { id: 'ocapi', name: 'OCAPI' },
      { id: 'kotlin', name: 'Kotlin' },
      { id: 'java', name: 'Java' },
    ],
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'sfccEcommerce',
    iconName: 'ShoppingCart',
    technologies: [
      { id: 'sfra', name: 'SFRA' },
      { id: 'sitegenesis', name: 'SiteGenesis' },
      { id: 'ocapi', name: 'OCAPI' },
      { id: 'scapi', name: 'SCAPI' },
      { id: 'pageDesigner', name: 'Page Designer' },
      { id: 'einstein', name: 'Einstein' },
      { id: 'cicd', name: 'CI/CD' },
    ],
  },
  {
    id: 'javascriptNode',
    iconName: 'Code2',
    technologies: [
      { id: 'javascript', name: 'JavaScript ES6+' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'html5', name: 'HTML5' },
      { id: 'css3', name: 'CSS3' },
      { id: 'sass', name: 'SASS' },
    ],
  },
  {
    id: 'mobileAndroid',
    iconName: 'Smartphone',
    technologies: [
      { id: 'kotlin', name: 'Kotlin' },
      { id: 'java', name: 'Java' },
      { id: 'androidTv', name: 'Android TV' },
      { id: 'googlePlay', name: 'Google Play' },
    ],
  },
  {
    id: 'testingDevops',
    iconName: 'GitBranch',
    technologies: [
      { id: 'mocha', name: 'Mocha' },
      { id: 'chai', name: 'Chai' },
      { id: 'sinon', name: 'Sinon' },
      { id: 'proxyquire', name: 'Proxyquire' },
      { id: 'git', name: 'Git' },
      { id: 'scrum', name: 'Scrum' },
      { id: 'jira', name: 'JIRA' },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
