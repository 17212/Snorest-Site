export interface Project {
  id: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  longDescription?: string;
  longDescription_ar?: string;
  location: string;
  location_ar: string;
  category: string;
  category_ar: string;
  tags?: string[];
  tags_ar?: string[];
  imageUrl: string;
  videoUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  longDescription?: string;
  longDescription_ar?: string;
  icon?: string;
  imageUrl?: string;
  highlight?: boolean;
  type: 'card-large' | 'card-tall' | 'card-small';
  subtitle?: string;
}

export type Language = 'en' | 'ar';

export interface Translation {
  [key: string]: {
    en: string;
    ar: string;
  }
}