export enum ServiceType {
  BLUEPRINT = 'BLUEPRINT',
  FULL_SERVICE = 'FULL_SERVICE'
}

export interface ServiceOption {
  id: ServiceType;
  title: string;
  price: number;
  description: string;
  features: string[];
}

export interface BookingFormState {
  name: string;
  studentId: string;
  dormNumber: string;
  phone: string;
  serviceType: ServiceType;
  preferredDate: string;
  notes: string;
}

export interface DesignIdea {
  title: string;
  concept: string;
  colorPalette: string[];
  furnitureArrangement: string;
  decorItems: string[];
}