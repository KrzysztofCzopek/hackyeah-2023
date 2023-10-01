import { MajorTrait } from '@/domain/Trait';
import { University } from '@/domain/University';

export const universityUJ: University = {
  name: "Uniwersytet Jagielloński w Krakowie",
  location: { lat: 50.0614, long: 19.9366 },
  traits: [],
  majors: [
    {
      name: "Historia sztuki",
      syllabusUrl: "https://sylabus.uj.edu.pl/pl/6/1/2/17/83",
      traits: [ { trait: MajorTrait.AFFINITY_HUMANITIES, points: 0.8} ]
    },
    {
      name: "Informatyka stosowana",
      syllabusUrl: "https://sylabus.uj.edu.pl/pl/6/1/2/7/74",
      traits: [ { trait: MajorTrait.AFFINITY_SCIENCE, points: 0.6} ]
    },
    {
      name: "Fizyka",
      syllabusUrl: "https://sylabus.uj.edu.pl/pl/6/1/2/7/73",
      traits: [ { trait: MajorTrait.AFFINITY_SCIENCE, points: 0.7} ]
    },
  ],
}
