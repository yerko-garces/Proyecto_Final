package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

}
