export type Service = "Canalização" | "Eletricidade" | "Pintura";
export type City = "Lisboa" | "Porto" | "Braga" | "Coimbra"

export type JobRequest = {
    id: string,
    service: Service,
    city: City,
    startsAt: string,
    durationMin: number,
    priceCents: number,
    urgent: boolean
}