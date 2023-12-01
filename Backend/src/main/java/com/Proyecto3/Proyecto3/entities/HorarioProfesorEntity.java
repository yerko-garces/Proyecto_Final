package com.Proyecto3.Proyecto3.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "horarioProfesor")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HorarioProfesorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_horario;

    private String dia;

    private String modulo1;

    private String modulo2;

    private String modulo3;

    private String modulo4;

    private String modulo5;

    private String modulo6;

    private String modulo7;

    private String modulo8;

    private String modulo9;

    @ManyToOne(optional = true)
    private ProfesorEntity profesor;
}
