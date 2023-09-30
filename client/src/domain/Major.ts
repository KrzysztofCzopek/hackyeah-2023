import { MajorTrait } from '@/domain/Trait';

export type Major = {
  name: string;
  syllabusUrl: string;
  traits: {
    trait: MajorTrait;
    points: number;
  }[];
};
