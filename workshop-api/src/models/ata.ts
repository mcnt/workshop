// src/models/ata.ts

import { Workshop } from './workshop';
import { Colaborador } from './colaborador';

export interface Ata {
  id: number;
  workshop: Workshop;
  colaboradores: Colaborador[];
}
