// src/controllers/workshopController.ts

import { Request, Response } from 'express';
import { Workshop, Ata } from '../models';

let workshops: Workshop[] = [];
let atas: Ata[] = [];

export const cadastrarWorkshop = (req: Request, res: Response) => {
  const workshop: Workshop = req.body;
  workshops.push(workshop);
  res.status(201).json(workshop);
};
export const filtrarWorkshops = (req: Request, res: Response) => {
    try {


      const workshopNome = req.query.workshopNome as string;
      const workshopdata = new Date(req.query.data as string);

     if (workshopNome) {
        // Filtrando as atas pelo nome do workshop
        const atasFiltradas = atas.filter(ata => ata.workshop.nome.toLowerCase().includes(workshopNome.toLowerCase()));
        
        // Verificando se há atas filtradas
        if (atasFiltradas.length === 0) {
            return res.status(404).json({ message: 'Nenhum workshop encontrado com o nome especificado.' });
        }

        // Mapeando as atas para retornar apenas as informações necessárias
        const workshopsComColaboradores = atasFiltradas.map(ata => ({
            workshop: ata.workshop,
            colaboradores: ata.colaboradores
        }));

        res.json(workshopsComColaboradores);
     }

     if (workshopdata) {
        // Filtrando as atas pela data do workshop
        const atasFiltradas = atas.filter(ata => ata.workshop.dataRealizacao.toDateString() === workshopdata.toDateString());
        
        // Mapeando as atas para retornar apenas as informações necessárias
        const workshopsComColaboradores = atasFiltradas.map(ata => ({
            workshop: ata.workshop,
            colaboradores: ata.colaboradores
        }));

        res.json(workshopsComColaboradores);
     }
    
    } catch (error) {
      console.error('Erro ao filtrar workshops', error);
      res.status(500).json({ message: 'Ocorreu um erro ao processar a solicitação.' });
    }
};


