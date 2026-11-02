//import { useState } from 'react'
import type { JobRequest } from "@/types/job-request"
import { Button } from "@/components/ui/button"
import {TableRow, TableCell} from "@/components/ui/table"

type JobCardProps = {
    job: JobRequest
    onAccept: (id: string) => void;
}

function JobCard({job, onAccept}: JobCardProps) {

    const durationByMins = (duration: number): string => {
        return `${(Math.floor(duration / 60)).toString().padStart(1, "0")}h ${Math.floor(duration % 60).toString().padStart(2, "0")}min`
    }; 

    const priceByEuros = (price: number): string => {
        return (price / 100).toFixed(2)
    }

    const formatDate = (date: string): string => {
        return new Intl.DateTimeFormat("pt-PT", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Lisbon"
        }).format(new Date(date));
    }

    return (
    <TableRow className="text-center">
        <TableCell> {job.service} </TableCell>
        <TableCell> {job.city} </TableCell>
        <TableCell> {formatDate(job.startsAt)} </TableCell>
        <TableCell> {durationByMins(job.durationMin)} </TableCell>
        <TableCell> {priceByEuros(job.priceCents)}€ </TableCell>
        <TableCell><Button onClick={() => onAccept(job.id)} >Aceitar</Button></TableCell>
    </TableRow>
    )
}

export default JobCard
