import { Request, Response } from 'express';
import { Colaborador, Ata } from '../models';

let colaboradores: Colaborador[] = [];
let atas: Ata[] = [];

export const cadastrarColaborador = (req: Request, res: Response) => {
  try {
    const colaborador: Colaborador = req.body;
    colaboradores.push(colaborador);
    res.status(201).json(colaborador);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar colaborador' });
  }
};

export const listarColaboradores = (req: Request, res: Response) => {
  try {
    // Criando um mapa para armazenar informações sobre os workshops que cada colaborador participou
    const colaboradorWorkshopsMap = new Map<number, string[]>();
   // Iterando sobre todas as atas para preencher o mapa
    atas.forEach(ata => {
      ata.colaboradores.forEach(colaborador => {
        if (colaboradorWorkshopsMap.has(colaborador.id)) {
          colaboradorWorkshopsMap.get(colaborador.id)?.push(ata.workshop.nome);
        } else {
          colaboradorWorkshopsMap.set(colaborador.id, [ata.workshop.nome]);
        }
      });
    });
  
      // Ordenando os colaboradores por nome em ordem alfabética
    colaboradores.sort((a, b) => a.nome.localeCompare(b.nome));
  
    // Mapeando os colaboradores para adicionar informações sobre os workshops que participaram
    const colaboradoresComWorkshops = colaboradores.map(colaborador => ({
      id: colaborador.id,
      nome: colaborador.nome,
      workshops: colaboradorWorkshopsMap.get(colaborador.id) || []
    }));
  
    res.json(colaboradoresComWorkshops);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar colaboradores' });
  }
};
