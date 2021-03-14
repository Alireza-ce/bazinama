export interface ProductDetail {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer: Producer;
  producer_name: string;
  payment_type: number[];
  category: number[];
  price: number;
  price_show?: any;
  avatar: Avatar;
  feature_avatar: Avatar;
  rank: number;
  is_enable: boolean;
  totalInstalled: number;
  short_description: string;
  description: string;
  promotionalContainers: PromotionalContainer[];
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  files: any[];
  tags: any[];
  category_model: any[];
  comments_summery: Commentssummery[];
  price_unit: string;
  total_view: number;
  custom_json?: any;
  polls: Poll[];
  date_added: string;
  invest_goal: Investgoal;
  product_staff: any[];
  support: Support;
  is_special: boolean;
  additional_attributes: any[];
  date_published: string;
  customjson?: any;
  approved_age?: any;
  last_checked_file?: any;
}

interface Support {
  id: number;
  name: string;
  tel: string;
  email: string;
  website: string;
  linkedin: string;
  google_plus: string;
  instagram: string;
  telegram: string;
}

interface Investgoal {
  name: string;
  product: number;
  sku: string;
  amount: number;
  achieved: number;
  participation: number;
  date_expire: string;
  achievement_percent: number;
}

interface Poll {
  id: number;
  attribute: string;
  value_local?: any;
  value_public: number;
  count_vote: number;
}

interface Commentssummery {
  score: number;
  count: number;
}

interface PromotionalContainer {
  id: number;
  video?: any;
  external_video: string;
  external_frame?: any;
  img: string;
  length?: any;
  video_path?: any;
  banner: boolean;
  is_confirmed: boolean;
  priority: number;
  product: number;
  aparat_key?: any;
  video_redirect: string;
}

interface Avatar {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

interface Producer {
  id: number;
  email: string;
  name: string;
  producer_slug: string;
  avatar?: any;
  description: string;
}