import { BaseEntity } from 'typeorm';
export declare class Comentario extends BaseEntity {
    id: number;
    descricao: string;
    id_usu: number;
    id_rec: number;
    data: Date;
}
