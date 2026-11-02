import { useEffect, useState } from 'react'
import JobCard from "../JobCard"
import { jobs } from "@/data/jobs";
import type { JobRequest } from '@/types/job-request';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    Empty,
    EmptyHeader, 
    EmptyTitle,
    EmptyDescription,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

function JobList() {
    const [citySelected, setCitySelected] = useState<string>("all");
    const [jobsList, setJobsList] = useState<JobRequest[]>(jobs);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const filteredJobs = jobsList.filter(job => citySelected === "all" || job.city === citySelected);
    const cities = jobsList.map(job => job.city).filter((city, index, arr) => arr.indexOf(city) === index);

    const onAccept = (id: string) => {
        setJobsList(jobsList.filter(job => job.id !== id));
    }

    useEffect(() => {
        const timer = setTimeout(() => {setIsLoading(false)}, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
    <>
        <section className="mt-2 m-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Pedidos disponíveis</h2>
            </div>

            <Select
                value={citySelected}
                onValueChange={(value) => {
                    setCitySelected(value ?? "all");
                }}
            >
                <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filtrar por cidade"> {citySelected === "all" ? "Todas" : citySelected} </SelectValue>
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {
                        cities.map(city => (
                            <SelectItem key={city} value={city}> {city} </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            {
                isLoading ? (
                    <div className="flex justify-center p-8">
                        <Spinner/>
                        <span>A carregar pedidos...</span>
                    </div>) : filteredJobs.length > 0 ? 
                (<Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Tipo de Serviço</TableHead>
                            <TableHead className="text-center">Cidade</TableHead>
                            <TableHead className="text-center">Data e Hora</TableHead>
                            <TableHead className="text-center">Duração</TableHead>
                            <TableHead className="text-center">Valor </TableHead>
                            <TableHead className="text-center">Ação</TableHead>
                            </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            filteredJobs.map(job => (
                                <JobCard 
                                onAccept={onAccept}
                                job={job} 
                                key={job.id}
                                />
                            ))
                        }
                    </TableBody>
                </Table>) :
                (<Empty>
                    <EmptyHeader>
                        <EmptyTitle>Não existem pedidos disponíveis!</EmptyTitle>
                        <EmptyDescription>Neste momento, não existem pedidos para esta cidade. Tente selecionar outra cidade!</EmptyDescription>
                    </EmptyHeader>
                </Empty>)

            }
        </section>
    </>
    )
}

export default JobList
