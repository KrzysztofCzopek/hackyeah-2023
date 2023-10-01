import { MajorTrait } from '@/domain/Trait';
import { University } from '@/domain/University';

export const universityAGH: University = {
  name: "Akademia Górniczo-Hutnicza w Krakowie",
  location: { lat: 50.0614, long: 19.9366 },
  traits: [],
  majors: [
    {
      name: "Automatyka i Robotyka",
      syllabusUrl: "https://sylabusy.agh.edu.pl/pl/1/1/19/1/4/11",
      traits: [ { trait: MajorTrait.AFFINITY_SCIENCE, points: 0.9} ]
    },
    {
      name: "Kulturoznawstwo",
      syllabusUrl: "https://sylabusy.agh.edu.pl/pl/1/2/19/1/1/15",
      traits: [ { trait: MajorTrait.AFFINITY_HUMANITIES, points: 0.5} ]
    },
  ],
}
