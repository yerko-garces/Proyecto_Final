package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "horario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HorarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_horario;

    private String dia;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo1;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo2;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo3;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo4;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo5;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo6;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo7;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo8;

    @OneToOne
    @JoinColumn(name = "cod_asig")
    private PlanEstudioEntity modulo9;

    @OneToOne
    @JoinColumn(name = "rut")
    private EstudianteEntity rut_estudiante;

}
