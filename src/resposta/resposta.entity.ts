import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Resposta extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    id_com: number;

    @Column()
    id_usu: number;

    @Column()
    data: Date;
}