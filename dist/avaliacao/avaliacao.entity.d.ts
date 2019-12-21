import { BaseEntity } from 'typeorm';
export declare class Avaliacao extends BaseEntity {
    id: number;
    id_usu: number;
    id_rec: number;
    nota: number;
    data: Date;
}
