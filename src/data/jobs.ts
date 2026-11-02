import type { JobRequest } from "@/types/job-request";

export const jobs: JobRequest[] = [
  {
    id: "1",
    service: "Canalização",
    city: "Porto",
    startsAt: "2026-11-12T10:00:00Z",
    durationMin: 60,
    priceCents: 4500,
    urgent: false
  },
  {
    id: "2",
    service: "Eletricidade",
    city: "Lisboa",
    startsAt: "2026-11-12T14:30:00Z",
    durationMin: 90,
    priceCents: 7000,
    urgent: true
  },
  {
    id: "3",
    service: "Pintura",
    city: "Braga",
    startsAt: "2026-11-13T09:00:00Z",
    durationMin: 240,
    priceCents: 18000,
    urgent: false
  },
  {
    id: "4",
    service: "Canalização",
    city: "Coimbra",
    startsAt: "2026-11-13T11:00:00Z",
    durationMin: 120,
    priceCents: 8500,
    urgent: true
  },
  {
    id: "5",
    service: "Eletricidade",
    city: "Porto",
    startsAt: "2026-11-14T08:30:00Z",
    durationMin: 60,
    priceCents: 5500,
    urgent: false
  },
  {
    id: "6",
    service: "Pintura",
    city: "Lisboa",
    startsAt: "2026-11-14T13:00:00Z",
    durationMin: 180,
    priceCents: 15000,
    urgent: false
  },
  {
    id: "7",
    service: "Canalização",
    city: "Braga",
    startsAt: "2026-11-15T10:00:00Z",
    durationMin: 90,
    priceCents: 6500,
    urgent: true
  },
  {
    id: "8",
    service: "Eletricidade",
    city: "Coimbra",
    startsAt: "2026-11-15T15:30:00Z",
    durationMin: 120,
    priceCents: 9000,
    urgent: false
  },
  {
    id: "9",
    service: "Pintura",
    city: "Porto",
    startsAt: "2026-11-16T09:00:00Z",
    durationMin: 300,
    priceCents: 22000,
    urgent: true
  },
  {
    id: "10",
    service: "Canalização",
    city: "Lisboa",
    startsAt: "2026-11-16T14:00:00Z",
    durationMin: 45,
    priceCents: 4000,
    urgent: false
  },
  {
    id: "11",
    service: "Eletricidade",
    city: "Braga",
    startsAt: "2026-11-17T11:30:00Z",
    durationMin: 90,
    priceCents: 7500,
    urgent: true
  },
  {
    id: "12",
    service: "Pintura",
    city: "Coimbra",
    startsAt: "2026-11-18T08:00:00Z",
    durationMin: 360,
    priceCents: 25000,
    urgent: false
  }
];