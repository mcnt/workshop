// src/controllers/ataController.ts

import { Request, Response } from 'express';
import { Ata, Colaborador } from '../models';

let atas: Ata[] = [];
let colaboradores: Colaborador[] = [];

interface ItemComId {
    id: number;
  }

const encontrarItemPorId = <T extends ItemComId>(lista: T[], id: number): T | undefined => {
    return lista.find(item => item.id === id);
};
  
  
export const adicionarColaboradorAta = (req: Request, res: Response) => {
    try {
      const ataId = parseInt(req.params.ataId);
      const colaboradorId = parseInt(req.params.colaboradorId);
  
      const ata = encontrarItemPorId(atas, ataId);
      if (!ata) {
        return res.status(404).json({ message: 'Ata não encontrada' });
      }
  
      const colaborador = encontrarItemPorId(colaboradores, colaboradorId);
      if (!colaborador) {
        return res.status(404).json({ message: 'Colaborador não encontrado' });
      }
  
      ata.colaboradores.push(colaborador);
      res.json(ata);
    } catch (error) {
      console.error('Erro ao adicionar colaborador à ata:', error);
      res.status(500).json({ message: 'Ocorreu um erro ao processar a solicitação.' });
    }
};
  
export const removerColaboradorAta = (req: Request, res: Response) => {
    try {
      const ataId = parseInt(req.params.ataId);
      const colaboradorId = parseInt(req.params.colaboradorId);
  
      const ata = encontrarItemPorId(atas, ataId);
      if (!ata) {
        return res.status(404).json({ message: 'Ata não encontrada' });
      }
  
      const colaboradorIndex = ata.colaboradores.findIndex(colaborador => colaborador.id === colaboradorId);
      if (colaboradorIndex === -1) {
        return res.status(404).json({ message: 'Colaborador não encontrado nesta ata' });
      }
  
      ata.colaboradores.splice(colaboradorIndex, 1);
      res.json(ata);
    } catch (error) {
      console.error('Erro ao remover colaborador da ata:', error);
      res.status(500).json({ message: 'Ocorreu um erro ao processar a solicitação.' });
    }
};
  
export const criarAta = (req: Request, res: Response) => {
    try {
      const ata: Ata = req.body;
  
      const ataExistente = encontrarItemPorId(atas, ata.id);
      if (ataExistente) {
        return res.status(400).json({ message: 'Ata já existe com o mesmo ID' });
      }
  
      atas.push(ata);
      res.status(201).json(ata);
    } catch (error) {
      console.error('Erro ao criar ata:', error);
      res.status(500).json({ message: 'Ocorreu um erro ao processar a solicitação.' });
    }
};
