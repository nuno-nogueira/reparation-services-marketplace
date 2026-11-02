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
        <section className="mx-auto w-full py-8">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold ml-2">Pedidos disponíveis</h2>

                <p className="text-md ml-2 mb-4" >Consulta e gere os pedidos de serviço disponíveis.</p>
            </div>

            <div className="flex flex-col gap-3 ml-2 mb-6" >
                <div>
                    <h3 className="text-md font-medium">Filtrar pedidos</h3>
                    <p className="text-sm" >Seleciona uma cidade para filtrar os pedidos.</p>
                </div>

                <Select
                    value={citySelected}
                    onValueChange={(value) => {
                        setCitySelected(value ?? "all");
                    }}
                >
                    <SelectTrigger className="w-[10%]" >
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
            </div>

            {
                isLoading ? (
                    <div className="flex min-h-24 justify-center flex-col items-center gap-3">
                        <Spinner className="size-6" />
                        <span className="text-lg" >A carregar pedidos...</span>
                    </div>) : filteredJobs.length > 0 ? 
                (
                    <div className='overflow-hidden'>
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50" >
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
                        </Table>
                    </div>
                ) :
                (<Empty className="min-h-24 rounded-lg border bg-card">
                    <EmptyHeader>
                        <EmptyTitle className="text-lg" >Não existem pedidos disponíveis!</EmptyTitle>
                        <EmptyDescription>Neste momento, não existem pedidos para esta cidade. Tente selecionar outra cidade!</EmptyDescription>
                    </EmptyHeader>
                </Empty>)

            }
        </section>
    </>
    )
}

export default JobList
