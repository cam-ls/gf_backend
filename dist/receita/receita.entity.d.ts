import { BaseEntity } from 'typeorm';
export declare class Receita extends BaseEntity {
    id: number;
    nome_rec: string;
    preparo: string;
    id_usu: number;
    data: Date;
}
