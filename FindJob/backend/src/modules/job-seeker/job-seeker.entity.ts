import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobSeeker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  resumeUrl: string;
}
