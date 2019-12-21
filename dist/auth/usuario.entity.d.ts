import { BaseEntity } from 'typeorm';
export declare class Usuario extends BaseEntity {
    id: number;
    nome_usu: string;
    senha: string;
    email: string;
}
