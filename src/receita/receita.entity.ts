import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Receita extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_rec: string;

    @Column()
    preparo: string;

    @Column()
    id_usu: number;

    @Column()
    data: Date;    
}