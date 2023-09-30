import { GeoLocation } from '@/domain/Geolocation';
import { UniversityTrait } from '@/domain/Trait';
import { Major } from './Major';

export type University = {
  name: string;
  location: GeoLocation;
  traits: {
    trait: UniversityTrait;
    points: number;
  }[];
  majors: Major[];
};
