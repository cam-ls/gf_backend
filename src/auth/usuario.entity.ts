import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique, Index, OneToMany } from 'typeorm';

@Entity()
//@Unique(['nome_usu']) // não está funcionando :(
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_usu: string;

    @Column()
    senha: string;

    @Column()
    email: string;
}