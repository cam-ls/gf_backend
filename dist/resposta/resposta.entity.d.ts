import { BaseEntity } from 'typeorm';
export declare class Resposta extends BaseEntity {
    id: number;
    descricao: string;
    id_com: number;
    id_usu: number;
    data: Date;
}
