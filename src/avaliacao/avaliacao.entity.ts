import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Avaliacao extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_usu: number;

    @Column()
    id_rec: number;

    @Column()
    nota: number;

    @Column()
    data: Date;    
}