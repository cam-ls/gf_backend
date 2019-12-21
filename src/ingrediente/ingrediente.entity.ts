import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ingrediente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_ing: string;
}