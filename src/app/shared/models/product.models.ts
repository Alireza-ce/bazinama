export interface Product {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer_name: string;
  payment_type: number[];
  price: number;
  price_show?: any;
  avatar: Avatar;
  feature_avatar: Avatar;
  rank: number;
  totalInstalled: number;
  short_description: string;
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  tags: any[];
  category_model: any[];
  comments_summery: Commentssummery[];
  price_unit: string;
  total_view: number;
  custom_json?: any;
  polls: Poll[];
  date_added: string;
  invest_goal: Investgoal;
  product_staff: Productstaff[];
  support: Support;
  is_special: boolean;
  additional_attributes: any[];
  date_published: string;
  customjson?: any;
  approved_age?: any;
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

interface Productstaff {
  id: number;
  app_user: Appuser;
  title: string;
  product: number;
}

interface Appuser {
  id: number;
  nickname: string;
  avatar: string;
  gender: string;
  date_of_birth: string;
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

interface Avatar {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}
