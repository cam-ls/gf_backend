import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Comentario extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    id_usu: number;

    @Column()
    id_rec: number;

    @Column()
    data: Date;
}