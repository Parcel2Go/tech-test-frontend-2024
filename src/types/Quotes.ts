export interface QuotesData {
  warnings: Warnings;
  result: QuotesResult[];
  success: boolean;
  validationErrors: ValidationErrors;
}

export interface Warnings {}
export interface ValidationErrors {}

export interface QuotesResult {
  $type: string;
  dates: Date[];
  restrictions: Restrictions;
  protection: Protection;
  service: Service;
  id: string;
  currency: Currency;
  price: Price;
  availableExtras: AvailableExtra[];
  tags: string[];
  metadata: Metadata2;
}

export interface Date {
  type: string;
  collection: Collection;
  delivery: Delivery;
  cutoffUtc: string;
}

export interface Collection {
  date: string;
}

export interface Delivery {
  dateMin: string;
  dateMax: string;
}

export interface Restrictions {
  maxWeight: number;
  minWeight: number;
  maxHeight?: number;
  maxWidth?: number;
  maxVolumetricWeight?: number;
  maxVolume?: number;
  maxLengthPlusGirth: number;
}

export interface Protection {
  standard: Standard;
}

export interface Standard {
  bands: Band[];
}

export interface Band {
  protectedAmount?: number;
  fixedPriceUnits?: number;
  percentagePriceUnits?: number;
}

export interface Service {
  slug: string;
  name: string;
  courier: string;
  courierSlug: string;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface Price {
  breakdown: Breakdown[];
  gross: number;
  net: number;
  tax: number;
}

export interface Breakdown {
  amount: number;
  name: string;
}

export interface AvailableExtra {
  key: string;
  price: Price2;
  name: string;
  tags: unknown[];
  metadata: Metadata;
}

export interface Price2 {
  gross: number;
  net: number;
  tax: number;
}

export interface Metadata {
  protectedAmount?: number;
  maxProtection?: number;
  group?: string;
  defaultselected?: boolean;
  requires?: string[];
}

export interface Metadata2 {
  Group: string;
  DropOffProviderGroup?: string;
  'Rating:Reliability': number;
  'Rating:Delivery': number;
  'Rating:Popularity': number;
}
