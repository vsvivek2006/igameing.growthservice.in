/**
 * Agency Content Selectors
 * Thin accessor layer over servicesData and industriesData.
 */

export {
  getFeaturedServices,
  getAllServices,
  getServiceBySlug,
  getServicesByCategory,
  getTopLevelServices,
  getSubServices,
  SERVICE_CATEGORY_LABELS,
  type ServiceOffering,
  type ServiceCategory,
  type FAQItem,
} from '../data/servicesData';

export {
  getAllIndustries,
  getIndustryBySlug,
  getIndustriesByCategory,
  INDUSTRY_CATEGORY_LABELS,
  type IndustryVertical,
} from '../data/industriesData';
