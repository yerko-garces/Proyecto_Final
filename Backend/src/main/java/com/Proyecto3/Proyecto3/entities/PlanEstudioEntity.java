package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "planEstudio")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlanEstudioEntity {

    @Id
    @Column(unique = true, nullable = false)
    private Long cod_asig;

    private String nom_asig;

    private Long cod_plan;

    private Integer nivel;

    @ManyToOne
    private CarreraEntity carrera;


}
